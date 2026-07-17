/* Sistema de permisos de Agua Viva.
 * Única fuente de verdad de la matriz de roles:
 *  - superadmin: acceso total.
 *  - coordinator (LIDER / AE / AI): gestiona su propio grupo y región;
 *    puede ver otras regiones en modo lectura; NO puede aprobar Líderes.
 *  - member: solo la aplicación móvil.
 */
(function (global) {
  "use strict";

  var DB_KEY = "agua_viva_db";
  var EMAIL_KEY = "agua_viva_active_user_email";
  var SUPER_EMAIL = "superadmin@email.com";

  function readDB() {
    try { return JSON.parse(localStorage.getItem(DB_KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }

  // Normaliza cualquier variante de cargo de servicio a las siglas LIDER/AE/AI.
  function normalizeServerRole(raw) {
    var t = String(raw || "").toUpperCase();
    if (!t || t === "NINGUNO") return null;
    if (t === "LIDER" || t.indexOf("LIDER") === 0 || t.indexOf("LÍDER") === 0) return "LIDER";
    if (t === "AE" || t.indexOf("ATRACCION EXTERNA") !== -1 || t.indexOf("ATRACCIÓN EXTERNA") !== -1) return "AE";
    if (t === "AI" || t.indexOf("ATRACCION INTERNA") !== -1 || t.indexOf("ATRACCIÓN INTERNA") !== -1) return "AI";
    return t; // otros cargos (COM, TG, etc.) se devuelven tal cual en mayúsculas
  }

  // Región de un grupo. hintRegion desambigua grupos con el mismo nombre en
  // varias regiones (ej. "Satélite" existe en Región 1 y Región 3).
  function getRegionForGroup(group, hintRegion) {
    var db = readDB();
    var catalog = db.groupsByRegion || {};
    if (hintRegion && catalog[hintRegion] && catalog[hintRegion].indexOf(group) !== -1) {
      return hintRegion;
    }
    for (var region in catalog) {
      if ((catalog[region] || []).indexOf(group) !== -1) return region;
    }
    return hintRegion || "Región 1 CDMX";
  }

  // Usuario actual resuelto desde el almacenamiento compartido.
  function getCurrentUser() {
    var db = readDB();
    var email = localStorage.getItem(EMAIL_KEY) || "";

    if (email === SUPER_EMAIL || db.currentSimulatedRole === "superadmin") {
      return { kind: "superadmin", email: email || SUPER_EMAIL, name: "Superusuario", role: "SUPERADMIN", group: null, region: null };
    }

    var coord = (db.activeCoordinators || []).find(function (c) { return c.email === email; });
    if (coord) {
      var region = coord.region || getRegionForGroup(coord.group);
      return { kind: "coordinator", email: email, name: coord.name, role: normalizeServerRole(coord.role) || coord.role, group: coord.group, region: region };
    }

    var member = (db.members || []).find(function (m) { return m.email === email; });
    if (member) {
      return { kind: "member", email: email, name: member.name, role: "MEMBER", group: member.group, region: member.region };
    }

    return { kind: "guest", email: email, name: "", role: null, group: null, region: null };
  }

  function sameScope(user, target) {
    if (!target) return false;
    var tGroup = target.group || target.sede || null;
    var tRegion = target.region || (tGroup ? getRegionForGroup(tGroup, user.region) : null);
    return tGroup === user.group && tRegion === user.region;
  }

  // Matriz de acciones. Cada entrada: (user, target) => boolean.
  var ACTIONS = {
    APPROVE_LIDER: function (u) { return u.kind === "superadmin"; },
    APPROVE_COORDINATOR: function (u) { return u.kind === "superadmin" || u.kind === "coordinator"; },
    APPROVE_ROLE: function (u) { return u.kind === "superadmin" || u.kind === "coordinator"; },
    EDIT_MEMBER: function (u, t) {
      if (u.kind === "superadmin") return true;
      if (u.kind !== "coordinator") return false;
      return sameScope(u, t);
    },
    DELETE_MEMBER: function (u, t) { return ACTIONS.EDIT_MEMBER(u, t); },
    EDIT_SERVER: function (u, t) { return ACTIONS.EDIT_MEMBER(u, t); },
    EDIT_LOCATION: function (u, t) { return ACTIONS.EDIT_MEMBER(u, t); },
    VIEW_REGIONAL: function (u) { return u.kind === "superadmin" || u.kind === "coordinator"; },
    MANAGE_EVENTS: function (u) { return u.kind === "superadmin" || u.kind === "coordinator"; },
    EXPORT_DATA: function (u) { return u.kind === "superadmin" || u.kind === "coordinator"; },
    SCHEDULE_HACIENDA: function (u) { return u.kind === "superadmin"; },
    MANAGE_REGIONS: function (u) { return u.kind === "superadmin"; },
    // El panel de Junta de Atracciones en admin es solo lectura + exportar;
    // el control (pase de lista, reservas) vive en el portal superadmin.
    CONTROL_ATRACCIONES: function (u) { return u.kind === "superadmin"; }
  };

  function can(action, target) {
    var fn = ACTIONS[action];
    if (!fn) return false;
    return !!fn(getCurrentUser(), target);
  }

  global.AVPerm = {
    getCurrentUser: getCurrentUser,
    can: can,
    normalizeServerRole: normalizeServerRole,
    getRegionForGroup: getRegionForGroup,
    ACTIONS: Object.keys(ACTIONS)
  };

})(typeof window !== "undefined" ? window : this);
