// Lógica JavaScript del panel Superadmin de Agua Viva

const defaultState = {
    currentSimulatedRole: "superadmin",
    user: {
        name: "Mariana C.",
        role: "Coordinadora",
        sede: "Sede Centro"
    },
    members: [
        {
            id: "m1", name: "Río", email: "rio@email.com", phone: "55-9012-3456", sobrietyDate: "2026-01-02",
            realName: "Rogelio I.", age: 29, emergency: "Mamá 555-1234", joinDate: "Ago 2025",
            level: "Aurora Nv 5", levelNum: 5, xp: 580, racha: 42, cleanDays: 142, lastAttendance: "Hoy",
            status: "Activo", avatarColor: "#b91c1c", checkedIn: true, checkInTime: "19:02", xpGranted: 10,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "ALCOHOLISMO", militanciaStatus: "CONCIENCIA", experienciaNivel: "PADRINO",
            padrinoSince: "2026-05-01", sponsorName: "Mariana C.",
            scriptures: ["1er Inventario", "10mo de primera", "2do inventario"],
            exercises: ["Trinity"],
            padrinoApadrina: ["1er Inventario", "10mo de primera"],
            padrinoOrejea: ["1er Inventario", "10mo de primera", "2do inventario"],
            roleClass: "Padrino", serverRole: "Ninguno"
        },
        {
            id: "m2", name: "Nube", email: "nube@email.com", phone: "55-3456-7890", sobrietyDate: "2025-09-08",
            realName: "Natalia U.", age: 24, emergency: "Papá 555-5678", joinDate: "Feb 2025",
            level: "Constelación Nv 7", levelNum: 7, xp: 910, racha: 91, cleanDays: 290, lastAttendance: "Hoy",
            status: "Activo", avatarColor: "#1d4ed8", checkedIn: true, checkInTime: "19:04", xpGranted: 10,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "CODEPENDENCIA", militanciaStatus: "CONCIENCIA", experienciaNivel: "OREJA",
            orejaSince: "2025-12-15", sponsorName: "Pedro G.",
            scriptures: ["1er Inventario", "10mo de primera"],
            exercises: ["Duelo"],
            roleClass: "Oreja", serverRole: "Ninguno"
        },
        {
            id: "m3", name: "Coyote", email: "coyote@email.com", phone: "55-7890-1234", sobrietyDate: "2026-06-02",
            realName: "Carlos O.", age: 28, emergency: "Esposa 555-9012", joinDate: "Nov 2025",
            level: "Llama Nv 2", levelNum: 2, xp: 220, racha: 12, cleanDays: 22, lastAttendance: "Hoy",
            status: "Activo", avatarColor: "#c2410c", checkedIn: true, checkInTime: "19:11", xpGranted: 10,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "DROGADICCION", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO",
            apoyoSince: "2025-11-20", sponsorName: "Río",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Apoyo", serverRole: "Ninguno"
        },
        {
            id: "m4", name: "Sauce", email: "sauce@email.com", phone: "55-5678-9012", sobrietyDate: "2024-10-23",
            realName: "Saúl U.", age: 32, emergency: "Hermano 555-3456", joinDate: "Sept 2024",
            level: "Sol Nv 8", levelNum: 8, xp: 1870, racha: 187, cleanDays: 612, lastAttendance: "Hoy",
            status: "Activo", avatarColor: "#047857", checkedIn: true, checkInTime: "19:08", xpGranted: 10,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "NEUROSIS", militanciaStatus: "CONCIENCIA", experienciaNivel: "PADRINO",
            isPadrinoJav: true, padrinoSince: "2025-01-10", padrinoJavSince: "2025-06-15",
            sponsorName: "Mariana C.",
            scriptures: ["1er Inventario", "10mo de primera", "2do inventario", "10mo de segunda", "3er inventario"],
            exercises: ["Trinity", "Libertad bajo dios"],
            padrinoApadrina: ["1er Inventario", "10mo de primera", "2do inventario"],
            padrinoOrejea: ["1er Inventario", "10mo de primera", "2do inventario", "3er inventario"],
            padrinoJavApadrina: ["1er Inventario"],
            padrinoJavOrejea: ["1er Inventario", "10mo de primera"],
            roleClass: "Padrino JAV", serverRole: "Coach JAV"
        },
        {
            id: "m5", name: "Tierra", email: "tierra@email.com", phone: "55-1234-5678", sobrietyDate: "2026-03-26",
            realName: "Teresa I.", age: 21, emergency: "Madre 555-7890", joinDate: "Ene 2025",
            level: "Faro Nv 4", levelNum: 4, xp: 480, racha: 33, cleanDays: 90, lastAttendance: "Hoy",
            status: "Activo", avatarColor: "#556b2f", checkedIn: true, checkInTime: "19:05", xpGranted: 10,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "DEPENDIENTE", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO",
            apoyoSince: "2025-09-12", sponsorName: "Sauce",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Apoyo", serverRole: "Ninguno"
        },
        {
            id: "m6", name: "Ámbar", email: "ambar@email.com", phone: "55-4321-8765", sobrietyDate: "2026-03-21",
            realName: "Ambar A.", age: 22, emergency: "Tía 555-4321", joinDate: "Jun 2025",
            level: "Faro Nv 4", levelNum: 4, xp: 420, racha: 28, cleanDays: 95, lastAttendance: "Hoy",
            status: "Activo", avatarColor: "#be185d", checkedIn: true, checkInTime: "19:03", xpGranted: 15,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "CODEPENDENCIA", militanciaStatus: "CONCIENCIA", experienciaNivel: "OREJA",
            orejaSince: "2026-05-15", sponsorName: "Mariana C.",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Oreja", serverRole: "Ninguno"
        },
        {
            id: "m7", name: "Lince", email: "lince@email.com", phone: "55-9876-5432", sobrietyDate: "2026-05-08",
            realName: "Lucía I.", age: 26, emergency: "Padre 555-8765", joinDate: "Oct 2025",
            level: "Brasa Nv 3", levelNum: 3, xp: 310, racha: 0, cleanDays: 47, lastAttendance: "5 días",
            status: "Risk", avatarColor: "#be185d", checkedIn: false, checkInTime: "—", xpGranted: 0,
            isJav: false, region: "Región 1 CDMX", group: "Zaragoza",
            estigma: "CODEPENDENCIA", militanciaStatus: "EN_RIESGO", experienciaNivel: "APOYO",
            apoyoSince: "2025-10-10", sponsorName: "Pedro G.",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Apoyo", serverRole: "Ninguno"
        },
        {
            id: "m8", name: "Roble", email: "roble@email.com", phone: "55-8765-4321", sobrietyDate: "2026-05-03",
            realName: "Roberto O.", age: 27, emergency: "Amigo 555-2109", joinDate: "Nov 2025",
            level: "Brasa Nv 3", levelNum: 3, xp: 340, racha: 15, cleanDays: 52, lastAttendance: "Hace 1 sem",
            status: "Risk", avatarColor: "#556b2f", checkedIn: false, checkInTime: "—", xpGranted: 0,
            isJav: false, region: "Región 1 CDMX", group: "Ermita",
            estigma: "NEUROSIS", militanciaStatus: "EN_RIESGO", experienciaNivel: "APOYO",
            apoyoSince: "2025-11-05", sponsorName: "Diego V.",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Apoyo", serverRole: "Ninguno"
        },
        {
            id: "m9", name: "Bruma", email: "bruma@email.com", phone: "55-4567-8901", sobrietyDate: "2026-06-17",
            realName: "Beatriz R.", age: 16, emergency: "Madre 555-6543", joinDate: "Ene 2026",
            level: "Chispa JAV Nv 1", levelNum: 1, xp: 70, racha: 3, cleanDays: 7, lastAttendance: "Ayer",
            status: "Activo", avatarColor: "#6d28d9", checkedIn: false, checkInTime: "—", xpGranted: 0,
            isJav: true, region: "Región 1 CDMX", group: "Satélite",
            estigma: "CODEPENDENCIA", militanciaStatus: "CONCIENCIA", experienciaNivel: "OREJA",
            isOrejaJav: true, orejaJavSince: "2026-06-17", sponsorName: "Sauce",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Oreja JAV", serverRole: "Atracción Externa JAV"
        },
        {
            id: "m10", name: "Ceniza", email: "ceniza@email.com", phone: "55-2109-8765", sobrietyDate: "2026-04-21",
            realName: "Cesar N.", age: 23, emergency: "Padre 555-9876", joinDate: "May 2026",
            level: "Estrella Nv 1", levelNum: 1, xp: 64, racha: 64, cleanDays: 64, lastAttendance: "Hoy",
            status: "New", avatarColor: "#6d28d9", checkedIn: true, checkInTime: "19:21", xpGranted: 5,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "NEUROSIS", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO",
            apoyoSince: "2026-04-21", sponsorName: "Río",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Apoyo", serverRole: "Ninguno"
        },
        {
            id: "m11", name: "Estrella", email: "estrella@email.com", phone: "55-6543-2109", sobrietyDate: "2026-06-10",
            realName: "Esther R.", age: 25, emergency: "Mamá 555-1122", joinDate: "Mar 2026",
            level: "Chispa Nv 1", levelNum: 1, xp: 45, racha: 8, cleanDays: 14, lastAttendance: "Hace 4 días",
            status: "Activo", avatarColor: "#0369a1", checkedIn: false, checkInTime: "—", xpGranted: 0,
            isJav: false, region: "Región 1 CDMX", group: "Satélite",
            estigma: "BULINOREXICA", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO",
            apoyoSince: "2026-06-10", sponsorName: "Sauce",
            scriptures: ["1er Inventario"],
            exercises: [],
            roleClass: "Apoyo", serverRole: "Ninguno"
        }
    ],
    pendingAdminRequests: [
        { id: "pr1", name: "Lince", avatarColor: "#be185d", requestedRole: "LIDER", group: "Zaragoza" },
        { id: "pr2", name: "Bruma", avatarColor: "#6d28d9", requestedRole: "AE", group: "Satélite" },
        { id: "pr3", name: "Roble", avatarColor: "#556b2f", requestedRole: "AI", group: "Ermita" }
    ],
    activeCoordinators: [
        { id: "ac1", name: "Mariana C.", role: "LIDER", group: "Satélite", avatarColor: "#0F172A", email: "mariana@email.com" },
        { id: "ac2", name: "Pedro G.", role: "LIDER", group: "Zaragoza", avatarColor: "#c2410c", email: "pedro@email.com" },
        { id: "ac3", name: "Sofía P.", role: "AI", group: "Satélite", avatarColor: "#be185d", email: "sofia@email.com" },
        { id: "ac4", name: "Diego V.", role: "AE", group: "Ermita", avatarColor: "#047857", email: "diego@email.com" }
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
        "m6": [
            { title: "Junta semanal", details: "Sede Centro", date: "2026-05-26", xp: 10 },
            { title: "Sesión 1:1 padrino", details: "Café Luz", date: "2026-05-25", xp: 15 },
            { title: "Junta semanal", details: "Sede Centro", date: "2026-05-22", xp: 10 },
            { title: "Junta semanal", details: "Sede Norte", date: "2026-05-19", xp: 10 },
            { title: "Hacienda · retiro", details: "Tepoztlán", date: "2026-05-15", xp: 50 }
        ],
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
    escribientes: [
        { id: "e1", firstName: "Roberto", lastNameInitial: "M", gender: "MALE", group: "Zaragoza" },
        { id: "e2", firstName: "María", lastNameInitial: "S", gender: "FEMALE", group: "Satélite" },
        { id: "e3", firstName: "Fernando", lastNameInitial: "L", gender: "MALE", group: "Ermita" },
        { id: "e4", firstName: "Gabriela", lastNameInitial: "P", gender: "FEMALE", group: "Chicoloapan" },
        { id: "e5", firstName: "Héctor", lastNameInitial: "G", gender: "MALE", group: "Zaragoza" }
    ],
    groupsSemaphore: [
        { name: "Zaragoza", status: "GREEN", updatedBy: "AE Mario R.", time: "Hace 2 horas" },
        { name: "Sur", status: "GREEN", updatedBy: "Lider Clara E.", time: "Hace 5 horas" },
        { name: "Satélite", status: "YELLOW", updatedBy: "AI Sofia P.", time: "Hace 10 min" },
        { name: "Chicoloapan", status: "RED", updatedBy: "Nadie", time: "Pendiente" },
        { name: "Ermita", status: "GREEN", updatedBy: "AE Roberto D.", time: "Ayer" },
        { name: "Neza", status: "RED", updatedBy: "Nadie", time: "Pendiente" }
    ],
    changelog: [
        { action: "REGISTRO_ESCRIBIENTE", details: "Agregó a Escribiente Roberto M. a grupo Zaragoza", user: "Atracciones Diego V.", time: "16:20" },
        { action: "UPDATE_SEMAFORO", details: "Cambió Satélite a amarillo (Datos borrador)", user: "AI Sofia P.", time: "16:12" },
        { action: "REGISTRO_ESCRIBIENTE", details: "Agregó a Escribiente María S. a grupo Satélite", user: "Líder Clara E.", time: "15:45" },
        { action: "UPDATE_SEMAFORO", details: "Cambió Zaragoza a verde (Validado)", user: "Atracciones Diego V.", time: "14:10" }
    ]
};

let adminState = {};
let groupsByRegion = {};

function loadState() {
    const saved = localStorage.getItem("agua_viva_db");
    if (saved) {
        // Fusión defensiva
        adminState = { ...defaultState, ...JSON.parse(saved) };
        // Migración para forzar la actualización de los miembros con datos enriquecidos de AA
        if (adminState.members && adminState.members.length > 0 && !adminState.members[0].estigma) {
            adminState.members = defaultState.members;
            saveState();
        }
        // Migración para corregir correos faltantes en activeCoordinators
        if (adminState.activeCoordinators) {
            const emailMap = {
                "Mariana C.": "mariana@email.com",
                "Pedro G.": "pedro@email.com",
                "Sofía P.": "sofia@email.com",
                "Diego V.": "diego@email.com"
            };
            let updated = false;
            adminState.activeCoordinators.forEach(c => {
                if (!c.email && emailMap[c.name]) {
                    c.email = emailMap[c.name];
                    updated = true;
                }
            });
            if (updated) {
                saveState();
            }
        }
        if (adminState.currentSimulatedRole === "member") {
            adminState.currentSimulatedRole = "superadmin";
            saveState();
        }
    } else {
        adminState = { ...defaultState };
        saveState();
    }

    if (!adminState.activeHacienda) {
        const start = new Date();
        start.setDate(start.getDate() + 12);
        adminState.activeHacienda = {
            name: "Hacienda Región 1 (Experiencia)",
            startDate: start.toISOString().split("T")[0]
        };
        saveState();
    }

    // Carga de catálogo de regiones y sedes persistentes
    const defaultGroupsByRegion = {
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
    if (!adminState.groupsByRegion) {
        adminState.groupsByRegion = { ...defaultGroupsByRegion };
        saveState();
    }
    groupsByRegion = adminState.groupsByRegion;

    if (!adminState.juntaAttendance) {
        adminState.juntaAttendance = [];
    }
    if (!adminState.juntaCalendar) {
        adminState.juntaCalendar = [];
    }
}

function saveState() {
    localStorage.setItem("agua_viva_db", JSON.stringify(adminState));
}

const SUPERADMIN_USER = "CarpDiemAguaViva";
const SUPERADMIN_PASS = "SuperAdmind0123456789";
const SUPER_AUTH_KEY = "av_superadmin_authed";

function isSuperadminAuthed() {
    try { return sessionStorage.getItem(SUPER_AUTH_KEY) === "1"; }
    catch (e) { return false; }
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();

    if (!isSuperadminAuthed()) {
        showSuperGate();
        wireSuperGate();
        return;
    }

    initSuperadminUI();
});

function initSuperadminUI() {
    // Ya autenticado: fijamos el rol simulado como superadmin.
    adminState.currentSimulatedRole = "superadmin";
    saveState();

    seedAnnualCycle();
    renderSuperadminPanel();
    wireSuperSubtabs();
    initPortalEventForm();
    renderAnnualBoard();

    // Selector de pestañas para solicitudes pendientes
    const tabContainer = document.getElementById("superPendingTabs");
    if (tabContainer) {
        const tabBtns = tabContainer.querySelectorAll("button");
        const listCoordinators = document.getElementById("superPendingList");
        const listRoles = document.getElementById("superPendingRolesList");

        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                tabBtns.forEach(b => {
                    b.classList.remove("active");
                    b.style.backgroundColor = "transparent";
                    b.style.color = "var(--admin-text-secondary)";
                });
                btn.classList.add("active");
                btn.style.backgroundColor = "var(--admin-purple)";
                btn.style.color = "white";

                const tab = btn.dataset.tab;
                if (tab === "COORDINATORS") {
                    listCoordinators.style.display = "flex";
                    listRoles.style.display = "none";
                } else {
                    listCoordinators.style.display = "none";
                    listRoles.style.display = "flex";
                }
            });
        });
    }

    // Pastillas de cambio de rol
    const pillRoleAdmin = document.getElementById("pillRoleAdmin");
    const pillRoleSuper = document.getElementById("pillRoleSuper");

    const pills = [pillRoleAdmin, pillRoleSuper];
    pills.forEach(pill => {
        if (!pill) return;
        // Sincroniza la pastilla activa con el rol simulado guardado
        pill.classList.toggle("active", pill.dataset.role === (adminState.currentSimulatedRole || "superadmin"));
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            
            const role = pill.dataset.role;
            adminState.currentSimulatedRole = role;
            saveState();
            
            if (role !== "superadmin") {
                window.location.href = "admin.html";
            }
        });
    });

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

        const activeEmail = localStorage.getItem("agua_viva_active_user_email") || "superadmin@email.com";
        const simUserMariana = document.getElementById("simUserMariana");
        const simUserSuper = document.getElementById("simUserSuper");

        if (activeEmail === "mariana@email.com" && simUserMariana) simUserMariana.classList.add("active");
        else if (activeEmail === "superadmin@email.com" && simUserSuper) simUserSuper.classList.add("active");

        const setupSimButton = (btn, email, role) => {
            if (!btn) return;
            btn.addEventListener("click", () => {
                localStorage.setItem("agua_viva_active_user_email", email);
                adminState.currentSimulatedRole = role;
                saveState();
                
                showSuperToast(`Simulando como ${email.split('@')[0]}...`, "info");
                simPanel.classList.remove("active");
                
                setTimeout(() => {
                    if (role === "superadmin") {
                        window.location.href = "superadmin.html";
                    } else if (role === "admin" && window.location.pathname.includes("superadmin.html")) {
                        window.location.href = "admin.html";
                    } else {
                        window.location.reload();
                    }
                }, 500);
            });
        };

        setupSimButton(simUserMariana, "mariana@email.com", "admin");
        setupSimButton(simUserSuper, "superadmin@email.com", "superadmin");
    }

    // Botón de cerrar sesión del portal (vuelve al gate de credenciales)
    const logoutBtn = document.getElementById("superLogoutBtn");
    if (logoutBtn) logoutBtn.addEventListener("click", logoutSuperadmin);

    // Inicializa la gestión de sedes y regiones
    initCentralRegistry();

    initJuntaAtraccionesControl();
}

// Gate de acceso por credenciales de fábrica
function showSuperGate() {
    const gate = document.getElementById("superGate");
    const layout = document.querySelector(".admin-layout");
    const simWidget = document.getElementById("simWidget");
    if (gate) gate.classList.add("active");
    if (layout) layout.style.display = "none";
    if (simWidget) simWidget.style.display = "none";
    const userInput = document.getElementById("superUser");
    if (userInput) setTimeout(() => userInput.focus(), 50);
}

function wireSuperGate() {
    const form = document.getElementById("superGateForm");
    const errorBox = document.getElementById("superGateError");
    const hintBtn = document.getElementById("superGateHintBtn");

    if (hintBtn) {
        hintBtn.addEventListener("click", () => {
            document.getElementById("superUser").value = SUPERADMIN_USER;
            document.getElementById("superPass").value = SUPERADMIN_PASS;
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = (document.getElementById("superUser").value || "").trim();
            const pass = document.getElementById("superPass").value || "";

            if (user === SUPERADMIN_USER && pass === SUPERADMIN_PASS) {
                try { sessionStorage.setItem(SUPER_AUTH_KEY, "1"); } catch (err) {}
                const gate = document.getElementById("superGate");
                if (gate) {
                    gate.classList.add("granted");
                    setTimeout(() => {
                        gate.classList.remove("active", "granted");
                        const layout = document.querySelector(".admin-layout");
                        const simWidget = document.getElementById("simWidget");
                        if (layout) layout.style.display = "";
                        if (simWidget) simWidget.style.display = "";
                        initSuperadminUI();
                    }, 650);
                }
            } else {
                if (errorBox) {
                    errorBox.textContent = "Usuario o contraseña de fábrica incorrectos.";
                    errorBox.classList.add("visible");
                }
                const card = document.querySelector(".super-gate-card");
                if (card) {
                    card.classList.remove("shake");
                    void card.offsetWidth; // reinicia la animación
                    card.classList.add("shake");
                }
                const passInput = document.getElementById("superPass");
                if (passInput) { passInput.value = ""; passInput.focus(); }
            }
        });
    }
}

function logoutSuperadmin() {
    try { sessionStorage.removeItem(SUPER_AUTH_KEY); } catch (e) {}
    window.location.reload();
}

// Sub-pestañas internas del portal: muestra una sola sección a la vez
// (Solicitudes y Admins · Regiones y Sedes · Junta de Atracciones).
function wireSuperSubtabs() {
    const tabs = document.querySelectorAll(".super-subtab");
    const views = document.querySelectorAll(".super-subview");
    if (!tabs.length || !views.length) return;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.subview;
            tabs.forEach(t => t.classList.toggle("active", t === tab));
            views.forEach(v => v.classList.toggle("active", v.id === target));
            if (target === "sv-junta" && typeof renderJuntaAttendanceButtons === "function") {
                renderJuntaAttendanceButtons();
            }
            if (target === "sv-eventos" && typeof renderAnnualBoard === "function") {
                renderAnnualBoard();
            }
        });
    });
}

function renderSuperadminPanel() {
    const pendingList = document.getElementById("superPendingList");
    const pendingRolesList = document.getElementById("superPendingRolesList");
    const activeAdminsTable = document.getElementById("superAdminsTableBody");

    if (pendingList) pendingList.innerHTML = "";
    if (pendingRolesList) pendingRolesList.innerHTML = "";
    if (activeAdminsTable) activeAdminsTable.innerHTML = "";

    // Actualiza los KPIs
    const pendingCoordinatorsCount = adminState.pendingAdminRequests.length;
    const pendingRolesCount = (adminState.pendingRoleRequests || []).length;

    document.getElementById("lblSuperAdminsCount").textContent = adminState.activeCoordinators.length;
    document.getElementById("lblSuperPendingCount").textContent = pendingCoordinatorsCount + pendingRolesCount;

    if (adminState.pendingAdminRequests.length === 0) {
        pendingList.innerHTML = `<div style="text-align: center; color: var(--admin-text-muted); font-size: 0.8rem; padding: 2rem;">No hay solicitudes de alta de coordinador pendientes.</div>`;
    } else {
        adminState.pendingAdminRequests.forEach(req => {
            const card = document.createElement("div");
            card.className = "pending-coord-card";
            card.style.display = "flex";
            card.style.justifyContent = "space-between";
            card.style.alignItems = "center";
            card.style.backgroundColor = "var(--admin-bg-white)";
            card.style.border = "1px solid var(--admin-border-color)";
            card.style.padding = "0.75rem";
            card.style.borderRadius = "8px";
            
            let roleFull = req.requestedRole === "LIDER" ? "Líder de Grupo" : req.requestedRole === "AE" ? "Atracciones Externas (AE)" : "Atracciones Internas (AI)";

            card.innerHTML = `
                <div class="pcc-left" style="display: flex; gap: 0.75rem; align-items: center;">
                    <div class="pcc-avatar" style="background-color: ${req.avatarColor || '#0F172A'}; width: 36px; height: 36px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.95rem;">${req.name.substring(0,1).toUpperCase()}</div>
                    <div class="pcc-details" style="display: flex; flex-direction: column;">
                        <span class="pcc-name" style="font-weight: 500; font-size: 0.9rem; color: var(--admin-text-primary);">${req.name}</span>
                        <span class="pcc-req-role" style="font-size: 0.75rem; color: var(--admin-text-muted);">Solicita: <strong class="text-purple">${roleFull}</strong> &middot; Grupo: ${req.group}</span>
                    </div>
                </div>
                <div class="pcc-actions" style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-primary btn-xs" onclick="approveCoordinator('${req.id}')">Aprobar</button>
                    <button class="btn btn-outline btn-xs" onclick="rejectCoordinator('${req.id}')">Rechazar</button>
                </div>
            `;
            pendingList.appendChild(card);
        });
    }

    if (pendingRolesList) {
        if (!adminState.pendingRoleRequests || adminState.pendingRoleRequests.length === 0) {
            pendingRolesList.innerHTML = `<div style="text-align: center; color: var(--admin-text-muted); font-size: 0.8rem; padding: 2rem;">No hay solicitudes de cargo pendientes.</div>`;
        } else {
            adminState.pendingRoleRequests.forEach(req => {
                const card = document.createElement("div");
                card.className = "pending-coord-card";
                card.style.display = "flex";
                card.style.justifyContent = "space-between";
                card.style.alignItems = "center";
                card.style.backgroundColor = "var(--admin-bg-white)";
                card.style.border = "1px solid var(--admin-border-color)";
                card.style.padding = "0.75rem";
                card.style.borderRadius = "8px";

                let reqDetails = "";
                if (req.requestedRole !== "Apoyo" && req.requestedServer !== "Ninguno") {
                    reqDetails = `Clasificación: <strong class="text-purple">${req.requestedRole}</strong> & Cargo: <strong class="text-green">${req.requestedServer}</strong>`;
                } else if (req.requestedRole !== "Apoyo") {
                    reqDetails = `Clasificación: <strong class="text-purple">${req.requestedRole}</strong>`;
                } else {
                    reqDetails = `Cargo: <strong class="text-green">${req.requestedServer}</strong>`;
                }

                card.innerHTML = `
                    <div class="pcc-left" style="display: flex; gap: 0.75rem; align-items: center;">
                        <div class="pcc-avatar" style="background-color: var(--admin-purple); width: 36px; height: 36px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.95rem;">${req.name.substring(0,1).toUpperCase()}</div>
                        <div class="pcc-details" style="display: flex; flex-direction: column;">
                            <span class="pcc-name" style="font-weight: 500; font-size: 0.9rem; color: var(--admin-text-primary);">${req.name}</span>
                            <span class="pcc-req-role" style="font-size: 0.75rem; color: var(--admin-text-muted);">${reqDetails} &middot; Grupo: ${req.group}</span>
                        </div>
                    </div>
                    <div class="pcc-actions" style="display: flex; gap: 0.5rem;">
                        <button class="btn btn-primary btn-xs" onclick="approveRoleRequest('${req.id}')">Aprobar</button>
                        <button class="btn btn-outline btn-xs" onclick="rejectRoleRequest('${req.id}')">Rechazar</button>
                    </div>
                `;
                pendingRolesList.appendChild(card);
            });
        }
    }

    // Renderiza los coordinadores activos
    if (activeAdminsTable) {
        adminState.activeCoordinators.forEach(admin => {
            const tr = document.createElement("tr");
            
            let roleFull = admin.role === "LIDER" ? "Líder de Grupo" : admin.role === "AE" ? "Atracciones Externas (AE)" : "Atracciones Internas (AI)";

            tr.innerHTML = `
                <td>
                    <div class="dt-member-cell">
                        <div class="dt-avatar" style="background-color: ${admin.avatarColor || '#0F172A'};">${admin.name.substring(0, 1).toUpperCase()}</div>
                        <span class="dt-name">${admin.name}</span>
                    </div>
                </td>
                <td><strong>${roleFull}</strong></td>
                <td><span class="badge badge-apoyo">${admin.group}</span></td>
                <td class="actions-cell text-right">
                    <button class="btn btn-outline btn-xs" onclick="revokeAdmin('${admin.id}')" title="Revocar permisos administrativos">
                        Revocar
                    </button>
                </td>
            `;
            activeAdminsTable.appendChild(tr);
        });
    }
}

window.approveCoordinator = function(id) {
    const reqIndex = adminState.pendingAdminRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingAdminRequests[reqIndex];
    adminState.pendingAdminRequests.splice(reqIndex, 1);

    // Crea el perfil de coordinador admin activo
    const memberMatch = (adminState.members || []).find(m => m.name === req.name);
    const newAdmin = {
        id: "ac" + Date.now(),
        name: req.name,
        role: req.requestedRole,
        group: req.group,
        region: (memberMatch && memberMatch.region) || (typeof AVPerm !== "undefined" ? AVPerm.getRegionForGroup(req.group) : "Región 1 CDMX"),
        avatarColor: req.avatarColor,
        email: (memberMatch && memberMatch.email) || (req.name.toLowerCase().split(" ")[0] + "@email.com")
    };
    adminState.activeCoordinators.push(newAdmin);

    // También actualiza el rol en la lista de miembros si existe
    const member = adminState.members.find(m => m.name === req.name);
    if (member) {
        member.role = req.requestedRole;
        member.level = req.requestedRole === "LIDER" ? "Líder de Grupo" : req.requestedRole === "AE" ? "AE (Atracciones Externas)" : "AI (Atracciones Internas)";
    }

    saveState();
    renderSuperadminPanel();
    showSuperToast(`¡Alta autorizada! ${req.name} aprobado como ${req.requestedRole}.`, "success");
};

window.rejectCoordinator = function(id) {
    const reqIndex = adminState.pendingAdminRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingAdminRequests[reqIndex];
    adminState.pendingAdminRequests.splice(reqIndex, 1);

    saveState();
    renderSuperadminPanel();
    showSuperToast(`Solicitud de ${req.name} rechazada.`, "info");
};

window.revokeAdmin = function(id) {
    if (id === "ac1") {
        showSuperToast("No puedes revocar tus propios accesos administrativos.", "error");
        return;
    }

    const adminIndex = adminState.activeCoordinators.findIndex(a => a.id === id);
    if (adminIndex === -1) return;

    const admin = adminState.activeCoordinators[adminIndex];
    adminState.activeCoordinators.splice(adminIndex, 1);

    // Degrada al miembro en el directorio general
    const member = adminState.members.find(m => m.name === admin.name);
    if (member) {
        member.role = "APOYO";
        member.level = "Chispa Nv 1";
    }

    // Devuelve a solicitudes pendientes para el ciclo de simulación
    const newReq = {
        id: "pr" + (adminState.pendingAdminRequests.length + 1),
        name: admin.name,
        avatarColor: admin.avatarColor,
        requestedRole: admin.role,
        group: admin.group
    };
    adminState.pendingAdminRequests.push(newReq);

    saveState();
    renderSuperadminPanel();
    showSuperToast(`Rol de admin revocado para ${admin.name}. Permisos degradados.`, "info");
};

function showSuperToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "25px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.backgroundColor = type === "success" ? "rgba(15, 23, 42, 0.95)" : "rgba(239, 68, 68, 0.95)";
    toast.style.color = "#fff";
    toast.style.padding = "0.75rem 1.5rem";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "0.85rem";
    toast.style.fontWeight = "500";
    toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    toast.style.zIndex = "3000";
    toast.style.opacity = "0";
    toast.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    toast.style.pointerEvents = "none";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "0.5rem";
    
    let icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: ${type === 'success' ? '#10B981' : '#fff'};"></i> <span>${message}</span>`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(0)";
        toast.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(20px)";
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

window.approveRoleRequest = function(id) {
    const reqIndex = adminState.pendingRoleRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingRoleRequests[reqIndex];
    adminState.pendingRoleRequests.splice(reqIndex, 1);

    // Busca el miembro
    const member = adminState.members.find(m => m.email === req.email);
    if (member) {
        if (req.requestedRole !== "Apoyo") {
            member.roleClass = req.requestedRole;
            member.role = req.requestedRole;
        }
        if (req.requestedServer !== "Ninguno") {
            member.serverRole = req.requestedServer;
        }
        if (member.roleClass === "Padrino" || member.roleClass === "Oreja") {
            member.level = `${member.roleClass} · Nv ${member.levelNum || 1}`;
        }
    }

    saveState();
    renderSuperadminPanel();
    showSuperToast(`¡Cargo/Clasificación aprobada para ${req.name}!`, "success");
};

window.rejectRoleRequest = function(id) {
    const reqIndex = adminState.pendingRoleRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingRoleRequests[reqIndex];
    adminState.pendingRoleRequests.splice(reqIndex, 1);

    saveState();
    renderSuperadminPanel();
    showSuperToast(`Solicitud de cargo para ${req.name} rechazada.`, "info");
};

// REGISTRO CENTRAL DE REGIONES Y SEDES (GESTIÓN SUPERADMIN)
let currentSelectedRegion = null;
let pendingDeleteAction = null;

function initCentralRegistry() {
    const btnAddRegion = document.getElementById("btnAddRegion");
    const btnAddGroup = document.getElementById("btnAddGroup");
    const btnCancelWarning = document.getElementById("btnCancelSuperWarning");
    const btnConfirmWarning = document.getElementById("btnConfirmSuperWarning");
    const txtConfirmInput = document.getElementById("txtSuperWarningConfirm");

    if (btnAddRegion) {
        btnAddRegion.addEventListener("click", () => {
            const input = document.getElementById("txtNewRegionName");
            const regName = (input.value || "").trim();
            if (!regName) {
                showSuperToast("Por favor escribe el nombre de la región.", "error");
                return;
            }
            if (adminState.groupsByRegion[regName]) {
                showSuperToast("Esta región ya existe en el sistema.", "error");
                return;
            }
            adminState.groupsByRegion[regName] = [];
            saveState();
            input.value = "";
            renderSuperRegions();
            showSuperToast(`¡Región "${regName}" creada con éxito!`, "success");
        });
    }

    if (btnAddGroup) {
        btnAddGroup.addEventListener("click", () => {
            const input = document.getElementById("txtNewGroupName");
            const gName = (input.value || "").trim();
            if (!gName) {
                showSuperToast("Por favor escribe el nombre de la sede.", "error");
                return;
            }
            if (!currentSelectedRegion) {
                showSuperToast("Selecciona una región primero.", "error");
                return;
            }
            
            let exists = false;
            for (const groups of Object.values(adminState.groupsByRegion)) {
                if (groups.map(g => g.toLowerCase()).includes(gName.toLowerCase())) {
                    exists = true;
                    break;
                }
            }
            if (exists) {
                showSuperToast("Ya existe una sede con ese nombre en el sistema.", "error");
                return;
            }

            adminState.groupsByRegion[currentSelectedRegion].push(gName);
            saveState();
            input.value = "";
            renderSuperRegions();
            renderSuperGroups(currentSelectedRegion);
            showSuperToast(`¡Sede "${gName}" agregada a ${currentSelectedRegion}!`, "success");
        });
    }

    if (btnCancelWarning) {
        btnCancelWarning.addEventListener("click", hideSuperWarningModal);
    }

    if (btnConfirmWarning) {
        btnConfirmWarning.addEventListener("click", () => {
            if (txtConfirmInput && txtConfirmInput.value === "ELIMINAR") {
                if (typeof pendingDeleteAction === "function") {
                    pendingDeleteAction();
                }
                hideSuperWarningModal();
            }
        });
    }

    if (txtConfirmInput) {
        txtConfirmInput.addEventListener("input", (e) => {
            if (btnConfirmWarning) {
                btnConfirmWarning.disabled = (e.target.value !== "ELIMINAR");
            }
        });
    }

    renderSuperRegions();
}

function renderSuperRegions() {
    const listContainer = document.getElementById("superRegionsList");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    const regions = Object.keys(adminState.groupsByRegion || {});
    if (regions.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; color:var(--admin-text-muted); font-size:0.85rem; padding:1.5rem;">No hay regiones registradas.</div>`;
        return;
    }

    regions.forEach(regName => {
        const groups = adminState.groupsByRegion[regName] || [];
        const item = document.createElement("div");
        item.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border:1px solid var(--admin-border); border-radius:8px; cursor:pointer; background:#fafafa; font-size:0.85rem; font-weight:500; transition:all 0.2s; margin-bottom:0.25rem;";
        
        if (currentSelectedRegion === regName) {
            item.style.background = "rgba(124, 58, 237, 0.1)";
            item.style.borderColor = "var(--admin-purple)";
            item.style.color = "var(--admin-purple)";
        }

        item.innerHTML = `
            <span><i class="fa-solid fa-map" style="margin-right:0.5rem; opacity:0.8;"></i> ${regName} <span style="font-size:0.75rem; font-weight:400; opacity:0.75; margin-left:0.25rem;">(${groups.length} sedes)</span></span>
            <button type="button" class="btn btn-outline btn-xs delete-region-btn" style="color:#ef4444; border-color:#fee2e2; padding:0.15rem 0.4rem; background:#fff; font-size:0.75rem; border-radius:4px; transition:all 0.2s;" title="Eliminar Región permanentemente"><i class="fa-solid fa-trash-can"></i></button>
        `;

        item.addEventListener("click", (e) => {
            if (e.target.closest(".delete-region-btn")) {
                e.stopPropagation();
                promptDeleteRegion(regName);
                return;
            }
            currentSelectedRegion = regName;
            renderSuperRegions();
            renderSuperGroups(regName);
        });

        listContainer.appendChild(item);
    });
}

function renderSuperGroups(regionName) {
    const emptyView = document.getElementById("superGroupsManagementEmpty");
    const contentView = document.getElementById("superGroupsManagementContent");
    const titleLabel = document.getElementById("lblSuperSelectedRegionTitle");
    const listContainer = document.getElementById("superGroupsList");

    if (emptyView) emptyView.style.display = "none";
    if (contentView) contentView.style.display = "block";
    if (titleLabel) titleLabel.innerHTML = `<i class="fa-solid fa-house-chimney text-purple" style="color:var(--admin-purple); margin-right:0.25rem;"></i> Sedes de ${regionName}`;

    if (!listContainer) return;
    listContainer.innerHTML = "";

    const groups = adminState.groupsByRegion[regionName] || [];
    if (groups.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; color:var(--admin-text-muted); font-size:0.85rem; padding:1.5rem;">No hay sedes registradas en esta región.</div>`;
        return;
    }

    groups.forEach(gName => {
        const item = document.createElement("div");
        item.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border:1px solid var(--admin-border); border-radius:8px; background:#fafafa; font-size:0.85rem; font-weight:500; margin-bottom:0.25rem;";

        const membersCount = adminState.members ? adminState.members.filter(m => m.group === gName).length : 0;
        const coordsCount = adminState.activeCoordinators ? adminState.activeCoordinators.filter(c => c.group === gName).length : 0;

        item.innerHTML = `
            <span><i class="fa-solid fa-house-chimney" style="margin-right:0.5rem; opacity:0.8; color:var(--admin-purple);"></i> ${gName}
                <span class="badge" style="background:#eee; color:#666; font-size:0.7rem; font-weight:400; padding:0.05rem 0.35rem; margin-left:0.25rem; border-radius:8px;">${membersCount} miembros</span>
                ${coordsCount > 0 ? `<span class="badge" style="background:rgba(124, 58, 237, 0.1); color:var(--admin-purple); font-size:0.7rem; font-weight:400; padding:0.05rem 0.35rem; margin-left:0.15rem; border-radius:8px;">${coordsCount} coords</span>` : ''}
            </span>
            <button type="button" class="btn btn-outline btn-xs delete-group-btn" style="color:#ef4444; border-color:#fee2e2; padding:0.15rem 0.4rem; background:#fff; font-size:0.75rem; border-radius:4px; transition:all 0.2s;" title="Eliminar Sede permanentemente"><i class="fa-solid fa-trash-can"></i></button>
        `;

        item.querySelector(".delete-group-btn").addEventListener("click", () => {
            promptDeleteGroup(regionName, gName);
        });

        listContainer.appendChild(item);
    });
}

function showDeleteWarningModal(title, msg, stats, callback) {
    const modal = document.getElementById("superWarningModal");
    const msgLabel = document.getElementById("lblSuperWarningMessage");
    const statsContainer = document.getElementById("lblSuperWarningStats");
    const txtConfirmInput = document.getElementById("txtSuperWarningConfirm");
    const btnConfirm = document.getElementById("btnConfirmSuperWarning");

    if (!modal) return;

    if (msgLabel) msgLabel.innerHTML = msg;
    if (statsContainer) statsContainer.innerHTML = stats;
    if (txtConfirmInput) txtConfirmInput.value = "";
    if (btnConfirm) btnConfirm.disabled = true;

    pendingDeleteAction = callback;

    modal.style.display = "flex";
    modal.classList.remove("hidden");
}

function hideSuperWarningModal() {
    const modal = document.getElementById("superWarningModal");
    if (modal) {
        modal.style.display = "none";
        modal.classList.add("hidden");
    }
    pendingDeleteAction = null;
}

function promptDeleteRegion(regionName) {
    const groups = adminState.groupsByRegion[regionName] || [];
    let membersCount = 0;
    let coordsCount = 0;

    if (adminState.members) {
        membersCount = adminState.members.filter(m => groups.includes(m.group)).length;
    }
    if (adminState.activeCoordinators) {
        coordsCount = adminState.activeCoordinators.filter(c => groups.includes(c.group)).length;
    }

    const title = "Eliminar Región permanentemente";
    const msg = `Estás a punto de eliminar la <strong>${regionName}</strong> del catálogo de la comunidad. Esta es una <strong>acción radical e irreversible</strong>.`;
    const stats = `
        <strong>Impacto en Cascada:</strong><br>
        • Sedes eliminadas: <strong>${groups.length}</strong> (${groups.join(', ') || 'ninguna'})<br>
        • Integrantes desvinculados: <strong>${membersCount}</strong> (quedarán sin sede asignada)<br>
        • Coordinadores revocados: <strong>${coordsCount}</strong> (perderán sus accesos administrativos)<br>
        • Se eliminará la configuración de la Hacienda regional asociada.
    `;

    showDeleteWarningModal(title, msg, stats, () => {
        groups.forEach(gName => {
            if (adminState.groupLocations) {
                delete adminState.groupLocations[gName];
            }
        });
        
        if (adminState.haciendaLocations) {
            delete adminState.haciendaLocations[regionName];
        }

        if (adminState.activeCoordinators) {
            adminState.activeCoordinators = adminState.activeCoordinators.filter(c => !groups.includes(c.group));
        }

        if (adminState.members) {
            adminState.members.forEach(m => {
                if (groups.includes(m.group)) {
                    m.group = "";
                    m.region = "";
                    if (m.roleClass === "Líder" || m.role === "LIDER" || m.role === "AE" || m.role === "AI") {
                        m.role = "APOYO";
                        m.roleClass = "Apoyo";
                        m.serverRole = "Ninguno";
                    }
                }
            });
        }

        delete adminState.groupsByRegion[regionName];

        if (currentSelectedRegion === regionName) {
            currentSelectedRegion = null;
            const emptyView = document.getElementById("superGroupsManagementEmpty");
            const contentView = document.getElementById("superGroupsManagementContent");
            if (emptyView) emptyView.style.display = "none";
            if (contentView) contentView.style.display = "none";
        }

        saveState();
        renderSuperadminPanel();
        renderSuperRegions();

        showSuperToast(`¡Región "${regionName}" eliminada con éxito!`, "success");
    });
}

function promptDeleteGroup(regionName, groupName) {
    let membersCount = 0;
    let coordsCount = 0;

    if (adminState.members) {
        membersCount = adminState.members.filter(m => m.group === groupName).length;
    }
    if (adminState.activeCoordinators) {
        coordsCount = adminState.activeCoordinators.filter(c => c.group === groupName).length;
    }

    const title = "Eliminar Sede permanentemente";
    const msg = `Estás a punto de eliminar la sede <strong>${groupName}</strong> de la <strong>${regionName}</strong>. Esta es una <strong>acción crítica</strong>.`;
    const stats = `
        <strong>Impacto en Cascada:</strong><br>
        • Integrantes desvinculados: <strong>${membersCount}</strong> (quedarán sin sede asignada)<br>
        • Coordinadores revocados: <strong>${coordsCount}</strong> (perderán sus accesos administrativos)<br>
        • Se borrará el enlace de mapa configurado para esta sede.
    `;

    showDeleteWarningModal(title, msg, stats, () => {
        if (adminState.groupLocations) {
            delete adminState.groupLocations[groupName];
        }

        if (adminState.activeCoordinators) {
            adminState.activeCoordinators = adminState.activeCoordinators.filter(c => c.group !== groupName);
        }

        if (adminState.members) {
            adminState.members.forEach(m => {
                if (m.group === groupName) {
                    m.group = "";
                    if (m.roleClass === "Líder" || m.role === "LIDER" || m.role === "AE" || m.role === "AI") {
                        m.role = "APOYO";
                        m.roleClass = "Apoyo";
                        m.serverRole = "Ninguno";
                    }
                }
            });
        }

        adminState.groupsByRegion[regionName] = adminState.groupsByRegion[regionName].filter(g => g !== groupName);

        saveState();
        renderSuperadminPanel();
        renderSuperRegions();
        renderSuperGroups(regionName);

        showSuperToast(`¡Sede "${groupName}" eliminada con éxito!`, "success");
    });
}

function initJuntaAtraccionesControl() {
    const juntaDay = document.getElementById("juntaDay");
    if (juntaDay) {
        juntaDay.innerHTML = "";
        for (let d = 1; d <= 31; d++) {
            const opt = document.createElement("option");
            opt.value = d;
            opt.textContent = d;
            juntaDay.appendChild(opt);
        }
    }

    const juntaReqGroup = document.getElementById("juntaReqGroup");
    if (juntaReqGroup) {
        juntaReqGroup.innerHTML = "";
        const allGroups = [];
        for (const region in groupsByRegion) {
            groupsByRegion[region].forEach(g => {
                if (!allGroups.includes(g)) {
                    allGroups.push(g);
                }
            });
        }
        allGroups.sort();
        allGroups.forEach(g => {
            const opt = document.createElement("option");
            opt.value = g;
            opt.textContent = g;
            juntaReqGroup.appendChild(opt);
        });
    }

    const juntaControlRegion = document.getElementById("juntaControlRegion");
    if (juntaControlRegion) {
        juntaControlRegion.innerHTML = "";
        
        const optAll = document.createElement("option");
        optAll.value = "ALL";
        optAll.textContent = "Todas las regiones";
        juntaControlRegion.appendChild(optAll);
        
        for (const region in groupsByRegion) {
            const opt = document.createElement("option");
            opt.value = region;
            opt.textContent = region;
            juntaControlRegion.appendChild(opt);
        }
        
        juntaControlRegion.addEventListener("change", () => {
            renderJuntaAttendanceButtons();
        });
    }

    const sponsorSearch = document.getElementById("juntaSponsorSearch");
    const resultsContainer = document.getElementById("juntaSponsorSearchResults");
    const hiddenNameInput = document.getElementById("juntaSponsorName");
    const hiddenGroupInput = document.getElementById("juntaSponsorGroup");

    const getPadrinosList = () => {
        return (adminState.members || []).filter(m =>
            (m.roleClass && m.roleClass.toLowerCase() === "padrino") ||
            (m.role && m.role.toLowerCase() === "padrino") ||
            (m.serverRole && m.serverRole.toLowerCase().includes("padrino"))
        );
    };

    const SCRIPTURE_ORDER = ["1er inventario", "10mo de primera", "2do inventario", "10mo de 2da", "3er inventario", "10 de 3ra", "pre cuarta", "4to inevntario", "1ra de servidores", "2da de servidores", "3ra de servidores"];
    const lastScripture = (scriptures) => {
        if (!scriptures || !scriptures.length) return null;
        let best = null, bestIdx = -1;
        scriptures.forEach(s => { const i = SCRIPTURE_ORDER.indexOf(s); if (i >= bestIdx) { bestIdx = i; best = s; } });
        return best;
    };
    const findPadrino = (name, group) => getPadrinosList().find(p => p.name === name && (!group || p.group === group));

    const renderSponsorConfirmCard = (p) => {
        const card = document.getElementById("juntaSponsorConfirmCard");
        if (!card) return;
        if (!p) { card.style.display = "none"; card.innerHTML = ""; return; }
        const last = lastScripture(p.scriptures);
        const exercises = (p.exercises || []).join(", ") || "—";
        const invCount = (p.scriptures || []).length;
        card.style.display = "block";
        card.innerHTML = `
            <div style="border:1px solid var(--admin-purple); background:var(--admin-purple-light); border-radius:8px; padding:0.6rem 0.75rem; font-size:0.78rem;">
                <div style="font-weight:700; color:var(--admin-purple); margin-bottom:0.25rem;"><i class="fa-solid fa-circle-check"></i> Padrino seleccionado: ${p.name}</div>
                <div style="color:#555; line-height:1.55;">
                    <strong>Grupo:</strong> ${p.group || '—'} &middot; <strong>Región:</strong> ${p.region || '—'}<br>
                    <strong>Sobriedad:</strong> ${p.sobrietyDate || 'N/D'} &middot; <strong>En grupo desde:</strong> ${p.joinDate || 'N/D'}<br>
                    <strong>Avance:</strong> ${last || 'Sin inventarios'} (${invCount} inventarios)<br>
                    <strong>Ejercicios:</strong> ${exercises}
                </div>
            </div>`;
    };

    if (sponsorSearch && resultsContainer) {
        sponsorSearch.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            resultsContainer.innerHTML = "";
            if (!query) {
                resultsContainer.style.display = "none";
                return;
            }
            
            const padrinos = getPadrinosList();
            const filtered = padrinos.filter(p => p.name.toLowerCase().includes(query) || (p.realName && p.realName.toLowerCase().includes(query)));
            
            if (filtered.length === 0) {
                resultsContainer.innerHTML = `<div style="padding: 0.5rem; font-size: 0.85rem; color: #999; font-style: italic; background: white;">No se encontraron padrinos</div>`;
            } else {
                filtered.forEach(p => {
                    const div = document.createElement("div");
                    div.style.cssText = "padding: 0.5rem; font-size: 0.85rem; cursor: pointer; transition: background 0.2s; border-bottom: 1px solid #f4f4f5; background: white; color: #333;";
                    const last = lastScripture(p.scriptures);
                    div.innerHTML = `<strong>${p.name}</strong> <span style="font-size: 0.72rem; color: #666;">(${p.group || 'Sin grupo'} · ${p.region || 'Sin región'})</span><br><span style="font-size:0.68rem; color:#999;">Sobrio desde ${p.sobrietyDate || 'N/D'}${last ? ' · ' + last : ''}</span>`;

                    div.addEventListener("mouseover", () => div.style.background = "#f4f4f5");
                    div.addEventListener("mouseout", () => div.style.background = "white");

                    div.addEventListener("click", () => {
                        sponsorSearch.value = p.name;
                        hiddenNameInput.value = p.name;
                        hiddenGroupInput.value = p.group || "Sin grupo";
                        resultsContainer.style.display = "none";
                        renderSponsorConfirmCard(p);
                    });
                    resultsContainer.appendChild(div);
                });
            }
            resultsContainer.style.display = "block";
        });
        
        document.addEventListener("click", (e) => {
            if (!sponsorSearch.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = "none";
            }
        });
    }

    const manualToggle = document.getElementById("juntaManualSponsorToggle");
    const manualFields = document.getElementById("juntaManualSponsorFields");
    const autocompleteGroup = document.getElementById("juntaAutocompleteGroup");
    
    const sponsorRegionManual = document.getElementById("juntaSponsorRegionManual");
    const sponsorGroupManual = document.getElementById("juntaSponsorGroupManual");
    const sponsorListManual = document.getElementById("juntaSponsorListManual");

    if (manualToggle && manualFields && autocompleteGroup) {
        manualToggle.addEventListener("change", (e) => {
            const isManual = e.target.checked;
            if (isManual) {
                manualFields.style.display = "grid";
                autocompleteGroup.style.display = "none";
                
                sponsorSearch.value = "";
                hiddenNameInput.value = "";
                hiddenGroupInput.value = "";
                
                sponsorRegionManual.innerHTML = `<option value="">Selecciona Región</option>`;
                for (const region in groupsByRegion) {
                    const opt = document.createElement("option");
                    opt.value = region;
                    opt.textContent = region;
                    sponsorRegionManual.appendChild(opt);
                }
                
                sponsorGroupManual.innerHTML = `<option value="">Selecciona Grupo</option>`;
                sponsorGroupManual.disabled = true;
                sponsorListManual.innerHTML = `<option value="">Selecciona Padrino</option>`;
                sponsorListManual.disabled = true;
            } else {
                manualFields.style.display = "none";
                autocompleteGroup.style.display = "block";
                
                sponsorRegionManual.value = "";
                sponsorGroupManual.value = "";
                sponsorListManual.value = "";
            }
        });
    }

    if (sponsorRegionManual) {
        sponsorRegionManual.addEventListener("change", (e) => {
            const region = e.target.value;
            sponsorGroupManual.innerHTML = `<option value="">Selecciona Grupo</option>`;
            sponsorGroupManual.disabled = !region;
            
            sponsorListManual.innerHTML = `<option value="">Selecciona Padrino</option>`;
            sponsorListManual.disabled = true;
            
            if (region && groupsByRegion[region]) {
                groupsByRegion[region].forEach(g => {
                    const opt = document.createElement("option");
                    opt.value = g;
                    opt.textContent = g;
                    sponsorGroupManual.appendChild(opt);
                });
            }
        });
    }

    if (sponsorGroupManual) {
        sponsorGroupManual.addEventListener("change", (e) => {
            const group = e.target.value;
            sponsorListManual.innerHTML = `<option value="">Selecciona Padrino</option>`;
            sponsorListManual.disabled = !group;
            
            if (group) {
                const padrinos = getPadrinosList().filter(p => p.group === group);
                if (padrinos.length === 0) {
                    sponsorListManual.innerHTML = `<option value="">No hay padrinos en este grupo</option>`;
                } else {
                    padrinos.forEach(p => {
                        const opt = document.createElement("option");
                        opt.value = p.name;
                        opt.textContent = p.name;
                        sponsorListManual.appendChild(opt);
                    });
                }
            }
        });
    }

    if (sponsorListManual) {
        sponsorListManual.addEventListener("change", (e) => {
            const name = e.target.value;
            if (name) {
                hiddenNameInput.value = name;
                hiddenGroupInput.value = sponsorGroupManual.value;
                renderSponsorConfirmCard(findPadrino(name, sponsorGroupManual.value));
            } else {
                hiddenNameInput.value = "";
                hiddenGroupInput.value = "";
                renderSponsorConfirmCard(null);
            }
        });
    }

    const btnReset = document.getElementById("btnResetJuntaAttendance");
    if (btnReset) {
        btnReset.addEventListener("click", () => {
            adminState.juntaAttendance = [];
            saveState();
            renderJuntaAttendanceButtons();
            showSuperToast("Pase de lista restablecido.", "info");
        });
    }

    const bookingForm = document.getElementById("superJuntaBookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const dayVal = parseInt(document.getElementById("juntaDay").value);
            const reqGroupVal = document.getElementById("juntaReqGroup").value;
            
            let sponsorNameVal = "";
            let sponsorGroupVal = "";
            
            if (document.getElementById("juntaManualSponsorToggle").checked) {
                sponsorNameVal = document.getElementById("juntaSponsorListManual").value;
                sponsorGroupVal = document.getElementById("juntaSponsorGroupManual").value;
            } else {
                sponsorNameVal = document.getElementById("juntaSponsorName").value.trim();
                sponsorGroupVal = document.getElementById("juntaSponsorGroup").value.trim();
            }

            if (!dayVal || !reqGroupVal || !sponsorNameVal || !sponsorGroupVal) {
                showSuperToast("Por favor selecciona un padrino válido.", "error");
                return;
            }

            if (!adminState.juntaCalendar) {
                adminState.juntaCalendar = [];
            }

            adminState.juntaCalendar.push({
                day: dayVal,
                requestingGroup: reqGroupVal,
                sponsorName: sponsorNameVal,
                sponsorGroup: sponsorGroupVal
            });

            saveState();
            renderJuntaBookings();

            document.getElementById("juntaSponsorSearch").value = "";
            document.getElementById("juntaSponsorName").value = "";
            document.getElementById("juntaSponsorGroup").value = "";
            
            if (document.getElementById("juntaManualSponsorToggle").checked) {
                document.getElementById("juntaManualSponsorToggle").checked = false;
                document.getElementById("juntaManualSponsorToggle").dispatchEvent(new Event("change"));
            }

            showSuperToast(`Padrino registrado para el día ${dayVal}.`, "success");
        });
    }

    renderJuntaAttendanceButtons();
    renderJuntaBookings();

    window.addEventListener("storage", (e) => {
        loadState();
        renderJuntaAttendanceButtons();
        renderJuntaBookings();
        renderSuperadminPanel();
        renderSuperRegions();
    });
}

function renderJuntaAttendanceButtons() {
    const btnContainer = document.getElementById("superJuntaAttendanceButtons");
    if (!btnContainer) return;
    btnContainer.innerHTML = "";

    const selectedRegion = document.getElementById("juntaControlRegion") ? document.getElementById("juntaControlRegion").value : "ALL";
    let coords = adminState.activeCoordinators || [];
    
    if (selectedRegion !== "ALL") {
        const allowedGroups = groupsByRegion[selectedRegion] || [];
        coords = coords.filter(coord => allowedGroups.includes(coord.group));
    }

    if (coords.length === 0) {
        btnContainer.innerHTML = `<div style="text-align:center; color:#999; font-size:0.8rem; padding:1.5rem 0; font-style:italic;">No hay servidores registrados en esta región.</div>`;
        return;
    }

    // de la región. Agrupamos los servidores (líderes/AE/AI) por su grupo.
    const byGroup = {};
    coords.forEach(coord => {
        const g = coord.group || "Sin grupo";
        if (!byGroup[g]) byGroup[g] = [];
        byGroup[g].push(coord);
    });

    Object.keys(byGroup).sort().forEach(groupName => {
        const groupCoords = byGroup[groupName];
        const present = groupCoords.filter(c => (adminState.juntaAttendance || []).some(a => a.name === c.name)).length;

        // Encabezado del grupo con contador presentes/total
        const header = document.createElement("div");
        header.style.cssText = "font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:0.03em; color:var(--admin-purple); margin:0.65rem 0 0.25rem; padding-bottom:0.2rem; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;";
        header.innerHTML = `<span><i class="fa-solid fa-house-chimney"></i> ${groupName}</span><span style="font-weight:600; color:${present === groupCoords.length ? '#10b981' : '#999'};">${present}/${groupCoords.length}</span>`;
        btnContainer.appendChild(header);

        groupCoords.forEach(coord => {
            const isChecked = (adminState.juntaAttendance || []).some(att => att.name === coord.name);
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = isChecked ? "btn btn-primary btn-xs" : "btn btn-outline btn-xs";
            btn.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.4rem 0.6rem; border-radius:6px; font-size:0.8rem; text-align:left; width:100%; transition:all 0.2s; margin-bottom:0.25rem; cursor:pointer;";

            if (isChecked) {
                const attItem = adminState.juntaAttendance.find(att => att.name === coord.name);
                btn.style.background = "var(--admin-purple)";
                btn.style.borderColor = "var(--admin-purple)";
                btn.style.color = "white";
                btn.innerHTML = `
                    <span><i class="fa-solid fa-circle-check"></i> ${coord.name} (${coord.role})</span>
                    <span style="font-family:monospace; font-size:0.7rem; opacity:0.8;">${attItem.time}</span>
                `;
            } else {
                btn.style.background = "#fff";
                btn.style.borderColor = "#ddd";
                btn.style.color = "#555";
                btn.innerHTML = `
                    <span><i class="fa-regular fa-circle"></i> ${coord.name} (${coord.role})</span>
                    <span style="font-family:monospace; font-size:0.7rem; opacity:0.5;">--:--</span>
                `;
            }

            btn.addEventListener("click", () => {
                toggleJuntaAttendance(coord);
            });

            btnContainer.appendChild(btn);
        });
    });
}

function toggleJuntaAttendance(coord) {
    if (!adminState.juntaAttendance) {
        adminState.juntaAttendance = [];
    }
    const idx = adminState.juntaAttendance.findIndex(att => att.name === coord.name);
    if (idx !== -1) {
        adminState.juntaAttendance.splice(idx, 1);
        showSuperToast(`Se retiró a ${coord.name} del pase de lista.`, "info");
    } else {
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        adminState.juntaAttendance.push({
            name: coord.name,
            group: coord.group,
            role: coord.role,
            time: timeStr
        });
        showSuperToast(`Se registró asistencia para ${coord.name}.`, "success");
    }
    saveState();
    renderJuntaAttendanceButtons();
}

function renderJuntaBookings() {
    const listBody = document.getElementById("superJuntaBookingsListBody");
    if (!listBody) return;
    listBody.innerHTML = "";

    const bookings = adminState.juntaCalendar || [];
    if (bookings.length === 0) {
        listBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--admin-text-secondary); font-style: italic; padding: 1rem;">No hay asignaciones registradas.</td></tr>`;
        return;
    }

    const sorted = [...bookings].sort((a, b) => a.day - b.day);

    sorted.forEach(booking => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="padding:0.4rem; font-weight:bold;">${booking.day}</td>
            <td style="padding:0.4rem;">${booking.requestingGroup}</td>
            <td style="padding:0.4rem;">${booking.sponsorName} <span style="font-size:0.7rem; color:#666;">(${booking.sponsorGroup})</span></td>
            <td style="padding:0.4rem;" class="text-right">
                <button type="button" class="btn btn-outline btn-xs" style="color:#ef4444; border-color:#fee2e2; padding:0.15rem 0.35rem; cursor:pointer;" title="Eliminar asignación" onclick="deleteJuntaCalendarBooking(${booking.day}, '${booking.requestingGroup.replace(/'/g, "\\'")}', '${booking.sponsorName.replace(/'/g, "\\'")}', '${booking.sponsorGroup.replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        listBody.appendChild(tr);
    });
}

window.deleteJuntaCalendarBooking = function(day, requestingGroup, sponsorName, sponsorGroup) {
    if (!adminState.juntaCalendar) return;
    const index = adminState.juntaCalendar.findIndex(b =>
        b.day === day &&
        b.requestingGroup === requestingGroup &&
        b.sponsorName === sponsorName &&
        b.sponsorGroup === sponsorGroup
    );
    if (index !== -1) {
        adminState.juntaCalendar.splice(index, 1);
        saveState();
        renderJuntaBookings();
        showSuperToast("Asignación de padrino eliminada del calendario.", "info");
    }
};


// ---------------------------------------------------------------------
// Eventos y Calendario Anual del portal: el Superadmin agenda TODO el
// ciclo (juntas, regionales, interregionales, JAV y Haciendas) y lo ve
// en un tablero anual (meses × días) como el calendario oficial.
// ---------------------------------------------------------------------

const PMONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const PDOW = ["D", "L", "M", "M", "J", "V", "S"];
const P_HAC_REGION = {
    HAC_R1: "Región 1 CDMX", HAC_R2: "Región 2 Estado de México", HAC_R3: "Región 3 Querétaro y Guanajuato",
    HAC_R4: "Región 4 Puebla", HAC_R5: "Región 5 Guerrero", HAC_R6: "Región 6 Yucatán",
    HAC_R7: "Región 7 Chicago", HAC_R8: "Región 8 Veracruz", HAC_R9: "Región 9 Monterrey"
};
function pIsHacienda(t) { return typeof t === "string" && t.indexOf("HAC_") === 0; }
function pDateParts(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return { valid: false };
    return { valid: true, day: d.getDate(), monthIdx: d.getMonth(), year: d.getFullYear(), dow: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][d.getDay()] };
}

const P_JAV_TYPES = ["JUNTAS_JAV", "PREPARACIONES_JAV", "CAMP_JAV", "FORO_JAV", "HAC_JAV"];
const P_INST_TYPES = ["CONCORDIA", "CONFERENCIA", "FORO", "COMITES", "INVENTARIO_SERVIDORES"];

// Categoría visual de un evento para el tablero
function boardCategory(ev) {
    if (ev.isHacienda || pIsHacienda(ev.type)) return ev.isJav || ev.type === "HAC_JAV" ? "jav" : "hac";
    if (ev.isJav || P_JAV_TYPES.includes(ev.type)) return "jav";
    if (P_INST_TYPES.includes(ev.type) || ev.calendar === "ANNUAL") return "inst";
    if (ev.type === "JSG") return "jsg";
    if (ev.calendar === "REGIONAL") return "reg";
    return "grp";
}

// ---- Formulario de agendado total ----

function initPortalEventForm() {
    const form = document.getElementById("portalEventForm");
    if (!form) return;

    const typeSel = document.getElementById("pevType");
    const regionSel = document.getElementById("pevRegion");
    const hint = document.getElementById("pevHint");

    regionSel.innerHTML = `<option value="">— Interregional (todas) —</option>` +
        Object.keys(groupsByRegion).map(r => `<option value="${r}">${r}</option>`).join("");

    const syncFields = () => {
        const t = typeSel.value;
        const hac = pIsHacienda(t);
        document.getElementById("pevTitleGroup").style.display = hac ? "none" : "block";
        document.getElementById("pevTitle").required = !hac;
        if (hac && t !== "HAC_JAV") {
            regionSel.value = P_HAC_REGION[t];
            regionSel.disabled = true;
        } else {
            regionSel.disabled = false;
            if (t === "HAC_JAV") regionSel.value = regionSel.value || "Región 1 CDMX";
        }
        hint.textContent = hac
            ? "Hacienda: al agendar se notifica a las 9 regiones y se abren los semáforos POA. Usa fecha fin para los 3 días."
            : P_JAV_TYPES.includes(t) ? "Evento JAV: se marcará exclusivo para Jóvenes en Agua Viva."
            : P_INST_TYPES.includes(t) ? "Evento interregional: visible en el calendario anual de toda la comunidad."
            : "Sin región = interregional; con región = regional.";
    };
    typeSel.addEventListener("change", syncFields);
    syncFields();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        createPortalEvent();
    });
}

function createPortalEvent() {
    const type = document.getElementById("pevType").value;
    const start = document.getElementById("pevStart").value;
    const end = document.getElementById("pevEnd").value || null;
    const time = document.getElementById("pevTime").value || "";
    const xp = parseInt(document.getElementById("pevXp").value) || 15;
    const region = document.getElementById("pevRegion").value || null;
    const hac = pIsHacienda(type);
    const isJav = P_JAV_TYPES.includes(type);

    if (!start) { showSuperToast("Indica la fecha de inicio.", "error"); return; }
    if (end && end < start) { showSuperToast("La fecha fin no puede ser anterior al inicio.", "error"); return; }

    let title = document.getElementById("pevTitle").value.trim();
    let calendar = region ? "REGIONAL" : "ANNUAL";
    let evRegion = region;

    if (hac) {
        evRegion = type === "HAC_JAV" ? (region || "Región 1 CDMX") : P_HAC_REGION[type];
        title = type === "HAC_JAV" ? `Hacienda JAV · sede ${evRegion}` : `Experiencia Hacienda ${evRegion}`;
        calendar = type === "HAC_JAV" ? "ANNUAL" : "REGIONAL";
    } else if (!title) { showSuperToast("Falta el título del evento.", "error"); return; }

    const p = pDateParts(start);
    adminState.meetings = adminState.meetings || [];
    adminState.meetings.push({
        id: Date.now(),
        calendar: calendar,
        type: type,
        title: title,
        topic: title,
        isHacienda: hac,
        isJav: isJav,
        region: evRegion,
        speaker: "—",
        info: (evRegion || "Interregional") + (hac ? " · Experiencia" : ""),
        date: start,
        startDate: start,
        endDate: end,
        day: p.valid ? String(p.day) : "",
        month: p.valid ? p.dow : "",
        time: end ? `${start} a ${end}` : `${start}${time ? " · " + time : ""}`,
        startTime: time,
        xp: xp,
        createdBy: "superadmin"
    });

    // Efectos de hacienda: activa la experiencia, avisa a las 9 regiones y
    // reabre los semáforos POA (misma regla que el panel admin).
    if (hac) {
        adminState.activeHacienda = { name: title, region: evRegion, startDate: start, endDate: end };
        portalNotifyRegions(title, start);
        (adminState.groupsSemaphore || []).forEach(g => {
            g.manual = false;
            g.lastRectified = null;
            g.status = "RED";
            g.updatedBy = "Sistema";
            g.time = "POA reabierto";
        });
    }

    adminState.changelog = adminState.changelog || [];
    adminState.changelog.unshift({
        action: hac ? "AGENDA_HACIENDA" : "AGENDA_EVENTO",
        details: `Superadmin agendó "${title}" (${start}${end ? " a " + end : ""})`,
        user: "Superadmin",
        time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
    });

    saveState();
    document.getElementById("portalEventForm").reset();
    document.getElementById("pevTime").value = "19:00";
    document.getElementById("pevXp").value = 15;
    initPortalEventForm && document.getElementById("pevType").dispatchEvent(new Event("change"));
    renderAnnualBoard();
    showSuperToast(hac ? `Hacienda agendada: ${title}. Regiones notificadas.` : `Evento "${title}" agendado en el ciclo.`, "success");
}

function portalNotifyRegions(title, start) {
    if (!adminState.notifications) adminState.notifications = {};
    const recipients = new Set();
    (adminState.activeCoordinators || []).forEach(c => { if (c.email) recipients.add(c.email); });
    (adminState.members || []).forEach(m => {
        const norm = (typeof AVPerm !== "undefined") ? AVPerm.normalizeServerRole(m.serverRole) : m.serverRole;
        if (m.email && ["LIDER", "AE", "AI"].includes(norm)) recipients.add(m.email);
    });
    recipients.forEach(email => {
        if (!adminState.notifications[email]) adminState.notifications[email] = [];
        adminState.notifications[email].unshift({
            id: "hac_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
            title: "🏕️ Hacienda agendada",
            desc: `Se agendó la ${title} (inicia ${start}). Sube y rectifica tu POA.`,
            time: "Ahora mismo",
            type: "warning",
            read: false,
            action: "sec-haciendas"
        });
    });
}

// ---- Tablero anual (12 meses rodantes × días 1-31) ----

function renderAnnualBoard() {
    const board = document.getElementById("annualBoard");
    if (!board) return;

    const now = new Date();
    const months = [];
    for (let i = 0; i < 12; i++) {
        const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
        months.push({ year: d.getFullYear(), month: d.getMonth() });
    }
    const label = document.getElementById("boardCycleLabel");
    if (label) label.textContent = `· ${PMONTHS[months[0].month]} ${months[0].year} — ${PMONTHS[months[11].month]} ${months[11].year}`;

    const events = (adminState.meetings || []).filter(ev => ev.date && pDateParts(ev.date).valid);

    let html = "";
    months.forEach(({ year, month }) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Eventos que tocan este mes (con rango start→end)
        const monthEvents = events.map(ev => {
            const s = pDateParts(ev.startDate || ev.date);
            const e = pDateParts(ev.endDate || ev.startDate || ev.date);
            if (!s.valid) return null;
            const sIn = s.year === year && s.monthIdx === month;
            const eIn = e.valid && e.year === year && e.monthIdx === month;
            const spans = sIn || eIn || (s.valid && e.valid && new Date(year, month, 15) > new Date(s.year, s.monthIdx, s.day) && new Date(year, month, 15) < new Date(e.year, e.monthIdx, e.day));
            if (!spans) return null;
            return {
                ev,
                from: sIn ? s.day : 1,
                to: eIn ? e.day : (sIn && !ev.endDate ? s.day : daysInMonth)
            };
        }).filter(Boolean);

        html += `<div class="board-month">
            <div class="board-month-name">${PMONTHS[month]}<span>${year}</span></div>
            <div class="board-days">`;
        for (let d = 1; d <= daysInMonth; d++) {
            const dow = PDOW[new Date(year, month, d).getDay()];
            const hits = monthEvents.filter(m => d >= m.from && d <= m.to);
            const cat = hits.length ? boardCategory(hits[0].ev) : "";
            const isStart = hits.length && d === hits[0].from;
            html += `<div class="board-cell${hits.length ? " ev ev-" + cat : ""}" ${hits.length ? `data-evid="${hits[0].ev.id}" title="${hits.map(x => x.ev.title).join(" · ")}"` : ""}>
                <span class="bc-dow">${dow}</span>
                <span class="bc-num">${d}</span>
                ${isStart ? `<span class="bc-label">${hits[0].ev.title.length > 14 ? hits[0].ev.title.slice(0, 13) + "…" : hits[0].ev.title}</span>` : ""}
            </div>`;
        }
        html += `</div></div>`;
    });
    board.innerHTML = html;

    board.querySelectorAll(".board-cell.ev").forEach(cell => {
        cell.addEventListener("click", () => showBoardDetail(cell.dataset.evid));
    });
}

function showBoardDetail(id) {
    const box = document.getElementById("boardDetail");
    const ev = (adminState.meetings || []).find(m => String(m.id) === String(id));
    if (!box || !ev) return;
    const catName = { hac: "Hacienda", jav: "JAV", inst: "Institucional", jsg: "JSG", reg: "Regional", grp: "Grupo" }[boardCategory(ev)];
    box.style.display = "block";
    box.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem;">
            <div>
                <strong style="font-size:0.95rem;">${ev.title}</strong>
                <p style="font-size:0.78rem; color:var(--admin-text-secondary); margin:0.25rem 0 0;">
                    ${catName} · ${ev.region || "Interregional"} · ${ev.startDate || ev.date}${ev.endDate ? " → " + ev.endDate : ""}${ev.startTime ? " · " + ev.startTime : ""} · +${ev.xp || 0} XP
                </p>
            </div>
            <button type="button" class="btn btn-outline btn-xs" id="boardDeleteBtn" style="color:var(--color-red); border-color:var(--color-red);"><i class="fa-solid fa-trash"></i> Eliminar</button>
        </div>`;
    document.getElementById("boardDeleteBtn").addEventListener("click", () => {
        const idx = adminState.meetings.findIndex(m => String(m.id) === String(id));
        if (idx !== -1) {
            const gone = adminState.meetings.splice(idx, 1)[0];
            adminState.changelog.unshift({
                action: "BAJA_EVENTO",
                details: `Superadmin eliminó "${gone.title}" del ciclo`,
                user: "Superadmin",
                time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
            });
            saveState();
            box.style.display = "none";
            renderAnnualBoard();
            showSuperToast(`Evento "${gone.title}" eliminado.`, "info");
        }
    });
}

// ---- Semilla del ciclo anual demo (como el calendario oficial) ----

function seedAnnualCycle() {
    if (adminState.annualCycleSeeded) return;
    const now = new Date();
    const iso = (mOffset, day, span = 0) => {
        const d = new Date(now.getFullYear(), now.getMonth() + mOffset, day);
        const s = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        if (!span) return { start: s, end: null };
        const e = new Date(d); e.setDate(e.getDate() + span);
        return { start: s, end: `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}` };
    };
    const CYCLE = [
        // mes, día, duración(días extra), tipo, título, región, calendario
        [0, 20, 2, "HAC_R5", "Experiencia Hacienda Región 5 Guerrero", "Región 5 Guerrero", "REGIONAL"],
        [1, 3, 2, "HAC_R1", "Experiencia Hacienda Región 1 CDMX", "Región 1 CDMX", "REGIONAL"],
        [1, 10, 2, "HAC_R7", "Experiencia R7", "Región 7 Chicago", "REGIONAL"],
        [1, 17, 2, "HAC_R4", "Experiencia R4 y 6", "Región 4 Puebla", "REGIONAL"],
        [1, 24, 0, "JSG", "JSG", null, "ANNUAL"],
        [2, 7, 2, "HAC_R2", "Experiencia R2, 5, 8 y Bajío", "Región 2 Estado de México", "REGIONAL"],
        [2, 14, 2, "CAMP_JAV", "Campamento JAV R6", "Región 6 Yucatán", "ANNUAL"],
        [2, 21, 2, "HAC_R9", "Experiencia Monterrey", "Región 9 Monterrey", "REGIONAL"],
        [3, 5, 2, "HAC_R1", "Experiencia Hacienda Región 1 CDMX", "Región 1 CDMX", "REGIONAL"],
        [3, 12, 1, "JUNTAS_JAV", "Jóvenes en Agua Viva", null, "ANNUAL"],
        [3, 19, 2, "HAC_R8", "Experiencia R8 Veracruz", "Región 8 Veracruz", "REGIONAL"],
        [4, 2, 0, "COMITES", "Comités", null, "ANNUAL"],
        [4, 9, 2, "HAC_R4", "Experiencia R4 y 6", "Región 4 Puebla", "REGIONAL"],
        [4, 16, 0, "FORO_JAV", "Foro Jóvenes", null, "ANNUAL"],
        [4, 23, 2, "HAC_R3", "Experiencia R3 Bajío", "Región 3 Querétaro y Guanajuato", "REGIONAL"],
        [5, 6, 1, "CONCORDIA", "Concordia Agua Viva", null, "ANNUAL"],
        [5, 13, 2, "HAC_R6", "Experiencia R6 Yucatán", "Región 6 Yucatán", "REGIONAL"],
        [5, 27, 2, "HAC_R2", "Experiencia R2, 5, 8 y Bajío", "Región 2 Estado de México", "REGIONAL"],
        [6, 4, 0, "JSG", "JSG", null, "ANNUAL"],
        [6, 11, 2, "HAC_R1", "Experiencia Hacienda Región 1 CDMX", "Región 1 CDMX", "REGIONAL"],
        [6, 18, 1, "PREPARACIONES_JAV", "Preparación JAV", null, "ANNUAL"],
        [7, 1, 2, "INVENTARIO_SERVIDORES", "Inventario de Servidores", null, "ANNUAL"],
        [7, 15, 2, "HAC_R4", "Experiencia R4 y 6", "Región 4 Puebla", "REGIONAL"],
        [8, 8, 2, "HAC_R9", "Experiencia Monterrey", "Región 9 Monterrey", "REGIONAL"],
        [8, 20, 1, "JUNTAS_JAV", "Jóvenes en Agua Viva", null, "ANNUAL"],
        [9, 5, 2, "HAC_R1", "Experiencia R1 y Bajío", "Región 1 CDMX", "REGIONAL"],
        [9, 17, 2, "HAC_R2", "Experiencia R2, 5 y 8", "Región 2 Estado de México", "REGIONAL"],
        [10, 2, 0, "COMITES", "Comités", null, "ANNUAL"],
        [10, 12, 2, "HAC_R4", "Experiencia R4 y 6", "Región 4 Puebla", "REGIONAL"],
        [10, 19, 1, "JUNTAS_JAV", "Jóvenes en Agua Viva", null, "ANNUAL"],
        [11, 9, 2, "HAC_R2", "Experiencia R2, 5, 8 y Bajío", "Región 2 Estado de México", "REGIONAL"],
        [11, 22, 3, "CONFERENCIA", "Conferencia de Servicios Generales", null, "ANNUAL"]
    ];
    adminState.meetings = adminState.meetings || [];
    CYCLE.forEach(([mo, day, span, type, title, region, calendar], i) => {
        const { start, end } = iso(mo, day, span);
        const p = pDateParts(start);
        adminState.meetings.push({
            id: 900000 + i,
            calendar: calendar,
            type: type,
            title: title,
            topic: title,
            isHacienda: pIsHacienda(type),
            isJav: P_JAV_TYPES.includes(type),
            region: region,
            speaker: "—",
            info: (region || "Interregional") + (pIsHacienda(type) ? " · Experiencia" : ""),
            date: start,
            startDate: start,
            endDate: end,
            day: p.valid ? String(p.day) : "",
            month: p.valid ? p.dow : "",
            time: end ? `${start} a ${end}` : start,
            startTime: "",
            xp: pIsHacienda(type) ? 50 : 20,
            createdBy: "ciclo"
        });
    });
    adminState.annualCycleSeeded = true;
    saveState();
}
