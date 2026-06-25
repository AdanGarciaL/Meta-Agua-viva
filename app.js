// JavaScript logic for Agua Viva Assistance & Logistics Prototype

// Default database lists for mobile fallback
const defaultMeetings = [
    { id: 1, calendar: "GROUP", type: "NORMAL", title: "Junta semanal de Grupo", info: "Sede Centro · Tema: El Resurgir", speaker: "Líder Carlos M.", time: "Viernes 29 · 19:00", xp: 10, isJav: false, day: "29", month: "Vie" },
    { id: 2, calendar: "REGIONAL", type: "CONSAGRACION", title: "Consagración Regional", info: "Ermita · Todos los Grupos", speaker: "Regional Pedro G.", time: "Sábado 30 · 07:00", xp: 30, isJav: false, day: "30", month: "Sáb" },
    { id: 3, calendar: "GROUP", type: "TRIBUNA", title: "Tribuna de Experiencia", info: "Grupo Satélite · Abierto", speaker: "Padrino Juan A.", time: "Lunes 01 · 20:00", xp: 15, isJav: false, day: "01", month: "Lun" },
    { id: 4, calendar: "GROUP", type: "PREPARACIONES_JAV", title: "Preparación JAV", info: "Sede Sur · Jóvenes en Acción", speaker: "Líder JAV Amalia F.", time: "Sábado 30 · 16:00", xp: 20, isJav: true, day: "30", month: "Sáb" },
    { id: 5, calendar: "GROUP", type: "JUNTAS_JAV", title: "Junta Jóvenes Agua Viva", info: "Sede Centro · Tema: Elección", speaker: "Ponente Oscar V.", time: "Domingo 31 · 18:00", xp: 15, isJav: true, day: "31", month: "Dom" },
    { id: 6, calendar: "GROUP", type: "PADRES_JAV", title: "Junta de Padres JAV", info: "Sede Virtual · Informativa", speaker: "Comité Familiar", time: "Miércoles 03 · 19:00", xp: 10, isJav: true, day: "03", month: "Mié" },
    { id: 7, calendar: "ANNUAL", type: "CONCORDIA", title: "Concordia Agua Viva Anual", info: "Hacienda San José · Convención", speaker: "Comité Nacional", time: "Octubre 12 · 09:00", xp: 50, isJav: false, day: "12", month: "Oct" },
    { id: 8, calendar: "REGIONAL", type: "JH", title: "Junta de Hacienda (JH)", info: "Región 1 · Logística Retiro", speaker: "Atracciones Diego V.", time: "Viernes 05 · 18:00", xp: 15, isJav: false, day: "05", month: "Jul" },
    { id: 9, calendar: "REGIONAL", type: "NOCHES_DE_GUERRA", title: "Noche de Guerra Regional", info: "Cancha Satélite · Oración y Fuerza", speaker: "Coordinación Regional", time: "Jueves 28 · 21:00", xp: 25, isJav: false, day: "28", month: "Jun" },
    { id: 10, calendar: "REGIONAL", type: "R4", title: "Experiencia Hacienda R4 Puebla", info: "Campamento Buena Vista · Retiro", speaker: "Atracciones Regionales", time: "Sábado 15 · 08:00", xp: 40, isJav: false, day: "15", month: "Sáb" },
    { id: 11, calendar: "REGIONAL", type: "R1", title: "Experiencia Hacienda R1 CDMX", info: "Tepoztlán · Retiro Regional", speaker: "Mesa Directiva", time: "Viernes 21 · 08:00", xp: 40, isJav: false, day: "21", month: "Vie" },
    { id: 12, calendar: "GROUP", type: "JOVENES", title: "Experiencia JAV de Hacienda", info: "Valle de Bravo · Jóvenes", speaker: "Liderazgo JAV", time: "Sábado 22 · 09:00", xp: 35, isJav: true, day: "22", month: "Sáb" },
    { id: 13, calendar: "REGIONAL", type: "JSG", title: "Junta Servicios Generales (JSG)", info: "Oficina Central · Delegados", speaker: "Servicios Generales", time: "Lunes 24 · 19:30", xp: 15, isJav: false, day: "24", month: "Lun" },
    { id: 14, calendar: "ANNUAL", type: "FORO", title: "Foro Nacional de Crecimiento", info: "Auditorio Satélite · Foros", speaker: "Ponentes Invitados", time: "Miércoles 18 · 17:00", xp: 30, isJav: false, day: "18", month: "Mié" },
    { id: 15, calendar: "ANNUAL", type: "CONFERENCIA", title: "Conferencia Anual Agua Viva", info: "Centro de Convenciones · Anual", speaker: "Comité General", time: "Jueves 19 · 10:00", xp: 50, isJav: false, day: "19", month: "Jue" }
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

// Shared Groups by Region mapping
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

// Shared State structure
let state = {};

function loadState() {
    const saved = localStorage.getItem("agua_viva_db");
    let db = saved ? JSON.parse(saved) : null;
    
    if (db && (!db.meetings || db.meetings.length < 15)) {
        db.meetings = defaultMeetings;
        localStorage.setItem("agua_viva_db", JSON.stringify(db));
    }
    
    if (!db) {
        // Initialize default database matching admin State
        db = {
            currentSimulatedRole: "admin",
            user: { name: "Mariana C.", role: "Coordinadora", sede: "Sede Centro" },
            members: [
                { id: "m1", name: "Río", email: "rio@email.com", password: "123", phone: "55-9012-3456", sobrietyDate: "2026-01-02", realName: "Rogelio I.", age: 29, emergency: "Mamá 555-1234", joinDate: "Ago 2025", level: "Aurora Nv 5", levelNum: 5, xp: 580, racha: 42, cleanDays: 142, lastAttendance: "Hoy", status: "Activo", avatarColor: "#b91c1c", checkedIn: true, checkInTime: "19:02", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "COM", approvalStatus: "APPROVED" },
                { id: "m2", name: "Nube", email: "nube@email.com", password: "123", phone: "55-3456-7890", sobrietyDate: "2025-09-08", realName: "Natalia U.", age: 24, emergency: "Papá 555-5678", joinDate: "Feb 2025", level: "Constelación Nv 7", levelNum: 7, xp: 910, racha: 91, cleanDays: 290, lastAttendance: "Hoy", status: "Activo", avatarColor: "#1d4ed8", checkedIn: true, checkInTime: "19:04", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Padrino", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m3", name: "Coyote", email: "coyote@email.com", password: "123", phone: "55-7890-1234", sobrietyDate: "2026-06-02", realName: "Carlos O.", age: 28, emergency: "Esposa 555-9012", joinDate: "Nov 2025", level: "Llama Nv 2", levelNum: 2, xp: 220, racha: 12, cleanDays: 22, lastAttendance: "Hoy", status: "Activo", avatarColor: "#c2410c", checkedIn: true, checkInTime: "19:11", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Ermita", roleClass: "Apoyo", serverRole: "Tesorería de Grupo", approvalStatus: "APPROVED" },
                { id: "m4", name: "Sauce", email: "sauce@email.com", password: "123", phone: "55-5678-9012", sobrietyDate: "2024-10-23", realName: "Saúl U.", age: 32, emergency: "Hermano 555-3456", joinDate: "Sept 2024", level: "Sol Nv 8", levelNum: 8, xp: 1870, racha: 187, cleanDays: 612, lastAttendance: "Hoy", status: "Activo", avatarColor: "#047857", checkedIn: true, checkInTime: "19:08", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Chicoloapan", roleClass: "Padrino", serverRole: "Preparador de primeros inventarios", approvalStatus: "APPROVED" },
                { id: "m5", name: "Tierra", email: "tierra@email.com", password: "123", phone: "55-1234-5678", sobrietyDate: "2026-03-26", realName: "Teresa I.", age: 21, emergency: "Madre 555-7890", joinDate: "Ene 2025", level: "Faro Nv 4", levelNum: 4, xp: 480, racha: 33, cleanDays: 90, lastAttendance: "Hoy", status: "Activo", avatarColor: "#556b2f", checkedIn: true, checkInTime: "19:05", xpGranted: 10, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Oreja", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m6", name: "Ámbar", email: "ambar@email.com", password: "123", phone: "55-4321-8765", sobrietyDate: "2026-03-21", realName: "Ambar A.", age: 22, emergency: "Tía 555-4321", joinDate: "Jun 2025", level: "Faro Nv 4", levelNum: 4, xp: 420, racha: 28, cleanDays: 95, lastAttendance: "Hoy", status: "Activo", avatarColor: "#be185d", checkedIn: true, checkInTime: "19:03", xpGranted: 15, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Padrino", serverRole: "Ninguno", approvalStatus: "APPROVED", attendingHacienda: true, arrivalShift: "AVANZADA", transportStatus: "PROVIDES_TRANSPORT", transportCapacity: 3 },
                { id: "m7", name: "Lince", email: "lince@email.com", password: "123", phone: "55-9876-5432", sobrietyDate: "2026-05-08", realName: "Lucía I.", age: 26, emergency: "Padre 555-8765", joinDate: "Oct 2025", level: "Brasa Nv 3", levelNum: 3, xp: 310, racha: 0, cleanDays: 47, lastAttendance: "5 días", status: "Risk", avatarColor: "#be185d", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m8", name: "Roble", email: "roble@email.com", password: "123", phone: "55-8765-4321", sobrietyDate: "2026-05-03", realName: "Roberto O.", age: 27, emergency: "Amigo 555-2109", joinDate: "Nov 2025", level: "Brasa Nv 3", levelNum: 3, xp: 340, racha: 15, cleanDays: 52, lastAttendance: "Hace 1 sem", status: "Risk", avatarColor: "#556b2f", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Ermita", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m9", name: "Bruma", email: "bruma@email.com", password: "123", phone: "55-4567-8901", sobrietyDate: "2026-06-17", realName: "Beatriz R.", age: 16, emergency: "Madre 555-6543", joinDate: "Ene 2026", level: "Chispa JAV Nv 1", levelNum: 1, xp: 70, racha: 3, cleanDays: 7, lastAttendance: "Ayer", status: "Activo", avatarColor: "#6d28d9", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: true, region: "Región 1 CDMX", group: "Satélite", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m10", name: "Ceniza", email: "ceniza@email.com", password: "123", phone: "55-2109-8765", sobrietyDate: "2026-04-21", realName: "Cesar N.", age: 23, emergency: "Padre 555-9876", joinDate: "May 2026", level: "Estrella Nv 1", levelNum: 1, xp: 64, racha: 64, cleanDays: 64, lastAttendance: "Hoy", status: "New", avatarColor: "#6d28d9", checkedIn: true, checkInTime: "19:21", xpGranted: 5, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" },
                { id: "m11", name: "Estrella", email: "estrella@email.com", password: "123", phone: "55-6543-2109", sobrietyDate: "2026-06-10", realName: "Esther R.", age: 25, emergency: "Mamá 555-1122", joinDate: "Mar 2026", level: "Chispa Nv 1", levelNum: 1, xp: 45, racha: 8, cleanDays: 14, lastAttendance: "Hace 4 días", status: "Activo", avatarColor: "#0369a1", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Apoyo", serverRole: "Ninguno", approvalStatus: "APPROVED" }
            ],
            pendingAdminRequests: [
                { id: "pr1", name: "Lince", email: "lince@email.com", avatarColor: "#be185d", requestedRole: "LIDER", group: "Zaragoza" },
                { id: "pr2", name: "Bruma", email: "bruma@email.com", avatarColor: "#6d28d9", requestedRole: "AE", group: "Satélite" },
                { id: "pr3", name: "Roble", email: "roble@email.com", avatarColor: "#556b2f", requestedRole: "AI", group: "Ermita" }
            ],
            pendingRoleRequests: [], // For Oreja, Padrino, Servidor approvals
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
    
    // Set default active email if none exists to ensure backward compatibility
    if (!localStorage.getItem("agua_viva_active_user_email")) {
        localStorage.setItem("agua_viva_active_user_email", "ambar@email.com");
    }

    const activeEmail = localStorage.getItem("agua_viva_active_user_email");

    // Ensure notifications exist in db
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
    
    // Try to find the user in db.members
    const member = db.members.find(m => m.email === activeEmail);
    if (member) {
        activeUser = {
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
            avatarIcon: member.avatarIcon || "initial"
        };
    } else {
        // Check if active user is a coordinator in activeCoordinators
        const coord = db.activeCoordinators.find(c => c.email === activeEmail);
        if (coord) {
            activeUser = {
                name: coord.name,
                email: coord.email,
                initial: coord.name.substring(0, 1).toUpperCase(),
                xp: 600,
                level: 5,
                cleanDays: 150,
                streak: 45,
                region: "Región 1 CDMX",
                group: coord.group,
                isJav: false,
                roleClass: "Apoyo",
                serverRole: "Ninguno",
                isCoordinator: true,
                coordinatorRole: coord.role,
                attendingHacienda: true,
                arrivalShift: "AVANZADA",
                transportStatus: "NONE",
                transportCapacity: 0,
                avatarColor: coord.avatarColor || "#0F172A",
                avatarIcon: coord.avatarIcon || "initial"
            };
        }
    }
    
    // If no active user found (e.g. after logout), show overlay
    const overlay = document.getElementById("authOverlay");
    if (!activeUser) {
        if (overlay) overlay.classList.remove("hidden");
    } else {
        if (overlay) overlay.classList.add("hidden");
    }
    
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

    // UI elements update for username
    const nameLabel = document.getElementById("userNameLabel");
    if (nameLabel) nameLabel.textContent = state.user.name;
    
    // Update all avatar buttons in the UI
    const updateAvatarUI = (el) => {
        if (!el) return;
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
    
    // Render notifications badge and popup
    renderNotifications();

    // Toggle POA Admin Panel visibility based on user coordinator status
    const poaPanel = document.querySelector(".poa-admin-panel");
    if (poaPanel) {
        const isUserCoordinator = state.user.isCoordinator || 
                                  db.activeCoordinators.some(c => c.email === state.user.email) ||
                                  ["LIDER", "AE", "AI"].includes(state.user.serverRole);
        if (isUserCoordinator) {
            poaPanel.style.display = "block";
        } else {
            poaPanel.style.display = "none";
        }
    }
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
    
    // Update logged in user's data in the members list
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
        db.members[userIndex].name = state.user.name;
    } else {
        const coordIndex = db.activeCoordinators.findIndex(c => c.email === state.user.email);
        if (coordIndex !== -1) {
            db.activeCoordinators[coordIndex].name = state.user.name;
            db.activeCoordinators[coordIndex].avatarColor = state.user.avatarColor;
            db.activeCoordinators[coordIndex].avatarIcon = state.user.avatarIcon;
        }
    }
    
    // Sync other properties
    db.escribientes = state.escribientes;
    db.groupsSemaphore = state.groupsSemaphore;
    db.changelog = state.changelog;
    db.events = state.events;
    db.pendingRoleRequests = state.pendingRoleRequests;
    db.pendingAdminRequests = state.pendingAdminRequests;
    db.members = state.members;
    
    if (!db.notifications) db.notifications = {};
    if (state.user && state.user.email) {
        db.notifications[state.user.email] = state.notifications;
    }
    
    localStorage.setItem("agua_viva_db", JSON.stringify(db));
}


// UI Controllers & Interactions
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    
    // Settings view & profile updates
    const settingsForm = document.getElementById("settingsProfileForm");
    const settingsAlias = document.getElementById("settingsAlias");
    const settingsAvatarIcon = document.getElementById("settingsAvatarIcon");
    const settingsAvatarPreview = document.getElementById("settingsAvatarPreview");
    const settingsLogoutBtn = document.getElementById("settingsLogoutBtn");
    
    let chosenColor = state.user.avatarColor || "#be185d";
    
    window.initSettingsView = function() {
        if (!settingsForm) return;
        settingsAlias.value = state.user.name;
        settingsAvatarIcon.value = state.user.avatarIcon || "initial";
        chosenColor = state.user.avatarColor || "#be185d";
        
        updatePreview();
        
        const colorBtns = settingsForm.querySelectorAll(".color-btn");
        colorBtns.forEach(btn => {
            if (btn.dataset.color.toLowerCase() === chosenColor.toLowerCase()) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    function updatePreview() {
        if (!settingsAvatarPreview) return;
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

    const avatarBtn = document.getElementById("avatarBtn");
    if (avatarBtn) {
        avatarBtn.addEventListener("click", () => {
            navItems.forEach(n => n.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));
            
            const settingsBtn = document.getElementById("btnNavSettings");
            if (settingsBtn) settingsBtn.classList.add("active");
            
            const settingsSection = document.getElementById("sec-settings");
            if (settingsSection) settingsSection.classList.add("active");
            
            window.initSettingsView();
        });
    }

    // 1. Navigation Controller
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".app-section");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const target = item.dataset.target;
            
            navItems.forEach(n => n.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            item.classList.add("active");
            document.getElementById(target).classList.add("active");

            // Handle special page initializations
            if (target === 'sec-scanner') {
                runQRScannerSimulation();
            } else if (target === 'sec-settings') {
                window.initSettingsView();
            }
        });
    });

    // 2. Banner Scan trigger
    document.getElementById("bannerScanBtn").addEventListener("click", () => {
        navItems.forEach(n => n.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        document.querySelector('[data-target="sec-scanner"]').classList.add("active");
        document.getElementById("sec-scanner").classList.add("active");
        runQRScannerSimulation();
    });

    // 3. JAV Space Theme Toggle
    const javToggleBtn = document.getElementById("javToggleBtn");
    
    // Initial theme set based on loaded state
    if (state.user.isJav) {
        document.body.classList.add("jav-theme");
        javToggleBtn.innerHTML = `<i class="fa-solid fa-user-astronaut"></i> <span class="hide-mobile">Modo General</span>`;
    }

    javToggleBtn.addEventListener("click", () => {
        state.user.isJav = !state.user.isJav;
        saveState();
        
        if (state.user.isJav) {
            document.body.classList.add("jav-theme");
            javToggleBtn.innerHTML = `<i class="fa-solid fa-user-astronaut"></i> <span class="hide-mobile">Modo General</span>`;
            showToast("Sección JAV Activada. Tema y eventos adaptados.", "info");
        } else {
            document.body.classList.remove("jav-theme");
            javToggleBtn.innerHTML = `<i class="fa-solid fa-rocket"></i> <span class="hide-mobile">Modo JAV</span>`;
            showToast("Volviendo al diseño estándar.", "info");
        }
        
        // Refresh dynamic components
        renderMeetings();
    });

    // 4. Transport form interactions
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

    // Save Logistics button
    document.getElementById("saveLogisticsBtn").addEventListener("click", () => {
        state.user.arrivalShift = document.getElementById("arrivalShift").value;
        state.user.transportStatus = transportStatusSelect.value;
        state.user.transportCapacity = parseInt(document.getElementById("transportCapacity").value) || 0;
        
        // Log action in audit logs
        const logEntry = {
            action: "LOGISTICA_PROPIA",
            details: `Ámbar A. declaró: ${state.user.attendingHacienda ? 'Asiste' : 'No Asiste'} · Turno: ${state.user.arrivalShift} · Transp: ${state.user.transportStatus}`,
            user: "Ámbar A. (Tú)",
            time: getFormattedTime()
        };
        state.changelog.unshift(logEntry);
        
        // Recalculate stats based on simulation changes
        saveState();
        updatePoaStats();
        renderChangeLog();
        showToast("¡Declaración de logística guardada con éxito!", "success");
    });

    // 5. Escribientes write-in manager handlers
    const addEscribienteModal = document.getElementById("addEscribienteModal");
    const openAddModalBtn = document.getElementById("openAddEscribienteModal");
    const closeAddModalBtn = document.getElementById("closeAddEscribienteModal");
    const addForm = document.getElementById("addEscribienteForm");
    
    // Group options populate
    const groupSelect = document.getElementById("escGroup");
    state.groupsSemaphore.forEach(grp => {
        const opt = document.createElement("option");
        opt.value = grp.name;
        opt.textContent = grp.name;
        groupSelect.appendChild(opt);
    });

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
        
        // Create Audit Log
        state.changelog.unshift({
            action: "REGISTRO_ESCRIBIENTE",
            details: `Añadió escribiente ${name} ${initial}. al grupo ${group}`,
            user: "Atracciones Diego V.",
            time: getFormattedTime()
        });

        // Update Semaphore status of group to YELLOW (needs review) if it was RED
        const grpSem = state.groupsSemaphore.find(g => g.name === group);
        if (grpSem && grpSem.status === "RED") {
            grpSem.status = "YELLOW";
            grpSem.updatedBy = "Atracciones Diego V.";
            grpSem.time = "Hace 1 seg";
        }

        // Refresh UI
        saveState();
        renderEscribientes();
        renderSemaphores();
        renderChangeLog();
        updatePoaStats();

        // Close Modal & Reset Form
        addEscribienteModal.classList.remove("active");
        addForm.reset();
        showToast(`Escribiente ${name} ${initial}. registrado correctamente.`, "success");
    });

    // Escribientes Search Bar
    document.getElementById("searchEscribienteInput").addEventListener("input", (e) => {
        renderEscribientes(e.target.value);
    });

    // 6. Member filtering handlers
    document.getElementById("memberRegionSelect").addEventListener("change", filterMembers);
    document.getElementById("memberRoleFilter").addEventListener("change", filterMembers);
    document.getElementById("memberSearchInput").addEventListener("input", filterMembers);

    // ==========================================
    // AUTHENTICATION INTERACTIVE HANDLERS (Mobile)
    // ==========================================
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

    // Dynamic Groups dropdown based on Region selection in register view
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

    // DOB age validation to display JAV server roles and trigger JAV theme
    if (regDob) {
        regDob.addEventListener("change", (e) => {
            const birthDate = new Date(e.target.value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            // If age is between 13 and 18, show JAV server roles
            if (age >= 13 && age <= 18) {
                regJavServerGroup.style.display = "block";
            } else {
                regJavServerGroup.style.display = "none";
            }
        });
    }

    // Show/hide coordinator details when requesting admin role
    if (regIsLeaderRequest) {
        regIsLeaderRequest.addEventListener("click", (e) => {
            if (e.target.checked) {
                leaderTypeGroup.style.display = "block";
            } else {
                leaderTypeGroup.style.display = "none";
            }
        });
    }

    // Handle Login Submit
    if (authLoginForm) {
        authLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;
            
            const saved = localStorage.getItem("agua_viva_db");
            const db = saved ? JSON.parse(saved) : null;
            if (!db) return;

            // Search in members
            let user = db.members.find(m => m.email === email && m.password === password);
            
            if (!user) {
                // Search in active coordinators
                user = db.activeCoordinators.find(c => c.email === email && password === "123");
            }

            if (user) {
                localStorage.setItem("agua_viva_active_user_email", email);
                showToast(`¡Bienvenido de vuelta, ${user.name}!`, "success");
                
                // Reload state and refresh view
                loadState();
                
                // Theme update
                if (state.user.isJav) {
                    document.body.classList.add("jav-theme");
                } else {
                    document.body.classList.remove("jav-theme");
                }
                
                // Hide Auth overlay
                document.getElementById("authOverlay").classList.add("hidden");
                
                // Re-render
                renderMeetings();
                renderTimeline();
                renderSemaphores();
                renderEscribientes();
                renderChangeLog();
                updatePoaStats();
                filterMembers();
            } else {
                showToast("Correo o contraseña incorrectos.", "error");
            }
        });
    }

    // Handle Register Submit
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

            // Check if email already registered
            const saved = localStorage.getItem("agua_viva_db");
            const db = saved ? JSON.parse(saved) : { members: [], pendingAdminRequests: [], pendingRoleRequests: [] };

            if (db.members.some(m => m.email === email) || db.activeCoordinators.some(c => c.email === email)) {
                showToast("Este correo ya está registrado.", "error");
                return;
            }

            // Calculate age
            const birthDate = new Date(dobVal);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            const isJav = (age >= 13 && age <= 18);

            // Determine server role
            let serverRole = "Ninguno";
            if (isJav) {
                serverRole = document.getElementById("regJavServerRole").value;
            } else {
                serverRole = document.getElementById("regServerRole").value;
            }

            // Register request
            const newMember = {
                id: "m" + (db.members.length + 1),
                name: `${name} ${lastInitial}.`,
                email: email,
                password: password,
                phone: "55-1234-5678", // placeholder
                sobrietyDate: dobVal, // placeholder
                realName: name + " " + lastInitial + ".",
                age: age,
                emergency: "Familiar 555-0000",
                joinDate: "Hoy",
                level: isJav ? "Chispa JAV Nv 1" : "Chispa Nv 1",
                levelNum: 1,
                xp: 0,
                racha: 0,
                cleanDays: 1,
                lastAttendance: "Nunca",
                status: "Activo",
                avatarColor: isJav ? "#6d28d9" : "#0369a1",
                checkedIn: false,
                checkInTime: "—",
                xpGranted: 0,
                isJav: isJav,
                region: region,
                group: group,
                roleClass: roleClass,
                serverRole: serverRole,
                approvalStatus: isLeaderRequest ? "PENDING" : "APPROVED"
            };

            // If leader, AE, or AI requested, add request to pendingAdminRequests
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

            // If Oreja, Padrino, or a server role is selected (other than Ninguno), it requires approval
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
                newMember.roleClass = "Apoyo"; // Set as Apoyo until approved
                if (serverRole !== "Ninguno") {
                    newMember.serverRole = "Ninguno"; // Set as None until approved
                }
                showToast("La clasificación/cargo solicita aprobación de un Admin/Superadmin.", "info");
            }

            db.members.push(newMember);
            localStorage.setItem("agua_viva_db", JSON.stringify(db));

            // Log in automatically
            localStorage.setItem("agua_viva_active_user_email", email);
            showToast("Cuenta creada. Sesión iniciada.", "success");

            // Reload state
            loadState();

            // Theme update
            if (state.user.isJav) {
                document.body.classList.add("jav-theme");
            } else {
                document.body.classList.remove("jav-theme");
            }

            // Hide Auth overlay
            document.getElementById("authOverlay").classList.add("hidden");

            // Re-render
            renderMeetings();
            renderTimeline();
            renderSemaphores();
            renderEscribientes();
            renderChangeLog();
            updatePoaStats();
            filterMembers();
            
            // Reset form
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
            filterMembers();
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("agua_viva_active_user_email");
            showToast("Sesión cerrada.", "info");
            // Show auth overlay
            document.getElementById("authOverlay").classList.remove("hidden");
            loadState();
        });
    }

    // Calendar tabs selection handler (Mobile)
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

    // Calendar view toggle handler (LIST vs WEEK)
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

    // Modal Close Celebration
    const closeLvlBtn = document.getElementById("closeLevelUpBtn");
    if (closeLvlBtn) {
        closeLvlBtn.addEventListener("click", () => {
            document.getElementById("levelUpModal").classList.remove("active");
        });
    }

    // Notification dropdown toggle & actions
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

    // INITIAL RENDER
    renderMeetings();
    renderTimeline();
    renderSemaphores();
    renderEscribientes();
    renderChangeLog();
    updatePoaStats();
    filterMembers();
    updateHistoryStats();

    // Wiring manualCodeBtn
    const manualCodeBtn = document.getElementById("manualCodeBtn");
    if (manualCodeBtn) {
        manualCodeBtn.addEventListener("click", () => {
            // Stop scanning simulation if running
            if (qrScannerTimer) clearTimeout(qrScannerTimer);
            const corners = document.querySelectorAll(".qr-corner");
            const laser = document.querySelector(".qr-laser");
            if (corners) corners.forEach(c => c.style.borderColor = "var(--primary)");
            if (laser) laser.style.animationPlayState = "paused";

            const code = prompt("Ingresa el código temporal de asistencia (ej. AV-2026 o K7-9MX):");
            if (code && code.trim() !== "") {
                showToast("Código verificado con éxito.", "success");
                setTimeout(() => {
                    registerNewAttendance();
                }, 800);
            } else {
                // Resume scan if cancelled
                runQRScannerSimulation();
            }
        });
    }

    // Wiring quick logins on login screen
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
            localStorage.setItem("agua_viva_active_user_email", "superadmin@email.com");
            const db = JSON.parse(localStorage.getItem("agua_viva_db") || "{}");
            db.currentSimulatedRole = "superadmin";
            localStorage.setItem("agua_viva_db", JSON.stringify(db));
            showToast("Ingresando como Superadmin", "success");
            loadState();
            document.body.classList.remove("jav-theme");
            document.getElementById("authOverlay").classList.add("hidden");
            window.location.reload();
        });
    }

    // Wiring Floating Simulator Widget
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

        // Highlight active simulated user/role in simulator panel
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
                    } else if (role === "admin" && window.location.pathname.includes("superadmin.html")) {
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

// Rendering functions
function renderMeetings() {
    const list = document.getElementById("upcomingMeetingsList");
    if (!list) return;
    list.innerHTML = "";

    if (!state.selectedCalendar) {
        state.selectedCalendar = "GROUP";
    }

    // Filter by calendar type
    let filtered = state.meetings.filter(m => m.calendar === state.selectedCalendar);

    // If JAV mode is ON, filter/show JAV events
    if (state.user.isJav) {
        filtered = filtered.filter(m => m.isJav);
    } else {
        // regular mode: hide JAV-only preparation meetings unless user is JAV
        filtered = filtered.filter(m => !m.isJav);
    }

    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2.5rem 1rem;">No hay eventos en este calendario.</div>`;
        return;
    }

    filtered.forEach(meet => {
        const item = document.createElement("div");
        item.className = `meeting-item ${meet.isJav ? 'jav-event' : ''}`;
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
        list.appendChild(item);
    });
}

function renderTimeline() {
    const list = document.getElementById("timelineList");
    list.innerHTML = "";

    state.history.forEach(hist => {
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

function renderSemaphores() {
    const list = document.getElementById("groupsSemaphoreList");
    list.innerHTML = "";

    state.groupsSemaphore.forEach(grp => {
        const item = document.createElement("div");
        item.className = "group-semaphore-item";
        
        let labelClass = grp.status.toLowerCase();
        let labelText = grp.status === "GREEN" ? "Validado" : grp.status === "YELLOW" ? "Borrador" : "Pendiente";
        
        item.innerHTML = `
            <div>
                <span class="group-name">${grp.name}</span>
                <p style="font-size: 0.65rem; color: var(--text-muted); margin-top: 0.15rem;">
                    Por: ${grp.updatedBy} · ${grp.time}
                </p>
            </div>
            <div class="status-indicator-group cursor-pointer" onclick="toggleGroupSemaphore('${grp.name}')">
                <span class="light-dot ${labelClass}"></span>
                <span class="light-label ${labelClass}">${labelText}</span>
            </div>
        `;
        list.appendChild(item);
    });
}

// Interactive helper to change semaphore status in prototype
window.toggleGroupSemaphore = function(groupName) {
    const grp = state.groupsSemaphore.find(g => g.name === groupName);
    if (!grp) return;

    // Cycle RED -> YELLOW -> GREEN -> RED
    const oldStatus = grp.status;
    if (grp.status === "RED") grp.status = "YELLOW";
    else if (grp.status === "YELLOW") grp.status = "GREEN";
    else grp.status = "RED";

    grp.updatedBy = "Atracciones Diego V.";
    grp.time = "Hace 1 seg";

    state.changelog.unshift({
        action: "UPDATE_SEMAFORO",
        details: `Cambió ${groupName} de ${oldStatus.toLowerCase()} a ${grp.status.toLowerCase()}`,
        user: "Atracciones Diego V.",
        time: getFormattedTime()
    });

    saveState();
    renderSemaphores();
    renderChangeLog();
    updatePoaStats();
};

function renderEscribientes(query = "") {
    const tbody = document.getElementById("escribientesListBody");
    tbody.innerHTML = "";

    const filtered = state.escribientes.filter(esc => {
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

    // Add audit log
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

function renderChangeLog() {
    const list = document.getElementById("auditChangeLogList");
    list.innerHTML = "";

    state.changelog.forEach(log => {
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

    // 2. Count strictly by roleClass classification, excluding coordination/service roles
    const totalApoyos = state.members.filter(m => m.roleClass === "Apoyo" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI" && !m.isCoordinator).length;
    const totalPadrinos = state.members.filter(m => m.roleClass === "Padrino" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI" && !m.isCoordinator).length;
    const totalOrejas = state.members.filter(m => m.roleClass === "Oreja" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI" && !m.isCoordinator).length;

    const lblApoyos = document.getElementById("poa-total-apoyos");
    const lblPadrinos = document.getElementById("poa-total-padrinos");
    const lblOrejas = document.getElementById("poa-total-orejas");

    if (lblApoyos) lblApoyos.textContent = totalApoyos;
    if (lblPadrinos) lblPadrinos.textContent = totalPadrinos;
    if (lblOrejas) lblOrejas.textContent = totalOrejas;

    // 3. Count transport details
    // For prototype, calculate available spots
    let spotsOffered = 0;
    if (state.user.attendingHacienda && state.user.transportStatus === "PROVIDES_TRANSPORT") {
        spotsOffered += state.user.transportCapacity;
    }
    // Add mock spots from other groups
    spotsOffered += 28;

    let needTransport = 14; // Mock base count
    if (state.user.attendingHacienda && state.user.transportStatus === "NEEDS_TRANSPORT") {
        needTransport += 1;
    }

    const lblTransport = document.getElementById("poa-transport-ratio");
    if (lblTransport) lblTransport.textContent = `${needTransport} / ${spotsOffered}`;
}

// Member list filtering
function filterMembers() {
    const region = document.getElementById("memberRegionSelect").value;
    const role = document.getElementById("memberRoleFilter").value;
    const search = document.getElementById("memberSearchInput").value.toLowerCase();

    const tbody = document.getElementById("membersTableBody");
    tbody.innerHTML = "";

    const filtered = state.members.filter(m => {
        const regionMatch = region === "all" || m.region === region;
        
        let roleMatch = role === "all";
        if (role === "PADRINO") roleMatch = m.role === "PADRINO";
        if (role === "OREJA") roleMatch = m.role === "OREJA";
        if (role === "APOYO") roleMatch = m.role === "APOYO";
        if (role === "JAV") roleMatch = m.isJav;
        if (role === "SERVIDOR") roleMatch = (m.role === "AI" || m.role === "AE" || m.role === "LIDER");

        const nameMatch = m.name.toLowerCase().includes(search);

        return regionMatch && roleMatch && nameMatch;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron miembros con los filtros especificados.</td></tr>`;
        return;
    }

    filtered.forEach(m => {
        const tr = document.createElement("tr");
        
        let badgeHtml = "";
        if (m.role === "LIDER") badgeHtml = `<span class="badge badge-role badge-lider">Líder</span>`;
        else if (m.role === "AE") badgeHtml = `<span class="badge badge-role badge-lider">AE</span>`;
        else if (m.role === "AI") badgeHtml = `<span class="badge badge-role badge-lider">AI</span>`;
        else if (m.role === "PADRINO") badgeHtml = `<span class="badge badge-role badge-padrino">Padrino</span>`;
        else if (m.role === "OREJA") badgeHtml = `<span class="badge badge-role badge-oreja">Oreja</span>`;
        else badgeHtml = `<span class="badge badge-role badge-apoyo">Apoyo</span>`;

        const javTag = m.isJav ? `<span class="badge badge-role badge-jav-tag">JAV</span>` : "";

        tr.innerHTML = `
            <td><strong>${m.name}</strong></td>
            <td>${m.region} · <span style="color:var(--text-secondary);">${m.group}</span></td>
            <td><div style="display:flex; gap:0.25rem;">${badgeHtml}${javTag}</div></td>
            <td>${m.role === "LIDER" ? 'Líder de Grupo' : m.role === 'AE' || m.role === 'AI' ? 'Servicio Juntas' : 'Acompañamiento'}</td>
            <td><span style="color: ${m.status === 'Activo' ? 'var(--color-green)' : 'var(--text-muted)'}; font-size: 0.8rem;">● ${m.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Simulations
let qrScannerTimer = null;
function runQRScannerSimulation() {
    const corners = document.querySelectorAll(".qr-corner");
    const laser = document.querySelector(".qr-laser");
    
    // Reset colors
    corners.forEach(c => c.style.borderColor = "var(--primary)");
    laser.style.animationPlayState = "running";

    // Simulate scanning for 2.2 seconds, then trigger success
    if (qrScannerTimer) clearTimeout(qrScannerTimer);
    qrScannerTimer = setTimeout(() => {
        // Success color change (green)
        corners.forEach(c => c.style.borderColor = "var(--color-green)");
        laser.style.animationPlayState = "paused";
        
        // Show Toast
        showToast("Código QR detectado correctamente.", "success");

        // Open Success popup celebrating level up or attendance confirmation
        setTimeout(() => {
            registerNewAttendance();
        }, 800);

    }, 2200);
}

function registerNewAttendance() {
    // Add new event to history
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

    // Check level up (from level 4 Faro to level 5 Aurora)
    if (state.user.xp >= 435 && state.user.level === 4) {
        state.user.level = 5;
        leveledUp = true;
        // Trigger Level up modal celebration
        document.getElementById("levelUpModal").classList.add("active");
    }

    // Update homepage labels
    document.querySelector(".current-xp").innerHTML = `<strong>${state.user.xp}</strong> XP`;
    if (leveledUp) {
        document.querySelector(".xp-needed").innerHTML = `nivel alcanzado: <strong class="color-cyan">Aurora!</strong>`;
        document.querySelector(".progress-bar-fill").style.width = "100%";
        
        // Dynamically update achievements view elements if rendered
        const logrosSection = document.getElementById("sec-logros");
        if (logrosSection) {
            // Update level badge text in logros profile
            logrosSection.querySelector(".badge-jav-tag").textContent = "Nv 5 · Aurora";
            // Update XP values
            logrosSection.querySelector(".level-progress-wrapper .level-xp-text").innerHTML = `
                <span class="current-xp">Aurora &rarr; Sol</span>
                <span class="current-xp"><strong>${state.user.xp}</strong> / 800 XP</span>
            `;
            logrosSection.querySelector(".level-progress-wrapper .progress-bar-fill").style.width = "30%"; // Mock progress into level 5
            
            // Update roadmap nodes
            const roadmapItems = logrosSection.querySelectorAll(".roadmap-item");
            if (roadmapItems.length >= 5) {
                // Node 4 (Faro, index 3): change active to completed
                roadmapItems[3].classList.remove("active");
                roadmapItems[3].classList.add("completed");
                // Node 5 (Aurora, index 4): change locked to active
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
                // Update badge count
                logrosSection.querySelector(".insignias-count").textContent = "6 / 9";
            }
        }
    } else {
        document.querySelector(".xp-needed").innerHTML = `faltan <strong class="color-cyan">${650 - state.user.xp} XP</strong> para Aurora`;
        const percentage = (state.user.xp / 650) * 100;
        document.querySelector(".progress-bar-fill").style.width = `${percentage}%`;
    }
    document.querySelector(".stat-value").textContent = state.user.streak;

    // Refresh views
    renderTimeline();
    
    // Redirect to Inicio tab
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".app-section");
    navItems.forEach(n => n.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    document.querySelector('[data-target="sec-inicio"]').classList.add("active");
    document.getElementById("sec-inicio").classList.add("active");

    showToast("Asistencia Registrada: +15 XP ganados", "success");
}

// Utility Helpers
function getFormattedTime() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function getFormattedDate() {
    const d = new Date();
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    return `${d.getDate()} de ${months[d.getMonth()]} · ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Toast notification popup in app
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
    
    // animate in
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(0)";
        toast.style.opacity = "1";
    }, 50);

    // animate out and delete
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

    // If JAV mode is ON, filter/show JAV events
    if (state.user.isJav) {
        filtered = filtered.filter(m => m.isJav);
    } else {
        filtered = filtered.filter(m => !m.isJav);
    }

    // Create 7 column arrays for events: 0: Lun, 1: Mar, 2: Mié, 3: Jue, 4: Vie, 5: Sáb, 6: Dom
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
            days[5].push(meet); // Default fallback to Saturday
        }
    });

    // Render 7 columns
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

                card.innerHTML = `
                    <strong style="color:var(--text-primary); font-size:0.65rem; line-height: 1.1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${meet.title}</strong>
                    <span style="font-size:0.55rem; color:var(--text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${meet.info.split("·")[0]}</span>
                    <span style="font-weight:600; color:var(--color-cyan); font-size:0.55rem;">+${meet.xp} XP</span>
                `;
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
        
        if (elJuntas) elJuntas.textContent = juntasCount + 29; // add mock offset
        if (elHaciendas) elHaciendas.textContent = haciendasCount;
    }
}

