/* Exportación de datos de Agua Viva.
 * Genera un libro Excel (.xlsx) real multi-hoja con SheetJS cuando la
 * librería está disponible; sin internet cae al CSV clásico.
 * También expone el matcher canónico de escrituras (tolera diferencias de
 * mayúsculas, acentos y grafías entre los datos sembrados).
 */
(function (global) {
  "use strict";

  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
  }

  // Columna canónica → variantes conocidas en los datos
  var SCRIPTURE_COLS = [
    { col: "1er Inventario", keys: ["1erinventario"] },
    { col: "10mo de primera", keys: ["10modeprimera"] },
    { col: "2do Inventario", keys: ["2doinventario"] },
    { col: "10mo de segunda", keys: ["10modesegunda", "10mode2da"] },
    { col: "3er Inventario", keys: ["3erinventario"] },
    { col: "10mo de tercera", keys: ["10modetercera", "10mode3ra", "10de3ra"] },
    { col: "Pre-cuarta", keys: ["precuarta"] },
    { col: "4to Inventario", keys: ["4toinventario", "4toinevntario"] },
    { col: "1ra de servidores", keys: ["1radeservidores"] },
    { col: "2da de servidores", keys: ["2dadeservidores"] },
    { col: "3ra de servidores", keys: ["3radeservidores"] }
  ];
  var EXERCISE_COLS = [
    { col: "Trinity", keys: ["trinity"] },
    { col: "Libertad bajo dios", keys: ["libertadbajodios"] },
    { col: "Duelo", keys: ["duelo"] },
    { col: "Desierto", keys: ["desierto"] },
    { col: "Niño", keys: ["nino"] }
  ];

  function hasItem(list, def) {
    return (list || []).some(function (s) { return def.keys.indexOf(norm(s)) !== -1; });
  }
  function hasScripture(member, colDef) { return hasItem(member.scriptures, colDef); }

  function db() {
    try { return JSON.parse(localStorage.getItem("agua_viva_db") || "{}") || {}; }
    catch (e) { return {}; }
  }
  function today() { return new Date().toISOString().split("T")[0]; }

  // ---- Constructores de filas (compartidos por CSV y XLSX) ----

  function militanciaRows() {
    var d = db();
    var head = ["ID", "Nombre (Alias)", "Nombre Real", "Email", "Teléfono", "Edad", "Región", "Grupo",
      "Clasificación", "Cargo", "Militancia", "Estigma", "Días Limpios", "Racha", "Nivel",
      "Fecha Sobriedad", "Fecha Ingreso", "Se apadrina con"]
      .concat(SCRIPTURE_COLS.map(function (c) { return c.col; }))
      .concat(EXERCISE_COLS.map(function (c) { return c.col; }));
    var rows = [head];
    (d.members || []).forEach(function (m) {
      rows.push([
        m.id || "", m.name || "", m.realName || "", m.email || "", m.phone || "", m.age || "",
        m.region || "", m.group || "", m.roleClass || "Apoyo", m.serverRole || "Ninguno",
        m.militanciaStatus || "", m.estigma || "", m.cleanDays || "", m.racha || "", m.level || "",
        m.sobrietyDate || "", m.joinDate || "", m.sponsorName || ""
      ].concat(SCRIPTURE_COLS.map(function (c) { return hasItem(m.scriptures, c) ? "SI" : "NO"; }))
       .concat(EXERCISE_COLS.map(function (c) { return hasItem(m.exercises, c) ? "SI" : "NO"; })));
    });
    return rows;
  }

  function lastScripture(m) {
    var best = "";
    SCRIPTURE_COLS.forEach(function (c) { if (hasItem(m.scriptures, c)) best = c.col; });
    return best || "—";
  }

  function categoryRows(filterFn) {
    var d = db();
    var rows = [["Nombre", "Nombre Real", "Grupo", "Región", "Fecha Sobriedad", "En grupo desde",
      "Último inventario", "Total inventarios", "Ejercicios", "Cargo", "Teléfono"]];
    (d.members || []).filter(filterFn).forEach(function (m) {
      var invCount = SCRIPTURE_COLS.filter(function (c) { return hasItem(m.scriptures, c); }).length;
      var exs = EXERCISE_COLS.filter(function (c) { return hasItem(m.exercises, c); }).map(function (c) { return c.col; });
      rows.push([m.name || "", m.realName || "", m.group || "", m.region || "", m.sobrietyDate || "",
        m.joinDate || "", lastScripture(m), invCount, exs.join(" / ") || "—", m.serverRole || "Ninguno", m.phone || ""]);
    });
    return rows;
  }

  function sedesRows() {
    var d = db();
    var rows = [["Grupo (Sede)", "Región", "Ubicación Maps", "Coordinadores"]];
    var catalog = d.groupsByRegion || {};
    Object.keys(catalog).forEach(function (region) {
      (catalog[region] || []).forEach(function (g) {
        var coords = (d.activeCoordinators || [])
          .filter(function (c) { return c.group === g && (!c.region || c.region === region); })
          .map(function (c) { return c.name + " (" + c.role + ")"; }).join(" | ");
        var loc = (d.groupLocations && d.groupLocations[g] && d.groupLocations[g].link) || "";
        rows.push([g, region, loc, coords || "Sin coordinadores asignados"]);
      });
    });
    return rows;
  }

  function atraccionesRows() {
    var d = db();
    var rows = [["Día", "Grupo Solicitante", "Padrino Asignado", "Grupo del Padrino"]];
    (d.juntaCalendar || []).slice().sort(function (a, b) { return (a.day || 0) - (b.day || 0); })
      .forEach(function (b) {
        rows.push([b.day || "", b.requestingGroup || "", b.sponsorName || "", b.sponsorGroup || ""]);
      });
    return rows;
  }

  function isPadrino(m) { return m.experienciaNivel === "PADRINO" || /padrino/i.test(m.roleClass || ""); }
  function isOreja(m) { return m.experienciaNivel === "OREJA" || /oreja/i.test(m.roleClass || ""); }
  function isServidor(m) {
    var raw = m.serverRole || "";
    if (!raw || raw === "Ninguno") return false;
    var n = (typeof AVPerm !== "undefined") ? AVPerm.normalizeServerRole(raw) : raw;
    return ["LIDER", "AE", "AI"].indexOf(n) === -1;
  }

  function colWidths(rows) {
    var widths = [];
    rows.forEach(function (r) {
      r.forEach(function (cell, i) {
        var len = String(cell == null ? "" : cell).length;
        widths[i] = Math.max(widths[i] || 10, Math.min(len + 2, 40));
      });
    });
    return widths.map(function (w) { return { wch: w }; });
  }

  function addSheet(wb, name, rows) {
    var ws = global.XLSX.utils.aoa_to_sheet(rows);
    ws["!cols"] = colWidths(rows);
    global.XLSX.utils.book_append_sheet(wb, ws, name);
  }

  // ---- Exportaciones públicas ----

  function exportFullWorkbook() {
    if (typeof global.XLSX === "undefined") {
      if (typeof global.exportDataToCSV === "function") global.exportDataToCSV();
      return "csv-fallback";
    }
    var wb = global.XLSX.utils.book_new();
    addSheet(wb, "Militancia", militanciaRows());
    addSheet(wb, "Padrinos", categoryRows(isPadrino));
    addSheet(wb, "Orejas", categoryRows(isOreja));
    addSheet(wb, "JAV", categoryRows(function (m) { return !!m.isJav; }));
    addSheet(wb, "Servidores", categoryRows(isServidor));
    addSheet(wb, "Sedes y Coordinadores", sedesRows());
    addSheet(wb, "Calendario Atracciones", atraccionesRows());
    global.XLSX.writeFile(wb, "agua_viva_reporte_" + today() + ".xlsx");
    return "xlsx";
  }

  function exportAtraccionesCalendar() {
    if (typeof global.XLSX === "undefined") {
      if (typeof global.exportDataToCSV === "function") global.exportDataToCSV();
      return "csv-fallback";
    }
    var wb = global.XLSX.utils.book_new();
    addSheet(wb, "Calendario Atracciones", atraccionesRows());
    addSheet(wb, "Pase de Lista", (function () {
      var d = db();
      var rows = [["Grupo", "Servidor", "Rol", "Hora de llegada"]];
      (d.juntaAttendance || []).forEach(function (a) {
        rows.push([a.group || "", a.name || "", a.role || "", a.time || ""]);
      });
      return rows;
    })());
    global.XLSX.writeFile(wb, "junta_atracciones_" + today() + ".xlsx");
    return "xlsx";
  }

  global.AVExport = {
    exportFullWorkbook: exportFullWorkbook,
    exportAtraccionesCalendar: exportAtraccionesCalendar,
    hasScripture: hasScripture,
    hasItem: hasItem,
    SCRIPTURE_COLS: SCRIPTURE_COLS,
    EXERCISE_COLS: EXERCISE_COLS,
    _rows: { militanciaRows: militanciaRows, categoryRows: categoryRows, sedesRows: sedesRows, atraccionesRows: atraccionesRows }
  };

})(typeof window !== "undefined" ? window : this);
