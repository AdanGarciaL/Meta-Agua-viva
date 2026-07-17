// Lógica JavaScript del prototipo de Asistencia y Logística de Agua Viva

// Listas de base de datos por defecto como respaldo del móvil
const defaultMeetings = [
    { 
        id: 1, 
        calendar: "GROUP", 
        type: "NORMAL", 
        title: "Junta semanal de Grupo", 
        topic: "El Resurgir", 
        speakerType: "MILITANCIA", 
        speaker: "Líder Carlos M.", 
        speakerEmail: "carlos@email.com", 
        speakerGroup: "Sede Centro", 
        speakerRegion: "Región 1 CDMX", 
        locationType: "GROUP", 
        locationGroup: "Sede Centro", 
        locationLink: "https://maps.google.com/?q=19.4326,-99.1332", 
        locationDetails: "Salón Principal", 
        info: "Sede Centro · Salón Principal", 
        time: "Viernes 29 · 19:00", 
        startTime: "19:00",
        xp: 10, 
        isJav: false, 
        day: "29", 
        month: "Vie" 
    },
    { 
        id: 2, 
        calendar: "REGIONAL", 
        type: "CONSAGRACION", 
        title: "Consagración Regional", 
        topic: "Unión de Almas", 
        speakerType: "MILITANCIA", 
        speaker: "Regional Pedro G.", 
        speakerEmail: "pedro@email.com", 
        speakerGroup: "Zaragoza", 
        speakerRegion: "Región 1 CDMX", 
        locationType: "GROUP", 
        locationGroup: "Ermita", 
        locationLink: "https://maps.google.com/?q=19.3621,-99.1215", 
        locationDetails: "Templo Principal", 
        info: "Ermita · Templo Principal", 
        time: "Sábado 30 · 07:00", 
        startTime: "07:00",
        xp: 30, 
        isJav: false, 
        day: "30", 
        month: "Sáb" 
    },
    { 
        id: 3, 
        calendar: "GROUP", 
        type: "TRIBUNA", 
        title: "Tribuna de Experiencia", 
        topic: "Compartir el dolor", 
        speakerType: "MILITANCIA", 
        speaker: "Padrino Juan A.", 
        speakerEmail: "juan@email.com", 
        speakerGroup: "Satélite", 
        speakerRegion: "Región 1 CDMX", 
        locationType: "GROUP", 
        locationGroup: "Satélite", 
        locationLink: "https://maps.google.com/?q=19.5106,-99.2312", 
        locationDetails: "Salón B", 
        info: "Grupo Satélite · Salón B", 
        time: "Lunes 01 · 20:00", 
        startTime: "20:00",
        xp: 15, 
        isJav: false, 
        day: "01", 
        month: "Lun" 
    },
    { 
        id: 4, 
        calendar: "GROUP", 
        type: "PREPARACIONES_JAV", 
        title: "Preparación JAV", 
        topic: "Jóvenes en Acción", 
        speakerType: "MILITANCIA", 
        speaker: "Líder JAV Amalia F.", 
        speakerEmail: "amalia@email.com", 
        speakerGroup: "Sede Sur", 
        speakerRegion: "Región 1 CDMX", 
        locationType: "GROUP", 
        locationGroup: "Sur", 
        locationLink: "https://maps.google.com/?q=19.4124,-99.0825", 
        locationDetails: "Salón JAV", 
        info: "Sede Sur · Salón JAV", 
        time: "Sábado 30 · 16:00", 
        startTime: "16:00",
        xp: 20, 
        isJav: true, 
        day: "30", 
        month: "Sáb" 
    },
    { 
        id: 5, 
        calendar: "GROUP", 
        type: "JUNTAS_JAV", 
        title: "Junta Jóvenes Agua Viva", 
        topic: "Libertad y Elección", 
        speakerType: "MILITANCIA", 
        speaker: "Ponente Oscar V.", 
        speakerEmail: "oscar@email.com", 
        speakerGroup: "Sede Centro", 
        speakerRegion: "Región 1 CDMX", 
        locationType: "GROUP", 
        locationGroup: "Sede Centro", 
        locationLink: "https://maps.google.com/?q=19.4326,-99.1332", 
        locationDetails: "Salón Principal", 
        info: "Sede Centro · Salón Principal", 
        time: "Domingo 31 · 18:00", 
        startTime: "18:00",
        xp: 15, 
        isJav: true, 
        day: "31", 
        month: "Dom" 
    },
    { 
        id: 6, 
        calendar: "GROUP", 
        type: "PADRES_JAV", 
        title: "Junta de Padres JAV", 
        topic: "Reunión Informativa Familiar", 
        speakerType: "INVITADO", 
        speaker: "Comité Familiar", 
        speakerEmail: "", 
        speakerGroup: "", 
        speakerRegion: "", 
        locationType: "CUSTOM", 
        locationGroup: "Sede Virtual", 
        locationLink: "https://meet.google.com/abc-defg-hij", 
        locationDetails: "Google Meet", 
        info: "Sede Virtual · Google Meet", 
        time: "Miércoles 03 · 19:00", 
        startTime: "19:00",
        xp: 10, 
        isJav: true, 
        day: "03", 
        month: "Mié" 
    },
    { 
        id: 7, 
        calendar: "ANNUAL", 
        type: "CONCORDIA", 
        title: "Concordia Agua Viva Anual", 
        topic: "Conexión del Despertar", 
        speakerType: "INVITADO", 
        speaker: "Comité Nacional", 
        speakerEmail: "", 
        speakerGroup: "", 
        speakerRegion: "", 
        locationType: "CUSTOM", 
        locationGroup: "Hacienda San José", 
        locationLink: "https://maps.google.com/?q=19.0152,-98.2435", 
        locationDetails: "Hacienda San José", 
        info: "Hacienda San José · Convención", 
        time: "Octubre 12 · 09:00", 
        startTime: "09:00",
        xp: 50, 
        isJav: false, 
        day: "12", 
        month: "Oct" 
    },
    { 
        id: 8, 
        calendar: "REGIONAL", 
        type: "JH", 
        title: "Junta de Hacienda (JH)", 
        topic: "Logística Retiro", 
        speakerType: "MILITANCIA", 
        speaker: "Atracciones Diego V.", 
        speakerEmail: "diego@email.com", 
        speakerGroup: "Ermita", 
        speakerRegion: "Región 1 CDMX", 
        locationType: "GROUP", 
        locationGroup: "Satélite", 
        locationLink: "https://maps.google.com/?q=19.5106,-99.2312", 
        locationDetails: "Sala de Juntas", 
        info: "Región 1 · Sala de Juntas", 
        time: "Viernes 05 · 18:00", 
        startTime: "18:00",
        xp: 15, 
        isJav: false, 
        day: "05", 
        month: "Jul" 
    },
    { 
        id: 9, 
        calendar: "REGIONAL", 
        type: "NOCHES_DE_GUERRA", 
        title: "Noche de Guerra Regional", 
        topic: "Oración y Fuerza de Grupo", 
        speakerType: "INVITADO", 
        speaker: "Coordinación Regional", 
        speakerEmail: "", 
        speakerGroup: "", 
        speakerRegion: "", 
        locationType: "CUSTOM", 
        locationGroup: "Cancha Satélite", 
        locationLink: "https://maps.google.com/?q=19.5106,-99.2312", 
        locationDetails: "Cancha de Satélite", 
        info: "Cancha Satélite · Oración y Fuerza", 
        time: "Jueves 28 · 21:00", 
        startTime: "21:00",
        xp: 25, 
        isJav: false, 
        day: "28", 
        month: "Jun" 
    }
];

const defaultHistory = [
    { id: 101, title: "Junta semanal", details: "Sede Centro", date: "26 de mayo · 19:04", xp: 10, category: "junta" },
    { id: 102, title: "Sesión 1:1 padrino", details: "Café Luz", date: "25 de mayo · 18:30", xp: 15, category: "oyp" },
    { id: 103, title: "Junta semanal", details: "Sede Centro", date: "22 de mayo · 19:00", xp: 10, category: "junta" },
    { id: 104, title: "Junta semanal", details: "Sede Norte", date: "19 de mayo · 19:00", xp: 10, category: "junta" },
    { id: 105, title: "Hacienda · retiro", details: "Tepoztlán", date: "15 de mayo · 08:00", xp: 50, category: "hacienda" }
];

const defaultEscribientes = [
    { id: "e1", firstName: "Roberto", lastNameInitial: "M", gender: "MALE", group: "Zaragoza" },
    { id: "e2", firstName: "María", lastNameInitial: "S", gender: "FEMALE", group: "Satélite" },
    { id: "e3", firstName: "Fernando", lastNameInitial: "L", gender: "MALE", group: "Ermita" },
    { id: "e4", firstName: "Gabriela", lastNameInitial: "P", gender: "FEMALE", group: "Chicoloapan" },
    { id: "e5", firstName: "Héctor", lastNameInitial: "G", gender: "MALE", group: "Zaragoza" }
];

const defaultSemaphores = [
    { name: "Zaragoza", status: "GREEN", updatedBy: "AE Mario R.", time: "Hace 2 horas" },
    { name: "Sur", status: "GREEN", updatedBy: "Lider Clara E.", time: "Hace 5 horas" },
    { name: "Satélite", status: "YELLOW", updatedBy: "AI Sofia P.", time: "Hace 10 min" },
    { name: "Chicoloapan", status: "RED", updatedBy: "Nadie", time: "Pendiente" },
    { name: "Ermita", status: "GREEN", updatedBy: "AE Roberto D.", time: "Ayer" },
    { name: "Neza", status: "RED", updatedBy: "Nadie", time: "Pendiente" }
];

const defaultChangelog = [
    { action: "REGISTRO_ESCRIBIENTE", details: "Agregó a Escribiente Roberto M. a grupo Zaragoza", user: "Atracciones Diego V.", time: "16:20" },
    { action: "UPDATE_SEMAFORO", details: "Cambió Satélite a amarillo (Datos borrador)", user: "AI Sofia P.", time: "16:12" },
    { action: "REGISTRO_ESCRIBIENTE", details: "Agregó a Escribiente María S. a grupo Satélite", user: "Líder Clara E.", time: "15:45" },
    { action: "UPDATE_SEMAFORO", details: "Cambió Zaragoza a verde (Validado)", user: "Atracciones Diego V.", time: "14:10" }
];

const groupsByRegion = {
    "Región 1 CDMX": ['Zaragoza', 'Sur', 'Satélite', 'Chicoloapan', 'San Cosme', 'Cuernavaca', 'Neza', 'San Cristóbal', 'Ermita', 'Santa María', 'Jiutepec', 'Zacatepec', 'Mirador', 'Aragón', 'Alamedas', 'Coapan'],
    "Región 2 Estado de México": ['Teoloyucan', 'Tlanepantla', 'Pachuca', 'Caracoles', 'Atizapán', 'Nextlalpan', 'Coacalco', 'Atlacomulco', 'Tizayuca', 'Cuautitlán', 'Nicolás Romero'],
    "Región 3 Querétaro y Guanajuato": ['Satélite', 'Salitre', 'León'],
    "Región 4 Puebla": ['Apizaco', 'Guadalupe Hidalgo (Pipis)', 'San Felipe', 'Tlaxcala', 'Cholula', 'Zacatelco', 'Buenavista', 'San Baltazar', 'Amalucan', 'Amozoc', 'Huamantla', 'Contla'],
    "Región 5 Guerrero": ['Chilpancingo', 'Coloso', 'Mozimba', 'San Jerónimo', 'Acahuizotla', 'Hacienda de Cabañas', 'Coyuca', 'Atoyac', 'Chichihualco'],
    "Región 6 Yucatán": ['Cancún', 'Caribe', 'Mérida', 'Hunucmá', 'Conkal'],
    "Región 7 Chicago": ['Aurora', 'Minoora', 'Chicago'],
    "Región 8 Veracruz": ['Cuitláhuac', 'Tinaja', 'Tierra Blanca', 'Capilla', 'Carranza', 'Amapolas', 'Córdoba'],
    "Región 9 Monterrey": ['Monterrey']
};

// Estructura del estado compartido
let state = {};

function updateLogoImages() {
    if (!state || !state.user) return;
    const logoSrc = state.user.isJav ? "assets/Icons/Logo JAV.png" : "assets/Icons/LOGO AV.png";
    document.querySelectorAll(".app-logo-main").forEach(img => {
        img.src = logoSrc;
    });
}

function getRegionForGroup(groupName) {
    if (!groupName) return "Región 1 CDMX";
    for (const [region, groups] of Object.entries(groupsByRegion)) {
        if (groups.includes(groupName)) {
            return region;
        }
    }
    return "Región 1 CDMX";
}

// Llena el selector con las haciendas realmente agendadas
function populateHaciendaSelect() {
    const select = document.getElementById("haciendaSelect");
    if (!select) return;
    const haciendas = (state.meetings || []).filter(m => m.isHacienda);
    if (!haciendas.length) return;
    select.innerHTML = haciendas.map(h => {
        const p = dateParts(h.startDate || h.date);
        const f = p.valid ? ` (${p.day} ${MONTHS_ES[p.monthIdx].slice(0, 3)})` : "";
        return `<option value="${h.id}">${h.title}${f}</option>`;
    }).join("");
}

// Muestra el semáforo del grupo del usuario en la tarjeta de hacienda
function renderMyGroupSemaphore() {
    const el = document.getElementById("lblMyGroupSemaphore");
    if (!el || !state.user) return;
    const grp = (state.groupsSemaphore || []).find(g => g.name === state.user.group);
    const status = grp ? grp.status : "RED";
    const map = { GREEN: ["#10b981", "Validado"], YELLOW: ["#f59e0b", "Borrador"], RED: ["#ef4444", "Pendiente"] };
    const [color, label] = map[status] || map.RED;
    el.innerHTML = `<span style="display:inline-block; width:9px; height:9px; border-radius:50%; background:${color}; margin-right:6px;"></span>${state.user.group}: ${label}`;
}

function updateHaciendaSectionDetails() {
    const select = document.getElementById("haciendaSelect");
    if (!select) return;
    const val = select.value;

    let name = "Hacienda de Retiro";
    let date = "Por confirmar";
    let link = "";

    const realHac = (state.meetings || []).find(m => m.isHacienda && String(m.id) === String(val));
    if (realHac) {
        name = realHac.title;
        const ps = dateParts(realHac.startDate || realHac.date);
        const pe = dateParts(realHac.endDate || realHac.date);
        date = (ps.valid ? `${ps.day} ${MONTHS_ES[ps.monthIdx]}` : "") + (pe.valid ? ` al ${pe.day} ${MONTHS_ES[pe.monthIdx]} ${pe.year}` : "");
        const loc = (state.haciendaLocations && state.haciendaLocations[realHac.region]) || {};
        link = loc.link || "";
    } else if (val === "h1") {
        // Región 4 Puebla
        const loc = (state.haciendaLocations && state.haciendaLocations["Región 4 Puebla"]) || {};
        name = loc.name || "Hacienda Buena Vista";
        date = "Viernes 24 al Domingo 26 de Julio, 2026";
        link = loc.link || "https://maps.google.com/?q=19.0152,-98.2435";
    } else if (val === "h2") {
        // Región 1 CDMX JAV
        const loc = (state.haciendaLocations && state.haciendaLocations["Región 1 CDMX"]) || {};
        name = (loc.name || "Hacienda El Oasis") + " (JAV)";
        date = "Viernes 14 al Domingo 16 de Agosto, 2026";
        link = loc.link || "https://maps.google.com/?q=19.1234,-99.5678";
    }

    const lblName = document.getElementById("lblHaciendaDetailName");
    const lblDate = document.getElementById("lblHaciendaDetailDate");
    const mapLinkBtn = document.getElementById("btnHaciendaDetailMapLink");
    const mapSection = document.getElementById("haciendaDetailMapSection");
    const iframeMap = document.getElementById("iframeHaciendaDetailMap");

    if (lblName) lblName.textContent = name;
    if (lblDate) lblDate.textContent = date;
    
    if (link) {
        if (mapLinkBtn) mapLinkBtn.href = link;
        if (iframeMap) {
            let searchVal = link;
            if (link.startsWith("http")) {
                try {
                    const url = new URL(link);
                    const q = url.searchParams.get("q") || url.searchParams.get("daddr");
                    if (q) searchVal = q;
                } catch(e) {}
            }
            iframeMap.src = `https://maps.google.com/maps?q=${encodeURIComponent(searchVal)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
        }
        if (mapSection) mapSection.style.display = "block";
    } else {
        if (mapSection) mapSection.style.display = "none";
        if (iframeMap) iframeMap.src = "";
    }

    renderMyGroupSemaphore();
}

// Fechas del calendario (compartidas con la consola admin)
const WEEKDAYS_ABBR = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS_ES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function dateParts(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return { valid: false };
    return { valid: true, day: d.getDate(), weekday: WEEKDAYS_ABBR[d.getDay()], monthIdx: d.getMonth(), year: d.getFullYear() };
}

// Asigna fecha real a eventos que solo traen día/día-de-semana
function ensureMeetingDatesApp(db) {
    if (!db || !Array.isArray(db.meetings)) return;
    const now = new Date();
    let changed = false;
    db.meetings.forEach(m => {
        if (m.date && dateParts(m.date).valid) return;
        const dayNum = Math.min(Math.max(parseInt(m.day) || 1, 1), 28);
        const c = new Date(now.getFullYear(), now.getMonth(), dayNum);
        m.date = `${c.getFullYear()}-${String(c.getMonth() + 1).padStart(2, "0")}-${String(c.getDate()).padStart(2, "0")}`;
        const p = dateParts(m.date);
        m.day = String(p.day);
        m.month = p.weekday;
        changed = true;
    });
    if (changed) localStorage.setItem("agua_viva_db", JSON.stringify(db));
}

function loadState() {
    const saved = localStorage.getItem("agua_viva_db");
    let db = saved ? JSON.parse(saved) : null;

    if (db) {
        // Respaldos compartidos: calendario y hacienda activa también deben
        // existir cuando el móvil es la primera superficie en abrirse.
        let dirty = false;
        if (!db.meetings || db.meetings.length < 15) { db.meetings = defaultMeetings; dirty = true; }
        if (!db.activeHacienda) {
            const start = new Date();
            start.setDate(start.getDate() + 12);
            db.activeHacienda = { name: "Hacienda Región 1 (Experiencia)", region: "Región 1 CDMX", startDate: start.toISOString().split("T")[0] };
            dirty = true;
        }
        if (dirty) localStorage.setItem("agua_viva_db", JSON.stringify(db));
    }

    if (!db) {
        // Inicializa la base de datos por defecto acorde al estado admin
        db = {
            currentSimulatedRole: "admin",
            user: { name: "Mariana C.", role: "Coordinadora", sede: "Sede Centro" },
            members: [
                { id: "m1", name: "Río", email: "rio@email.com", password: "123", phone: "55-9012-3456", sobrietyDate: "2026-01-02", realName: "Rogelio I.", age: 29, emergency: "Mamá 555-1234", joinDate: "Ago 2025", level: "Aurora Nv 5", levelNum: 5, xp: 580, racha: 42, cleanDays: 142, lastAttendance: "Hoy", status: "Activo", avatarColor: "#b91c1c", checkedIn: true, checkInTime: "19:02", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "COM", approvalStatus: "APPROVED" },
                { id: "m2", name: "Nube", email: "nube@email.com", password: "123", phone: "55-3456-7890", sobrietyDate: "2025-09-08", realName: "Natalia U.", age: 24, emergency: "Papá 555-5678", joinDate: "Feb 2025", level: "Constelación Nv 7", levelNum: 7, xp: 910, racha: 91, cleanDays: 290, lastAttendance: "Hoy", status: "Activo", avatarColor: "#1d4ed8", checkedIn: true, checkInTime: "19:04", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Padrino", serverRole: "Ninguno", approvalStatus: "APPROVED", scriptures: ["1er inventario", "10mo de primera", "2do inventario", "10mo de 2da", "3er inventario", "10 de 3ra", "pre cuarta", "4to inevntario"], exercises: ["Trinity", "Libertad bajo dios", "Duelo", "desierto"] },
                { id: "m3", name: "Coyote", email: "coyote@email.com", password: "123", phone: "55-7890-1234", sobrietyDate: "2026-06-02", realName: "Carlos O.", age: 28, emergency: "Esposa 555-9012", joinDate: "Nov 2025", level: "Llama Nv 2", levelNum: 2, xp: 220, racha: 12, cleanDays: 22, lastAttendance: "Hoy", status: "Activo", avatarColor: "#c2410c", checkedIn: true, checkInTime: "19:11", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Ermita", roleClass: "Apoyo", serverRole: "Tesorería de Grupo", approvalStatus: "APPROVED" },
                { id: "m4", name: "Sauce", email: "sauce@email.com", password: "123", phone: "55-5678-9012", sobrietyDate: "2024-10-23", realName: "Saúl U.", age: 32, emergency: "Hermano 555-3456", joinDate: "Sept 2024", level: "Sol Nv 8", levelNum: 8, xp: 1870, racha: 187, cleanDays: 612, lastAttendance: "Hoy", status: "Activo", avatarColor: "#047857", checkedIn: true, checkInTime: "19:08", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Chicoloapan", roleClass: "Padrino", serverRole: "Preparador de primeros inventarios", approvalStatus: "APPROVED" },
                { id: "m5", name: "Tierra", email: "tierra@email.com", password: "123", phone: "55-1234-5678", sobrietyDate: "2026-03-26", realName: "Teresa I.", age: 21, emergency: "Madre 555-7890", joinDate: "Ene 2025", level: "Faro Nv 4", levelNum: 4, xp: 480, racha: 33, cleanDays: 90, lastAttendance: "Hoy", status: "Activo", avatarColor: "#556b2f", checkedIn: true, checkInTime: "19:05", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Oreja", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m6", name: "Ámbar", email: "ambar@email.com", password: "123", phone: "55-4321-8765", sobrietyDate: "2026-03-21", realName: "Ambar A.", age: 22, emergency: "Tía 555-4321", joinDate: "Jun 2025", level: "Faro Nv 4", levelNum: 4, xp: 420, racha: 28, cleanDays: 95, lastAttendance: "Hoy", status: "Activo", avatarColor: "#be185d", checkedIn: true, checkInTime: "19:03", xpGranted: 15, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Padrino", serverRole: "Ninguno", approvalStatus: "APPROVED", attendingHacienda: true, arrivalShift: "AVANZADA", transportStatus: "PROVIDES_TRANSPORT", transportCapacity: 3, scriptures: ["1er inventario", "10mo de primera", "2do inventario", "10mo de 2da"], exercises: ["Trinity", "Duelo"] },
                { id: "m7", name: "Lince", email: "lince@email.com", password: "123", phone: "55-9876-5432", sobrietyDate: "2026-05-08", realName: "Lucía I.", age: 26, emergency: "Padre 555-8765", joinDate: "Oct 2025", level: "Brasa Nv 3", levelNum: 3, xp: 310, racha: 0, cleanDays: 47, lastAttendance: "5 días", status: "Risk", avatarColor: "#be185d", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m8", name: "Roble", email: "roble@email.com", password: "123", phone: "55-8765-4321", sobrietyDate: "2026-05-03", realName: "Roberto O.", age: 27, emergency: "Amigo 555-2109", joinDate: "Nov 2025", level: "Brasa Nv 3", levelNum: 3, xp: 340, racha: 15, cleanDays: 52, lastAttendance: "Hace 1 sem", status: "Risk", avatarColor: "#556b2f", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Ermita", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m9", name: "Bruma", email: "bruma@email.com", password: "123", phone: "55-4567-8901", sobrietyDate: "2026-06-17", realName: "Beatriz R.", age: 16, emergency: "Madre 555-6543", joinDate: "Ene 2026", level: "Chispa JAV Nv 1", levelNum: 1, xp: 70, racha: 3, cleanDays: 7, lastAttendance: "Ayer", status: "Activo", avatarColor: "#6d28d9", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: true, region: "Región 1 CDMX", group: "Satélite", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m10", name: "Ceniza", email: "ceniza@email.com", password: "123", phone: "55-2109-8765", sobrietyDate: "2026-04-21", realName: "Cesar N.", age: 23, emergency: "Padre 555-9876", joinDate: "May 2026", level: "Estrella Nv 1", levelNum: 1, xp: 64, racha: 64, cleanDays: 64, lastAttendance: "Hoy", status: "New", avatarColor: "#6d28d9", checkedIn: true, checkInTime: "19:21", xpGranted: 5, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m11", name: "Estrella", email: "estrella@email.com", password: "123", phone: "55-6543-2109", sobrietyDate: "2026-06-10", realName: "Esther R.", age: 25, emergency: "Mamá 555-1122", joinDate: "Mar 2026", level: "Chispa Nv 1", levelNum: 1, xp: 45, racha: 8, cleanDays: 14, lastAttendance: "Hace 4 días", status: "Activo", avatarColor: "#0369a1", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m12", name: "Cedro", email: "cedro@email.com", password: "123", phone: "55-7711-2233", sobrietyDate: "2025-02-14", realName: "César D.", age: 31, emergency: "Esposa 555-7711", joinDate: "Feb 2025", level: "Faro Nv 4", levelNum: 4, xp: 505, racha: 38, cleanDays: 240, lastAttendance: "Hoy", status: "Activo", avatarColor: "#0e7490", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Apoyo", serverRole: "AI", estigma: "ALCOHOLISMO", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO", approvalStatus: "APPROVED" },
                { id: "m13", name: "Roca", email: "roca@email.com", password: "123", phone: "55-8822-3344", sobrietyDate: "2024-08-02", realName: "Ramiro O.", age: 35, emergency: "Hermano 555-8822", joinDate: "Ago 2024", level: "Aurora Nv 5", levelNum: 5, xp: 720, racha: 60, cleanDays: 500, lastAttendance: "Hoy", status: "Activo", avatarColor: "#166534", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "Atracción Externa", estigma: "DROGADICCION", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO", approvalStatus: "APPROVED" }
            ],
            pendingAdminRequests: [
                { id: "pr1", name: "Lince", email: "lince@email.com", avatarColor: "#be185d", requestedRole: "LIDER", group: "Zaragoza" },
                { id: "pr2", name: "Bruma", email: "bruma@email.com", avatarColor: "#6d28d9", requestedRole: "AE", group: "Satélite" },
                { id: "pr3", name: "Roble", email: "roble@email.com", avatarColor: "#556b2f", requestedRole: "AI", group: "Ermita" }
            ],
            pendingRoleRequests: [], // Para aprobaciones de Oreja, Padrino, Servidor
            activeCoordinators: [
                { id: "ac1", name: "Mariana C.", email: "mariana@email.com", role: "LIDER", group: "Satélite", avatarColor: "#0F172A" },
                { id: "ac2", name: "Pedro G.", email: "pedro@email.com", role: "LIDER", group: "Zaragoza", avatarColor: "#c2410c" },
                { id: "ac3", name: "Sofía P.", email: "sofia@email.com", role: "AI", group: "Satélite", avatarColor: "#be185d" },
                { id: "ac4", name: "Diego V.", email: "diego@email.com", role: "AE", group: "Ermita", avatarColor: "#047857" }
            ],
            notes: {
                "m6": [
                    { date: "22 may 2026", author: "Mariana C.", body: "Compartió por primera vez en la junta. Se le notó tranquila al salir." },
                    { date: "15 may 2026", author: "Pedro G.", body: "Asistió a su primera Hacienda como apoyo. Excelente disposición de servicio en literatura." },
                    { date: "02 abr 2026", author: "Mariana C.", body: "Presenta una racha de asistencia muy constante. Se le asignará seguimiento de acompañamiento." }
                ],
                "m1": [
                    { date: "24 may 2026", author: "Mariana C.", body: "Río reportó que completó sus 120 días limpios de forma exitosa. Se le propuso como preparador." }
                ]
            },
            history: {
                "m6": defaultHistory,
                "m1": [
                    { title: "Junta semanal", details: "Sede Centro", date: "2026-05-26", xp: 10 },
                    { title: "Preparación JAV", details: "Sede Sur", date: "2026-05-24", xp: 10 },
                    { title: "Junta semanal", details: "Sede Centro", date: "2026-05-19", xp: 10 }
                ]
            },
            weeklyAttendance: {
                "m6": [3, 2, 1, 3, 2, 4, 3, 2, 3, 1, 4, 3],
                "m1": [4, 4, 3, 4, 3, 4, 4, 2, 4, 3, 4, 4]
            },
            escribientes: defaultEscribientes,
            groupsSemaphore: defaultSemaphores,
            changelog: defaultChangelog,
            events: []
        };
        localStorage.setItem("agua_viva_db", JSON.stringify(db));
    }
    
    // Fija un correo activo por defecto si no existe, para compatibilidad
    if (!localStorage.getItem("agua_viva_active_user_email")) {
        localStorage.setItem("agua_viva_active_user_email", "ambar@email.com");
    }

    const activeEmail = localStorage.getItem("agua_viva_active_user_email");

    // Asegura que existan notificaciones en el db
    if (!db.notifications) {
        db.notifications = {};
    }
    const userEmail = activeEmail || "ambar@email.com";
    if (!db.notifications[userEmail]) {
        const isCoord = db.activeCoordinators.some(c => c.email === userEmail) || 
                        db.members.some(m => m.email === userEmail && (m.roleClass === "LIDER" || m.serverRole === "LIDER" || m.serverRole === "AE" || m.serverRole === "AI"));
        if (isCoord) {
            db.notifications[userEmail] = [
                {
                    id: "n1",
                    title: "⚠️ Recordatorio POA",
                    desc: "Tu grupo Satélite tiene datos pendientes de validar para la próxima Hacienda (Semáforo AMARILLO). Por favor actualiza la lista.",
                    time: "Hace 10 min",
                    type: "warning",
                    read: false,
                    action: "sec-haciendas"
                },
                {
                    id: "n2",
                    title: "📅 Próximo Evento",
                    desc: "Junta semanal de Grupo hoy a las 19:00 en Sede Centro.",
                    time: "Hace 2 horas",
                    type: "event",
                    read: true,
                    action: "sec-inicio"
                }
            ];
        } else {
            db.notifications[userEmail] = [
                {
                    id: "n1",
                    title: "📅 Próxima Hacienda",
                    desc: "Declara tu asistencia, transporte y turno para el próximo retiro regional de Hacienda en la pestaña Haciendas.",
                    time: "Hace 15 min",
                    type: "event",
                    read: false,
                    action: "sec-haciendas"
                },
                {
                    id: "n2",
                    title: "📅 Junta semanal",
                    desc: "Junta semanal de Grupo hoy a las 19:00 en Sede Centro.",
                    time: "Hace 3 horas",
                    type: "event",
                    read: true,
                    action: "sec-inicio"
                }
            ];
        }
        localStorage.setItem("agua_viva_db", JSON.stringify(db));
    }
    let activeUser = null;
    
    const member = db.members.find(m => m.email === activeEmail);
    if (member) {
        activeUser = {
            id: member.id,
            name: member.name,
            email: member.email,
            initial: member.name.substring(0, 1).toUpperCase(),
            xp: member.xp !== undefined ? member.xp : 420,
            level: member.levelNum !== undefined ? member.levelNum : 4,
            cleanDays: member.cleanDays !== undefined ? member.cleanDays : 95,
            streak: member.racha !== undefined ? member.racha : 28,
            region: member.region || "Región 1 CDMX",
            group: member.group || "Satélite",
            isJav: member.isJav || false,
            roleClass: member.roleClass || "Apoyo",
            serverRole: member.serverRole || "Ninguno",
            attendingHacienda: member.attendingHacienda !== undefined ? member.attendingHacienda : true,
            arrivalShift: member.arrivalShift || "AVANZADA",
            transportStatus: member.transportStatus || "PROVIDES_TRANSPORT",
            transportCapacity: member.transportCapacity !== undefined ? member.transportCapacity : 3,
            avatarColor: member.avatarColor || (member.isJav ? "#6d28d9" : "#0369a1"),
            avatarIcon: member.avatarIcon || "initial",
            avatarPhoto: member.avatarPhoto || null,
            phone: member.phone || "",
            scriptures: member.scriptures || [],
            exercises: member.exercises || [],
            sobrietyDate: member.sobrietyDate || "",
            joinDate: member.joinDate || "",
            experienciaNivel: member.experienciaNivel || null,
            isPadrinoJav: !!member.isPadrinoJav,
            isOrejaJav: !!member.isOrejaJav,
            emergency: member.emergency || "",
            poa: member.poa || null
        };
    } else {
        // Verifica si el usuario activo es coordinador en activeCoordinators
        const coord = db.activeCoordinators.find(c => c.email === activeEmail);
        if (coord) {
            // El coordinador conserva su cargo real (sigla) y su región para
            // que la sección Mi Servicio y el POA funcionen igual que para
            // cualquier servidor de la militancia.
            activeUser = {
                id: coord.id,
                name: coord.name,
                email: coord.email,
                initial: coord.name.substring(0, 1).toUpperCase(),
                xp: coord.xp !== undefined ? coord.xp : 600,
                level: 5,
                cleanDays: 150,
                streak: 45,
                region: coord.region || getRegionForGroup(coord.group),
                group: coord.group,
                isJav: false,
                roleClass: "Apoyo",
                serverRole: coord.role || "Ninguno",
                isCoordinator: true,
                coordinatorRole: coord.role,
                attendingHacienda: coord.attendingHacienda !== undefined ? coord.attendingHacienda : true,
                arrivalShift: coord.arrivalShift || "AVANZADA",
                transportStatus: coord.transportStatus || "NONE",
                transportCapacity: coord.transportCapacity || 0,
                avatarColor: coord.avatarColor || "#0F172A",
                avatarIcon: coord.avatarIcon || "initial",
                avatarPhoto: coord.avatarPhoto || null,
                phone: coord.phone || "",
                emergency: coord.emergency || "",
                poa: coord.poa || null
            };
        }
    }
    
    const overlay = document.getElementById("authOverlay");
    if (!activeUser) {
        if (overlay) overlay.classList.remove("hidden");
    } else {
        if (overlay) overlay.classList.add("hidden");
    }

    // Respaldo también para la semilla fresca (db recién creado sin calendario)
    if (!db.meetings || db.meetings.length < 15) {
        db.meetings = defaultMeetings;
        localStorage.setItem("agua_viva_db", JSON.stringify(db));
    }
    if (!db.activeHacienda) {
        const hs = new Date();
        hs.setDate(hs.getDate() + 12);
        db.activeHacienda = { name: "Hacienda Región 1 (Experiencia)", region: "Región 1 CDMX", startDate: hs.toISOString().split("T")[0] };
        localStorage.setItem("agua_viva_db", JSON.stringify(db));
    }
    ensureMeetingDatesApp(db);

    state = {
        user: activeUser || {
            name: "Invitado",
            email: "invitado@email.com",
            initial: "I",
            xp: 0,
            level: 1,
            cleanDays: 0,
            streak: 0,
            region: "Región 1 CDMX",
            group: "Satélite",
            isJav: false,
            roleClass: "Apoyo",
            serverRole: "Ninguno",
            avatarColor: "#0369a1",
            avatarIcon: "initial"
        },
        meetings: db.meetings || defaultMeetings,
        history: activeUser ? (db.history[activeUser.id || activeUser.email] || defaultHistory) : defaultHistory,
        escribientes: db.escribientes || defaultEscribientes,
        groupsSemaphore: db.groupsSemaphore || defaultSemaphores,
        changelog: db.changelog || defaultChangelog,
        members: db.members || [],
        events: db.events || [],
        pendingRoleRequests: db.pendingRoleRequests || [],
        pendingAdminRequests: db.pendingAdminRequests || [],
        notifications: db.notifications[activeEmail || "ambar@email.com"] || []
    };

    // Actualiza los elementos de interfaz del nombre de usuario
    const nameLabel = document.getElementById("userNameLabel");
    if (nameLabel) nameLabel.textContent = state.user.name;
    
    // Actualiza todos los botones de avatar de la interfaz
    const updateAvatarUI = (el) => {
        if (!el) return;
        if (state.user.avatarPhoto) {
            el.style.background = "transparent";
            el.innerHTML = '<img src="' + state.user.avatarPhoto + '" alt="avatar" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">';
            return;
        }
        if (state.user.avatarColor) {
            el.style.background = state.user.avatarColor;
        }
        if (state.user.avatarIcon && state.user.avatarIcon !== "initial") {
            el.innerHTML = `<i class="fa-solid ${state.user.avatarIcon}"></i>`;
        } else {
            el.textContent = state.user.initial || "Á";
        }
    };
    
    updateAvatarUI(document.getElementById("avatarBtn"));
    
    const achievementsSection = document.getElementById("sec-logros");
    if (achievementsSection) {
        const logrosAvatar = achievementsSection.querySelector(".logros-profile-card .avatar");
        updateAvatarUI(logrosAvatar);
        const logrosName = achievementsSection.querySelector(".logros-profile-card h2");
        if (logrosName) logrosName.textContent = state.user.name;
    }
    
    // Renderiza el contador y el popup de notificaciones
    renderNotifications();

    renderPadrinoProgress();
    if (typeof renderServiceCard === "function") renderServiceCard();
    renderHomeStats();
    renderRoleTags();
    renderHomeNextEvent();
    populateHaciendaSelect();
    updateHaciendaSectionDetails();
    renderLogrosReal();
    prefillPoaForm();
    updateLogoImages();
}

// Precarga la declaración POA con lo ya registrado por el usuario
function prefillPoaForm() {
    if (!state.user) return;
    const poa = state.user.poa || {};
    const setV = (id, v) => { const e = document.getElementById(id); if (e && v !== undefined && v !== null) e.value = v; };
    setV("poaEmergency", poa.emergencyContact || state.user.emergency || "");
    setV("poaAllergies", poa.allergies || "");
    setV("poaNotes", poa.observations || "");
}

// Cabecera de Logros con el nivel y XP reales del usuario
const LEVEL_NAMES = ["Chispa", "Llama", "Brasa", "Faro", "Aurora", "Sol", "Estrella", "Constelación", "Sol Absoluto"];
const LEVEL_XP = [50, 150, 300, 450, 650, 900, 1200, 1600, 2000];

function renderLogrosReal() {
    if (!state.user) return;
    const u = state.user;
    const lvl = u.level || 1;
    const idx = Math.max(0, Math.min(lvl - 1, LEVEL_NAMES.length - 1));
    const curName = LEVEL_NAMES[idx], nextName = LEVEL_NAMES[idx + 1] || "Máximo";
    const reqXp = LEVEL_XP[idx] || 650;
    const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };

    set("logrosName", u.name);
    set("logrosAvatar", (u.name || "A").charAt(0).toUpperCase());
    set("logrosJoinDate", `Miembro desde ${u.joinDate || "—"}`);
    set("logrosLevelBadge", `Nv ${lvl} · ${curName}`);
    set("logrosStreakBadge", `${u.streak || 0}d`);
    set("logrosTransition", `${curName} → ${nextName}`);

    const xpText = document.getElementById("logrosXpText");
    if (xpText) xpText.innerHTML = `<strong>${u.xp || 0}</strong> / ${reqXp} XP`;
    const fill = document.getElementById("logrosProgressFill");
    if (fill) fill.style.width = Math.min(100, Math.round(((u.xp || 0) / reqXp) * 100)) + "%";

    renderRoadmap(u);
    renderBadges(u);
}

// Camino de luz generado del nivel real del usuario
const ROADMAP_ICONS = ["fa-circle", "fa-diamond", "fa-fire", "fa-lightbulb", "fa-star", "fa-sun"];
function renderRoadmap(u) {
    const track = document.getElementById("roadmapTrack");
    if (!track) return;
    const lvl = Math.max(1, Math.min(u.level || 1, 8));
    track.innerHTML = LEVEL_NAMES.slice(0, 6).map((name, i) => {
        const n = i + 1;
        const cls = n < lvl ? "completed" : n === lvl ? "active" : "locked";
        return `<div class="roadmap-item ${cls}">
            <div class="roadmap-dot"><i class="fa-solid ${ROADMAP_ICONS[i]}"></i></div>
            <span class="roadmap-level-name">Nv ${n}</span>
            <span class="roadmap-level-title font-serif">${name}</span>
        </div>`;
    }).join("");
}

// Insignias desbloqueadas según los datos reales del usuario
function renderBadges(u) {
    const grid = document.getElementById("insigniasGrid");
    if (!grid) return;
    const hist = state.history || [];
    const juntas = hist.filter(h => (h.category || "junta") === "junta").length;
    const haciendas = hist.filter(h => h.category === "hacienda").length;
    const shift = (u.poa && u.poa.arrivalShift) || u.arrivalShift;

    const DEFS = [
        { name: "7 días", desc: "Una semana firme", icon: "fa-fire", type: "fire", ok: (u.streak || 0) >= 7 },
        { name: "30 días", desc: "Un mes completo", icon: "fa-fire", type: "fire", ok: (u.streak || 0) >= 30 },
        { name: "90 días", desc: "Tres meses", icon: "fa-fire", type: "fire", ok: (u.cleanDays || 0) >= 90 },
        { name: "1 año", desc: "Vuelta al sol", icon: "fa-fire", type: "fire", ok: (u.cleanDays || 0) >= 365 },
        { name: "Primera junta", desc: "Llegaste", icon: "fa-star", type: "blue", ok: juntas >= 1 },
        { name: "10 juntas", desc: "Constante", icon: "fa-star", type: "blue", ok: juntas >= 10 || (u.streak || 0) >= 10 },
        { name: "Hacienda", desc: "Viviste la exp", icon: "fa-trophy", type: "purple", ok: haciendas >= 1 || u.attendingHacienda === true },
        { name: "Padrino activo", desc: "Acompañado", icon: "fa-check", type: "blue", ok: !!(u.sponsorName || (u.experienciaNivel || "").includes("PADRINO") || (u.roleClass || "").toLowerCase().includes("padrino")) },
        { name: "Madrugador", desc: "Pre-avanzada", icon: "fa-sun", type: "purple", ok: shift === "PRE_AVANZADA" }
    ];

    const unlockedCls = { fire: "unlocked", blue: "unlocked-star-blue", purple: "unlocked-star-purple" };
    const lockedCls = { fire: "locked", blue: "locked-star", purple: "locked-star" };
    const iconWrap = { fire: "badge-icon-fire", blue: "badge-icon-star", purple: "badge-icon-star" };

    grid.innerHTML = DEFS.map(d => `
        <div class="badge-card ${d.ok ? unlockedCls[d.type] : lockedCls[d.type]}">
            <div class="${iconWrap[d.type]}"><i class="fa-solid ${d.icon}${d.ok && d.type === "fire" ? " animate-pulse" : ""}"></i></div>
            <span class="badge-name">${d.name}</span>
            <span class="badge-desc">${d.desc}</span>
        </div>`).join("");

    const count = document.getElementById("insigniasCount");
    if (count) count.textContent = `${DEFS.filter(d => d.ok).length} / ${DEFS.length}`;
}

// Próximo evento del calendario + aviso de hacienda en ventana
// Nombres y XP por nivel (compartidos por inicio y logros)
const HOME_LEVEL_NAMES = ["Chispa", "Llama", "Brasa", "Faro", "Aurora", "Sol", "Estrella", "Constelación"];
const HOME_LEVEL_XP = [50, 150, 300, 650, 800, 1200, 1500, 2000];

// Tarjetas del inicio con los datos reales del usuario activo
function renderHomeStats() {
    if (!state.user) return;
    const u = state.user;
    const lvl = Math.max(1, Math.min(u.level || 1, 8));
    const curName = HOME_LEVEL_NAMES[lvl - 1];
    const nextName = HOME_LEVEL_NAMES[lvl] || "Máximo";
    const reqXp = HOME_LEVEL_XP[lvl - 1] || 650;
    const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };

    set("homeLevelSubtitle", `NIVEL ${lvl} · DE 8`);
    set("homeLevelName", curName + (u.isJav ? ` <span style="font-size:0.65em; color:var(--color-cyan);">JAV</span>` : ""));
    set("homeXpText", `<strong>${u.xp || 0}</strong> XP`);
    const faltan = Math.max(0, reqXp - (u.xp || 0));
    set("homeXpNeeded", faltan > 0 ? `faltan <strong class="color-cyan">${faltan} XP</strong> para ${nextName}` : `nivel <strong class="color-cyan">completado</strong>`);
    const fill = document.getElementById("homeProgressFill");
    if (fill) fill.style.width = Math.min(100, Math.round(((u.xp || 0) / reqXp) * 100)) + "%";
    set("homeStreakVal", u.streak || 0);
    set("homeCleanVal", u.cleanDays || 0);
}

// Tags de rol del usuario: Padrino/Oreja/Servidor y variantes JAV.
// Un miembro puede acumular tags (ej. Padrino + Padrino JAV + Servidor).
function getRoleTags(u) {
    const tags = [];
    const exp = (u.experienciaNivel || u.roleClass || "").toUpperCase();
    if (exp.includes("PADRINO")) tags.push({ label: "Padrino", cls: "tag-padrino", icon: "fa-hands-praying" });
    if (exp.includes("OREJA")) tags.push({ label: "Oreja", cls: "tag-oreja", icon: "fa-ear-listen" });
    if (u.isPadrinoJav || /PADRINO JAV/.test((u.roleClass || "").toUpperCase())) tags.push({ label: "Padrino JAV", cls: "tag-jav", icon: "fa-hands-praying" });
    if (u.isOrejaJav || /OREJA JAV/.test((u.roleClass || "").toUpperCase())) tags.push({ label: "Oreja JAV", cls: "tag-jav", icon: "fa-ear-listen" });
    if (u.serverRole && u.serverRole !== "Ninguno") {
        const isJavService = /JAV/i.test(u.serverRole);
        tags.push({ label: (isJavService ? "Servidor JAV: " : "Servidor: ") + u.serverRole, cls: isJavService ? "tag-jav" : "tag-servidor", icon: "fa-briefcase" });
    }
    if (!tags.length && u.isJav) tags.push({ label: "JAV", cls: "tag-jav", icon: "fa-rocket" });
    return tags;
}

function roleTagsHtml(u) {
    return getRoleTags(u).map(t =>
        `<span class="role-tag ${t.cls}"><i class="fa-solid ${t.icon}"></i> ${t.label}</span>`
    ).join("");
}

// Pinta los tags en Inicio, Logros y Ajustes
function renderRoleTags() {
    if (!state.user) return;
    const html = roleTagsHtml(state.user);
    const home = document.getElementById("homeRoleTags");
    if (home) {
        home.innerHTML = html;
        home.style.display = html ? "flex" : "none";
    }
    const logros = document.getElementById("logrosRoleTags");
    if (logros) logros.innerHTML = html;
    const settings = document.getElementById("settingsRoleTags");
    if (settings) settings.innerHTML = html || `<span class="progress-empty">Sin cargos ni clasificación especial</span>`;
}

function renderHomeNextEvent() {
    const card = document.getElementById("homeNextEvent");
    if (!card) return;
    const today = new Date();
    const todayISO = today.toISOString().split("T")[0];
    const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");

    const upcoming = (state.meetings || [])
        .filter(m => m.date && m.date >= todayISO)
        .sort((a, b) => a.date.localeCompare(b.date));
    const next = upcoming.find(m => !m.isHacienda);
    const interregionales = upcoming.filter(m => m.calendar === "ANNUAL" && !m.isHacienda).slice(0, 2);

    // Próxima hacienda de MI región (o interregional JAV) con CTA de confirmación
    const myRegion = state.user ? state.user.region : "";
    const nextHacienda = upcoming.find(m => m.isHacienda && (m.region === myRegion || m.type === "HAC_JAV"));
    const hacFallback = db.activeHacienda;
    let hacBanner = "";
    const hacStart = nextHacienda ? (nextHacienda.startDate || nextHacienda.date) : (hacFallback && hacFallback.startDate);
    const hacName = nextHacienda ? nextHacienda.title : (hacFallback && hacFallback.name);
    if (hacStart) {
        const days = Math.ceil((new Date(hacStart + "T00:00:00") - today) / 86400000);
        if (days >= 0 && days <= 30) {
            const declared = state.user && state.user.attendingHacienda !== undefined && state.user.attendingHacienda !== null;
            hacBanner = `
                <div class="next-ev-hac">
                    <div><i class="fa-solid fa-campground"></i> <strong>${hacName}</strong> · en ${days} día(s)</div>
                    <button type="button" class="hac-cta-btn" id="hacConfirmCta">${declared ? "Revisar mi declaración" : "¡Confirma tu asistencia!"}</button>
                </div>`;
        }
    }

    if (!next && !hacBanner && !interregionales.length) { card.style.display = "none"; return; }
    card.style.display = "block";

    let html = "";
    if (next) {
        const p = dateParts(next.date);
        const days = Math.ceil((new Date(next.date + "T00:00:00") - today) / 86400000);
        const cuenta = days <= 0 ? "Hoy" : days === 1 ? "Mañana" : `En ${days} días`;
        const fecha = p.valid ? `${p.weekday} ${p.day} de ${MONTHS_ES[p.monthIdx]}` : "";
        const lugar = next.locationGroup ? `Grupo ${next.locationGroup}` : ((next.info || "").split("·")[0].trim() || "Por definir");
        const alcance = next.calendar === "REGIONAL" ? "Regional" : next.calendar === "ANNUAL" ? "Interregional" : "De grupo";
        html += `
            <div class="next-ev-head"><span class="next-ev-label">PRÓXIMA JUNTA · ${alcance.toUpperCase()}</span><span class="next-ev-count">${cuenta}</span></div>
            <h3 class="next-ev-title font-serif">${next.title}</h3>
            <div class="next-ev-details">
                ${next.topic && next.topic !== next.title ? `<span><i class="fa-solid fa-comment-dots"></i> Tema: <strong>${next.topic}</strong></span>` : ""}
                ${next.speaker && next.speaker !== "—" ? `<span><i class="fa-solid fa-microphone"></i> Ponente: <strong>${next.speaker}</strong></span>` : ""}
                <span><i class="fa-solid fa-location-dot"></i> ${lugar}</span>
                <span><i class="fa-regular fa-clock"></i> ${fecha}${next.startTime ? " · " + next.startTime : ""}</span>
            </div>`;
    }
    if (interregionales.length) {
        html += `<div class="next-ev-inter"><span class="next-ev-label">PRÓXIMOS INTERREGIONALES</span>` +
            interregionales.map(m => {
                const p = dateParts(m.date);
                return `<div class="inter-item"><i class="fa-solid fa-globe"></i> ${m.title} · ${p.valid ? p.day + " " + MONTHS_ES[p.monthIdx].slice(0, 3) : ""}</div>`;
            }).join("") + `</div>`;
    }
    html += hacBanner;
    card.innerHTML = html;

    // CTA: lleva directo a la sección Haciendas para declarar el POA
    const cta = document.getElementById("hacConfirmCta");
    if (cta) cta.addEventListener("click", () => {
        const navBtn = document.querySelector('.nav-item[data-target="sec-haciendas"]');
        if (navBtn) navBtn.dispatchEvent(new Event("click", { bubbles: true }));
    });
}

// Listas canónicas desde el catálogo compartido (una sola fuente de verdad)
const AV_SCRIPTURES = (typeof AV !== "undefined" && AV.Enums)
    ? AV.Enums.escrituras.normales.concat(AV.Enums.escrituras.servidores)
    : ["1er Inventario", "10mo de primera", "2do Inventario", "10mo de segunda", "3er Inventario", "10mo de tercera", "Pre-cuarta", "4to Inventario", "1ra de servidores", "2da de servidores", "3ra de servidores"];
const AV_EXERCISES = (typeof AV !== "undefined" && AV.Enums)
    ? AV.Enums.ejercicios
    : ["Trinity", "Libertad bajo dios", "Duelo", "Desierto", "Niño"];

// Llena selects y checkboxes que dependen del catálogo (registro y ajustes)
function populateEnumControls() {
    const estigmaSel = document.getElementById("regEstigma");
    if (estigmaSel && estigmaSel.options.length <= 1 && typeof AV !== "undefined") {
        AV.Enums.estigmas.forEach(e => {
            const o = document.createElement("option");
            o.value = e; o.textContent = e;
            estigmaSel.appendChild(o);
        });
    }
    const checkboxList = (id) => {
        const box = document.getElementById(id);
        if (!box || box.querySelector("input")) return;
        const items = id.includes("Exercises") ? AV_EXERCISES : AV_SCRIPTURES;
        box.innerHTML = items.map(it =>
            `<label style="font-weight: normal; display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;"><input type="checkbox" value="${it}"> ${it}</label>`
        ).join("");
    };
    ["regScripturesList", "regExercisesList", "settingsScripturesList", "settingsExercisesList"].forEach(checkboxList);
}

function renderPadrinoProgress() {
    const card = document.getElementById("padrinoProgressCard");
    if (!card || !state.user) return;
    const rc = (state.user.roleClass || "").toLowerCase();
    if (rc !== "padrino" && rc !== "oreja") { card.style.display = "none"; return; }

    const scriptures = state.user.scriptures || [];
    const exercises = state.user.exercises || [];
    const roleLabel = rc === "padrino" ? "Padrino" : "Oreja";
    const chip = (txt) => `<span class="progress-chip on">✓ ${txt}</span>`;

    // Muestra directamente lo registrado (los datos mezclan grafías)
    const scripturesHtml = scriptures.map(chip).join("")
        || `<span class="progress-empty">Aún sin inventarios registrados</span>`;
    const exercisesHtml = exercises.map(chip).join("")
        || `<span class="progress-empty">Aún sin ejercicios registrados</span>`;

    card.style.display = "block";
    card.innerHTML = `
        <div class="progress-padrino-header">
            <span class="progress-padrino-badge"><i class="fa-solid fa-hands-praying"></i> ${roleLabel}</span>
            <h3 class="font-serif">Mi Avance</h3>
        </div>
        <div class="progress-padrino-meta">
            <div><span class="ppm-label">Sobriedad</span><span class="ppm-val">${state.user.sobrietyDate || 'N/D'}</span></div>
            <div><span class="ppm-label">En grupo desde</span><span class="ppm-val">${state.user.joinDate || 'N/D'}</span></div>
            <div><span class="ppm-label">Grupo</span><span class="ppm-val">${state.user.group || '—'}</span></div>
        </div>
        <div class="progress-padrino-section">
            <span class="pps-title"><i class="fa-solid fa-book"></i> Inventarios (${scriptures.length}/${AV_SCRIPTURES.length})</span>
            <div class="progress-chips">${scripturesHtml}</div>
        </div>
        <div class="progress-padrino-section">
            <span class="pps-title"><i class="fa-solid fa-dumbbell"></i> Ejercicios (${exercises.length}/${AV_EXERCISES.length})</span>
            <div class="progress-chips">${exercisesHtml}</div>
        </div>`;
}

function saveState() {
    let db = {};
    const saved = localStorage.getItem("agua_viva_db");
    if (saved) {
        db = JSON.parse(saved);
    } else {
        db = {
            currentSimulatedRole: "admin",
            user: { name: "Mariana C.", role: "Coordinadora", sede: "Sede Centro" },
            members: [],
            pendingAdminRequests: [],
            pendingRoleRequests: [],
            activeCoordinators: [],
            notes: {},
            history: {},
            weeklyAttendance: {}
        };
    }
    
    // La lista base sale del estado en memoria; después se aplican los datos
    // frescos del usuario con sesión (el orden importa: al revés se pierden).
    if (Array.isArray(state.members) && state.members.length) db.members = state.members;

    // Actualiza los datos del usuario con sesión en la lista de miembros
    const userIndex = db.members.findIndex(m => m.email === state.user.email);
    if (userIndex !== -1) {
        db.members[userIndex].xp = state.user.xp;
        db.members[userIndex].levelNum = state.user.level;
        db.members[userIndex].cleanDays = state.user.cleanDays;
        db.members[userIndex].racha = state.user.streak;
        db.members[userIndex].isJav = state.user.isJav;
        db.members[userIndex].roleClass = state.user.roleClass;
        db.members[userIndex].serverRole = state.user.serverRole;
        db.members[userIndex].attendingHacienda = state.user.attendingHacienda;
        db.members[userIndex].arrivalShift = state.user.arrivalShift;
        db.members[userIndex].transportStatus = state.user.transportStatus;
        db.members[userIndex].transportCapacity = state.user.transportCapacity;
        db.members[userIndex].avatarColor = state.user.avatarColor;
        db.members[userIndex].avatarIcon = state.user.avatarIcon;
        db.members[userIndex].avatarPhoto = state.user.avatarPhoto || null;
        if (state.user.phone) db.members[userIndex].phone = state.user.phone;
        db.members[userIndex].name = state.user.name;
        db.members[userIndex].sobrietyDate = state.user.sobrietyDate;
        db.members[userIndex].joinDate = state.user.joinDate;
        db.members[userIndex].scriptures = state.user.scriptures;
        db.members[userIndex].exercises = state.user.exercises;
        if (state.user.poa) db.members[userIndex].poa = state.user.poa;
        if (state.user.emergency) db.members[userIndex].emergency = state.user.emergency;
    } else {
        const coordIndex = db.activeCoordinators.findIndex(c => c.email === state.user.email);
        if (coordIndex !== -1) {
            db.activeCoordinators[coordIndex].name = state.user.name;
            db.activeCoordinators[coordIndex].avatarColor = state.user.avatarColor;
            db.activeCoordinators[coordIndex].avatarIcon = state.user.avatarIcon;
            db.activeCoordinators[coordIndex].avatarPhoto = state.user.avatarPhoto || null;
            if (state.user.phone) db.activeCoordinators[coordIndex].phone = state.user.phone;
            db.activeCoordinators[coordIndex].attendingHacienda = state.user.attendingHacienda;
            db.activeCoordinators[coordIndex].arrivalShift = state.user.arrivalShift;
            db.activeCoordinators[coordIndex].transportStatus = state.user.transportStatus;
            db.activeCoordinators[coordIndex].transportCapacity = state.user.transportCapacity;
            if (state.user.poa) db.activeCoordinators[coordIndex].poa = state.user.poa;
            if (state.user.emergency) db.activeCoordinators[coordIndex].emergency = state.user.emergency;
        }
    }
    
    db.escribientes = state.escribientes;
    db.groupsSemaphore = state.groupsSemaphore;
    db.changelog = state.changelog;
    db.events = state.events;
    db.pendingRoleRequests = state.pendingRoleRequests;
    db.pendingAdminRequests = state.pendingAdminRequests;

    if (!db.notifications) db.notifications = {};
    if (state.user && state.user.email) {
        db.notifications[state.user.email] = state.notifications;
    }
    
    localStorage.setItem("agua_viva_db", JSON.stringify(db));
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    populateEnumControls();
    wireHistorialFilters();

    // Vista de ajustes y actualización de perfil
    const settingsForm = document.getElementById("settingsProfileForm");
    const settingsAlias = document.getElementById("settingsAlias");
    const settingsAvatarIcon = document.getElementById("settingsAvatarIcon");
    const settingsAvatarPreview = document.getElementById("settingsAvatarPreview");
    const settingsLogoutBtn = document.getElementById("settingsLogoutBtn");
    
    let chosenColor = state.user.avatarColor || "#be185d";
    let pendingPhoto = state.user.avatarPhoto || null;
    
    window.initSettingsView = function() {
        if (!settingsForm) return;
        settingsAlias.value = state.user.name;
        settingsAvatarIcon.value = state.user.avatarIcon || "initial";
        chosenColor = state.user.avatarColor || "#be185d";
        pendingPhoto = state.user.avatarPhoto || null;
        const phoneEl = document.getElementById("settingsPhone");
        const emerEl = document.getElementById("settingsEmergency");
        if (phoneEl) phoneEl.value = state.user.phone || "";
        if (emerEl) emerEl.value = state.user.emergency || "";
        const removeBtn = document.getElementById("settingsPhotoRemove");
        if (removeBtn) removeBtn.style.display = pendingPhoto ? "inline-flex" : "none";
        
        updatePreview();
        
        const colorBtns = settingsForm.querySelectorAll(".color-btn");
        colorBtns.forEach(btn => {
            if (btn.dataset.color.toLowerCase() === chosenColor.toLowerCase()) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        const isPadrinoOrOreja = state.user.roleClass === "Padrino" || state.user.roleClass === "Oreja";
        const settingsPadrinoFields = document.getElementById("settingsPadrinoFields");
        if (settingsPadrinoFields) {
            settingsPadrinoFields.style.display = isPadrinoOrOreja ? "block" : "none";
            
            if (isPadrinoOrOreja) {
                document.getElementById("settingsSobrietyDate").value = state.user.sobrietyDate || "";
                document.getElementById("settingsJoinDate").value = state.user.joinDate || "";
                
                const scriptures = state.user.scriptures || [];
                const scriptureChecks = document.querySelectorAll("#settingsScripturesList input[type='checkbox']");
                scriptureChecks.forEach(cb => {
                    cb.checked = scriptures.includes(cb.value);
                });
                
                const exercises = state.user.exercises || [];
                const exerciseChecks = document.querySelectorAll("#settingsExercisesList input[type='checkbox']");
                exerciseChecks.forEach(cb => {
                    cb.checked = exercises.includes(cb.value);
                });
            }
        }
    }

    function updatePreview() {
        if (!settingsAvatarPreview) return;
        if (pendingPhoto) {
            settingsAvatarPreview.style.background = "transparent";
            settingsAvatarPreview.innerHTML = '<img src="' + pendingPhoto + '" alt="foto" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">';
            return;
        }
        settingsAvatarPreview.style.background = chosenColor;
        const iconVal = settingsAvatarIcon.value;
        if (iconVal !== "initial") {
            settingsAvatarPreview.innerHTML = `<i class="fa-solid ${iconVal}"></i>`;
        } else {
            const aliasVal = settingsAlias.value.trim();
            const initChar = aliasVal ? aliasVal.substring(0, 1).toUpperCase() : "Á";
            settingsAvatarPreview.innerHTML = `<span style="font-weight:700;">${initChar}</span>`;
        }
    }

    // Foto de perfil: se redimensiona a 128px en canvas para caber en localStorage
    const photoInput = document.getElementById("settingsPhotoInput");
    if (photoInput) {
        photoInput.addEventListener("change", (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const SIZE = 128;
                    const canvas = document.createElement("canvas");
                    canvas.width = SIZE; canvas.height = SIZE;
                    const cx = canvas.getContext("2d");
                    const side = Math.min(img.width, img.height);
                    cx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, SIZE, SIZE);
                    pendingPhoto = canvas.toDataURL("image/jpeg", 0.82);
                    const removeBtn = document.getElementById("settingsPhotoRemove");
                    if (removeBtn) removeBtn.style.display = "inline-flex";
                    updatePreview();
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        });
    }
    const photoRemove = document.getElementById("settingsPhotoRemove");
    if (photoRemove) {
        photoRemove.addEventListener("click", () => {
            pendingPhoto = null;
            photoRemove.style.display = "none";
            updatePreview();
        });
    }

    if (settingsAlias) {
        settingsAlias.addEventListener("input", updatePreview);
    }
    if (settingsAvatarIcon) {
        settingsAvatarIcon.addEventListener("change", updatePreview);
    }

    if (settingsForm) {
        const colorBtns = settingsForm.querySelectorAll(".color-btn");
        colorBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                colorBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                chosenColor = btn.dataset.color;
                updatePreview();
            });
        });
        
        settingsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const aliasVal = settingsAlias.value.trim();
            if (!aliasVal) {
                showToast("El nombre no puede estar vacío.", "error");
                return;
            }
            
            state.user.name = aliasVal;
            state.user.initial = aliasVal.substring(0, 1).toUpperCase();
            state.user.avatarColor = chosenColor;
            state.user.avatarIcon = settingsAvatarIcon.value;
            state.user.avatarPhoto = pendingPhoto || null;
            const phoneVal = document.getElementById("settingsPhone");
            const emerVal = document.getElementById("settingsEmergency");
            if (phoneVal && phoneVal.value.trim()) state.user.phone = phoneVal.value.trim();
            if (emerVal && emerVal.value.trim()) state.user.emergency = emerVal.value.trim();
            
            if (state.user.roleClass === "Padrino" || state.user.roleClass === "Oreja") {
                state.user.sobrietyDate = document.getElementById("settingsSobrietyDate").value || "";
                state.user.joinDate = document.getElementById("settingsJoinDate").value || "";
                
                const chosenScriptures = [];
                const scriptureChecks = document.querySelectorAll("#settingsScripturesList input[type='checkbox']:checked");
                scriptureChecks.forEach(cb => chosenScriptures.push(cb.value));
                state.user.scriptures = chosenScriptures;

                const chosenExercises = [];
                const exerciseChecks = document.querySelectorAll("#settingsExercisesList input[type='checkbox']:checked");
                exerciseChecks.forEach(cb => chosenExercises.push(cb.value));
                state.user.exercises = chosenExercises;
            }
            
            saveState();
            loadState();
            showToast("Perfil actualizado correctamente.", "success");
            
            navItems.forEach(n => n.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));
            document.querySelector('[data-target="sec-inicio"]').classList.add("active");
            document.getElementById("sec-inicio").classList.add("active");
        });
    }

    if (settingsLogoutBtn) {
        settingsLogoutBtn.addEventListener("click", () => {
            localStorage.removeItem("agua_viva_active_user_email");
            showToast("Sesión cerrada.", "info");
            document.getElementById("authOverlay").classList.remove("hidden");
            loadState();
        });
    }

    const openSettings = () => {
        navItems.forEach(n => n.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));
        const settingsSection = document.getElementById("sec-settings");
        if (settingsSection) settingsSection.classList.add("active");
        window.initSettingsView();
        renderRoleTags();
    };
    const avatarBtn = document.getElementById("avatarBtn");
    if (avatarBtn) avatarBtn.addEventListener("click", openSettings);
    const settingsGearBtn = document.getElementById("settingsGearBtn");
    if (settingsGearBtn) settingsGearBtn.addEventListener("click", openSettings);

    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".app-section");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const target = item.dataset.target;
            
            navItems.forEach(n => n.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            item.classList.add("active");
            document.getElementById(target).classList.add("active");

            // Maneja inicializaciones especiales de página
            if (target === 'sec-scanner') {
                runQRScannerSimulation();
            } else if (target === 'sec-servicio') {
                initServicioSection();
            } else if (target === 'sec-settings') {
                window.initSettingsView();
            }
        });
    });

    document.getElementById("bannerScanBtn").addEventListener("click", () => {
        navItems.forEach(n => n.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        document.querySelector('[data-target="sec-scanner"]').classList.add("active");
        document.getElementById("sec-scanner").classList.add("active");
        runQRScannerSimulation();
    });

    // 3. Interruptor del tema cósmico JAV
    const javToggleBtn = document.getElementById("javToggleBtn");
    
    // Tema inicial según el estado cargado
    if (state.user.isJav) {
        document.body.classList.add("jav-theme");
        javToggleBtn.innerHTML = `<i class="fa-solid fa-user-astronaut"></i> <span class="hide-mobile">Modo General</span>`;
    }
    updateLogoImages();

    javToggleBtn.addEventListener("click", () => {
        state.user.isJav = !state.user.isJav;
        saveState();
        updateLogoImages();
        
        if (state.user.isJav) {
            document.body.classList.add("jav-theme");
            javToggleBtn.innerHTML = `<i class="fa-solid fa-user-astronaut"></i> <span class="hide-mobile">Modo General</span>`;
            showToast("Sección JAV Activada. Tema y eventos adaptados.", "info");
        } else {
            document.body.classList.remove("jav-theme");
            javToggleBtn.innerHTML = `<i class="fa-solid fa-rocket"></i> <span class="hide-mobile">Modo JAV</span>`;
            showToast("Volviendo al diseño estándar.", "info");
        }
        
        renderMeetings();
    });

    // 4. Interacciones del formulario de transporte
    const transportStatusSelect = document.getElementById("transportStatus");
    const capacityGroup = document.getElementById("capacityGroup");

    transportStatusSelect.addEventListener("change", (e) => {
        if (e.target.value === "PROVIDES_TRANSPORT") {
            capacityGroup.style.display = "flex";
        } else {
            capacityGroup.style.display = "none";
        }
    });

    // Attendance Toggle Sí/No Buttons
    const toggleButtons = document.querySelectorAll("#attendanceToggleGroup .btn-toggle");
    toggleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            toggleButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.user.attendingHacienda = (btn.dataset.val === "true");
        });
    });

    // Botón de guardar logística
    document.getElementById("saveLogisticsBtn").addEventListener("click", () => {
        state.user.arrivalShift = document.getElementById("arrivalShift").value;
        state.user.transportStatus = transportStatusSelect.value;
        state.user.transportCapacity = parseInt(document.getElementById("transportCapacity").value) || 0;

        // Declaración POA completa: emergencia, alergias y observaciones
        const emEl = document.getElementById("poaEmergency");
        const alEl = document.getElementById("poaAllergies");
        const obEl = document.getElementById("poaNotes");
        state.user.poa = {
            attending: state.user.attendingHacienda,
            arrivalShift: state.user.arrivalShift,
            transportStatus: state.user.transportStatus,
            transportCapacity: state.user.transportCapacity,
            emergencyContact: emEl ? emEl.value.trim() : "",
            allergies: alEl ? alEl.value.trim() : "",
            observations: obEl ? obEl.value.trim() : "",
            updatedAt: new Date().toISOString()
        };
        if (state.user.poa.emergencyContact) state.user.emergency = state.user.poa.emergencyContact;

        // Registra la acción en la bitácora de auditoría
        const logEntry = {
            action: "LOGISTICA_PROPIA",
            details: `${state.user.name} declaró: ${state.user.attendingHacienda ? 'Asiste' : 'No Asiste'} · Turno: ${state.user.arrivalShift} · Transp: ${state.user.transportStatus}`,
            user: `${state.user.name} (Tú)`,
            time: getFormattedTime()
        };
        state.changelog.unshift(logEntry);
        
        // Recalcula las estadísticas según los cambios de simulación
        saveState();
        updatePoaStats();
        renderChangeLog();
        showToast("¡Declaración de logística guardada con éxito!", "success");
    });

    // 5. Manejadores del administrador de escribientes
    const addEscribienteModal = document.getElementById("addEscribienteModal");
    const openAddModalBtn = document.getElementById("openAddEscribienteModal");
    const closeAddModalBtn = document.getElementById("closeAddEscribienteModal");
    const addForm = document.getElementById("addEscribienteForm");
    
    const groupSelect = document.getElementById("escGroup");
    state.groupsSemaphore.forEach(grp => {
        const opt = document.createElement("option");
        opt.value = grp.name;
        opt.textContent = grp.name;
        groupSelect.appendChild(opt);
    });

    // Selector de hacienda
    const haciendaSelect = document.getElementById("haciendaSelect");
    if (haciendaSelect) {
        haciendaSelect.addEventListener("change", updateHaciendaSectionDetails);
        updateHaciendaSectionDetails();
    }

    openAddModalBtn.addEventListener("click", () => {
        addEscribienteModal.classList.add("active");
    });

    closeAddModalBtn.addEventListener("click", () => {
        addEscribienteModal.classList.remove("active");
    });

    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("escName").value;
        const initial = document.getElementById("escLastInitial").value.toUpperCase();
        const gender = document.getElementById("escGender").value;
        const group = groupSelect.value;

        const newEsc = {
            id: "e" + (state.escribientes.length + 1),
            firstName: name,
            lastNameInitial: initial,
            gender: gender,
            group: group
        };

        state.escribientes.push(newEsc);
        
        // Crea el registro de auditoría
        state.changelog.unshift({
            action: "REGISTRO_ESCRIBIENTE",
            details: `Añadió escribiente ${name} ${initial}. al grupo ${group}`,
            user: "Atracciones Diego V.",
            time: getFormattedTime()
        });

        const grpSem = state.groupsSemaphore.find(g => g.name === group);
        if (grpSem && grpSem.status === "RED") {
            grpSem.status = "YELLOW";
            grpSem.updatedBy = "Atracciones Diego V.";
            grpSem.time = "Hace 1 seg";
        }

        saveState();
        renderEscribientes();
        renderSemaphores();
        renderChangeLog();
        updatePoaStats();

        addEscribienteModal.classList.remove("active");
        addForm.reset();
        showToast(`Escribiente ${name} ${initial}. registrado correctamente.`, "success");
    });

    document.getElementById("searchEscribienteInput").addEventListener("input", (e) => {
        renderEscribientes(e.target.value);
    });

    const closeMeetingDetailsModalBtn = document.getElementById("closeMeetingDetailsModal");
    const meetingDetailsModal = document.getElementById("meetingDetailsModal");
    if (closeMeetingDetailsModalBtn && meetingDetailsModal) {
        closeMeetingDetailsModalBtn.addEventListener("click", () => {
            meetingDetailsModal.classList.remove("active");
        });
    }

    // 6. Manejadores de filtrado de miembros

    const switchToRegisterBtn = document.getElementById("switchToRegisterBtn");
    const switchToLoginBtn = document.getElementById("switchToLoginBtn");
    const authLoginView = document.getElementById("authLoginView");
    const authRegisterView = document.getElementById("authRegisterView");
    const authLoginForm = document.getElementById("authLoginForm");
    const authRegisterForm = document.getElementById("authRegisterForm");
    const regRegion = document.getElementById("regRegion");
    const regGroup = document.getElementById("regGroup");
    const regDob = document.getElementById("regDob");
    const regJavServerGroup = document.getElementById("regJavServerGroup");
    const regIsLeaderRequest = document.getElementById("regIsLeaderRequest");
    const leaderTypeGroup = document.getElementById("leaderTypeGroup");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginGuestBtn = document.getElementById("loginGuestBtn");

    if (switchToRegisterBtn) {
        switchToRegisterBtn.addEventListener("click", () => {
            authLoginView.style.display = "none";
            authRegisterView.style.display = "block";
        });
    }

    if (switchToLoginBtn) {
        switchToLoginBtn.addEventListener("click", () => {
            authRegisterView.style.display = "none";
            authLoginView.style.display = "block";
        });
    }

    // Menú de grupos dinámico según la región elegida en el registro
    if (regRegion) {
        regRegion.addEventListener("change", (e) => {
            const selectedRegion = e.target.value;
            regGroup.innerHTML = "";
            
            if (selectedRegion && groupsByRegion[selectedRegion]) {
                regGroup.disabled = false;
                const groups = groupsByRegion[selectedRegion];
                
                const placeholder = document.createElement("option");
                placeholder.value = "";
                placeholder.textContent = "Selecciona Grupo";
                regGroup.appendChild(placeholder);

                groups.forEach(g => {
                    const opt = document.createElement("option");
                    opt.value = g;
                    opt.textContent = g;
                    regGroup.appendChild(opt);
                });
            } else {
                regGroup.disabled = true;
                const opt = document.createElement("option");
                opt.value = "";
                opt.textContent = "Primero selecciona una región";
                regGroup.appendChild(opt);
            }
        });
    }

    if (regDob) {
        regDob.addEventListener("change", (e) => {
            const birthDate = new Date(e.target.value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            // Si la edad está entre 13 y 18, muestra los cargos de servidor JAV
            // y oculta el select de cargos de adulto (uno u otro, nunca ambos)
            const regServerGroupBox = document.getElementById("regServerGroup");
            if (age >= 13 && age <= 18) {
                regJavServerGroup.style.display = "block";
                if (regServerGroupBox) regServerGroupBox.style.display = "none";
            } else {
                regJavServerGroup.style.display = "none";
                if (regServerGroupBox) regServerGroupBox.style.display = "block";
            }
        });
    }

    // Muestra/oculta campos de Padrino/Oreja según rol de registro
    const regRoleClass = document.getElementById("regRoleClass");
    const padrinoRegisterFields = document.getElementById("padrinoRegisterFields");
    if (regRoleClass && padrinoRegisterFields) {
        regRoleClass.addEventListener("change", (e) => {
            const val = e.target.value;
            if (val === "Padrino" || val === "Oreja") {
                padrinoRegisterFields.style.display = "block";
            } else {
                padrinoRegisterFields.style.display = "none";
            }
        });
    }

    // Muestra/oculta los datos de coordinador al solicitar rol admin
    if (regIsLeaderRequest) {
        regIsLeaderRequest.addEventListener("click", (e) => {
            if (e.target.checked) {
                leaderTypeGroup.style.display = "block";
            } else {
                leaderTypeGroup.style.display = "none";
            }
        });
    }

    // Maneja el envío del login
    if (authLoginForm) {
        authLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;
            
            const saved = localStorage.getItem("agua_viva_db");
            const db = saved ? JSON.parse(saved) : null;
            if (!db) return;

            // Busca en los miembros
            // Acepta la contraseña del miembro o la contraseña demo "123" cuando el
            // registro fue sembrado sin contraseña (semilla del panel admin)
            let user = db.members.find(m => m.email === email && (m.password === password || (!m.password && password === "123")));
            
            if (!user) {
                // Busca en los coordinadores activos
                user = db.activeCoordinators.find(c => c.email === email && password === "123");
            }

            if (user) {
                localStorage.setItem("agua_viva_active_user_email", email);
                showToast(`¡Bienvenido de vuelta, ${user.name}!`, "success");
                
                // Recarga el estado y refresca la vista
                loadState();
                
                // Actualización de tema
                if (state.user.isJav) {
                    document.body.classList.add("jav-theme");
                } else {
                    document.body.classList.remove("jav-theme");
                }
                
                // Oculta el overlay de autenticación
                document.getElementById("authOverlay").classList.add("hidden");
                
                // Vuelve a renderizar
                renderMeetings();
                renderTimeline();
                renderSemaphores();
                renderEscribientes();
                renderChangeLog();
                updatePoaStats();

            } else {
                showToast("Correo o contraseña incorrectos.", "error");
            }
        });
    }

    // Maneja el envío del registro
    if (authRegisterForm) {
        authRegisterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("regEmail").value.trim().toLowerCase();
            const password = document.getElementById("regPassword").value;
            const name = document.getElementById("regName").value.trim();
            const lastInitial = document.getElementById("regLastInitial").value.trim().toUpperCase();
            const dobVal = document.getElementById("regDob").value;
            const region = document.getElementById("regRegion").value;
            const group = document.getElementById("regGroup").value;
            const roleClass = document.getElementById("regRoleClass").value;
            const isLeaderRequest = document.getElementById("regIsLeaderRequest").checked;
            const leaderRoleType = document.getElementById("regLeaderRoleType").value;

            // Verifica si el correo ya está registrado
            const saved = localStorage.getItem("agua_viva_db");
            const db = saved ? JSON.parse(saved) : { members: [], pendingAdminRequests: [], pendingRoleRequests: [] };

            if (db.members.some(m => m.email === email) || db.activeCoordinators.some(c => c.email === email)) {
                showToast("Este correo ya está registrado.", "error");
                return;
            }

            const birthDate = new Date(dobVal);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            const isJav = (age >= 13 && age <= 18);

            // Determina el cargo de servidor
            let serverRole = "Ninguno";
            if (isJav) {
                serverRole = document.getElementById("regJavServerRole").value;
            } else {
                serverRole = document.getElementById("regServerRole").value;
            }

            // Padrino / Oreja detailed fields extraction
            let sobrietyDate = "";
            let joinDate = "Hoy";
            let scriptures = [];
            let exercises = [];

            if (roleClass === "Padrino" || roleClass === "Oreja") {
                sobrietyDate = document.getElementById("regSobrietyDate").value || dobVal;
                joinDate = document.getElementById("regJoinDate").value || "Hoy";
                
                const scriptureChecks = document.querySelectorAll("#regScripturesList input[type='checkbox']:checked");
                scriptureChecks.forEach(cb => scriptures.push(cb.value));

                const exerciseChecks = document.querySelectorAll("#regExercisesList input[type='checkbox']:checked");
                exerciseChecks.forEach(cb => exercises.push(cb.value));
            } else {
                sobrietyDate = dobVal;
            }

            const estigmaSel = document.getElementById("regEstigma");
            const rcUpper = (roleClass || "").toUpperCase();
            const newMember = {
                id: "m" + Date.now(),
                name: `${name} ${lastInitial}.`,
                email: email,
                password: password,
                phone: "55-1234-5678", // marcador de posición
                sobrietyDate: sobrietyDate,
                realName: name + " " + lastInitial + ".",
                age: age,
                emergency: "Familiar 555-0000",
                joinDate: joinDate,
                scriptures: scriptures,
                exercises: exercises,
                level: isJav ? "Chispa JAV Nv 1" : "Chispa Nv 1",
                levelNum: 1,
                xp: 0,
                racha: 0,
                cleanDays: 1,
                lastAttendance: "Nunca",
                status: "New",
                avatarColor: isJav ? "#6d28d9" : "#0369a1",
                checkedIn: false,
                checkInTime: "—",
                xpGranted: 0,
                isJav: isJav,
                region: region,
                group: group,
                roleClass: roleClass,
                serverRole: serverRole,
                estigma: estigmaSel ? (estigmaSel.value || "OTROS") : "OTROS",
                militanciaStatus: "CONCIENCIA",
                experienciaNivel: rcUpper.includes("PADRINO") ? "PADRINO" : rcUpper.includes("OREJA") ? "OREJA" : "APOYO",
                approvalStatus: isLeaderRequest ? "PENDING" : "APPROVED",
                isNew: true
            };

            // Cambia el semáforo del grupo a ROJO para indicar revisión necesaria.
            // Se limpia el override manual para que el cálculo automático mande.
            if (db.groupsSemaphore) {
                const grpSem = db.groupsSemaphore.find(g => g.name === group);
                if (grpSem) {
                    grpSem.status = "RED";
                    grpSem.manual = false;
                    grpSem.updatedBy = "Sistema";
                    grpSem.time = "Miembro nuevo detectado";
                }
            }

            if (isLeaderRequest) {
                db.pendingAdminRequests.push({
                    id: "pr" + (db.pendingAdminRequests.length + 1),
                    name: `${name} ${lastInitial}.`,
                    email: email,
                    avatarColor: isJav ? "#6d28d9" : "#0F172A",
                    requestedRole: leaderRoleType,
                    group: group
                });
                showToast("Solicitud de Coordinador registrada. Requiere aprobación del Superadmin.", "info");
            }

            if (roleClass === "Oreja" || roleClass === "Padrino" || serverRole !== "Ninguno") {
                db.pendingRoleRequests.push({
                    id: "rr" + (db.pendingRoleRequests.length + 1),
                    name: `${name} ${lastInitial}.`,
                    email: email,
                    requestedRole: roleClass,
                    requestedServer: serverRole,
                    group: group,
                    status: "PENDING"
                });
                newMember.roleClass = "Apoyo"; // Se fija como Apoyo hasta su aprobación
                if (serverRole !== "Ninguno") {
                    newMember.serverRole = "Ninguno"; // Se fija como Ninguno hasta su aprobación
                }
                showToast("La clasificación/cargo solicita aprobación de un Admin/Superadmin.", "info");
            }

            db.members.push(newMember);
            localStorage.setItem("agua_viva_db", JSON.stringify(db));

            // Inicia sesión automáticamente
            localStorage.setItem("agua_viva_active_user_email", email);
            showToast("Cuenta creada. Sesión iniciada.", "success");

            // Recarga el estado
            loadState();

            // Actualización de tema
            if (state.user.isJav) {
                document.body.classList.add("jav-theme");
            } else {
                document.body.classList.remove("jav-theme");
            }

            // Oculta el overlay de autenticación
            document.getElementById("authOverlay").classList.add("hidden");

            // Vuelve a renderizar
            renderMeetings();
            renderTimeline();
            renderSemaphores();
            renderEscribientes();
            renderChangeLog();
            updatePoaStats();

            // Reinicia el formulario
            authRegisterForm.reset();
            leaderTypeGroup.style.display = "none";
        });
    }

    // Guest login (Ámbar)
    if (loginGuestBtn) {
        loginGuestBtn.addEventListener("click", () => {
            localStorage.setItem("agua_viva_active_user_email", "ambar@email.com");
            showToast("Sesión iniciada como Ámbar.", "success");
            loadState();
            document.body.classList.remove("jav-theme");
            document.getElementById("authOverlay").classList.add("hidden");
            renderMeetings();
            renderTimeline();
            renderSemaphores();
            renderEscribientes();
            renderChangeLog();
            updatePoaStats();

        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("agua_viva_active_user_email");
            showToast("Sesión cerrada.", "info");
            // Muestra el overlay de autenticación
            document.getElementById("authOverlay").classList.remove("hidden");
            loadState();
        });
    }

    const calTabs = document.querySelectorAll("#calendarTabs .tab-btn");
    calTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            calTabs.forEach(b => {
                b.classList.remove("active");
                b.style.background = "transparent";
                b.style.borderColor = "transparent";
                b.style.color = "var(--text-secondary)";
            });
            btn.classList.add("active");
            btn.style.background = "var(--bg-surface)";
            btn.style.borderColor = "var(--border-color)";
            btn.style.color = "white";
            
            state.selectedCalendar = btn.dataset.cal;
            if (state.selectedView === "WEEK") {
                renderWeeklyCalendar();
            } else {
                renderMeetings();
            }
        });
    });

    // Manejador de cambio de vista del calendario (LISTA vs SEMANA)
    const viewButtons = document.querySelectorAll("#calendarViewToggle button");
    viewButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            viewButtons.forEach(b => {
                b.classList.remove("active");
                b.style.background = "transparent";
                b.style.borderColor = "transparent";
                b.style.color = "var(--text-secondary)";
            });
            btn.classList.add("active");
            btn.style.background = "var(--bg-surface)";
            btn.style.borderColor = "var(--border-color)";
            btn.style.color = "white";

            const view = btn.dataset.view;
            state.selectedView = view;

            const listEl = document.getElementById("upcomingMeetingsList");
            const weekEl = document.getElementById("weeklyCalendarContainer");
            
            if (view === "WEEK") {
                listEl.style.display = "none";
                weekEl.style.display = "block";
                renderWeeklyCalendar();
            } else {
                listEl.style.display = "block";
                weekEl.style.display = "none";
                renderMeetings();
            }
        });
    });

    const closeLvlBtn = document.getElementById("closeLevelUpBtn");
    if (closeLvlBtn) {
        closeLvlBtn.addEventListener("click", () => {
            document.getElementById("levelUpModal").classList.remove("active");
        });
    }

    const scanSuccessClose = document.getElementById("scanSuccessClose");
    const scanSuccessDone = document.getElementById("scanSuccessDone");
    if (scanSuccessClose) scanSuccessClose.addEventListener("click", closeScanSuccessOverlay);
    if (scanSuccessDone) scanSuccessDone.addEventListener("click", closeScanSuccessOverlay);

    // Interruptor y acciones del menú de notificaciones
    const notifBtn = document.getElementById("notifBtn");
    const notifDropdown = document.getElementById("notifDropdown");
    const notifClearBtn = document.getElementById("notifClearBtn");

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle("active");
            renderNotifications();
        });
    }

    if (notifClearBtn) {
        notifClearBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            state.notifications = [];
            saveState();
            renderNotifications();
            showToast("Notificaciones limpiadas.", "info");
        });
    }

    document.addEventListener("click", (e) => {
        if (notifDropdown && notifDropdown.classList.contains("active")) {
            if (!notifDropdown.contains(e.target) && e.target !== notifBtn && !notifBtn.contains(e.target)) {
                notifDropdown.classList.remove("active");
            }
        }
    });

    renderMeetings();
    renderTimeline();
    renderSemaphores();
    renderEscribientes();
    renderChangeLog();
    updatePoaStats();

    updateHistoryStats();

    const manualCodeBtn = document.getElementById("manualCodeBtn");
    if (manualCodeBtn) {
        manualCodeBtn.addEventListener("click", () => {
            // Detiene la simulación de escaneo si está activa
            if (qrScannerTimer) clearTimeout(qrScannerTimer);
            const corners = document.querySelectorAll(".qr-corner");
            const laser = document.querySelector(".qr-laser");
            if (corners) corners.forEach(c => c.style.borderColor = "var(--primary)");
            if (laser) laser.style.animationPlayState = "paused";

            // Asegura un token vigente y muestra el código de sede como pista
            if (typeof AV === "undefined") {
                const c = prompt("Ingresa el código temporal de asistencia:");
                if (c && c.trim() !== "") registerNewAttendance(); else runQRScannerSimulation();
                return;
            }
            const token = getScanToken();
            const v = AV.Crypto.verifyJWT(token);
            const liveCode = v.valid ? v.payload.code : null;
            const hint = liveCode ? `\n(código vigente en la sede: ${liveCode})` : "";
            const code = prompt("Ingresa el código temporal de asistencia (ej. K7-9MX):" + hint);

            if (code === null || code.trim() === "") { runQRScannerSimulation(); return; }
            const typed = code.trim().toUpperCase();

            if (!v.valid) {
                showToast(v.reason === "expired" ? "Código expirado, pide uno nuevo." : "Código no válido.", "error");
                return;
            }
            if (typed !== String(v.payload.code).toUpperCase()) {
                showToast("El código no coincide con el de la sede.", "error");
                return;
            }
            showToast("Código verificado (JWT válido). Comprobando ubicación…", "success");

            // El geofencing también aplica al ingreso manual
            AV.Geo.getPosition().then((coords) => {
                const venue = { lat: v.payload.lat, lng: v.payload.lng, radiusM: v.payload.rad, name: AV.Geo.VENUE.name };
                const geo = AV.Geo.checkGeofence(coords, venue);
                if (!geo.inside) {
                    showScanRejection("fa-location-crosshairs", "Fuera del perímetro",
                        `Estás a ${geo.distanceM} m de ${venue.name} (radio: ${geo.radiusM} m).`, true, true);
                    return;
                }
                commitAttendance(v.payload);
            });
        });
    }

    // Conexión de accesos rápidos en la pantalla de login
    const loginGuestMarianaBtn = document.getElementById("loginGuestMarianaBtn");
    if (loginGuestMarianaBtn) {
        loginGuestMarianaBtn.addEventListener("click", () => {
            localStorage.setItem("agua_viva_active_user_email", "mariana@email.com");
            const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
            db.currentSimulatedRole = "admin";
            localStorage.setItem("agua_viva_db", JSON.stringify(db));
            showToast("Ingresando como Mariana C.", "success");
            loadState();
            document.body.classList.remove("jav-theme");
            document.getElementById("authOverlay").classList.add("hidden");
            window.location.reload();
        });
    }

    const loginGuestSuperBtn = document.getElementById("loginGuestSuperBtn");
    if (loginGuestSuperBtn) {
        loginGuestSuperBtn.addEventListener("click", () => {
            // El portal Superadmin es independiente y exige credenciales de fábrica;
            // redirigimos ahí en lugar de autenticar directamente desde el móvil.
            localStorage.setItem("agua_viva_active_user_email", "superadmin@email.com");
            const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
            db.currentSimulatedRole = "superadmin";
            localStorage.setItem("agua_viva_db", JSON.stringify(db));
            showToast("Redirigiendo al portal Superadmin…", "info");
            window.location.href = "superadmin.html";
        });
    }

    const simTriggerBtn = document.getElementById("simTriggerBtn");
    const simPanel = document.getElementById("simPanel");
    if (simTriggerBtn && simPanel) {
        simTriggerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            simPanel.classList.toggle("active");
        });

        document.addEventListener("click", (e) => {
            if (!simPanel.contains(e.target) && e.target !== simTriggerBtn) {
                simPanel.classList.remove("active");
            }
        });

        const activeEmail = localStorage.getItem("agua_viva_active_user_email") || "ambar@email.com";
        const simUserAmbar = document.getElementById("simUserAmbar");
        const simUserMariana = document.getElementById("simUserMariana");
        const simUserSuper = document.getElementById("simUserSuper");

        if (activeEmail === "ambar@email.com" && simUserAmbar) simUserAmbar.classList.add("active");
        else if (activeEmail === "mariana@email.com" && simUserMariana) simUserMariana.classList.add("active");
        else if (activeEmail === "superadmin@email.com" && simUserSuper) simUserSuper.classList.add("active");

        const setupSimButton = (btn, email, role) => {
            if (!btn) return;
            btn.addEventListener("click", () => {
                localStorage.setItem("agua_viva_active_user_email", email);
                const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
                db.currentSimulatedRole = role;
                localStorage.setItem("agua_viva_db", JSON.stringify(db));
                
                showToast(`Simulando como ${email.split('@')[0]}...`, "info");
                simPanel.classList.remove("active");
                
                setTimeout(() => {
                    if (role === "superadmin") {
                        window.location.href = "superadmin.html";
                    } else if (role === "admin") {
                        window.location.href = "admin.html";
                    } else {
                        window.location.reload();
                    }
                }, 500);
            });
        };

        setupSimButton(simUserAmbar, "ambar@email.com", "member");
        setupSimButton(simUserMariana, "mariana@email.com", "admin");
        setupSimButton(simUserSuper, "superadmin@email.com", "superadmin");
    }
});

function openMeetingDetailsModal(meet) {
    const modal = document.getElementById("meetingDetailsModal");
    if (!modal) return;

    document.getElementById("evtDetailTitle").textContent = meet.title || "Detalle de Junta";
    document.getElementById("evtDetailTopic").textContent = meet.topic || meet.title || "Tema no especificado";
    
    const calBadge = document.getElementById("evtDetailCalendarBadge");
    if (meet.calendar === "GROUP") {
        calBadge.textContent = "Grupo";
        calBadge.style.background = "var(--primary-light)";
        calBadge.style.color = "var(--primary)";
    } else if (meet.calendar === "REGIONAL") {
        calBadge.textContent = "Regional";
        calBadge.style.background = "rgba(124, 58, 237, 0.1)";
        calBadge.style.color = "#7c3aed";
    } else if (meet.calendar === "ANNUAL") {
        calBadge.textContent = "Anual";
        calBadge.style.background = "rgba(245, 158, 11, 0.1)";
        calBadge.style.color = "#f59e0b";
    }

    const javBadge = document.getElementById("evtDetailJavBadge");
    if (meet.isJav) {
        javBadge.style.display = "inline-block";
    } else {
        javBadge.style.display = "none";
    }

    document.getElementById("evtDetailSpeaker").textContent = meet.speaker || "Por asignar";
    const originDiv = document.getElementById("evtDetailSpeakerOrigin");
    if (meet.speakerType === "MILITANCIA") {
        originDiv.textContent = `Militancia · ${meet.speakerGroup || 'Grupo'} · ${meet.speakerRegion || 'Región'}`;
        originDiv.style.display = "block";
    } else if (meet.speakerType === "EXTERNO") {
        originDiv.textContent = `Miembro Externo · ${meet.speakerGroup || 'Grupo'} · ${meet.speakerRegion || 'Región'}`;
        originDiv.style.display = "block";
    } else if (meet.speakerType === "INVITADO") {
        originDiv.textContent = "Invitado Especial (Fuera de Agua Viva)";
        originDiv.style.display = "block";
    } else {
        originDiv.style.display = "none";
    }

    document.getElementById("evtDetailTime").textContent = meet.time || "No especificado";
    document.getElementById("evtDetailXp").textContent = `+${meet.xp || 0} XP`;
    document.getElementById("evtDetailLocationInfo").textContent = meet.info || meet.locationDetails || "Por asignar";

    const mapSection = document.getElementById("evtDetailMapSection");
    const mapLinkBtn = document.getElementById("btnEvtDetailMapLink");
    const iframeMap = document.getElementById("iframeEvtDetailMap");

    if (meet.locationLink) {
        mapSection.style.display = "block";
        mapLinkBtn.href = meet.locationLink;
        
        let searchVal = meet.locationLink;
        if (meet.locationLink.startsWith("http")) {
            try {
                const url = new URL(meet.locationLink);
                const q = url.searchParams.get("q") || url.searchParams.get("daddr");
                if (q) searchVal = q;
            } catch(e) {}
        }
        iframeMap.src = `https://maps.google.com/maps?q=${encodeURIComponent(searchVal)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    } else {
        mapSection.style.display = "none";
        iframeMap.src = "";
    }

    modal.classList.add("active");
}

function renderMeetings() {
    const list = document.getElementById("upcomingMeetingsList");
    if (!list) return;
    list.innerHTML = "";

    if (!state.selectedCalendar) {
        state.selectedCalendar = "GROUP";
    }

    let filtered = state.meetings.filter(m => m.calendar === state.selectedCalendar);

    // Si el modo JAV está activo, filtra/muestra eventos JAV
    if (state.user.isJav) {
        filtered = filtered.filter(m => m.isJav);
    } else {
        filtered = filtered.filter(m => !m.isJav);
    }

    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2.5rem 1rem;">No hay eventos en este calendario.</div>`;
        return;
    }

    filtered.forEach(meet => {
        const item = document.createElement("div");
        item.className = `meeting-item ${meet.isJav ? 'jav-event' : ''}`;
        item.style.cursor = "pointer";
        item.innerHTML = `
            <div class="meeting-date-badge">
                <span class="date-day">${meet.day}</span>
                <span class="date-month">${meet.month}</span>
            </div>
            <div class="meeting-info">
                <h4 class="meeting-title">${meet.title}</h4>
                <p class="meeting-meta">${meet.info} · ${meet.time}</p>
            </div>
            <span class="meeting-xp-badge">+${meet.xp} XP</span>
        `;
        item.addEventListener("click", () => {
            openMeetingDetailsModal(meet);
        });
        list.appendChild(item);
    });
}

let timelineFilter = "all";

// Interpreta las fechas mixtas del historial: ISO "2026-05-26" y
// "26 de mayo · 19:04" (nombres largos o cortos). Devuelve {year, month} o null.
function parseHistoryMonth(dateStr) {
    const s = String(dateStr || "");
    const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (iso) return { year: parseInt(iso[1]), month: parseInt(iso[2]) - 1 };
    const MES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    const m = s.toLowerCase().match(/de\s+([a-zá-ú]+)/);
    if (m) {
        const idx = MES.findIndex(abbr => m[1].startsWith(abbr));
        if (idx !== -1) return { year: new Date().getFullYear(), month: idx };
    }
    return null;
}

function renderTimeline() {
    const list = document.getElementById("timelineList");
    if (!list) return;
    list.innerHTML = "";

    const items = (state.history || []).filter(h =>
        timelineFilter === "all" || (h.category || "junta").toLowerCase() === timelineFilter
    );

    if (!items.length) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:1.5rem 0;">Sin registros en esta categoría.</p>`;
    } else {
        // Separadores por mes real (generados de las fechas de los registros)
        let lastKey = null;
        items.forEach(hist => {
            const pm = parseHistoryMonth(hist.date);
            const key = pm ? `${pm.year}-${pm.month}` : "otros";
            if (key !== lastKey) {
                lastKey = key;
                const title = document.createElement("div");
                title.className = "timeline-title font-serif";
                title.textContent = pm ? `${MONTHS_ES[pm.month]} ${pm.year}` : "Anteriores";
                list.appendChild(title);
            }
            const item = document.createElement("div");
            item.className = "timeline-item";
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content-card">
                    <div class="tl-info">
                        <h4>${hist.title}</h4>
                        <span class="tl-meta">${hist.details} · ${hist.date}</span>
                    </div>
                    <span class="tl-xp">+${hist.xp} XP</span>
                </div>
            `;
            list.appendChild(item);
        });
    }

    const xpEl = document.getElementById("hist-total-xp");
    if (xpEl) xpEl.textContent = (state.history || []).reduce((s, h) => s + (h.xp || 0), 0);

    renderHistoryTrendChart();
}

// Gráfico de constancia generado por datos: XP del historial repartido en
// 12 cubetas (más reciente a la derecha), suavizado como polilínea.
function renderHistoryTrendChart() {
    const path = document.getElementById("historyTrendPath");
    if (!path) return;
    const hist = state.history || [];
    const buckets = new Array(12).fill(0);
    hist.forEach((h, i) => {
        const bucket = Math.min(11, Math.floor(i * 12 / Math.max(hist.length, 1)));
        buckets[11 - bucket] += (h.xp || 0);
    });
    const maxV = Math.max(...buckets, 10);
    const pts = buckets.map((v, i) => {
        const x = Math.round((i / 11) * 300);
        const y = Math.round(70 - (v / maxV) * 55);
        return `${x},${y}`;
    });
    path.setAttribute("d", "M " + pts.join(" L "));
}

function wireHistorialFilters() {
    const cont = document.getElementById("historialFilters");
    if (!cont) return;
    cont.querySelectorAll(".hist-filter").forEach(btn => {
        btn.addEventListener("click", () => {
            cont.querySelectorAll(".hist-filter").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            timelineFilter = btn.dataset.filter;
            renderTimeline();
        });
    });
}

function renderSemaphores() {
    const list = document.getElementById("groupsSemaphoreList");
    if (!list) return;
    list.innerHTML = "";

    const userGroup = state.user.group || state.user.sede || "Satélite";
    const userRegion = getRegionForGroup(userGroup);
    const regionGroups = groupsByRegion[userRegion] || [];

    const filtered = state.groupsSemaphore.filter(grp => regionGroups.includes(grp.name));

    const listToRender = filtered.length > 0 ? filtered : state.groupsSemaphore;

    const pendientes = [];
    listToRender.forEach(grp => {
        const item = document.createElement("div");
        item.className = "group-semaphore-item";

        const isOwnGroup = grp.name.toLowerCase() === userGroup.toLowerCase();
        if (isOwnGroup) {
            item.style.border = "1.5px solid var(--primary)";
            item.style.background = "rgba(112, 0, 255, 0.08)";
            item.style.boxShadow = "0 0 10px rgba(112, 0, 255, 0.15)";
        }

        // Estado calculado (ventana de la hacienda, registros nuevos, 2 días)
        const comp = computeGroupSemaphoreApp(grp.name);
        const st = comp.status === "INFO" ? "YELLOW" : comp.status;
        const labelClass = st.toLowerCase();
        const labelText = comp.status === "INFO" ? "Fuera de ventana" : st === "GREEN" ? "Validado" : st === "YELLOW" ? "Borrador" : "Pendiente";
        if (comp.status === "RED" || comp.status === "YELLOW") pendientes.push({ name: grp.name, detail: comp.detail, status: comp.status });

        item.innerHTML = `
            <div>
                <span class="group-name">${grp.name} ${isOwnGroup ? '<span style="font-size:0.6rem; color:var(--primary); font-weight:bold; margin-left:0.25rem;">(Mi Grupo)</span>' : ''}</span>
                <p style="font-size: 0.65rem; color: var(--text-muted); margin-top: 0.15rem;">
                    ${comp.detail ? comp.detail + " · " : ""}Por: ${grp.updatedBy} · ${grp.time}
                </p>
            </div>
            <div class="status-indicator-group cursor-pointer" onclick="toggleGroupSemaphore('${grp.name}')">
                <span class="light-dot ${labelClass}"></span>
                <span class="light-label ${labelClass}">${labelText}</span>
            </div>
        `;
        list.appendChild(item);
    });

    // Bloque "grupos sin confirmar/actualizar" del semáforo regional
    const pendCard = document.getElementById("svcPendingCard");
    const pendList = document.getElementById("svcPendingGroups");
    if (pendCard && pendList) {
        if (pendientes.length) {
            pendCard.style.display = "block";
            pendList.innerHTML = pendientes.map(p => `
                <div class="svc-pending-item">
                    <span class="light-dot ${p.status.toLowerCase()}"></span>
                    <div><strong>${p.name}</strong><span>${p.detail || "Sin actualizar"}</span></div>
                </div>`).join("");
        } else {
            pendCard.style.display = "none";
        }
    }
}

// Semáforo calculado en el móvil (misma regla que el panel admin):
// fuera de la ventana de 2 semanas → informativo; registros nuevos → rojo;
// más de 2 días sin rectificar → amarillo; al día → verde.
function computeGroupSemaphoreApp(groupName) {
    const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
    const grp = (state.groupsSemaphore || []).find(g => g.name === groupName) || {};
    const res = { status: grp.status || "RED", detail: "" };

    const hac = db.activeHacienda;
    if (hac && hac.startDate) {
        const days = Math.ceil((new Date(hac.startDate + "T00:00:00") - Date.now()) / 86400000);
        if (days > 14) { res.status = "INFO"; res.detail = `El POA abre en ${days - 14} día(s)`; return res; }
    }
    if (grp.manual) { res.detail = "Ajuste manual"; return res; }

    const nuevos = (db.members || []).filter(m => m.group === groupName && (m.isNew || m.status === "New")).length;
    const rectAt = grp.lastRectified ? new Date(grp.lastRectified).getTime() : 0;
    const stale = !rectAt || (Date.now() - rectAt) > 2 * 86400000;

    if (nuevos > 0) { res.status = "RED"; res.detail = `${nuevos} registro(s) por validar`; }
    else if (stale) { res.status = rectAt ? "YELLOW" : "RED"; res.detail = rectAt ? "Más de 2 días sin actualizar" : "Sin rectificar"; }
    else { res.status = "GREEN"; res.detail = "Validado y al día"; }
    return res;
}

window.toggleGroupSemaphore = function(groupName) {
    const grp = state.groupsSemaphore.find(g => g.name === groupName);
    if (!grp) return;

    const oldStatus = grp.status;
    if (grp.status === "RED") grp.status = "YELLOW";
    else if (grp.status === "YELLOW") grp.status = "GREEN";
    else grp.status = "RED";

    grp.manual = true;
    grp.updatedBy = state.user ? state.user.name : "Servidor";
    grp.time = "Hace 1 seg";

    state.changelog.unshift({
        action: "UPDATE_SEMAFORO",
        details: `Cambió ${groupName} de ${oldStatus.toLowerCase()} a ${grp.status.toLowerCase()}`,
        user: (state.user ? state.user.name : "Servidor") + " (Tú)",
        time: getFormattedTime()
    });

    saveState();
    renderSemaphores();
    renderChangeLog();
    updatePoaStats();
};

function renderEscribientes(query = "") {
    const tbody = document.getElementById("escribientesListBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const userGroup = state.user.group || state.user.sede || "Satélite";
    const userRegion = getRegionForGroup(userGroup);
    const regionGroups = groupsByRegion[userRegion] || [];

    const filtered = state.escribientes.filter(esc => {
        const matchesRegion = regionGroups.includes(esc.group);
        if (!matchesRegion) return false;
        
        const fullName = `${esc.firstName} ${esc.lastNameInitial}`.toLowerCase();
        return fullName.includes(query.toLowerCase()) || esc.group.toLowerCase().includes(query.toLowerCase());
    });

    filtered.forEach(esc => {
        const tr = document.createElement("tr");
        const genderIcon = esc.gender === "MALE" ? 
            `<i class="fa-solid fa-mars gender-icon male" title="Hombre"></i>` : 
            `<i class="fa-solid fa-venus gender-icon female" title="Mujer"></i>`;
        
        tr.innerHTML = `
            <td><strong>${esc.firstName}</strong> ${esc.lastNameInitial}.</td>
            <td>${genderIcon} ${esc.gender === "MALE" ? 'Hombre' : 'Mujer'}</td>
            <td><span class="badge badge-apoyo">${esc.group}</span></td>
            <td class="actions-cell">
                <button class="btn-icon-only delete" onclick="deleteEscribiente('${esc.id}')" title="Eliminar escribiente">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.deleteEscribiente = function(id) {
    const escIndex = state.escribientes.findIndex(e => e.id === id);
    if (escIndex === -1) return;

    const esc = state.escribientes[escIndex];
    state.escribientes.splice(escIndex, 1);

    // Agrega registro de auditoría
    state.changelog.unshift({
        action: "ELIMINAR_ESCRIBIENTE",
        details: `Eliminó escribiente ${esc.firstName} ${esc.lastNameInitial}. del grupo ${esc.group}`,
        user: "Atracciones Diego V.",
        time: getFormattedTime()
    });

    saveState();
    renderEscribientes();
    renderChangeLog();
    updatePoaStats();
    showToast(`Registro eliminado.`, "info");
};

function renderChangeLog(query = "") {
    const list = document.getElementById("auditChangeLogList");
    if (!list) return;
    list.innerHTML = "";

    // Auditoría regional: solo los cambios que mencionan grupos de MI región
    const userGroup = state.user.group || "Satélite";
    const regionGroups = groupsByRegion[getRegionForGroup(userGroup)] || [];
    const q = query.trim().toLowerCase();

    const filtered = (state.changelog || []).filter(log => {
        const text = `${log.details} ${log.user} ${log.action || ""}`;
        const enRegion = regionGroups.some(g => text.includes(g)) || text.includes(userGroup);
        const coincide = !q || text.toLowerCase().includes(q);
        return enRegion && coincide;
    });

    if (!filtered.length) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:0.82rem; padding:1rem 0;">Sin movimientos de tu región${q ? " que coincidan con la búsqueda" : ""}.</p>`;
        return;
    }

    filtered.forEach(log => {
        const item = document.createElement("div");
        item.className = "changelog-item";
        item.innerHTML = `
            <span class="log-text">${log.details}</span>
            <div>
                <span class="log-user">${log.user}</span> · <span class="log-time">${log.time}</span>
            </div>
        `;
        list.appendChild(item);
    });
}

function updatePoaStats() {
    // 1. Total Escribientes
    const totalEscribientes = state.escribientes.length;
    document.getElementById("poa-total-escribientes").textContent = totalEscribientes;

    const totalApoyos = state.members.filter(m => m.roleClass === "Apoyo" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI" && !m.isCoordinator).length;
    const totalPadrinos = state.members.filter(m => m.roleClass === "Padrino" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI" && !m.isCoordinator).length;
    const totalOrejas = state.members.filter(m => m.roleClass === "Oreja" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI" && !m.isCoordinator).length;

    const lblApoyos = document.getElementById("poa-total-apoyos");
    const lblPadrinos = document.getElementById("poa-total-padrinos");
    const lblOrejas = document.getElementById("poa-total-orejas");

    if (lblApoyos) lblApoyos.textContent = totalApoyos;
    if (lblPadrinos) lblPadrinos.textContent = totalPadrinos;
    if (lblOrejas) lblOrejas.textContent = totalOrejas;

    // 3. Cuenta detalles de transporte
    // Para el prototipo, calcula los lugares disponibles
    let spotsOffered = 0;
    if (state.user.attendingHacienda && state.user.transportStatus === "PROVIDES_TRANSPORT") {
        spotsOffered += state.user.transportCapacity;
    }
    // Agrega cupos simulados de otros grupos
    spotsOffered += 28;

    let needTransport = 14; // Conteo base simulado
    if (state.user.attendingHacienda && state.user.transportStatus === "NEEDS_TRANSPORT") {
        needTransport += 1;
    }

    const lblTransport = document.getElementById("poa-transport-ratio");
    if (lblTransport) lblTransport.textContent = `${needTransport} / ${spotsOffered}`;
}

// Filtrado de la lista de miembros

let qrScannerTimer = null;
function runQRScannerSimulation() {
    const corners = document.querySelectorAll(".qr-corner");
    const laser = document.querySelector(".qr-laser");

    // Reinicia colores e interfaz de validación
    corners.forEach(c => c.style.borderColor = "var(--primary)");
    if (laser) laser.style.animationPlayState = "running";
    const validationBox = document.getElementById("scanValidation");
    const resultBox = document.getElementById("scanResult");
    if (validationBox) validationBox.classList.remove("active");
    if (resultBox) { resultBox.classList.remove("active"); resultBox.innerHTML = ""; }
    resetScanSteps();

    if (qrScannerTimer) clearTimeout(qrScannerTimer);
    qrScannerTimer = setTimeout(() => {
        corners.forEach(c => c.style.borderColor = "var(--color-green)");
        if (laser) laser.style.animationPlayState = "paused";
        showToast("Código QR detectado. Validando…", "success");

        setTimeout(() => { attemptCheckIn(); }, 600);
    }, 2200);
}

// Obtiene el token QR vigente. Si la consola admin no tiene sesión viva
// ejerciendo el mismo flujo real de firma/verificación.
function getScanToken() {
    if (typeof AV === "undefined") return null;
    const token = AV.Session.currentToken();
    if (token && AV.Crypto.verifyJWT(token).valid) return token;
    return AV.Session.issueToken({ meetingId: "m-weekly", groupId: "satelite" }).token;
}

function resetScanSteps() {
    const stepJwt = document.getElementById("stepJwt");
    const stepGeo = document.getElementById("stepGeo");
    if (stepJwt) { stepJwt.className = "scan-step"; stepJwt.innerHTML = '<i class="fa-solid fa-circle-notch"></i> Verificando firma JWT…'; }
    if (stepGeo) { stepGeo.className = "scan-step"; stepGeo.innerHTML = '<i class="fa-regular fa-circle"></i> Comprobando ubicación (geofencing)…'; }
}

function markStep(el, ok, text) {
    if (!el) return;
    el.classList.toggle("ok", ok);
    el.classList.toggle("fail", !ok);
    const icon = ok ? "fa-circle-check" : "fa-circle-xmark";
    el.innerHTML = `<i class="fa-solid ${icon}"></i> ${text}`;
}

async function attemptCheckIn() {
    if (typeof AV === "undefined") { registerNewAttendance(); return; }

    const stepJwt = document.getElementById("stepJwt");
    const stepGeo = document.getElementById("stepGeo");
    const validationBox = document.getElementById("scanValidation");
    if (validationBox) validationBox.classList.add("active");

    // 1) Verificación de firma + expiración (30 s) del JWT
    const token = getScanToken();
    const v = AV.Crypto.verifyJWT(token);
    if (!v.valid) {
        const expired = v.reason === "expired";
        markStep(stepJwt, false, expired ? "Código expirado (>30 s)" : "Firma JWT inválida");
        showScanRejection(
            expired ? "fa-clock" : "fa-shield-halved",
            expired ? "Código expirado" : "Código no válido",
            expired
                ? "El QR se renueva cada 30 segundos. Espera el siguiente y vuelve a escanear."
                : "La firma del token no coincide. Pide al coordinador un código vigente.",
            true, false
        );
        return;
    }
    const secsLeft = Math.max(0, v.payload.exp - Math.floor(Date.now() / 1000));
    markStep(stepJwt, true, `Firma JWT válida · caduca en ${secsLeft} s`);

    // 2) Geofencing: comparar GPS del móvil con la sede del payload
    if (stepGeo) stepGeo.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Comprobando ubicación (geofencing)…';
    const coords = await AV.Geo.getPosition();
    const venue = { lat: v.payload.lat, lng: v.payload.lng, radiusM: v.payload.rad, name: AV.Geo.VENUE.name };
    const geo = AV.Geo.checkGeofence(coords, venue);
    const src = coords.real ? "GPS real" : "GPS simulado en sede";

    if (!geo.inside) {
        markStep(stepGeo, false, `Fuera del perímetro · ${geo.distanceM} m (${src})`);
        showScanRejection(
            "fa-location-crosshairs",
            "Fuera del perímetro",
            `Estás a ${geo.distanceM} m de ${venue.name} (radio permitido: ${geo.radiusM} m). Debes estar en la sede para registrar asistencia.`,
            true, true
        );
        return;
    }
    markStep(stepGeo, true, `Dentro de la sede · ${geo.distanceM} m / ${geo.radiusM} m (${src})`);

    // 3) Commit offline-first a través de la cola de sincronización
    commitAttendance(v.payload);
}

function showScanRejection(icon, title, msg, allowRetry, allowOverride) {
    const resultBox = document.getElementById("scanResult");
    if (!resultBox) return;
    resultBox.innerHTML = `
        <div class="scan-result-card fail">
            <i class="fa-solid ${icon} scan-result-icon"></i>
            <h3>${title}</h3>
            <p>${msg}</p>
            <div class="scan-result-actions">
                ${allowRetry ? '<button class="btn btn-secondary" id="scanRetryBtn">Reintentar</button>' : ''}
                ${allowOverride ? '<button class="btn btn-ghost" id="scanOverrideBtn">Registrar de todos modos (demo)</button>' : ''}
            </div>
        </div>`;
    resultBox.classList.add("active");

    const retry = document.getElementById("scanRetryBtn");
    if (retry) retry.addEventListener("click", () => {
        resultBox.classList.remove("active"); resultBox.innerHTML = "";
        runQRScannerSimulation();
    });
    const ov = document.getElementById("scanOverrideBtn");
    if (ov) ov.addEventListener("click", () => {
        resultBox.classList.remove("active"); resultBox.innerHTML = "";
        const token = getScanToken();
        const v = AV.Crypto.verifyJWT(token);
        commitAttendance(v.valid ? v.payload : { code: "DEMO", mid: "m-weekly" });
    });
}

function commitAttendance(payload) {
    const entry = AV.Sync.enqueue({
        type: "ATTENDANCE_CHECKIN",
        meetingId: payload.mid,
        code: payload.code,
        at: new Date().toISOString()
    });

    registerNewAttendance();

    if (AV.Sync.isOnline()) {
        AV.Sync.flush();
        showToast(`Asistencia sincronizada (online) · op ${entry.id.slice(-4)}`, "success");
    } else {
        showToast("Sin conexión: registro guardado localmente. Se sincronizará al reconectar.", "info");
    }
    updateConnPill();
}

function registerNewAttendance() {
    // Agrega un nuevo evento al historial
    const dateStr = getFormattedDate();
    const newHistory = {
        id: Date.now(),
        title: "Junta semanal registrada",
        details: "Sede Centro - Asistencia OK",
        date: dateStr,
        xp: 15,
        category: "junta"
    };

    state.history.unshift(newHistory);
    state.user.xp += 15;
    state.user.streak += 1;

    let leveledUp = false;

    // Verifica subida de nivel (del nivel 4 Faro al nivel 5 Aurora)
    if (state.user.xp >= 435 && state.user.level === 4) {
        state.user.level = 5;
        leveledUp = true;
        document.getElementById("levelUpModal").classList.add("active");
    }

    // Actualiza las etiquetas de la pantalla de inicio
    document.querySelector(".current-xp").innerHTML = `<strong>${state.user.xp}</strong> XP`;
    if (leveledUp) {
        document.querySelector(".xp-needed").innerHTML = `nivel alcanzado: <strong class="color-cyan">Aurora!</strong>`;
        document.querySelector(".progress-bar-fill").style.width = "100%";
        
        const logrosSection = document.getElementById("sec-logros");
        if (logrosSection) {
            // Actualiza el texto de la insignia de nivel en el perfil de logros
            logrosSection.querySelector(".badge-jav-tag").textContent = "Nv 5 · Aurora";
            // Actualiza los valores de XP
            logrosSection.querySelector(".level-progress-wrapper .level-xp-text").innerHTML = `
                <span class="current-xp">Aurora &rarr; Sol</span>
                <span class="current-xp"><strong>${state.user.xp}</strong> / 800 XP</span>
            `;
            logrosSection.querySelector(".level-progress-wrapper .progress-bar-fill").style.width = "30%"; // Progreso simulado dentro del nivel 5
            
            // Actualiza los nodos del camino de luz
            const roadmapItems = logrosSection.querySelectorAll(".roadmap-item");
            if (roadmapItems.length >= 5) {
                // Nodo 4 (Faro, índice 3): cambia de activo a completado
                roadmapItems[3].classList.remove("active");
                roadmapItems[3].classList.add("completed");
                // Nodo 5 (Aurora, índice 4): cambia de bloqueado a activo
                roadmapItems[4].classList.remove("locked");
                roadmapItems[4].classList.add("active");
            }
            
            // Update insignias grid: unlock "90 días" badge as a reward
            const badgeCards = logrosSection.querySelectorAll(".badge-card");
            if (badgeCards.length >= 3) {
                // Badge index 2 (90 días): unlock
                badgeCards[2].classList.remove("locked");
                badgeCards[2].classList.add("unlocked");
                badgeCards[2].querySelector(".badge-icon-fire").innerHTML = `<i class="fa-solid fa-fire animate-pulse"></i>`;
                // Actualiza el conteo de insignias
                logrosSection.querySelector(".insignias-count").textContent = "6 / 9";
            }
        }
    } else {
        document.querySelector(".xp-needed").innerHTML = `faltan <strong class="color-cyan">${650 - state.user.xp} XP</strong> para Aurora`;
        const percentage = (state.user.xp / 650) * 100;
        document.querySelector(".progress-bar-fill").style.width = `${percentage}%`;
    }
    document.querySelector(".stat-value").textContent = state.user.streak;

    renderTimeline();

    showScanSuccessOverlay(15, state.user.streak, leveledUp);
}

function showScanSuccessOverlay(xpEarned, newStreak, leveledUp) {
    const overlay = document.getElementById("scanSuccessOverlay");
    if (!overlay) return;

    const now = new Date();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const timeEl = document.getElementById("scanSuccessTime");
    if (timeEl) timeEl.textContent = `${days[now.getDay()]} ${now.getDate()} de ${months[now.getMonth()]} · ${timeStr}`;

    // Título real de la junta desde el token vivo o el calendario del grupo
    const meetingEl = document.getElementById("scanSuccessMeeting");
    if (meetingEl) {
        let title = "Junta registrada", place = state.user ? state.user.group : "";
        try {
            const sess = (typeof AV !== "undefined") && AV.Session.currentSession();
            if (sess && sess.venue && sess.venue.name) place = sess.venue.name;
        } catch (e) {}
        const todayISO = now.toISOString().split("T")[0];
        const todayMeeting = (state.meetings || []).find(m => m.date === todayISO && !m.isHacienda);
        if (todayMeeting) { title = todayMeeting.title; if (todayMeeting.locationGroup) place = "Grupo " + todayMeeting.locationGroup; }
        meetingEl.textContent = place ? `${title} · ${place}` : title;
    }

    const baseXP = 10;
    const bonusXP = xpEarned - baseXP;
    const totalEl = document.getElementById("scanSuccessXPTotal");
    if (totalEl) totalEl.textContent = `+${xpEarned} XP`;
    const bonusEl = document.getElementById("scanSuccessBonusXP");
    if (bonusEl) bonusEl.textContent = `+${bonusXP} XP`;
    const bonusRow = overlay.querySelector(".scan-success-xp-bonus-row");
    if (bonusRow) bonusRow.style.display = bonusXP > 0 ? "flex" : "none";

    const streakDaysEl = document.getElementById("scanSuccessStreakDays");
    if (streakDaysEl) streakDaysEl.textContent = newStreak - 1;
    const streakCountEl = document.getElementById("scanSuccessStreakCount");
    if (streakCountEl) streakCountEl.textContent = newStreak;
    const streakMsgEl = document.getElementById("scanSuccessStreakMsg");
    if (streakMsgEl) streakMsgEl.textContent = `${newStreak} días seguidos. Sigue así.`;

    const levelNameEl = document.getElementById("scanSuccessLevelName");
    const xpProgressEl = document.getElementById("scanSuccessXPProgress");
    const fillEl = document.getElementById("scanSuccessProgressFill");
    if (levelNameEl) levelNameEl.textContent = leveledUp ? "Aurora · Nivel 5" : "Faro · Nivel 4";
    if (xpProgressEl) xpProgressEl.textContent = leveledUp ? `${state.user.xp} / 800 XP` : `${state.user.xp} / 650 XP`;
    if (fillEl) {
        fillEl.style.width = "0%"; // reinicia la animación
        const pct = leveledUp ? Math.round((state.user.xp / 800) * 100) : Math.round((state.user.xp / 650) * 100);
        requestAnimationFrame(() => { fillEl.style.width = `${Math.min(pct, 100)}%`; });
    }

    overlay.classList.add("active");
}

function closeScanSuccessOverlay() {
    const overlay = document.getElementById("scanSuccessOverlay");
    if (overlay) overlay.classList.remove("active");

    // Navega a Inicio
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".app-section");
    navItems.forEach(n => n.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    const inicioBtn = document.querySelector('[data-target="sec-inicio"]');
    if (inicioBtn) inicioBtn.classList.add("active");
    const inicioSec = document.getElementById("sec-inicio");
    if (inicioSec) inicioSec.classList.add("active");
}

function getFormattedTime() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function getFormattedDate() {
    const d = new Date();
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    return `${d.getDate()} de ${months[d.getMonth()]} · ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Popup de notificación tipo toast en la app
function showToast(message, type = "success") {
    let toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "85px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.background = type === "success" ? "rgba(16, 185, 129, 0.9)" : type === "error" ? "rgba(239, 68, 68, 0.9)" : "rgba(112, 0, 255, 0.9)";
    toast.style.color = "#fff";
    toast.style.padding = "0.75rem 1.25rem";
    toast.style.borderRadius = "12px";
    toast.style.fontSize = "0.85rem";
    toast.style.fontWeight = "500";
    toast.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    toast.style.zIndex = "2000";
    toast.style.opacity = "0";
    toast.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    toast.style.pointerEvents = "none";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "0.5rem";
    
    let icon = type === "success" ? "fa-circle-check" : type === "error" ? "fa-circle-exclamation" : "fa-circle-info";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    
    document.body.appendChild(toast);
    
    // anima la entrada
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(0)";
        toast.style.opacity = "1";
    }, 50);

    // anima la salida y elimina
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(20px)";
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

function renderWeeklyCalendar() {
    const grid = document.getElementById("weeklyCalendarGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const selectedCal = state.selectedCalendar || "GROUP";
    let filtered = state.meetings.filter(m => m.calendar === selectedCal);

    // Si el modo JAV está activo, filtra/muestra eventos JAV
    if (state.user.isJav) {
        filtered = filtered.filter(m => m.isJav);
    } else {
        filtered = filtered.filter(m => !m.isJav);
    }

    const days = [[], [], [], [], [], [], []];

    filtered.forEach(meet => {
        const mStr = String(meet.month || "").toLowerCase();
        const dStr = String(meet.time || "").toLowerCase();
        
        if (mStr.includes("lun") || dStr.includes("lunes") || mStr.includes("mon")) days[0].push(meet);
        else if (mStr.includes("mar") || dStr.includes("martes") || mStr.includes("tue")) days[1].push(meet);
        else if (mStr.includes("mié") || mStr.includes("mie") || dStr.includes("miércoles") || mStr.includes("wed")) days[2].push(meet);
        else if (mStr.includes("jue") || dStr.includes("jueves") || mStr.includes("thu")) days[3].push(meet);
        else if (mStr.includes("vie") || dStr.includes("viernes") || mStr.includes("fri")) days[4].push(meet);
        else if (mStr.includes("sáb") || mStr.includes("sab") || dStr.includes("sábado") || mStr.includes("sat")) days[5].push(meet);
        else if (mStr.includes("dom") || dStr.includes("domingo") || mStr.includes("sun")) days[6].push(meet);
        else {
            days[5].push(meet); // Respaldo por defecto a sábado
        }
    });

    for (let i = 0; i < 7; i++) {
        const col = document.createElement("div");
        col.className = "weekly-col";
        col.style.background = "rgba(255, 255, 255, 0.02)";
        col.style.border = "1px solid rgba(255, 255, 255, 0.05)";
        col.style.borderRadius = "8px";
        col.style.padding = "0.25rem";
        col.style.display = "flex";
        col.style.flexDirection = "column";
        col.style.gap = "0.25rem";
        col.style.minHeight = "100px";

        if (days[i].length === 0) {
            col.innerHTML = `<span style="font-size:0.55rem; color:var(--text-muted); text-align:center; margin-top:1.5rem;">—</span>`;
        } else {
            days[i].forEach(meet => {
                const card = document.createElement("div");
                card.style.background = "var(--bg-surface-opaque)";
                card.style.borderLeft = meet.isJav ? "2.5px solid #d946ef" : "2.5px solid var(--primary)";
                card.style.borderRadius = "4px";
                card.style.padding = "0.3rem";
                card.style.fontSize = "0.65rem";
                card.style.display = "flex";
                card.style.flexDirection = "column";
                card.style.gap = "0.1rem";
                card.title = meet.title;
                card.style.cursor = "pointer";

                card.innerHTML = `
                    <strong style="color:var(--text-primary); font-size:0.65rem; line-height: 1.1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${meet.title}</strong>
                    <span style="font-size:0.55rem; color:var(--text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${meet.info.split("·")[0]}</span>
                    <span style="font-weight:600; color:var(--color-cyan); font-size:0.55rem;">+${meet.xp} XP</span>
                `;
                card.addEventListener("click", () => {
                    openMeetingDetailsModal(meet);
                });
                col.appendChild(card);
            });
        }
        grid.appendChild(col);
    }
}

function renderNotifications() {
    const list = document.getElementById("notifBody");
    const badge = document.getElementById("notifBadge");
    if (!list) return;
    list.innerHTML = "";

    const userNotifs = state.notifications || [];
    const unreadCount = userNotifs.filter(n => !n.read).length;

    if (badge) {
        if (unreadCount > 0) {
            badge.style.display = "flex";
            badge.textContent = unreadCount;
            badge.style.fontSize = "0.55rem";
            badge.style.fontWeight = "bold";
            badge.style.alignItems = "center";
            badge.style.justifyContent = "center";
        } else {
            badge.style.display = "none";
        }
    }

    if (userNotifs.length === 0) {
        list.innerHTML = `<div class="notif-empty">No tienes notificaciones</div>`;
        return;
    }

    userNotifs.forEach(n => {
        const item = document.createElement("div");
        item.className = `notif-item ${n.read ? '' : 'unread'}`;
        
        let iconClass = "fa-bell";
        let typeClass = "event";
        if (n.type === "warning") {
            iconClass = "fa-triangle-exclamation";
            typeClass = "warning";
        } else if (n.type === "alert") {
            iconClass = "fa-circle-exclamation";
            typeClass = "alert";
        } else if (n.type === "event") {
            iconClass = "fa-calendar-days";
            typeClass = "event";
        }

        item.innerHTML = `
            <div class="notif-item-icon ${typeClass}">
                <i class="fa-solid ${iconClass}"></i>
            </div>
            <div class="notif-item-content">
                <span class="notif-item-title">${n.title}</span>
                <span class="notif-item-desc">${n.desc}</span>
                <span class="notif-item-time">${n.time}</span>
            </div>
        `;

        item.addEventListener("click", () => {
            n.read = true;
            saveState();
            renderNotifications();
            
            const dropdown = document.getElementById("notifDropdown");
            if (dropdown) dropdown.classList.remove("active");

            if (n.action) {
                const navItem = document.querySelector(`.nav-item[data-target="${n.action}"]`);
                const section = document.getElementById(n.action);
                if (navItem && section) {
                    const navItems = document.querySelectorAll(".nav-item");
                    const sections = document.querySelectorAll(".app-section");
                    
                    navItems.forEach(n => n.classList.remove("active"));
                    sections.forEach(s => s.classList.remove("active"));

                    navItem.classList.add("active");
                    section.classList.add("active");

                    if (n.action === 'sec-settings' && window.initSettingsView) {
                        window.initSettingsView();
                    }
                }
            }
        });
        
        list.appendChild(item);
    });
}

function updateHistoryStats() {
    const elJuntas = document.getElementById("hist-total-juntas");
    const elHaciendas = document.getElementById("hist-total-haciendas");
    const elClean = document.getElementById("hist-clean-days");

    if (elClean && state.user) {
        elClean.textContent = state.user.cleanDays || 0;
    }
    
    if (state.history) {
        const juntasCount = state.history.filter(h => h.category === "junta" || h.title.toLowerCase().includes("junta")).length;
        const haciendasCount = state.history.filter(h => h.category === "hacienda" || h.title.toLowerCase().includes("hacienda")).length;
        
        if (elJuntas) elJuntas.textContent = juntasCount + 29; // agrega un desfase simulado
        if (elHaciendas) elHaciendas.textContent = haciendasCount;
    }
}

function initConnectivityUI() {
    if (typeof AV === "undefined") return;
    if (document.getElementById("connPill")) return;

    const pill = document.createElement("div");
    pill.id = "connPill";
    pill.className = "conn-pill";
    pill.innerHTML = `
        <span class="conn-dot"></span>
        <span id="connText">En línea</span>
        <span class="conn-pending" id="connPending"></span>
        <button class="conn-toggle" id="connToggle" title="Simular pérdida de conexión">Simular offline</button>
    `;
    document.body.appendChild(pill);

    document.getElementById("connToggle").addEventListener("click", () => {
        const goOffline = AV.Sync.isOnline();
        AV.Sync.setSimulatedOffline(goOffline);
        updateConnPill();
        if (typeof showToast === "function") {
            showToast(goOffline
                ? "Modo sin conexión activado (simulado)."
                : "Conexión restaurada. Sincronizando cola…",
                goOffline ? "info" : "success");
        }
    });

    AV.Sync.onStatus(updateConnPill);
    updateConnPill();
}

function updateConnPill() {
    if (typeof AV === "undefined") return;
    const pill = document.getElementById("connPill");
    if (!pill) return;
    const online = AV.Sync.isOnline();
    const pending = AV.Sync.pendingCount();
    pill.classList.toggle("offline", !online);
    const text = document.getElementById("connText");
    const toggle = document.getElementById("connToggle");
    const pend = document.getElementById("connPending");
    if (text) text.textContent = online ? "En línea" : "Sin conexión";
    if (toggle) toggle.textContent = online ? "Simular offline" : "Reconectar";
    if (pend) pend.textContent = pending > 0 ? `${pending} en cola` : "";
}

document.addEventListener("DOMContentLoaded", initConnectivityUI);

// ---------------------------------------------------------------------
// Mi Servicio: funciones especiales para servidores aprobados.
// AE  → Semáforo POA regional, Escribientes, Auditoría, Junta de Atracciones.
// AI  → Mis Juntas (agendar y gestionar juntas de su grupo).
// LÍDER → todas las anteriores.
// ---------------------------------------------------------------------

// Rol de servicio normalizado del usuario activo ("LIDER" | "AE" | "AI" | null)
function getServiceRole() {
    if (!state.user) return null;
    const raw = state.user.coordinatorRole || state.user.serverRole;
    if (!raw || raw === "Ninguno") return null;
    const norm = (typeof AVPerm !== "undefined") ? AVPerm.normalizeServerRole(raw) : String(raw).toUpperCase();
    return ["LIDER", "AE", "AI"].includes(norm) ? norm : null;
}

const SVC_TABS_BY_ROLE = {
    LIDER: ["svc-semaforo", "svc-escribientes", "svc-auditoria", "svc-junta", "svc-juntas"],
    AE: ["svc-semaforo", "svc-escribientes", "svc-auditoria", "svc-junta"],
    AI: ["svc-juntas"]
};

// Tarjeta de acceso en Inicio (solo servidores) con resumen vivo
function renderServiceCard() {
    const card = document.getElementById("serviceCard");
    const navItem = document.getElementById("navServicio");
    const navBar = document.querySelector(".app-navigation");
    const role = getServiceRole();
    // El ítem "Servicio" de la barra solo existe para servicios programados
    // (LIDER/AE/AI); otros cargos no ven la opción.
    if (navItem) navItem.style.display = role ? "flex" : "none";
    if (navBar) navBar.classList.toggle("has-service", !!role);
    if (!card) return;
    if (!role) { card.style.display = "none"; return; }

    const roleName = role === "LIDER" ? "Líder de Grupo" : role === "AE" ? "Atracciones Externas" : "Atracciones Internas";
    let resumen = "";
    if (role === "AI") {
        const mias = (state.meetings || []).filter(m => m.createdBy === state.user.email).length;
        resumen = mias ? `${mias} junta(s) publicadas por ti` : "Agenda la primera junta de tu grupo";
    } else {
        const region = getRegionForGroup(state.user.group);
        const groups = groupsByRegion[region] || [];
        const pend = (state.groupsSemaphore || []).filter(g => {
            if (!groups.includes(g.name)) return false;
            const c = computeGroupSemaphoreApp(g.name);
            return c.status === "RED" || c.status === "YELLOW";
        }).length;
        resumen = pend ? `${pend} grupo(s) sin confirmar el POA` : "POA regional al día";
    }

    card.style.display = "block";
    card.innerHTML = `
        <div class="service-card-inner">
            <div class="service-icon"><i class="fa-solid fa-shield-halved"></i></div>
            <div class="service-info">
                <span class="service-label">MI SERVICIO · ${role}</span>
                <h3 class="font-serif">${roleName}</h3>
                <p>${resumen}</p>
            </div>
            <i class="fa-solid fa-chevron-right service-arrow"></i>
        </div>`;
    card.onclick = openServicio;
}

// Navega a la sección Mi Servicio (patrón de Ajustes: sin pestaña inferior)
function openServicio() {
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.querySelectorAll(".app-section").forEach(s => s.classList.remove("active"));
    const sec = document.getElementById("sec-servicio");
    if (sec) sec.classList.add("active");
    initServicioSection();
}

let svcActiveTab = null;

function initServicioSection() {
    const role = getServiceRole();
    if (!role) return;

    const badge = document.getElementById("servicioRoleBadge");
    if (badge) badge.textContent = role === "LIDER" ? "LÍDER · acceso total" : role;

    const allowed = SVC_TABS_BY_ROLE[role] || [];
    document.querySelectorAll(".svc-tab").forEach(tab => {
        tab.style.display = allowed.includes(tab.dataset.svc) ? "inline-flex" : "none";
    });
    if (!svcActiveTab || !allowed.includes(svcActiveTab)) svcActiveTab = allowed[0];
    activateSvcTab(svcActiveTab);
}

function activateSvcTab(panelId) {
    svcActiveTab = panelId;
    document.querySelectorAll(".svc-tab").forEach(t => t.classList.toggle("active", t.dataset.svc === panelId));
    document.querySelectorAll(".svc-panel").forEach(p => p.classList.toggle("active", p.id === panelId));

    if (panelId === "svc-semaforo") { renderSemaphores(); updatePoaStats(); }
    else if (panelId === "svc-escribientes") { renderEscribientes(); }
    else if (panelId === "svc-auditoria") { renderChangeLog(); }
    else if (panelId === "svc-junta") { renderSvcJuntaCalendar(); }
    else if (panelId === "svc-juntas") { initMisJuntas(); }
}

// ---- Junta de Atracciones: calendario del mes, dinámico e interactivo ----

let svcSelectedDay = null;

function renderSvcJuntaCalendar() {
    const head = document.getElementById("svcJuntaCalHead");
    const grid = document.getElementById("svcJuntaCal");
    if (!head || !grid) return;

    const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
    const bookings = db.juntaCalendar || [];
    const now = new Date();
    const year = now.getFullYear(), month = now.getMonth();

    head.innerHTML = `<span class="svc-cal-title font-serif">${MONTHS_ES[month]} ${year}</span>` +
        ["L", "M", "M", "J", "V", "S", "D"].map(d => `<span class="svc-cal-dow">${d}</span>`).join("");

    const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = "";
    for (let i = 0; i < startOffset; i++) html += `<span class="svc-cal-cell empty"></span>`;
    for (let d = 1; d <= daysInMonth; d++) {
        const has = bookings.some(b => parseInt(b.day) === d);
        const isToday = d === now.getDate();
        const isSel = d === svcSelectedDay;
        html += `<button type="button" class="svc-cal-cell${has ? " has-booking" : ""}${isToday ? " today" : ""}${isSel ? " selected" : ""}" data-day="${d}">${d}${has ? '<span class="svc-cal-dot"></span>' : ""}</button>`;
    }
    grid.innerHTML = html;

    grid.querySelectorAll(".svc-cal-cell[data-day]").forEach(cell => {
        cell.addEventListener("click", () => {
            svcSelectedDay = parseInt(cell.dataset.day);
            renderSvcJuntaCalendar();
            renderSvcJuntaDetail(svcSelectedDay, bookings);
        });
    });

    if (svcSelectedDay) renderSvcJuntaDetail(svcSelectedDay, bookings);
    renderSvcJuntaAttendance(db);
}

function renderSvcJuntaDetail(day, bookings) {
    const box = document.getElementById("svcJuntaDetail");
    if (!box) return;
    const items = bookings.filter(b => parseInt(b.day) === day);
    box.style.display = "block";
    if (!items.length) {
        box.innerHTML = `<span class="svc-detail-empty">Día ${day}: sin padrinos asignados.</span>`;
        return;
    }
    box.innerHTML = `<span class="svc-detail-title">Día ${day}</span>` + items.map(b => `
        <div class="svc-detail-item">
            <i class="fa-solid fa-hands-praying"></i>
            <div>
                <strong>${b.sponsorName}</strong> <span class="svc-detail-sub">(${b.sponsorGroup || "—"})</span><br>
                <span class="svc-detail-sub">Solicita: ${b.requestingGroup}</span>
            </div>
        </div>`).join("");
}

function renderSvcJuntaAttendance(db) {
    const card = document.getElementById("svcJuntaAttendanceCard");
    const list = document.getElementById("svcJuntaAttendance");
    if (!card || !list) return;
    const region = getRegionForGroup(state.user.group);
    const groups = groupsByRegion[region] || [];
    const att = (db.juntaAttendance || []).filter(a => groups.includes(a.group));
    if (!att.length) { card.style.display = "none"; return; }
    card.style.display = "block";
    list.innerHTML = att.map(a => `
        <div class="svc-detail-item">
            <i class="fa-solid fa-circle-check color-green"></i>
            <div><strong>${a.group}</strong> · ${a.name} (${a.role}) <span class="svc-detail-sub">· llegó ${a.time}</span></div>
        </div>`).join("");
}

// ---- Mis Juntas (AI / LÍDER): agendar y gestionar juntas del grupo ----

function initMisJuntas() {
    const speakerSel = document.getElementById("svcJSpeaker");
    if (speakerSel && !speakerSel.dataset.filled) {
        const delGrupo = (state.members || []).filter(m => m.group === state.user.group);
        speakerSel.innerHTML = delGrupo.map(m => `<option value="${m.email}">${m.name} (militancia)</option>`).join("") +
            `<option value="__INVITADO__">Invitado especial…</option>`;
        speakerSel.dataset.filled = "1";
        speakerSel.addEventListener("change", () => {
            const g = document.getElementById("svcJGuestGroup");
            if (g) g.style.display = speakerSel.value === "__INVITADO__" ? "block" : "none";
        });
    }
    const dateInput = document.getElementById("svcJDate");
    if (dateInput && !dateInput.value) dateInput.value = new Date().toISOString().split("T")[0];
    renderMyJuntas();
}

function renderMyJuntas() {
    const list = document.getElementById("svcMyJuntasList");
    if (!list) return;
    const mias = (state.meetings || []).filter(m => m.createdBy === state.user.email)
        .sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    if (!mias.length) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-size:0.82rem; padding:0.75rem 0;">Aún no has publicado juntas.</p>`;
        return;
    }
    list.innerHTML = mias.map(m => `
        <div class="svc-detail-item">
            <i class="fa-solid fa-calendar-day"></i>
            <div style="flex:1;">
                <strong>${m.title}</strong>${m.isJav ? ' <span class="role-tag tag-jav" style="font-size:0.55rem; padding:2px 6px;">JAV</span>' : ""}<br>
                <span class="svc-detail-sub">${m.date || ""} · ${m.startTime || ""} · Ponente: ${m.speaker || "—"}</span>
            </div>
            <button type="button" class="btn-icon-del" data-deljunta="${m.id}" title="Eliminar junta"><i class="fa-solid fa-trash"></i></button>
        </div>`).join("");

    list.querySelectorAll("[data-deljunta]").forEach(btn => {
        btn.addEventListener("click", () => deleteMyJunta(btn.dataset.deljunta));
    });
}

function deleteMyJunta(id) {
    const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
    const idx = (db.meetings || []).findIndex(m => String(m.id) === String(id) && m.createdBy === state.user.email);
    if (idx === -1) return;
    const gone = db.meetings.splice(idx, 1)[0];
    db.changelog = db.changelog || [];
    db.changelog.unshift({
        action: "BAJA_JUNTA",
        details: `${state.user.name} canceló la junta "${gone.title}" (${state.user.group})`,
        user: `${state.user.name} (Tú)`,
        time: getFormattedTime()
    });
    localStorage.setItem("agua_viva_db", JSON.stringify(db));
    state.meetings = db.meetings;
    renderMyJuntas();
    renderMeetings();
    showToast("Junta cancelada y retirada del calendario.", "info");
}

function wireMisJuntasForm() {
    const form = document.getElementById("svcJuntaForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("svcJTitle").value.trim();
        const type = document.getElementById("svcJType").value;
        const dateVal = document.getElementById("svcJDate").value;
        const timeVal = document.getElementById("svcJTime").value;
        const xp = parseInt(document.getElementById("svcJXp").value) || 10;
        const isJav = document.getElementById("svcJIsJav").checked;
        const place = document.getElementById("svcJPlace").value.trim() || "Salón Principal";
        const speakerSel = document.getElementById("svcJSpeaker");

        let speaker = "", speakerEmail = "";
        if (speakerSel.value === "__INVITADO__") {
            speaker = document.getElementById("svcJGuestName").value.trim() || "Invitado";
        } else {
            const m = (state.members || []).find(x => x.email === speakerSel.value);
            speaker = m ? m.name : "—";
            speakerEmail = m ? m.email : "";
        }

        const p = dateParts(dateVal);
        const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
        db.meetings = db.meetings || [];
        const newMeeting = {
            id: Date.now(),
            calendar: "GROUP",
            type: type,
            title: title,
            topic: title,
            speakerType: speakerEmail ? "MILITANCIA" : "INVITADO",
            speaker: speaker,
            speakerEmail: speakerEmail,
            speakerGroup: state.user.group,
            speakerRegion: state.user.region,
            locationType: "GROUP",
            locationGroup: state.user.group,
            locationLink: "",
            locationDetails: place,
            info: `Grupo ${state.user.group} · ${place}`,
            date: dateVal,
            day: p.valid ? String(p.day) : "",
            month: p.valid ? p.weekday : "",
            time: `${p.valid ? p.day + " " + p.weekday : dateVal} · ${timeVal}`,
            startTime: timeVal,
            xp: xp,
            isJav: isJav,
            createdBy: state.user.email
        };
        db.meetings.push(newMeeting);

        // Notificación al ponente de la militancia
        if (speakerEmail) {
            db.notifications = db.notifications || {};
            db.notifications[speakerEmail] = db.notifications[speakerEmail] || [];
            db.notifications[speakerEmail].unshift({
                id: "evt_" + Date.now(),
                title: "📅 Nueva Junta Asignada",
                desc: `Se te asignó como ponente en "${title}" el ${dateVal} a las ${timeVal} (${state.user.group}).`,
                time: "Ahora mismo",
                type: "event",
                read: false,
                action: "sec-inicio"
            });
        }

        db.changelog = db.changelog || [];
        db.changelog.unshift({
            action: "ALTA_JUNTA",
            details: `${state.user.name} publicó la junta "${title}" en ${state.user.group}`,
            user: `${state.user.name} (Tú)`,
            time: getFormattedTime()
        });

        localStorage.setItem("agua_viva_db", JSON.stringify(db));
        state.meetings = db.meetings;
        state.changelog = db.changelog;
        form.reset();
        document.getElementById("svcJXp").value = 10;
        renderMyJuntas();
        renderMeetings();
        renderHomeNextEvent();
        showToast(`Junta "${title}" publicada en el calendario del grupo.`, "success");
    });
}

// Cableado de la sección Mi Servicio
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".svc-tab").forEach(tab => {
        tab.addEventListener("click", () => activateSvcTab(tab.dataset.svc));
    });
    const auditSearch = document.getElementById("svcAuditSearch");
    if (auditSearch) auditSearch.addEventListener("input", (e) => renderChangeLog(e.target.value));
    wireMisJuntasForm();
    renderServiceCard();
});
