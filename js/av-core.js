
(function (global) {
  "use strict";

  var DB_KEY = "agua_viva_db";

  function readDB() {
    try { return JSON.parse(localStorage.getItem(DB_KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function writeDB(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }

  

  // Secreto de demostración compartido por ambas interfaces. En producción
  // viviría únicamente en el backend; aquí es estático para que la firma
  // generada por la consola sea verificable por el móvil.
  var SECRET_STR = "agua-viva-hs256-demo-secret-2026";

  var enc = new TextEncoder();
  var dec = new TextDecoder();

  // ---- SHA-256 (sobre Uint8Array → Uint8Array de 32 bytes) ----------
  var SHA_K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ]);

  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }

  function sha256Bytes(bytes) {
    var h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a,
        h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;

    var l = bytes.length;
    var bitLen = l * 8;
    var withOne = l + 1;
    var pad = (56 - (withOne % 64) + 64) % 64;
    var total = withOne + pad + 8;
    var msg = new Uint8Array(total);
    msg.set(bytes);
    msg[l] = 0x80;
    var dv = new DataView(msg.buffer);
    dv.setUint32(total - 4, bitLen >>> 0, false);
    dv.setUint32(total - 8, Math.floor(bitLen / 0x100000000), false);

    var w = new Uint32Array(64);
    for (var off = 0; off < total; off += 64) {
      for (var i = 0; i < 16; i++) w[i] = dv.getUint32(off + i * 4, false);
      for (i = 16; i < 64; i++) {
        var s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        var s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
      }
      var a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
      for (i = 0; i < 64; i++) {
        var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        var ch = (e & f) ^ ((~e) & g);
        var t1 = (h + S1 + ch + SHA_K[i] + w[i]) >>> 0;
        var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        var maj = (a & b) ^ (a & c) ^ (b & c);
        var t2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0;
      h4 = (h4 + e) >>> 0; h5 = (h5 + f) >>> 0; h6 = (h6 + g) >>> 0; h7 = (h7 + h) >>> 0;
    }
    var out = new Uint8Array(32);
    var odv = new DataView(out.buffer);
    [h0, h1, h2, h3, h4, h5, h6, h7].forEach(function (hh, idx) { odv.setUint32(idx * 4, hh >>> 0, false); });
    return out;
  }

  function concatBytes(a, b) {
    var out = new Uint8Array(a.length + b.length);
    out.set(a, 0); out.set(b, a.length);
    return out;
  }

  function hmacSha256(keyBytes, msgBytes) {
    var blockSize = 64;
    var key = keyBytes;
    if (key.length > blockSize) key = sha256Bytes(key);
    var k = new Uint8Array(blockSize);
    k.set(key);
    var ipad = new Uint8Array(blockSize), opad = new Uint8Array(blockSize);
    for (var i = 0; i < blockSize; i++) { ipad[i] = k[i] ^ 0x36; opad[i] = k[i] ^ 0x5c; }
    var inner = sha256Bytes(concatBytes(ipad, msgBytes));
    return sha256Bytes(concatBytes(opad, inner));
  }

  function b64urlFromBytes(bytes) {
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function b64urlFromString(str) { return b64urlFromBytes(enc.encode(str)); }
  function stringFromB64url(s) {
    s = s.replace(/-/g, "+").replace(/_/g, "/");
    while (s.length % 4) s += "=";
    var bin = atob(s);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return dec.decode(bytes);
  }

  var SECRET_BYTES = enc.encode(SECRET_STR);

  function signJWT(payload) {
    var header = { alg: "HS256", typ: "JWT" };
    var signingInput = b64urlFromString(JSON.stringify(header)) + "." +
                       b64urlFromString(JSON.stringify(payload));
    var sig = hmacSha256(SECRET_BYTES, enc.encode(signingInput));
    return signingInput + "." + b64urlFromBytes(sig);
  }

  function verifyJWT(token, opts) {
    opts = opts || {};
    var skew = opts.skew || 0; // segundos de tolerancia
    try {
      var parts = String(token).split(".");
      if (parts.length !== 3) return { valid: false, reason: "malformed" };
      var signingInput = parts[0] + "." + parts[1];
      var expected = b64urlFromBytes(hmacSha256(SECRET_BYTES, enc.encode(signingInput)));
      if (expected !== parts[2]) return { valid: false, reason: "bad_signature" };
      var payload = JSON.parse(stringFromB64url(parts[1]));
      var now = Math.floor(Date.now() / 1000);
      if (payload.nbf && now + skew < payload.nbf) return { valid: false, reason: "not_yet_valid", payload: payload };
      if (payload.exp && now - skew > payload.exp) return { valid: false, reason: "expired", payload: payload };
      return { valid: true, payload: payload };
    } catch (e) {
      return { valid: false, reason: "error:" + (e && e.message) };
    }
  }

  

  // Coordenadas de la sede (Región 1 · CDMX, centro histórico) y radio
  // tolerado de validación en metros.
  var VENUE = {
    name: "Sede Centro · Región 1 CDMX",
    lat: 19.4326,
    lng: -99.1332,
    radiusM: 150
  };

  function haversineMeters(a, b) {
    var R = 6371000;
    var toRad = function (d) { return d * Math.PI / 180; };
    var dLat = toRad(b.lat - a.lat);
    var dLng = toRad(b.lng - a.lng);
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
  }

  function checkGeofence(coords, venue) {
    venue = venue || VENUE;
    var dist = haversineMeters(coords, venue);
    return {
      inside: dist <= venue.radiusM,
      distanceM: Math.round(dist),
      radiusM: venue.radiusM,
      venue: venue
    };
  }

  // demo del flujo de éxito sea fiable cuando no hay GPS real cercano.
  function simulatedOnSite() {
    var jit = function () { return (Math.random() - 0.5) * 0.001; };
    return { lat: VENUE.lat + jit(), lng: VENUE.lng + jit(), simulated: true };
  }

  // Intenta GPS real; si se deniega/agota el tiempo, cae a coordenada
  // simulada en sede. Resuelve siempre (nunca rechaza).
  function getPosition() {
    return new Promise(function (resolve) {
      if (!global.navigator || !global.navigator.geolocation) {
        resolve(simulatedOnSite()); return;
      }
      var settled = false;
      var timer = setTimeout(function () {
        if (!settled) { settled = true; resolve(simulatedOnSite()); }
      }, 4000);
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          if (settled) return; settled = true; clearTimeout(timer);
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
            real: true, simulated: false
          });
        },
        function () {
          if (settled) return; settled = true; clearTimeout(timer);
          resolve(simulatedOnSite());
        },
        { enableHighAccuracy: true, timeout: 3500, maximumAge: 0 }
      );
    });
  }

  

  var simulatedOffline = false;       // toggle de demostración
  var listeners = [];                 // callbacks de cambio de estado

  function isOnline() {
    if (simulatedOffline) return false;
    return global.navigator ? global.navigator.onLine !== false : true;
  }

  function notify() {
    var st = { online: isOnline(), pending: pendingCount() };
    listeners.forEach(function (cb) { try { cb(st); } catch (e) {} });
  }

  function onStatus(cb) { if (typeof cb === "function") listeners.push(cb); }

  function setSimulatedOffline(flag) {
    simulatedOffline = !!flag;
    notify();
    if (isOnline()) flush();
  }

  function enqueue(op) {
    var db = readDB();
    db.syncQueue = db.syncQueue || [];
    var entry = {
      id: "op_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
      op: op,
      status: "PENDING",
      queuedAt: new Date().toISOString()
    };
    db.syncQueue.push(entry);
    writeDB(db);
    notify();
    return entry;
  }

  function queue() { return readDB().syncQueue || []; }
  function pendingCount() {
    return queue().filter(function (e) { return e.status === "PENDING"; }).length;
  }

  // Vacía la cola si hay conexión; marca cada op como SYNCED.
  function flush() {
    if (!isOnline()) return { flushed: 0, offline: true, pending: pendingCount() };
    var db = readDB();
    var q = db.syncQueue || [];
    var n = 0;
    q.forEach(function (e) {
      if (e.status === "PENDING") {
        e.status = "SYNCED";
        e.syncedAt = new Date().toISOString();
        n++;
      }
    });
    db.syncQueue = q;
    writeDB(db);
    if (n > 0) notify();
    return { flushed: n, offline: false, pending: 0 };
  }

  // Escucha eventos nativos de conectividad del navegador.
  if (global.addEventListener) {
    global.addEventListener("online", function () { notify(); flush(); });
    global.addEventListener("offline", function () { notify(); });
  }

  

  // Emite y publica un nuevo token firmado (vigencia 30 s) en la BD
  // compartida. Lo invoca la consola admin cada renovación de QR.
  function issueToken(args) {
    args = args || {};
    var venue = args.venue || VENUE;
    var now = Math.floor(Date.now() / 1000);
    var code = args.code || randomCode();
    var payload = {
      iss: "agua-viva",
      typ: "attendance-qr",
      sid: args.sessionId || "sess-live",
      mid: args.meetingId || "m-weekly",
      grp: args.groupId || "satelite",
      code: code,
      lat: venue.lat,
      lng: venue.lng,
      rad: venue.radiusM,
      iat: now,
      exp: now + 30
    };
    var token = signJWT(payload);
    var db = readDB();
    db.liveSession = {
      token: token,
      code: code,
      issuedAt: new Date().toISOString(),
      expEpoch: payload.exp,
      venue: { lat: venue.lat, lng: venue.lng, name: venue.name, radiusM: venue.radiusM }
    };
    writeDB(db);
    return { token: token, payload: payload, code: code };
  }

  function currentSession() { return readDB().liveSession || null; }
  function currentToken() {
    var s = currentSession();
    return s ? s.token : null;
  }

  // Código manual alfanumérico rotativo (formato XX-XXX, sin caracteres
  // ambiguos como 0/O/1/I).
  function randomCode() {
    var alpha = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var num = "23456789";
    var pick = function (set) { return set[Math.floor(Math.random() * set.length)]; };
    return pick(alpha) + pick(num) + "-" + pick(num) + pick(alpha) + pick(alpha);
  }

  
  var Enums = {
    estigmas: ['ALCOHOLISMO', 'DROGADICCION', 'DEPRESION', 'NEUROSIS', 'CODEPENDENCIA', 'DEPENDIENTE', 'DUELO', 'ANSIEDAD', 'ANOREXIA', 'BULIMIA', 'BULINOREXICA', 'OTROS'],
    serviciosAdulto: ['LIDER', 'AE', 'AI', 'COM', 'TG', 'MANAGER', 'SECRETARIO', 'RSG', 'LITERATURA', 'PPI', 'COORDINADOR_HACIENDA', 'PASO_12', 'COACH_JAV'],
    serviciosJav: ['REPRESENTANTE_JAV', 'AE_JAV', 'AI_JAV', 'COM_JAV', 'PPI_JAV', 'COORDINADOR_HACIENDA_JAV'],
    nivelesExperiencia: ['NINGUNO', 'APOYO', 'OREJA', 'PADRINO'],
    militanciaStatus: ['CONCIENCIA', 'MILITANCIA', 'EN_RIESGO', 'DE_BAJA'],
    escrituras: {
      normales: ['1er Inventario', '10mo de primera', '2do Inventario', '10mo de segunda', '3er Inventario', '10mo de tercera', 'Pre-cuarta', '4to Inventario'],
      servidores: ['1ra de servidores', '2da de servidores', '3ra de servidores']
    },
    ejercicios: ['Trinity', 'Libertad bajo dios', 'Duelo', 'Desierto', 'Niño']
  };

  global.AV = {
    Crypto: {
      signJWT: signJWT,
      verifyJWT: verifyJWT,
      sha256Bytes: sha256Bytes,
      hmacSha256: hmacSha256
    },
    Geo: {
      VENUE: VENUE,
      haversineMeters: haversineMeters,
      checkGeofence: checkGeofence,
      getPosition: getPosition,
      simulatedOnSite: simulatedOnSite
    },
    Sync: {
      isOnline: isOnline,
      onStatus: onStatus,
      setSimulatedOffline: setSimulatedOffline,
      enqueue: enqueue,
      flush: flush,
      queue: queue,
      pendingCount: pendingCount
    },
    Session: {
      issueToken: issueToken,
      currentSession: currentSession,
      currentToken: currentToken,
      randomCode: randomCode
    },
    Enums: Enums,
    _db: { read: readDB, write: writeDB }
  };

})(typeof window !== "undefined" ? window : this);
