// Lógica JavaScript del panel admin de escritorio de Agua Viva

// Estado local por defecto que imita la base de datos
const defaultAdminState = {
    currentSimulatedRole: "admin",
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
        },
        { id: "m12", name: "Cedro", email: "cedro@email.com", phone: "55-7711-2233", sobrietyDate: "2025-02-14", realName: "César D.", age: 31, emergency: "Esposa 555-7711", joinDate: "Feb 2025", level: "Faro Nv 4", levelNum: 4, xp: 505, racha: 38, cleanDays: 240, lastAttendance: "Hoy", status: "Activo", avatarColor: "#0e7490", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Satélite", roleClass: "Apoyo", serverRole: "AI", estigma: "ALCOHOLISMO", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO", scriptures: [], exercises: [] },
        { id: "m13", name: "Roca", email: "roca@email.com", phone: "55-8822-3344", sobrietyDate: "2024-08-02", realName: "Ramiro O.", age: 35, emergency: "Hermano 555-8822", joinDate: "Ago 2024", level: "Aurora Nv 5", levelNum: 5, xp: 720, racha: 60, cleanDays: 500, lastAttendance: "Hoy", status: "Activo", avatarColor: "#166534", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false, region: "Región 1 CDMX", group: "Zaragoza", roleClass: "Apoyo", serverRole: "Atracción Externa", estigma: "DROGADICCION", militanciaStatus: "MILITANCIA", experienciaNivel: "APOYO", scriptures: [], exercises: [] }
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

let groupsByRegion = {
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

let adminState = {};

function loadState() {
    const saved = localStorage.getItem("agua_viva_db");
    if (saved) {
        // Fusión defensiva con el estado por defecto: si el db fue sembrado por
        // el móvil u otra versión y carece de claves que el panel necesita
        adminState = { ...defaultAdminState, ...JSON.parse(saved) };
        // Migración v3: enriquecimiento por FUSIÓN. Completa los campos AA que
        // falten en cada miembro usando la semilla como referencia (por id o
        // email) y agrega los semilla ausentes, pero NUNCA elimina miembros
        // registrados desde la app (la versión anterior reemplazaba todo).
        if (adminState.members && !adminState.membersEnriched) {
            const ENRICH = ["estigma", "militanciaStatus", "experienciaNivel", "sponsorName",
                "apoyoSince", "orejaSince", "padrinoSince", "orejaJavSince", "padrinoJavSince",
                "isPadrinoJav", "isOrejaJav", "padrinoApadrina", "padrinoOrejea", "realName", "phone", "emergency"];
            defaultAdminState.members.forEach(seed => {
                const existing = adminState.members.find(m => m.id === seed.id || (m.email && m.email === seed.email));
                if (existing) {
                    ENRICH.forEach(k => {
                        if (existing[k] === undefined && seed[k] !== undefined) existing[k] = seed[k];
                    });
                } else {
                    adminState.members.push(seed);
                }
            });
            // Coherencia mínima para los registrados desde la app
            adminState.members.forEach(m => {
                if (!m.militanciaStatus) m.militanciaStatus = "CONCIENCIA";
                if (!m.experienciaNivel) {
                    const rc = (m.roleClass || "").toUpperCase();
                    m.experienciaNivel = rc.includes("PADRINO") ? "PADRINO" : rc.includes("OREJA") ? "OREJA" : "APOYO";
                }
            });
            adminState.membersEnriched = true;
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
            adminState.currentSimulatedRole = "admin";
            saveState();
        }
    } else {
        adminState = { ...defaultAdminState };
        saveState();
    }
    
    // Carga de catálogo de regiones y sedes persistentes
    if (!adminState.groupsByRegion) {
        adminState.groupsByRegion = {
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
        saveState();
    }
    groupsByRegion = adminState.groupsByRegion;

    // Migración v2: cada coordinador guarda su región (desambigua grupos con
    // el mismo nombre en distintas regiones, ej. "Satélite" en R1 y R3).
    if (!adminState.schemaVersion || adminState.schemaVersion < 2) {
        (adminState.activeCoordinators || []).forEach(c => {
            if (!c.region) {
                const m = (adminState.members || []).find(x => x.email === c.email);
                let derived = null;
                for (const reg in groupsByRegion) {
                    if ((groupsByRegion[reg] || []).includes(c.group)) { derived = reg; break; }
                }
                c.region = (m && m.region) || derived || "Región 1 CDMX";
            }
        });
        adminState.schemaVersion = 2;
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

    // Respaldos para evitar fallos
    if (!adminState.meetings) {
        adminState.meetings = [
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
    }
    if (!adminState.pendingRoleRequests) {
        adminState.pendingRoleRequests = [];
    }

    // Fija un correo activo por defecto si no existe, para compatibilidad
    if (!localStorage.getItem("agua_viva_active_user_email")) {
        localStorage.setItem("agua_viva_active_user_email", "mariana@email.com");
    }

    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const overlay = document.getElementById("adminAuthOverlay");
    
    if (!activeEmail) {
        if (overlay) overlay.classList.remove("hidden");
    } else {
        if (overlay) overlay.classList.add("hidden");
        
        // Busca coordinador activo o verifica si es superadmin
        let loggedInUser = adminState.activeCoordinators.find(c => c.email === activeEmail);
        let isSuper = (activeEmail === "superadmin@email.com") || (adminState.currentSimulatedRole === "superadmin");
        
        if (!loggedInUser && !isSuper) {
            localStorage.removeItem("agua_viva_active_user_email");
            if (overlay) overlay.classList.remove("hidden");
            const errDiv = document.getElementById("adminAuthError");
            if (errDiv) {
                const mb = adminState.members.find(m => m.email === activeEmail);
                const displayName = mb ? mb.name : activeEmail;
                errDiv.textContent = `Acceso denegado: ${displayName} no tiene permisos de servicio activo para ingresar al portal.`;
                errDiv.style.display = "block";
            }
            return;
        }

        if (loggedInUser) {
            adminState.user = {
                name: loggedInUser.name,
                role: loggedInUser.role || loggedInUser.roleClass || "Miembro",
                sede: loggedInUser.group || "Sede Centro"
            };
            
            // Renderiza el perfil en la barra lateral
            const profileName = document.getElementById("adminProfileName");
            const profileRole = document.getElementById("adminProfileRole");
            const profileAvatar = document.getElementById("adminProfileAvatar");
            
            if (profileName) profileName.textContent = loggedInUser.name;
            if (profileRole) {
                const roleLabel = loggedInUser.role ? `Coord. ${loggedInUser.group}` : `${loggedInUser.roleClass || 'Miembro'}`;
                profileRole.textContent = roleLabel;
            }
            if (profileAvatar) profileAvatar.textContent = loggedInUser.name.substring(0, 1).toUpperCase();
        }
    }

    let stateModified = false;
    if (!adminState.groupLocations) {
        adminState.groupLocations = {
            "Satélite": { coords: "19.5106, -99.2312", link: "https://maps.google.com/?q=19.5106,-99.2312" },
            "Zaragoza": { coords: "19.4124, -99.0825", link: "https://maps.google.com/?q=19.4124,-99.0825" },
            "Ermita": { coords: "19.3621, -99.1215", link: "https://maps.google.com/?q=19.3621,-99.1215" },
            "Amalucan": { coords: "19.0435, -98.1585", link: "https://maps.google.com/?q=19.0435,-98.1585" }
        };
        stateModified = true;
    }
    if (!adminState.haciendaLocations) {
        adminState.haciendaLocations = {
            "Región 1 CDMX": { name: "Hacienda El Oasis", coords: "19.1234, -99.5678", link: "https://maps.google.com/?q=19.1234,-99.5678" },
            "Región 4 Puebla": { name: "Hacienda Buena Vista", coords: "19.0152, -98.2435", link: "https://maps.google.com/?q=19.0152,-98.2435" }
        };
        stateModified = true;
    }
    if (adminState.activeCoordinators && !adminState.activeCoordinators.some(c => c.name === "Diana")) {
        adminState.activeCoordinators.push({
            id: "ac_diana",
            name: "Diana",
            role: "LIDER",
            group: "Amalucan",
            region: "Región 4 Puebla",
            avatarColor: "#1d4ed8",
            email: "diana@email.com"
        });
        adminState.activeCoordinators.push({
            id: "ac_adan",
            name: "Adan G.",
            role: "AE",
            group: "Amalucan",
            region: "Región 4 Puebla",
            avatarColor: "#047857",
            email: "adan@email.com"
        });
        stateModified = true;
    }
    if (adminState.members) {
        const seedList = [
            {
                id: "m_diana",
                name: "Diana",
                realName: "Diana L.",
                email: "diana@email.com",
                phone: "22-1234-5678",
                sobrietyDate: "2024-05-15",
                age: 35,
                emergency: "Esposo 222-123-4567",
                joinDate: "May 2024",
                level: "Sol Nv 8",
                levelNum: 8,
                xp: 1200,
                racha: 45,
                cleanDays: 320,
                lastAttendance: "Hoy",
                status: "Activo",
                avatarColor: "#1d4ed8",
                checkedIn: true,
                checkInTime: "19:00",
                xpGranted: 10,
                isJav: false,
                region: "Región 4 Puebla",
                group: "Amalucan",
                roleClass: "Líder",
                serverRole: "Lider de grupo",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_adan",
                name: "Adan G.",
                realName: "Adán Garcia L.",
                email: "adan@email.com",
                phone: "22-8765-4321",
                sobrietyDate: "2026-05-20",
                age: 26,
                emergency: "Mamá 222-876-5432",
                joinDate: "May 2026",
                level: "Llama Nv 2",
                levelNum: 2,
                xp: 210,
                racha: 10,
                cleanDays: 30,
                lastAttendance: "Hoy",
                status: "Activo",
                avatarColor: "#047857",
                checkedIn: true,
                checkInTime: "19:05",
                xpGranted: 10,
                isJav: false,
                region: "Región 4 Puebla",
                group: "Amalucan",
                roleClass: "Atracción",
                serverRole: "Atraccion Externa",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_roberto_amalucan",
                name: "Roberto M.",
                realName: "Roberto Miranda",
                email: "roberto.m@email.com",
                phone: "22-9012-3456",
                sobrietyDate: "2025-01-10",
                age: 33,
                emergency: "Esposa 222-901-2345",
                joinDate: "Ene 2025",
                level: "Faro Nv 4",
                levelNum: 4,
                xp: 450,
                racha: 20,
                cleanDays: 500,
                lastAttendance: "Hoy",
                status: "Activo",
                avatarColor: "#b91c1c",
                region: "Región 4 Puebla",
                group: "Amalucan",
                serverRole: "COM (Coordinador de Oracion y Meditacion)",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_maria_amalucan",
                name: "María S.",
                realName: "María Sánchez",
                email: "maria.s@email.com",
                phone: "22-3456-7890",
                sobrietyDate: "2024-08-12",
                age: 28,
                emergency: "Hermano 222-345-6789",
                joinDate: "Ago 2024",
                level: "Constelación Nv 7",
                levelNum: 7,
                xp: 850,
                racha: 35,
                cleanDays: 680,
                lastAttendance: "Ayer",
                status: "Activo",
                avatarColor: "#1d4ed8",
                region: "Región 4 Puebla",
                group: "Amalucan",
                serverRole: "TG (Tesoreria de grupo)",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_fernando_amalucan",
                name: "Fernando L.",
                realName: "Fernando López",
                email: "fernando.l@email.com",
                phone: "22-5678-9012",
                sobrietyDate: "2025-11-05",
                age: 30,
                emergency: "Papá 222-567-8901",
                joinDate: "Nov 2025",
                level: "Sol Nv 8",
                levelNum: 8,
                xp: 1500,
                racha: 80,
                cleanDays: 230,
                lastAttendance: "Hoy",
                status: "Activo",
                avatarColor: "#c2410c",
                region: "Región 4 Puebla",
                group: "Amalucan",
                serverRole: "Secretario",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_gabriela_amalucan",
                name: "Gabriela P.",
                realName: "Gabriela Pérez",
                email: "gabriela.p@email.com",
                phone: "22-1111-2222",
                sobrietyDate: "2025-06-15",
                age: 25,
                emergency: "Mamá 222-111-2222",
                joinDate: "Jun 2025",
                level: "Llama Nv 2",
                levelNum: 2,
                xp: 300,
                racha: 15,
                cleanDays: 370,
                lastAttendance: "Hoy",
                status: "Activo",
                avatarColor: "#047857",
                region: "Región 4 Puebla",
                group: "Amalucan",
                serverRole: "Literatura",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_hector_amalucan",
                name: "Héctor G.",
                realName: "Héctor Gómez",
                email: "hector.g@email.com",
                phone: "22-3333-4444",
                sobrietyDate: "2026-02-18",
                age: 29,
                emergency: "Mamá 222-333-4444",
                joinDate: "Feb 2026",
                level: "Chispa Nv 1",
                levelNum: 1,
                xp: 110,
                racha: 12,
                cleanDays: 120,
                lastAttendance: "Hace 2 días",
                status: "Activo",
                avatarColor: "#556b2f",
                region: "Región 4 Puebla",
                group: "Amalucan",
                serverRole: "PPI (Preparador de Primeros Inventarios)",
                approvalStatus: "APPROVED"
            },
            {
                id: "m_clara_amalucan",
                name: "Clara E.",
                realName: "Clara Espinoza",
                email: "clara.e@email.com",
                phone: "22-5555-6666",
                sobrietyDate: "2024-03-22",
                age: 41,
                emergency: "Hijo 222-555-6666",
                joinDate: "Mar 2024",
                level: "Aurora Nv 5",
                levelNum: 5,
                xp: 750,
                racha: 50,
                cleanDays: 820,
                lastAttendance: "Hoy",
                status: "Activo",
                avatarColor: "#be185d",
                region: "Región 4 Puebla",
                group: "Amalucan",
                serverRole: "Coordinador de Hacienda",
                approvalStatus: "APPROVED"
            }
        ];
        seedList.forEach(sm => {
            const idx = adminState.members.findIndex(m => m.name === sm.name);
            if (idx === -1) {
                adminState.members.push(sm);
                stateModified = true;
            } else {
                if (adminState.members[idx].serverRole !== sm.serverRole) {
                    adminState.members[idx].serverRole = sm.serverRole;
                    stateModified = true;
                }
            }
        });
        stateModified = true;
    }
    
    updateGroupsSemaphoreStatuses();
    ensureMeetingDates();

    if (stateModified) {
        saveState();
    }
}

function saveState() {
    localStorage.setItem("agua_viva_db", JSON.stringify(adminState));
}

// Fechas del calendario
const WEEKDAYS_ABBR = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS_ES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function dateParts(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return { valid: false };
    return { valid: true, day: d.getDate(), weekday: WEEKDAYS_ABBR[d.getDay()], monthIdx: d.getMonth(), year: d.getFullYear() };
}

// Haciendas por región (el valor del selector mapea a su región)
const HACIENDA_REGION_MAP = {
    HAC_R1: "Región 1 CDMX", HAC_R2: "Región 2 Estado de México", HAC_R3: "Región 3 Querétaro y Guanajuato",
    HAC_R4: "Región 4 Puebla", HAC_R5: "Región 5 Guerrero", HAC_R6: "Región 6 Yucatán",
    HAC_R7: "Región 7 Chicago", HAC_R8: "Región 8 Veracruz", HAC_R9: "Región 9 Monterrey"
};
function isHaciendaType(t) { return typeof t === "string" && t.indexOf("HAC_") === 0; }

// repartiéndolos en el mes en curso y recalculando el día de la semana.
function ensureMeetingDates() {
    const now = new Date();
    let changed = false;
    (adminState.meetings || []).forEach(m => {
        if (m.date && dateParts(m.date).valid) return;
        const dayNum = Math.min(Math.max(parseInt(m.day) || 1, 1), 28);
        const candidate = new Date(now.getFullYear(), now.getMonth(), dayNum);
        m.date = `${candidate.getFullYear()}-${String(candidate.getMonth() + 1).padStart(2, "0")}-${String(candidate.getDate()).padStart(2, "0")}`;
        const p = dateParts(m.date);
        m.day = String(p.day);
        m.month = p.weekday;
        changed = true;
    });
    if (changed) saveState();
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    
    // MANEJADORES INTERACTIVOS DE AUTENTICACIÓN (Portal Admin)
    const adminSwitchToRegisterBtn = document.getElementById("adminSwitchToRegisterBtn");
    const adminSwitchToLoginBtn = document.getElementById("adminSwitchToLoginBtn");
    const adminAuthLoginView = document.getElementById("adminAuthLoginView");
    const adminAuthRegisterView = document.getElementById("adminAuthRegisterView");
    const adminAuthLoginForm = document.getElementById("adminAuthLoginForm");
    const adminAuthRegisterForm = document.getElementById("adminAuthRegisterForm");
    const adminRegRegion = document.getElementById("adminRegRegion");
    const adminRegGroup = document.getElementById("adminRegGroup");
    const adminLoginGuestBtn = document.getElementById("adminLoginGuestBtn");
    const adminLogoutLink = document.getElementById("adminLogoutLink");

    if (adminSwitchToRegisterBtn) {
        adminSwitchToRegisterBtn.addEventListener("click", () => {
            adminAuthLoginView.style.display = "none";
            adminAuthRegisterView.style.display = "block";
        });
    }

    if (adminSwitchToLoginBtn) {
        adminSwitchToLoginBtn.addEventListener("click", () => {
            adminAuthRegisterView.style.display = "none";
            adminAuthLoginView.style.display = "block";
        });
    }

    // Menú de grupos dinámico según la región elegida en el registro
    if (adminRegRegion) {
        adminRegRegion.addEventListener("change", (e) => {
            const selectedRegion = e.target.value;
            adminRegGroup.innerHTML = "";
            
            if (selectedRegion && groupsByRegion[selectedRegion]) {
                adminRegGroup.disabled = false;
                const groups = groupsByRegion[selectedRegion];
                
                const placeholder = document.createElement("option");
                placeholder.value = "";
                placeholder.textContent = "Selecciona Grupo";
                adminRegGroup.appendChild(placeholder);

                groups.forEach(g => {
                    const opt = document.createElement("option");
                    opt.value = g;
                    opt.textContent = g;
                    adminRegGroup.appendChild(opt);
                });
            } else {
                adminRegGroup.disabled = true;
                const opt = document.createElement("option");
                opt.value = "";
                opt.textContent = "Primero selecciona una región";
                adminRegGroup.appendChild(opt);
            }
        });
    }

    // Maneja el envío del login
    if (adminAuthLoginForm) {
        adminAuthLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const errDiv = document.getElementById("adminAuthError");
            if (errDiv) errDiv.style.display = "none";
            const email = document.getElementById("adminLoginEmail").value.trim().toLowerCase();
            const password = document.getElementById("adminLoginPassword").value;
            
            // Busca en los coordinadores activos
            let user = adminState.activeCoordinators.find(c => c.email === email && (password === "123" || password === "password"));
            let isSuper = (email === "superadmin@email.com" && password === "123");

            if (user || isSuper) {
                if (isSuper) {
                    adminState.currentSimulatedRole = "superadmin";
                    saveState();
                }
                localStorage.setItem("agua_viva_active_user_email", email);
                showAdminToast(`Sesión iniciada`, "success");
                
                // Oculta el overlay de autenticación
                document.getElementById("adminAuthOverlay").classList.add("hidden");
                
                // Recarga el estado y refresca las vistas
                loadState();
                updateUIForRole();
                renderDirectoryTable();
                updateDirectoryStats();
                initializeAttendanceSimulation();
            } else {
                let member = adminState.members.find(m => m.email === email && m.password === password);
                const errDiv = document.getElementById("adminAuthError");
                if (member) {
                    showAdminToast("Acceso denegado: No tienes permisos de servicio.", "error");
                    if (errDiv) {
                        errDiv.textContent = `Acceso denegado: ${member.name} no cuenta con permisos de servicio activo para ingresar.`;
                        errDiv.style.display = "block";
                    }
                } else {
                    showAdminToast("Correo o contraseña incorrectos.", "error");
                    if (errDiv) {
                        errDiv.textContent = "Correo o contraseña incorrectos.";
                        errDiv.style.display = "block";
                    }
                }
            }
        });
    }

    // Maneja el envío del registro
    if (adminAuthRegisterForm) {
        adminAuthRegisterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("adminRegEmail").value.trim().toLowerCase();
            const password = document.getElementById("adminRegPassword").value;
            const name = document.getElementById("adminRegName").value.trim();
            const region = document.getElementById("adminRegRegion").value;
            const group = document.getElementById("adminRegGroup").value;
            const requestedRole = document.getElementById("adminRegLeaderRoleType").value;

            // Verifica si el correo ya está registrado
            if (adminState.members.some(m => m.email === email) || adminState.activeCoordinators.some(c => c.email === email)) {
                showAdminToast("Este correo ya está registrado.", "error");
                return;
            }

            // Crea la solicitud pendiente de aprobación de coordinador
            const newPending = {
                id: "pr" + (adminState.pendingAdminRequests.length + 1),
                name: name,
                email: email,
                avatarColor: "#0F172A",
                requestedRole: requestedRole,
                group: group
            };

            const newMember = {
                id: "m" + (adminState.members.length + 1),
                name: name,
                email: email,
                password: password,
                phone: "55-9000-0000",
                sobrietyDate: "2026-01-01",
                realName: name,
                age: 30,
                emergency: "Contacto 555-9999",
                joinDate: "Hoy",
                level: "Chispa Nv 1",
                levelNum: 1,
                xp: 0,
                racha: 0,
                cleanDays: 1,
                lastAttendance: "Nunca",
                status: "Activo",
                avatarColor: "#0F172A",
                checkedIn: false,
                checkInTime: "—",
                xpGranted: 0,
                isJav: false,
                region: region,
                group: group,
                roleClass: "Apoyo",
                serverRole: "Ninguno",
                approvalStatus: "PENDING"
            };

            adminState.pendingAdminRequests.push(newPending);
            adminState.members.push(newMember);
            saveState();

            localStorage.setItem("agua_viva_active_user_email", email);
            showAdminToast("Registro enviado. Esperando aprobación del Superadmin.", "info");

            // Oculta el overlay de autenticación
            document.getElementById("adminAuthOverlay").classList.add("hidden");

            loadState();
            updateUIForRole();
            renderDirectoryTable();
            updateDirectoryStats();
            initializeAttendanceSimulation();

            adminAuthRegisterForm.reset();
        });
    }

    if (adminLoginGuestBtn) {
        adminLoginGuestBtn.addEventListener("click", () => {
            localStorage.setItem("agua_viva_active_user_email", "mariana@email.com");
            showAdminToast("Ingresando como Mariana C.", "success");
            loadState();
            document.getElementById("adminAuthOverlay").classList.add("hidden");
            updateUIForRole();
            renderDirectoryTable();
            updateDirectoryStats();
            initializeAttendanceSimulation();
        });
    }

    if (adminLogoutLink) {
        adminLogoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("agua_viva_active_user_email");
            showAdminToast("Sesión cerrada.", "info");
            document.getElementById("adminAuthOverlay").classList.remove("hidden");
            loadState();
        });
    }
    
    // 1. Enrutamiento de navegación en la vista Admin
    const menuLinks = document.querySelectorAll(".sidebar-menu a");
    const views = document.querySelectorAll(".admin-view");

    const currentHash = window.location.hash;
    if (currentHash) {
        const targetViewId = currentHash.replace("#", "");
        switchView(targetViewId);
        menuLinks.forEach(link => {
            if (link.href.includes(currentHash) || link.dataset.view === targetViewId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetViewId = link.dataset.view;
            if (targetViewId) {
                e.preventDefault();
                switchView(targetViewId);
                menuLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    document.getElementById("btnGoAsistencia").addEventListener("click", () => {
        switchView("view-asistencia");
        menuLinks.forEach(l => {
            if (l.dataset.view === "view-asistencia") l.classList.add("active");
            else l.classList.remove("active");
        });
    });

    // Inicializa la interfaz para el rol simulado al cargar
    updateUIForRole();

    initializeAttendanceSimulation();

    // 3. Lógica de la vista de directorio
    renderDirectoryTable();
    
    document.getElementById("dirSearchInput").addEventListener("input", filterDirectory);
    
    const tabButtons = document.querySelectorAll("#dirFilterTabs .tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterDirectory();
        });
    });

    document.getElementById("dirSortSelect").addEventListener("change", filterDirectory);
    document.getElementById("dirRoleFilter").addEventListener("change", filterDirectory);

    // Pastillas de cambio de rol simulado
    const pillRoleAdmin = document.getElementById("pillRoleAdmin");
    const pillRoleMember = document.getElementById("pillRoleMember");
    const pillRoleSuper = document.getElementById("pillRoleSuper");

    const pills = [pillRoleAdmin, pillRoleMember, pillRoleSuper];
    pills.forEach(pill => {
        if (!pill) return;
        
        // Sincroniza la clase activa con el estado cargado
        if (pill.dataset.role === adminState.currentSimulatedRole) {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
        }

        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            
            const role = pill.dataset.role;
            adminState.currentSimulatedRole = role;
            saveState();
            updateUIForRole();
        });
    });

    // 4. Formulario de registro de miembro: previsualización y envío
    const aliasInput = document.getElementById("frmAlias");
    const prevAvatar = document.getElementById("prevAvatarCircle");
    const prevAliasLabel = document.getElementById("prevAliasLabel");

    aliasInput.addEventListener("input", (e) => {
        const text = e.target.value;
        prevAliasLabel.textContent = text || "Ámbar";
        prevAvatar.textContent = text ? text.substring(0, 1).toUpperCase() : "Á";
    });

    const colorBtns = document.querySelectorAll("#avatarColorPicker .color-btn");
    colorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            colorBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const color = btn.dataset.color;
            prevAvatar.style.backgroundColor = color;
        });
    });

    // Envío del formulario
    document.getElementById("newMemberForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const alias = aliasInput.value;
        const realName = document.getElementById("frmRealName").value || "—";
        const age = parseInt(document.getElementById("frmAge").value);
        const emergency = document.getElementById("frmEmergency").value || "—";
        const phone = document.getElementById("frmPhone").value;
        const sobrietyDate = document.getElementById("frmSobrietyDate").value;
        const activeColor = document.querySelector("#avatarColorPicker .color-btn.active").dataset.color;

        const start = new Date(sobrietyDate);
        const diffTime = Math.abs(Date.now() - start);
        const cleanDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 0;

        // Verifica la validación de edad JAV (13 a 18)
        const isJav = (age >= 13 && age <= 18);
        const levelText = isJav ? "Chispa JAV Nv 1" : "Chispa Nv 1";

        const newId = "m" + (adminState.members.length + 1);
        const newMember = {
            id: newId,
            name: alias,
            email: alias.toLowerCase() + "@email.com",
            phone: phone,
            sobrietyDate: sobrietyDate,
            realName: realName,
            age: age,
            emergency: emergency,
            joinDate: "May 2026",
            level: levelText,
            levelNum: 1,
            xp: 0,
            racha: 0,
            cleanDays: cleanDays,
            lastAttendance: "Nuevo",
            status: "New",
            avatarColor: activeColor,
            checkedIn: false,
            checkInTime: "—",
            xpGranted: 0,
            isJav: isJav
        };

        adminState.members.push(newMember);
        saveState();

        const invCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        
        // Refresca la tabla del directorio
        renderDirectoryTable();
        
        // Actualiza el conteo de estadísticas
        updateDirectoryStats();
        
        // Vuelve al directorio
        switchView("view-miembros");
        
        showAdminToast(`¡Miembro registrado! Código de invitación: ${invCode}`, "success");
        
        // Reinicia el formulario
        document.getElementById("newMemberForm").reset();
        prevAliasLabel.textContent = "Ámbar";
        prevAvatar.textContent = "Á";
        prevAvatar.style.backgroundColor = "#c2410c";
        colorBtns.forEach(b => b.classList.remove("active"));
        colorBtns[0].classList.add("active");
    });

    // Acción del botón de nuevo miembro
    document.getElementById("btnOpenNewMemberView").addEventListener("click", () => {
        switchView("view-nuevo-miembro");
    });

    document.getElementById("btnCancelNewMember").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("view-miembros");
    });

    // 5. Volver del detalle al directorio
    document.getElementById("btnBackToDirectory").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("view-miembros");
    });

    document.getElementById("btnAddNoteSubmit").addEventListener("click", () => {
        const txtArea = document.getElementById("txtNewNote");
        const body = txtArea.value.trim();
        if (!body) return;

        const memberId = activeDetailMemberId;
        if (!memberId) return;

        if (!adminState.notes[memberId]) {
            adminState.notes[memberId] = [];
        }

        adminState.notes[memberId].unshift({
            date: "Hoy",
            author: "Mariana C.",
            body: body
        });
        saveState();

        txtArea.value = "";

        // Recarga la lista de notas
        renderMemberNotes(memberId);
        showAdminToast("Nota guardada correctamente.", "success");
    });

    const btnSaveProgress = document.getElementById("btnSaveProgress");
    if (btnSaveProgress) {
        btnSaveProgress.addEventListener("click", () => {
            if (!activeDetailMemberId) return;
            const member = adminState.members.find(m => m.id === activeDetailMemberId);
            if (!member) return;
            member.scriptures = [...document.querySelectorAll("#detailScripturesList input:checked")].map(c => c.value);
            member.exercises = [...document.querySelectorAll("#detailExercisesList input:checked")].map(c => c.value);
            saveState();
            showAdminToast(`Avance de ${member.name} actualizado.`, "success");
        });
    }

    // Manejadores de clic de las pestañas del calendario admin
    const adminCalTabs = document.querySelectorAll("#adminCalendarTabs button");
    adminCalTabs.forEach(btn => {
        btn.addEventListener("click", () => {
            adminCalTabs.forEach(b => {
                b.classList.remove("active");
                b.style.backgroundColor = "transparent";
                b.style.color = "var(--admin-text-secondary)";
            });
            btn.classList.add("active");
            btn.style.backgroundColor = "var(--admin-primary)";
            btn.style.color = "white";
            
            adminState.selectedCalendar = btn.dataset.cal;
            
            const activeViewBtn = document.querySelector("#adminCalendarViewToggle button.active");
            const activeView = activeViewBtn ? activeViewBtn.dataset.view : "LIST";
            if (activeView === "CALENDAR") {
                renderAdminCalendar();
            } else {
                renderAdminEvents();
            }
        });
    });

    // Cambio de vista del calendario admin (Lista vs Semanal)
    const adminViewToggleBtns = document.querySelectorAll("#adminCalendarViewToggle button");
    adminViewToggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            adminViewToggleBtns.forEach(b => {
                b.classList.remove("active");
                b.style.backgroundColor = "transparent";
                b.style.color = "var(--admin-text-secondary)";
            });
            btn.classList.add("active");
            btn.style.backgroundColor = "var(--admin-primary)";
            btn.style.color = "white";
            
            const view = btn.dataset.view;
            const listContainer = document.getElementById("adminEventsListTableContainer");
            const weekContainer = document.getElementById("adminWeeklyCalendarContainer");
            
            if (view === "LIST") {
                listContainer.style.display = "block";
                weekContainer.style.display = "none";
                renderAdminEvents();
            } else {
                listContainer.style.display = "none";
                weekContainer.style.display = "block";
                renderAdminCalendar();
            }
        });
    });

    // === SECCIÓN DE CREACIÓN DE EVENTOS CON CAMPOS CONDICIONALES ===
    const evtCalendar = document.getElementById("evtCalendar");
    const evtGroup = document.getElementById("evtGroup");
    const evtLocationType = document.getElementById("evtLocationType");
    const evtLocationGroup = document.getElementById("evtLocationGroup");
    const evtSpeakerType = document.getElementById("evtSpeakerType");
    const evtSpeakerMember = document.getElementById("evtSpeakerMember");
    const evtSpeakerExternalRegion = document.getElementById("evtSpeakerExternalRegion");
    const evtType = document.getElementById("evtType");

    if (evtCalendar) {
        evtCalendar.addEventListener("change", updateEventFormFields);
    }
    if (evtLocationType) {
        evtLocationType.addEventListener("change", updateEventFormFields);
    }
    if (evtSpeakerType) {
        evtSpeakerType.addEventListener("change", updateSpeakerFormFields);
    }
    if (evtType) {
        evtType.addEventListener("change", updateEventFormFields);
    }

    populateEventFormSelectors();
    updateEventFormFields();
    updateSpeakerFormFields();

    // Actualiza la visibilidad de las opciones de Hacienda
    updateHaciendaGroupVisibility();

    // Maneja el formulario de creación de evento
    const createEventForm = document.getElementById("adminCreateEventForm");
    if (createEventForm) {
        createEventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("evtTitle").value.trim();
            const calendar = document.getElementById("evtCalendar").value;
            const type = document.getElementById("evtType").value;

            if (isHaciendaType(type)) {
                handleHaciendaScheduling(type);
                return;
            }

            let resolvedInfo = "";
            let locationTypeVal = "CUSTOM";
            let locationGroupVal = "";
            let locationLinkVal = "";
            const locationDetailsVal = document.getElementById("evtLocationDetails").value.trim();

            if (calendar === "GROUP") {
                const groupVal = adminState.user.sede || "Sede Centro";
                locationTypeVal = "GROUP";
                locationGroupVal = groupVal;
                
                if (adminState.groupLocations && adminState.groupLocations[groupVal]) {
                    locationLinkVal = adminState.groupLocations[groupVal].link || "";
                }
                resolvedInfo = `Grupo ${groupVal} · ${locationDetailsVal}`;

            } else if (calendar === "REGIONAL") {
                const locType = evtLocationType ? evtLocationType.value : "GROUP";
                locationTypeVal = locType;
                
                if (locType === "GROUP") {
                    const groupVal = evtLocationGroup ? evtLocationGroup.value : "";
                    locationGroupVal = groupVal;
                    if (adminState.groupLocations && adminState.groupLocations[groupVal]) {
                        locationLinkVal = adminState.groupLocations[groupVal].link || "";
                    }
                    resolvedInfo = `Grupo ${groupVal} · ${locationDetailsVal}`;
                } else {
                    locationLinkVal = document.getElementById("evtLocationLink").value.trim();
                    resolvedInfo = `${locationDetailsVal}`;
                }

            } else if (calendar === "ANNUAL") {
                locationTypeVal = "CUSTOM";
                locationLinkVal = document.getElementById("evtLocationLink").value.trim();
                resolvedInfo = `${locationDetailsVal}`;
            }

            const speakerTypeVal = evtSpeakerType.value;
            let speakerName = "";
            let speakerEmailVal = "";
            let speakerGroupVal = "";
            let speakerRegionVal = "";

            if (speakerTypeVal === "MILITANCIA") {
                const memberEmail = evtSpeakerMember.value;
                const memberObj = adminState.members.find(m => m.email === memberEmail);
                if (memberObj) {
                    speakerName = memberObj.name;
                    speakerEmailVal = memberObj.email;
                    speakerGroupVal = memberObj.group;
                    speakerRegionVal = memberObj.region;
                } else {
                    speakerName = "Miembro Desconocido";
                }
            } else if (speakerTypeVal === "EXTERNO") {
                speakerName = document.getElementById("evtSpeakerExternalName").value.trim();
                speakerGroupVal = document.getElementById("evtSpeakerExternalGroup").value;
                speakerRegionVal = document.getElementById("evtSpeakerExternalRegion").value;
                
                const extObj = adminState.members.find(m => m.name.toLowerCase() === speakerName.toLowerCase());
                if (extObj) {
                    speakerEmailVal = extObj.email;
                }
            } else if (speakerTypeVal === "INVITADO") {
                speakerName = document.getElementById("evtSpeakerGuestName").value.trim();
            }

            const dateVal = document.getElementById("evtDate").value;
            const dp = dateParts(dateVal);
            const day = dp.valid ? String(dp.day) : "";
            const month = dp.valid ? dp.weekday : "";
            const timeVal = document.getElementById("evtTime").value.trim();
            const xp = parseInt(document.getElementById("evtXp").value) || 15;
            const isJav = document.getElementById("evtIsJav").checked;

            const newEvent = {
                id: Date.now(),
                calendar: calendar,
                type: type,
                title: title,
                topic: title, // Usado como tema
                speakerType: speakerTypeVal,
                speaker: speakerName,
                speakerEmail: speakerEmailVal,
                speakerGroup: speakerGroupVal,
                speakerRegion: speakerRegionVal,
                locationType: locationTypeVal,
                locationGroup: locationGroupVal,
                locationLink: locationLinkVal,
                locationDetails: locationDetailsVal,
                info: resolvedInfo,
                date: dateVal,
                day: day,
                month: month,
                time: `${day} ${month} · ${timeVal}`,
                startTime: timeVal,
                xp: xp,
                isJav: isJav
            };

            // Notificación al ponente si tiene email registrado
            if (speakerEmailVal) {
                if (!adminState.notifications) {
                    adminState.notifications = {};
                }
                if (!adminState.notifications[speakerEmailVal]) {
                    adminState.notifications[speakerEmailVal] = [];
                }
                adminState.notifications[speakerEmailVal].unshift({
                    id: "evt_notif_" + Date.now(),
                    title: "📅 Nueva Junta Asignada",
                    desc: `Se te ha asignado como ponente para la junta "${title}" el día ${day} de ${month} a las ${timeVal} en ${resolvedInfo}.`,
                    time: "Ahora mismo",
                    type: "event",
                    read: false,
                    action: "sec-inicio"
                });
            }

            adminState.meetings.push(newEvent);
            saveState();
            renderAdminEvents();
            
            createEventForm.reset();
            populateEventFormSelectors();
            updateEventFormFields();
            updateSpeakerFormFields();
            
            showAdminToast("¡Evento programado con éxito y ponente notificado!", "success");
        });
    }

    // Renderizado inicial de los eventos del admin
    renderAdminEvents();

    // Inicialización de Haciendas y POA
    const openAddEscBtn = document.getElementById("adminOpenAddEscribienteModal");
    const closeAddEscBtn = document.getElementById("adminCloseEscribienteModal");
    const addEscModal = document.getElementById("adminAddEscribienteModal");
    const addEscForm = document.getElementById("adminAddEscribienteForm");
    const searchEscInput = document.getElementById("adminSearchEscribiente");
    const saveLogisticsBtn = document.getElementById("adminSaveLogisticsBtn");
    const saveRectifiedPoaBtn = document.getElementById("adminSaveRectifiedPoaBtn");
    const haciendaSelect = document.getElementById("adminHaciendaSelect");

    const btnExportMembers = document.getElementById("btnExportMembers");
    if (btnExportMembers) {
        btnExportMembers.addEventListener("click", () => {
            const mode = (typeof AVExport !== "undefined") ? AVExport.exportFullWorkbook() : (exportDataToCSV(), "csv");
            showAdminToast(mode === "xlsx" ? "Reporte Excel (.xlsx) generado con 7 hojas." : "Sin conexión: base exportada a CSV.", "success");
        });
    }

    if (openAddEscBtn) {
        openAddEscBtn.addEventListener("click", () => {
            if (addEscModal) addEscModal.style.display = "flex";
        });
    }

    if (closeAddEscBtn) {
        closeAddEscBtn.addEventListener("click", () => {
            if (addEscModal) addEscModal.style.display = "none";
        });
    }

    if (addEscForm) {
        addEscForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("admEscName").value.trim();
            const gender = document.getElementById("admEscGender").value;
            const repe = document.getElementById("admEscRepe").value;
            const seguimiento = document.getElementById("admEscSeguimiento").value;
            const group = adminState.user ? adminState.user.sede : "Satélite";

            const newEsc = {
                id: "e" + (adminState.escribientes.length + 1),
                firstName: name,
                lastNameInitial: "",
                gender: gender,
                group: group,
                repe: repe === "YES",
                seguimiento: seguimiento === "YES"
            };

            adminState.escribientes.push(newEsc);

            adminState.changelog.unshift({
                action: "REGISTRO_ESCRIBIENTE",
                details: `Registró a escribiente ${name} (Repe: ${repe === "YES" ? "Sí" : "No"}, Seguimiento: ${seguimiento === "YES" ? "Sí" : "No"}) en el grupo ${group}`,
                user: adminState.user.name + " (Tú)",
                time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            });

            const grpSem = adminState.groupsSemaphore.find(g => g.name === group);
            if (grpSem) {
                grpSem.status = "YELLOW";
                grpSem.updatedBy = adminState.user.name + " (Tú)";
                grpSem.time = "Hace 1 seg";
            }

            saveState();
            renderAdminEscribientes();
            renderGroupsSemaphore();
            renderAuditChangelog();
            renderPoaTotals();
            renderRectifyTable();

            addEscModal.style.display = "none";
            addEscForm.reset();
            showAdminToast(`Escribiente ${name} registrado correctamente.`, "success");
        });
    }

    if (searchEscInput) {
        searchEscInput.addEventListener("input", (e) => {
            renderAdminEscribientes(e.target.value);
        });
    }

    if (saveLogisticsBtn) {
        saveLogisticsBtn.addEventListener("click", () => {
            const attending = document.getElementById("adminAttendingHacienda").value === "true";
            const shift = document.getElementById("adminArrivalShift").value;
            const transport = document.getElementById("adminTransportStatus").value;

            const activeEmail = localStorage.getItem("agua_viva_active_user_email");
            const member = adminState.members.find(m => m.email === activeEmail);
            if (member) {
                member.attendingHacienda = attending;
                member.arrivalShift = shift;
                member.transportStatus = transport;
            }

            // Registra la acción en la bitácora de auditoría
            adminState.changelog.unshift({
                action: "DECLARACION_LOGISTICA",
                details: `Declaró logística Hacienda: ${attending ? 'Asistirá' : 'No Asistirá'} · Turno: ${shift} · Transp: ${transport}`,
                user: adminState.user.name + " (Tú)",
                time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            });

            saveState();
            renderAuditChangelog();
            renderPoaTotals();
            renderRectifyTable();
            showAdminToast("¡Declaración de asistencia/logística guardada!", "success");
        });
    }

    if (saveRectifiedPoaBtn) {
        saveRectifiedPoaBtn.addEventListener("click", () => {
            saveRectifiedPoa();
        });
    }

    if (haciendaSelect) {
        haciendaSelect.addEventListener("change", (e) => {
            const val = e.target.value;
            const label = e.target.options[e.target.selectedIndex].text;
            showAdminToast(`Cargando POA para ${label}...`, "info");
            
            adminState.changelog.unshift({
                action: "LOAD_HACIENDA",
                details: `Consultó datos de ${label}`,
                user: adminState.user.name + " (Tú)",
                time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            });
            saveState();
            renderAuditChangelog();
        });
    }

    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const activeMember = adminState.members.find(m => m.email === activeEmail);
    if (activeMember) {
        if (document.getElementById("adminAttendingHacienda")) {
            document.getElementById("adminAttendingHacienda").value = activeMember.attendingHacienda !== undefined ? String(activeMember.attendingHacienda) : "true";
        }
        if (document.getElementById("adminArrivalShift")) {
            document.getElementById("adminArrivalShift").value = activeMember.arrivalShift || "AVANZADA";
        }
        if (document.getElementById("adminTransportStatus")) {
            document.getElementById("adminTransportStatus").value = activeMember.transportStatus || "PROVIDES_TRANSPORT";
        }
    }

    renderPoaTotals();
    renderAdminEscribientes();
    renderGroupsSemaphore();
    renderAuditChangelog();
    renderRectifyTable();

    // Conexión de accesos rápidos en la pantalla de login admin
    const adminLoginGuestSuperBtn = document.getElementById("adminLoginGuestSuperBtn");
    if (adminLoginGuestSuperBtn) {
        adminLoginGuestSuperBtn.addEventListener("click", () => {
            localStorage.setItem("agua_viva_active_user_email", "superadmin@email.com");
            adminState.currentSimulatedRole = "superadmin";
            saveState();
            showAdminToast("Ingresando como Superadmin...", "success");
            setTimeout(() => {
                window.location.href = "superadmin.html";
            }, 500);
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

        const activeEmail = localStorage.getItem("agua_viva_active_user_email") || "mariana@email.com";
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
                
                showAdminToast(`Simulando como ${email.split('@')[0]}...`, "info");
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
});

// Utilidad para cambiar de vista
let liveJuntaInterval = null;

function renderLiveJuntaAtracciones() {
    const priorityList = document.getElementById("juntaLivePriorityList");
    if (priorityList) {
        priorityList.innerHTML = "";
        
        const userSede = adminState.user ? adminState.user.sede : "Satélite";
        const userRegion = getRegionForGroup(userSede);
        
        let attendance = adminState.juntaAttendance || [];
        attendance = attendance.filter(att => getRegionForGroup(att.group) === userRegion);
        
        if (attendance.length === 0) {
            priorityList.innerHTML = `<li style="color: var(--admin-text-secondary); font-style: italic; list-style: none;">Nadie registrado aún en la ${userRegion}.</li>`;
        } else {
            attendance.forEach(att => {
                const li = document.createElement("li");
                li.style.padding = "0.25rem 0";
                li.innerHTML = `<strong>${att.group}</strong> <span style="font-size:0.75rem; color:#666;">(${att.name} - ${att.role})</span> <span style="font-family:monospace; font-size:0.75rem; color:var(--admin-purple); float:right;">${att.time}</span>`;
                priorityList.appendChild(li);
            });
        }
    }

    const container = document.getElementById("juntaLiveCalendarContainer");
    if (container) {
        container.innerHTML = "";
        
        const grid = document.createElement("div");
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "repeat(7, 1fr)";
        grid.style.gap = "6px";
        grid.style.background = "#eeeeee";
        grid.style.padding = "6px";
        grid.style.borderRadius = "8px";

        const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
        dayNames.forEach(dn => {
            const div = document.createElement("div");
            div.style.cssText = "background:#fafafa; text-align:center; padding:0.4rem; font-size:0.75rem; font-weight:bold; color:#555; border-radius:4px;";
            div.textContent = dn;
            grid.appendChild(div);
        });

        for (let p = 0; p < 2; p++) {
            const div = document.createElement("div");
            div.style.cssText = "background:transparent; min-height:85px; border-radius:4px;";
            grid.appendChild(div);
        }

        for (let day = 1; day <= 31; day++) {
            const cell = document.createElement("div");
            cell.style.cssText = "background:#ffffff; border:1px solid #ddd; border-radius:4px; padding:0.4rem; min-height:85px; display:flex; flex-direction:column; gap:0.25rem; transition: all 0.2s; overflow-y:auto;";
            cell.innerHTML = `<span style="font-weight:bold; font-size:0.75rem; color:#555; display:block; border-bottom:1px solid #eee; padding-bottom:0.15rem;">${day}</span>`;
            
            const dayBookings = (adminState.juntaCalendar || []).filter(b => b.day === day);
            dayBookings.forEach(booking => {
                const badge = document.createElement("div");
                badge.style.cssText = "font-size:0.6rem; padding:0.25rem; border-radius:4px; margin-top:0.15rem; line-height:1.2; font-weight:500; background:rgba(124,58,237,0.1); border-left:3px solid var(--admin-purple); color:var(--admin-purple); display: flex; flex-direction: column; gap:0.1rem;";
                badge.innerHTML = `
                    <span style="font-weight:700; color:#3b0764; font-size:0.6rem;">${booking.requestingGroup}</span>
                    <span style="color:#6d28d9; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:0.55rem;" title="${booking.sponsorName} (${booking.sponsorGroup})">${booking.sponsorName} (${booking.sponsorGroup})</span>
                `;
                cell.appendChild(badge);
            });
            grid.appendChild(cell);
        }
        container.appendChild(grid);
    }
}

function switchView(viewId) {
    const views = document.querySelectorAll(".admin-view");
    views.forEach(v => v.classList.remove("active"));
    
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");

    if (liveJuntaInterval) {
        clearInterval(liveJuntaInterval);
        liveJuntaInterval = null;
    }

    if (viewId === "view-inicio") {
        renderAdminHome();
    } else if (viewId === "view-aprobaciones") {
        renderApprovalsPanel();
    } else if (viewId === "view-miembros") {
        const activeTabBtn = document.querySelector("#dirTabSelector .tab-btn.active");
        if (activeTabBtn) {
            const tab = activeTabBtn.dataset.dirTab;
            if (tab === "militancia") renderDirectoryTable();
            else if (tab === "mi-grupo") renderDirMiGrupo();
            else if (tab === "regional") renderDirRegional();
            else if (tab === "interregional") renderDirInterregional();
        } else {
            renderDirectoryTable();
        }
    } else if (viewId === "view-junta-atracciones") {
        renderLiveJuntaAtracciones();
        liveJuntaInterval = setInterval(() => {
            loadState();
            renderLiveJuntaAtracciones();
        }, 2000);
    }
}

// Resumen del Inicio con datos reales del estado
function renderAdminHome() {
    const members = adminState.members || [];
    const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

    setText("homeKpiMembers", members.length);
    setText("homeKpiPresent", members.filter(m => m.checkedIn).length);

    const pending = (adminState.groupsSemaphore || []).filter(g => {
        const s = computeGroupSemaphore(g.name).status;
        return s === "RED" || s === "YELLOW";
    });
    setText("homeKpiPending", pending.length);

    const hac = adminState.activeHacienda;
    setText("homeKpiHacienda", hac && hac.startDate ? hac.startDate : "Sin agendar");

    const todayISO = new Date().toISOString().split("T")[0];
    const upcoming = (adminState.meetings || [])
        .filter(m => m.date && m.date >= todayISO)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, 6);

    const ul = document.getElementById("homeUpcomingList");
    if (ul) {
        ul.innerHTML = upcoming.length ? upcoming.map(m => {
            const p = dateParts(m.date);
            const jav = m.isJav ? ` <span style="font-size:.6rem; font-weight:700; color:#be185d;">JAV</span>` : "";
            const fecha = p.valid ? `${p.day} ${MONTHS_ES[p.monthIdx].slice(0, 3)}` : "";
            return `<div style="display:flex; justify-content:space-between; align-items:center; padding:.5rem 0; border-bottom:1px solid #f3f4f6;">
                <div><strong style="font-size:.85rem;">${m.title}</strong>${jav}<br><span style="font-size:.72rem; color:var(--admin-text-muted);">${(m.info || "").split("·")[0]}</span></div>
                <span style="font-size:.75rem; font-weight:600; color:var(--admin-purple); white-space:nowrap;">${fecha}</span>
            </div>`;
        }).join("") : `<p class="text-secondary" style="font-size:.85rem;">No hay eventos próximos.</p>`;
    }

    const pg = document.getElementById("homePendingGroups");
    if (pg) {
        pg.innerHTML = pending.length ? pending.map(g => {
            const c = computeGroupSemaphore(g.name);
            const color = c.status === "RED" ? "#ef4444" : "#f59e0b";
            return `<div style="display:flex; align-items:center; gap:.5rem; padding:.5rem 0; border-bottom:1px solid #f3f4f6;">
                <span style="width:10px; height:10px; border-radius:50%; background:${color}; flex-shrink:0;"></span>
                <div style="flex:1;"><strong style="font-size:.85rem;">${g.name}</strong><br><span style="font-size:.72rem; color:var(--admin-text-muted);">${c.detail || ""}</span></div>
            </div>`;
        }).join("") : `<p class="text-secondary" style="font-size:.85rem;">Todos los grupos al día.</p>`;
    }
}

// Simulación de pase de lista de asistencia
let qrCountTimer = null;
let currentCodeTimeSeconds = 18;
function initializeAttendanceSimulation() {
    
    let elapsedMinutes = 23;
    setInterval(() => {
        elapsedMinutes += 1;
        document.getElementById("timeElapsedVal").textContent = `${elapsedMinutes} min`;
    }, 60000);

    // --- Generador de QR firmado (JWT HS256, vigencia 30 s) ---
    // Cada renovación firma un nuevo JSON Web Token cuyo payload incluye el
    // código manual, las coordenadas de la sede (para geofencing) y el exp a
    function issueLiveQR() {
        if (typeof AV === "undefined") return;
        const issued = AV.Session.issueToken({
            meetingId: "m-weekly",
            groupId: "satelite",
            venue: AV.Geo.VENUE
        });
        const codeEl = document.getElementById("manualCodeVal");
        if (codeEl) codeEl.textContent = issued.code;
        const statusEl = document.getElementById("jwtStatusText");
        if (statusEl) statusEl.textContent = `JWT HS256 firmado · exp 30 s · ${AV.Geo.VENUE.name}`;
        const indicator = document.getElementById("jwtIndicator");
        if (indicator) {
            indicator.classList.remove("pulse");
            void indicator.offsetWidth; // reinicia la animación de pulso
            indicator.classList.add("pulse");
        }
        // Ruido de píxeles aleatorio para representar el QR recién firmado
        const pixelNoise = document.querySelector(".qr-mock-pixel-noise");
        if (pixelNoise) pixelNoise.style.opacity = Math.random() * 0.4 + 0.5;
    }

    // Emite el primer token firmado de inmediato al abrir la sesión
    issueLiveQR();
    currentCodeTimeSeconds = 30;

    qrCountTimer = setInterval(() => {
        currentCodeTimeSeconds--;
        if (currentCodeTimeSeconds < 0) {
            currentCodeTimeSeconds = 29;
            issueLiveQR();
        }

        const timerLabel = `0:${String(currentCodeTimeSeconds).padStart(2, '0')}`;
        const timerEl = document.getElementById("timerVal");
        if (timerEl) timerEl.textContent = timerLabel;
    }, 1000);

    // Renderizado inicial de la lista de presentes y de espera
    renderCheckInArrivals();

    // Botón de pausar sesión
    document.getElementById("btnPauseSession").addEventListener("click", (e) => {
        const btn = e.target;
        if (btn.textContent === "Pausar sesión") {
            btn.textContent = "Reanudar";
            clearInterval(qrCountTimer);
            showAdminToast("Asistencia pausada.", "info");
        } else {
            btn.textContent = "Pausar sesión";
            currentCodeTimeSeconds = 30;
            initializeAttendanceSimulation();
        }
    });

    // Botón de cerrar sesión
    document.getElementById("btnCancelSession").addEventListener("click", () => {
        clearInterval(qrCountTimer);
        showAdminToast("Sesión de asistencia guardada y archivada.", "info");
        switchView("view-miembros");
    });

    // Botón de marcar todos manualmente
    document.getElementById("btnManualMarkAll").addEventListener("click", () => {
        const waitingList = adminState.members.filter(m => !m.checkedIn);
        if (waitingList.length === 0) {
            showAdminToast("Todos los miembros ya están presentes.", "info");
            return;
        }

        waitingList.forEach(m => {
            m.checkedIn = true;
            m.checkInTime = "19:25";
            m.xpGranted = 10;
        });

        saveState();
        renderCheckInArrivals();
        renderDirectoryTable();
        showAdminToast("Todos los miembros fueron marcados como PRESENTES.", "success");
    });
}

function renderCheckInArrivals() {
    const listChecked = document.getElementById("checkedInArrivalsList");
    const listWaiting = document.getElementById("waitingCheckInList");
    
    listChecked.innerHTML = "";
    listWaiting.innerHTML = "";

    const checkedIn = adminState.members.filter(m => m.checkedIn);
    const waiting = adminState.members.filter(m => !m.checkedIn);

    // Actualiza la proporción y los conteos KPI
    document.getElementById("arrivalsRatio").textContent = `${checkedIn.length} de ${adminState.members.length}`;
    document.getElementById("cntPresentes").textContent = checkedIn.length;
    document.getElementById("cntEsperando").textContent = waiting.length;
    document.getElementById("waitingCount").textContent = waiting.length;

    const lateCount = checkedIn.filter(m => {
        if (m.checkInTime === "—") return false;
        const [hr, min] = m.checkInTime.split(":").map(Number);
        return (hr === 19 && min > 15) || hr > 19;
    }).length;
    document.getElementById("cntTarde").textContent = lateCount;

    const totalXP = checkedIn.reduce((sum, m) => sum + m.xpGranted, 0);
    document.getElementById("cntXPGiven").textContent = totalXP;

    // Renderiza la lista de presentes
    checkedIn.forEach(m => {
        const item = document.createElement("div");
        item.className = "arrival-card";
        item.innerHTML = `
            <div class="arrival-card-left">
                <div class="ac-avatar" style="background-color: ${m.avatarColor};">${m.name.substring(0, 1).toUpperCase()}</div>
                <div class="ac-details">
                    <span class="ac-name">${m.name}</span>
                    <span class="ac-meta">${m.checkInTime} &middot; ${m.level.split(" ")[0]} &middot; ${m.racha}d racha</span>
                </div>
            </div>
            <span class="ac-xp-earned">+${m.xpGranted}</span>
        `;
        listChecked.appendChild(item);
    });

    // Renderiza la lista de espera
    if (waiting.length === 0) {
        listWaiting.innerHTML = `<div style="text-align: center; color: var(--admin-text-muted); font-size: 0.8rem; padding: 1.5rem 0;">Ninguno pendiente de ingresar</div>`;
    } else {
        waiting.forEach(m => {
            const item = document.createElement("div");
            item.className = "waiting-card";
            item.innerHTML = `
                <div class="arrival-card-left">
                    <div class="wc-avatar">${m.name.substring(0, 1).toUpperCase()}</div>
                    <span class="wc-name">${m.name}</span>
                </div>
                <i class="fa-solid fa-square-check wc-action-icon"></i>
            `;
            // Clic para registrar asistencia manualmente
            item.addEventListener("click", () => {
                m.checkedIn = true;
                
                // Obtiene la hora actual
                const d = new Date();
                m.checkInTime = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
                
                m.xpGranted = 10;
                
                saveState();
                showAdminToast(`${m.name} registrado manualmente.`, "success");
                renderCheckInArrivals();
                renderDirectoryTable();
            });
            listWaiting.appendChild(item);
        });
    }
}

function renderDirectoryTable() {
    const tbody = document.getElementById("dirTableBody");
    tbody.innerHTML = "";

    adminState.members.forEach(m => {
        const tr = document.createElement("tr");
        tr.dataset.id = m.id;
        
        let statusCircle = m.status === "Risk" ? 
            `<span class="text-red">● ${m.lastAttendance}</span>` : 
            `<span class="text-secondary">${m.lastAttendance}</span>`;
        if (m.lastAttendance === "Hoy") {
            statusCircle = `<span class="text-green">● Hoy</span>`;
        }

        const xpProgress = m.xp % 100;

        // Insignia visual JAV junto al nombre
        const javBadge = m.isJav ? `<span class="badge-role badge-jav-tag text-xs ml-1" style="padding: 0.1rem 0.3rem; background: linear-gradient(135deg, #be185d 0%, #fae8ff 100%); color: #be185d; border: 1px solid #be185d; font-weight: 700; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.2rem;"><i class="fa-solid fa-rocket" style="font-size: 0.6rem;"></i> JAV</span>` : '';

        // Verificación de privacidad del número celular
        let phoneDisplay = "";
        if (adminState.currentSimulatedRole === "member") {
            phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
        } else {
            phoneDisplay = `<span class="text-xs font-mono text-purple" style="font-weight: 500;">${m.phone || '—'}</span>`;
        }

        // Insignias y etiquetas adicionales basadas en el nuevo modelo AA
        let badgesHtml = "";
        
        // Estatus de Militancia
        if (m.militanciaStatus === "CONCIENCIA") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #a7f3d0; background: #ecfdf5; color: #047857; margin-right: 0.25rem;">Conciencia</span>`;
        } else if (m.militanciaStatus === "MILITANCIA") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #e5e7eb; background: #f9fafb; color: #4b5563; margin-right: 0.25rem;">Militancia</span>`;
        } else if (m.militanciaStatus === "EN_RIESGO" || m.status === "Risk") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fecaca; background: #fef2f2; color: #b91c1c; margin-right: 0.25rem;">En Riesgo</span>`;
        } else if (m.militanciaStatus === "DE_BAJA") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #000; background: #111; color: #fff; margin-right: 0.25rem;">De Baja</span>`;
        }
        
        // Estatus de Experiencia (Apoyo, Oreja, Padrino)
        if (m.experienciaNivel === "PADRINO") {
            if (m.isPadrinoJav) {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #c084fc; background: #faf5ff; color: #7e22ce; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-crown"></i> Padrino JAV</span>`;
            } else {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #c084fc; background: #faf5ff; color: #7e22ce; margin-right: 0.25rem;"><i class="fa-solid fa-user-shield"></i> Padrino</span>`;
            }
        } else if (m.experienciaNivel === "OREJA") {
            if (m.isOrejaJav) {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #93c5fd; background: #eff6ff; color: #1d4ed8; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-ear-listen"></i> Oreja JAV</span>`;
            } else {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #93c5fd; background: #eff6ff; color: #1d4ed8; margin-right: 0.25rem;"><i class="fa-solid fa-ear"></i> Oreja</span>`;
            }
        } else if (m.experienciaNivel === "APOYO") {
            badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #34d399; background: #f0fdf4; color: #047857; margin-right: 0.25rem;"><i class="fa-solid fa-hands-helping"></i> Apoyo</span>`;
        }

        // Servicios Activos
        if (m.serverRole && m.serverRole !== "Ninguno") {
            badgesHtml += `<span class="badge-service text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fde047; background: #fef9c3; color: #854d0e; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-briefcase"></i> ${m.serverRole}</span>`;
        }

        // Estigma
        if (m.estigma) {
            badgesHtml += `<span class="badge-disease text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fed7aa; background: #fff7ed; color: #c2410c; font-style: italic;">${m.estigma}</span>`;
        }
        // Apadrinado por (Sponsor)
        let sponsorHtml = "";
        if (m.sponsorName) {
            sponsorHtml = `<span class="dt-join-date" style="margin-top: 0.15rem; font-size: 0.75rem;"><i class="fa-solid fa-user-friends" style="font-size:0.65rem;"></i> Se apadrina con: <strong>${m.sponsorName}</strong></span>`;
        }

        tr.innerHTML = `
            <td>
                    <div class="dt-avatar" style="background-color: ${m.avatarPhoto ? "transparent" : m.avatarColor}; min-width: 36px; height: 36px; font-size: 1rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: white; font-weight: 700; margin-top: 0.15rem; overflow: hidden;">${m.avatarPhoto ? `<img src="${m.avatarPhoto}" alt="" style="width:100%; height:100%; object-fit:cover;">` : m.name.substring(0, 1).toUpperCase()}</div>
                    <div>
                        <div style="display:flex; align-items:center; gap:0.25rem; flex-wrap:wrap;">
                            <span class="dt-name" style="font-size: 0.95rem; font-weight:600;">${m.name}</span> 
                            ${javBadge}
                        </div>
                        <div style="margin: 0.25rem 0; display:flex; flex-wrap:wrap; gap:0.2rem;">
                            ${badgesHtml}
                        </div>
                        <div style="display:flex; flex-direction:column; gap:0.1rem;">
                            <span class="dt-join-date" style="font-size: 0.75rem;">Desde ${m.joinDate}</span>
                            ${sponsorHtml}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div class="dt-level-bar-wrapper">
                    <span>${m.level}</span>
                    <div class="level-tiny-bar">
                        <div class="level-tiny-bar-fill" style="width: ${xpProgress}%;"></div>
                    </div>
                </div>
            </td>
            <td><strong>${m.racha}d</strong> <i class="fa-solid fa-fire text-orange" style="font-size:0.75rem; color:#f97316;"></i></td>
            <td>${m.cleanDays}d</td>
            <td>${phoneDisplay}</td>
            <td>${statusCircle}</td>
            <td class="dt-arrow-cell">${canEditRow(m) ? `
                <button type="button" class="btn-row-action edit" data-edit="${m.id}" title="Editar miembro"><i class="fa-solid fa-pen"></i></button>
                <button type="button" class="btn-row-action delete" data-delete="${m.id}" title="Eliminar miembro"><i class="fa-solid fa-trash"></i></button>` : ""}
                <i class="fa-solid fa-chevron-right"></i></td>
        `;

        // Clic en la fila para ver el expediente del miembro
        tr.addEventListener("click", () => {
            loadMemberDetailPage(m.id);
        });
        const editBtn = tr.querySelector("[data-edit]");
        if (editBtn) editBtn.addEventListener("click", (e) => { e.stopPropagation(); openMemberEditModal(m.id); });
        const delBtn = tr.querySelector("[data-delete]");
        if (delBtn) delBtn.addEventListener("click", (e) => { e.stopPropagation(); confirmDeleteMember(m.id); });

        tbody.appendChild(tr);
    });

    updateDirectoryStats();
}

function updateDirectoryStats() {
    document.getElementById("dirTotalCount").textContent = adminState.members.length;
    
    const active = adminState.members.filter(m => m.lastAttendance === "Hoy" || m.lastAttendance === "Ayer").length;
    document.getElementById("dirActiveCount").textContent = active;
}

function filterDirectory() {
    const query = document.getElementById("dirSearchInput").value.toLowerCase();
    const filter = document.querySelector("#dirFilterTabs .tab-btn.active").dataset.filter;
    const roleFilter = document.getElementById("dirRoleFilter").value;
    const sort = document.getElementById("dirSortSelect").value;

    let filtered = [...adminState.members];

    if (query) {
        filtered = filtered.filter(m => m.name.toLowerCase().includes(query));
    }

    // Filtro de clasificación de rol
    if (roleFilter !== "all") {
        if (roleFilter === "JAV") {
            filtered = filtered.filter(m => m.isJav);
        } else {
            filtered = filtered.filter(m => m.roleClass === roleFilter || m.role === roleFilter);
        }
    }

    if (filter === "active") {
        filtered = filtered.filter(m => m.status === "Activo" || m.lastAttendance === "Hoy");
    } else if (filter === "risk") {
        filtered = filtered.filter(m => m.status === "Risk" || m.lastAttendance.includes("5 días") || m.lastAttendance.includes("sem"));
    } else if (filter === "new") {
        filtered = filtered.filter(m => m.status === "New" || m.lastAttendance === "Nuevo");
    }

    filtered.sort((a, b) => {
        if (sort === "level") {
            return b.xp - a.xp;
        } else if (sort === "racha") {
            return b.racha - a.racha;
        } else if (sort === "clean") {
            return b.cleanDays - a.cleanDays;
        } else if (sort === "name") {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    // Renderiza las filas de la tabla
    const tbody = document.getElementById("dirTableBody");
    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--admin-text-muted); padding: 2rem;">No se encontraron miembros con los filtros especificados.</td></tr>`;
        return;
    }

    filtered.forEach(m => {
        const tr = document.createElement("tr");
        tr.dataset.id = m.id;
        
        let statusCircle = m.status === "Risk" ? 
            `<span class="text-red">● ${m.lastAttendance}</span>` : 
            `<span class="text-secondary">${m.lastAttendance}</span>`;
        if (m.lastAttendance === "Hoy") {
            statusCircle = `<span class="text-green">● Hoy</span>`;
        }
        const xpProgress = m.xp % 100;

        // Insignia visual JAV junto al nombre
        const javBadge = m.isJav ? `<span class="badge-role badge-jav-tag text-xs ml-1" style="padding: 0.1rem 0.3rem; background: linear-gradient(135deg, #be185d 0%, #fae8ff 100%); color: #be185d; border: 1px solid #be185d; font-weight: 700; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.2rem;"><i class="fa-solid fa-rocket" style="font-size: 0.60rem;"></i> JAV</span>` : '';

        // Verificación de privacidad del número celular
        let phoneDisplay = "";
        if (adminState.currentSimulatedRole === "member") {
            phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
        } else {
            phoneDisplay = `<span class="text-xs font-mono text-purple" style="font-weight: 500;">${m.phone || '—'}</span>`;
        }

        // Insignias y etiquetas adicionales basadas en el nuevo modelo AA
        let badgesHtml = "";
        
        // Estatus de Militancia
        if (m.militanciaStatus === "CONCIENCIA") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #a7f3d0; background: #ecfdf5; color: #047857; margin-right: 0.25rem;">Conciencia</span>`;
        } else if (m.militanciaStatus === "MILITANCIA") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #e5e7eb; background: #f9fafb; color: #4b5563; margin-right: 0.25rem;">Militancia</span>`;
        } else if (m.militanciaStatus === "EN_RIESGO" || m.status === "Risk") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fecaca; background: #fef2f2; color: #b91c1c; margin-right: 0.25rem;">En Riesgo</span>`;
        } else if (m.militanciaStatus === "DE_BAJA") {
            badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #000; background: #111; color: #fff; margin-right: 0.25rem;">De Baja</span>`;
        }
        
        // Estatus de Experiencia (Apoyo, Oreja, Padrino)
        if (m.experienciaNivel === "PADRINO") {
            if (m.isPadrinoJav) {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #c084fc; background: #faf5ff; color: #7e22ce; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-crown"></i> Padrino JAV</span>`;
            } else {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #c084fc; background: #faf5ff; color: #7e22ce; margin-right: 0.25rem;"><i class="fa-solid fa-user-shield"></i> Padrino</span>`;
            }
        } else if (m.experienciaNivel === "OREJA") {
            if (m.isOrejaJav) {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #93c5fd; background: #eff6ff; color: #1d4ed8; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-ear-listen"></i> Oreja JAV</span>`;
            } else {
                badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #93c5fd; background: #eff6ff; color: #1d4ed8; margin-right: 0.25rem;"><i class="fa-solid fa-ear"></i> Oreja</span>`;
            }
        } else if (m.experienciaNivel === "APOYO") {
            badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #34d399; background: #f0fdf4; color: #047857; margin-right: 0.25rem;"><i class="fa-solid fa-hands-helping"></i> Apoyo</span>`;
        }

        // Servicios Activos
        if (m.serverRole && m.serverRole !== "Ninguno") {
            badgesHtml += `<span class="badge-service text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fde047; background: #fef9c3; color: #854d0e; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-briefcase"></i> ${m.serverRole}</span>`;
        }

        // Estigma
        if (m.estigma) {
            badgesHtml += `<span class="badge-disease text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fed7aa; background: #fff7ed; color: #c2410c; font-style: italic;">${m.estigma}</span>`;
        }
        // Apadrinado por (Sponsor)
        let sponsorHtml = "";
        if (m.sponsorName) {
            sponsorHtml = `<span class="dt-join-date" style="margin-top: 0.15rem; font-size: 0.75rem;"><i class="fa-solid fa-user-friends" style="font-size:0.65rem;"></i> Se apadrina con: <strong>${m.sponsorName}</strong></span>`;
        }

        tr.innerHTML = `
            <td>
                <div class="dt-member-cell" style="align-items: flex-start; gap: 0.75rem; padding: 0.5rem 0;">
                    <div class="dt-avatar" style="background-color: ${m.avatarColor}; min-width: 36px; height: 36px; font-size: 1rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: white; font-weight: 700; margin-top: 0.15rem;">${m.name.substring(0, 1).toUpperCase()}</div>
                    <div>
                        <div style="display:flex; align-items:center; gap:0.25rem; flex-wrap:wrap;">
                            <span class="dt-name" style="font-size: 0.95rem; font-weight:600;">${m.name}</span> 
                            ${javBadge}
                        </div>
                        <div style="margin: 0.25rem 0; display:flex; flex-wrap:wrap; gap:0.2rem;">
                            ${badgesHtml}
                        </div>
                        <div style="display:flex; flex-direction:column; gap:0.1rem;">
                            <span class="dt-join-date" style="font-size: 0.75rem;">Desde ${m.joinDate}</span>
                            ${sponsorHtml}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div class="dt-level-bar-wrapper">
                    <span>${m.level}</span>
                    <div class="level-tiny-bar">
                        <div class="level-tiny-bar-fill" style="width: ${xpProgress}%;"></div>
                    </div>
                </div>
            </td>
            <td><strong>${m.racha}d</strong> <i class="fa-solid fa-fire text-orange" style="font-size:0.75rem; color:#f97316;"></i></td>
            <td>${m.cleanDays}d</td>
            <td>${phoneDisplay}</td>
            <td>${statusCircle}</td>
            <td class="dt-arrow-cell"><i class="fa-solid fa-chevron-right"></i></td>
        `;
        
        tr.addEventListener("click", () => {
            loadMemberDetailPage(m.id);
        });

        tbody.appendChild(tr);
    });
}

// Cargador de la vista de expediente del miembro
let activeDetailMemberId = null;
function loadMemberDetailPage(id) {
    activeDetailMemberId = id;
    const member = adminState.members.find(m => m.id === id);
    if (!member) return;

    // Cambia de vista
    switchView("view-detalle-miembro");

    document.getElementById("detailMemberNameBreadcrumb").textContent = member.name;

    const avatar = document.getElementById("detailAvatarCircle");
    if (member.avatarPhoto) {
        avatar.style.backgroundColor = "transparent";
        avatar.innerHTML = '<img src="' + member.avatarPhoto + '" alt="" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">';
    } else {
        avatar.textContent = member.name.substring(0, 1).toUpperCase();
        avatar.style.backgroundColor = member.avatarColor;
    }

    document.getElementById("detailMemberName").textContent = member.name;
    document.getElementById("detailLevelLabel").textContent = member.level;
    document.getElementById("detailRachaLabel").innerHTML = `<i class="fa-solid fa-fire"></i> ${member.racha}d`;
    
    const phoneSpan = document.getElementById("detailPhoneSpan");
    const sobrietySpan = document.getElementById("detailSobrietySpan");

    if (adminState.currentSimulatedRole === "member") {
        phoneSpan.textContent = "[CONFIDENCIAL]";
        phoneSpan.style.filter = "blur(3px)";
    } else {
        phoneSpan.textContent = member.phone || "—";
        phoneSpan.style.filter = "none";
    }
    sobrietySpan.textContent = member.sobrietyDate || "—";

    const levelIndex = member.levelNum;
    const nextLevelNames = ["Llama", "Llama", "Brasa", "Faro", "Aurora", "Sol", "Estrella", "Constelación", "Sol Absoluto"];
    const xpRequirements = [50, 50, 150, 300, 650, 800, 1200, 1500, 2000];
    
    const nextLevelName = nextLevelNames[levelIndex] || "Constelación";
    const reqXP = xpRequirements[levelIndex] || 650;
    
    document.getElementById("detailNextLevel").textContent = nextLevelName;
    document.getElementById("detailXPLabel").textContent = member.xp;
    
    const percent = Math.min((member.xp / reqXP) * 100, 100);
    document.getElementById("detailProgressBarFill").style.width = `${percent}%`;

    document.getElementById("lblDetailCleanDays").textContent = member.cleanDays;
    document.getElementById("lblDetailTotalJuntas").textContent = member.xpGranted > 0 ? 34 : 33;
    document.getElementById("lblDetailHaciendas").textContent = member.name === "Ámbar" ? 1 : 0;
    document.getElementById("lblDetailAttendanceRate").textContent = member.status === "Risk" ? "42%" : "92%";

    // Inyección dinámica de la tarjeta de Información (AA)
    let aaInfoCard = document.getElementById("detailAAInfoCard");
    if (!aaInfoCard) {
        aaInfoCard = document.createElement("div");
        aaInfoCard.id = "detailAAInfoCard";
        aaInfoCard.className = "card-admin mb-6";
        const leftCol = document.querySelector(".detail-col-left");
        if (leftCol) {
            leftCol.insertBefore(aaInfoCard, leftCol.firstChild);
        }
    }

    let estigmaLabel = member.estigma || "Ninguno";
    let militanciaLabel = member.militanciaStatus || "MILITANCIA";
    let expNivel = member.experienciaNivel || "APOYO";
    let sponsor = member.sponsorName || "Sin asignar";
    let serverRole = member.serverRole || "Ninguno";
    
    // Fechas de Consagración
    let datesHtml = "";
    if (member.apoyoSince) datesHtml += `<div><strong>Apoyo desde:</strong> ${member.apoyoSince}</div>`;
    if (member.orejaSince) datesHtml += `<div><strong>Oreja desde:</strong> ${member.orejaSince}</div>`;
    if (member.orejaJavSince) datesHtml += `<div><strong>Oreja JAV desde:</strong> ${member.orejaJavSince}</div>`;
    if (member.padrinoSince) datesHtml += `<div><strong>Padrino desde:</strong> ${member.padrinoSince}</div>`;
    if (member.padrinoJavSince) datesHtml += `<div><strong>Padrino JAV desde:</strong> ${member.padrinoJavSince}</div>`;
    if (!datesHtml) datesHtml = "<div>No hay consagraciones registradas</div>";

    // Permisos JAV
    let javPermissionsHtml = "";
    if (member.isJav) {
        javPermissionsHtml = `
            <div style="margin-top: 0.75rem; padding: 0.5rem 0.75rem; background: #fff1f2; border: 1px solid #fecdd3; border-radius: 6px; color: #9f1239; font-size: 0.78rem;">
                <i class="fa-solid fa-rocket"></i> <strong>Estatus JAV:</strong> Permisos para generar juntas/haciendas JAV, ver directorios JAV y calendarios locales.
            </div>
        `;
    }

    aaInfoCard.innerHTML = `
        <h3 class="font-serif mb-2" style="font-size:1.15rem; font-weight:600; border-bottom:1px solid #eee; padding-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;"><i class="fa-solid fa-circle-info text-purple" style="color:#7c3aed;"></i> Información</h3>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85rem; margin-top: 0.75rem;">
            <div>
                <div style="margin-bottom:0.25rem;"><strong>Estigma / Enfermedad:</strong> <span style="color:#c2410c; font-weight:600;">${estigmaLabel}</span></div>
                <div style="margin-bottom:0.25rem;"><strong>Militancia:</strong> <span style="font-weight:600;">${militanciaLabel}</span></div>
                <div style="margin-bottom:0.25rem;"><strong>POA:</strong> <span style="color:#7e22ce; font-weight:600;">${member.roleClass || expNivel}</span></div>
                <div style="margin-bottom:0.25rem;"><strong>Se apadrina con:</strong> <strong>${sponsor}</strong></div>
                <div style="margin-bottom:0.25rem;"><strong>Servicio Activo:</strong> <strong>${serverRole}</strong></div>
            </div>
            <div>
                <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--admin-text-secondary); display:block; margin-bottom:0.25rem;">Fechas de Consagración</span>
                <div style="display:flex; flex-direction:column; gap:0.2rem; font-size:0.8rem; color:#4b5563;">
                    ${datesHtml}
                </div>
            </div>
        </div>
        ${javPermissionsHtml}
    `;

    renderMemberAttendanceBarChart(member.id);

    // Renderiza la línea de tiempo del historial
    renderMemberHistoryTimeline(member.id);

    // Renderiza las insignias de logros
    renderMemberBadges(member.id);

    // Renderiza las notas del coordinador
    renderMemberNotes(member.id);

    renderMemberProgressEditor(member);
}

const ADM_SCRIPTURES = ["1er inventario", "10mo de primera", "2do inventario", "10mo de 2da", "3er inventario", "10 de 3ra", "pre cuarta", "4to inevntario", "1ra de servidores", "2da de servidores", "3ra de servidores"];
const ADM_EXERCISES = ["Trinity", "Libertad bajo dios", "Duelo", "desierto", "niño"];

function renderMemberProgressEditor(member) {
    const card = document.getElementById("detailProgressCard");
    if (!card) return;
    const rc = (member.roleClass || "").toLowerCase();
    if (rc !== "padrino" && rc !== "oreja") { card.style.display = "none"; return; }
    card.style.display = "block";

    const scriptures = member.scriptures || [];
    const exercises = member.exercises || [];
    const cbList = (items, checked) => items.map(it =>
        `<label style="display:flex; align-items:center; gap:0.4rem; font-size:0.78rem; color:#444; cursor:pointer;"><input type="checkbox" value="${it}" ${checked.includes(it) ? "checked" : ""}> ${it}</label>`
    ).join("");

    document.getElementById("detailScripturesList").innerHTML = cbList(ADM_SCRIPTURES, scriptures);
    document.getElementById("detailExercisesList").innerHTML = cbList(ADM_EXERCISES, exercises);
}

let chartRange = "12w";

function renderMemberAttendanceBarChart(memberId) {
    const container = document.getElementById("attendanceBarChartContainer");
    container.innerHTML = "";

    const weekly = adminState.weeklyAttendance[memberId] || [2, 1, 3, 2, 2, 3, 2, 2, 3, 2, 1, 3];
    const MONTHS_SHORT = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const now = new Date();
    const monthLabel = (back) => MONTHS_SHORT[((now.getMonth() - back) % 12 + 12) % 12];

    // Deriva series según el rango: semanas reales, o agregados mensuales
    // (los meses fuera de las 12 semanas registradas se estiman del promedio).
    let counts = [], labels = [], maxVal = 4;
    if (chartRange === "12w") {
        counts = weekly;
        labels = weekly.map((_, i) => "s" + (12 - i));
    } else {
        const avgMonth = Math.round(weekly.reduce((s, v) => s + v, 0) / 3);
        const monthsBack = chartRange === "6m" ? 6 : 12;
        for (let b = monthsBack - 1; b >= 0; b--) {
            let val;
            if (b === 0) val = weekly.slice(8).reduce((s, v) => s + v, 0);
            else if (b === 1) val = weekly.slice(4, 8).reduce((s, v) => s + v, 0);
            else if (b === 2) val = weekly.slice(0, 4).reduce((s, v) => s + v, 0);
            else val = Math.max(0, avgMonth + ((b % 3) - 1)); // estimado estable
            counts.push(val);
            labels.push(monthLabel(b));
        }
        maxVal = Math.max(4, ...counts);
    }

    counts.forEach((cnt, idx) => {
        const item = document.createElement("div");
        item.className = `chart-bar-item ${idx === counts.length - 1 ? 'active' : ''}`;
        const heightPct = Math.min(100, (cnt / maxVal) * 100);
        item.innerHTML = `
            <div class="bar-column" style="height: ${heightPct}%;" title="${cnt} juntas"></div>
            <span class="bar-lbl">${labels[idx]}</span>
        `;
        container.appendChild(item);
    });
}

function renderMemberHistoryTimeline(memberId) {
    const list = document.getElementById("detailHistoryTimeline");
    list.innerHTML = "";

    const timeline = adminState.history[memberId] || [
        { title: "Junta semanal", details: "Sede Centro", date: "2026-05-26", xp: 10 },
        { title: "Junta semanal", details: "Sede Centro", date: "2026-05-19", xp: 10 }
    ];

    timeline.forEach(item => {
        const div = document.createElement("div");
        div.className = "dtl-timeline-item";
        div.innerHTML = `
            <div>
                <h4>${item.title}</h4>
                <p>${item.details} &middot; ${item.date}</p>
            </div>
            <span>+${item.xp} XP</span>
        `;
        list.appendChild(div);
    });
}

function renderMemberBadges(memberId) {
    const grid = document.getElementById("detailBadgesGrid");
    grid.innerHTML = "";

    const member = adminState.members.find(m => m.id === memberId);
    
    const badges = [
        { id: "b1", name: "7 días", desc: "Semana firme", icon: "fa-solid fa-fire", color: "orange", unlocked: member.racha >= 7 },
        { id: "b2", name: "30 días", desc: "Mes completo", icon: "fa-solid fa-fire", color: "orange", unlocked: member.racha >= 30 },
        { id: "b3", name: "90 días", desc: "Tres meses", icon: "fa-solid fa-fire", color: "orange", unlocked: member.racha >= 90 },
        { id: "b4", name: "1 año", desc: "Vuelta al sol", icon: "fa-solid fa-fire", color: "orange", unlocked: member.racha >= 365 },
        { id: "b5", name: "Primera junta", desc: "Llegaste", icon: "fa-solid fa-star", color: "cyan", unlocked: member.xp > 10 },
        { id: "b6", name: "10 juntas", desc: "Constante", icon: "fa-solid fa-star", color: "cyan", unlocked: member.xp >= 100 },
        { id: "b7", name: "Hacienda", desc: "Viviste la exp", icon: "fa-solid fa-trophy", color: "yellow", unlocked: member.name === "Ámbar" || member.name === "Río" },
        { id: "b8", name: "Padrino activo", desc: "Acompañado", icon: "fa-solid fa-check", color: "green", unlocked: member.name === "Río" },
        { id: "b9", name: "Madrugador", desc: "Pre-avanzada", icon: "fa-solid fa-sun", color: "yellow", unlocked: false }
    ];

    // Cuenta las insignias desbloqueadas
    const unlockedCount = badges.filter(b => b.unlocked).length;
    document.getElementById("lblDetailInsigniasCount").textContent = `Insignias · ${unlockedCount} de 9`;

    badges.forEach(badge => {
        const item = document.createElement("div");
        item.className = `mini-badge-card ${badge.unlocked ? 'unlocked' : ''}`;
        item.innerHTML = `
            <div class="mb-icon"><i class="${badge.icon}"></i></div>
            <span class="mb-name">${badge.name}</span>
            <span class="mb-desc">${badge.desc}</span>
        `;
        grid.appendChild(item);
    });
}

function renderMemberNotes(memberId) {
    const list = document.getElementById("detailNotesFeedList");
    list.innerHTML = "";

    const notesList = adminState.notes[memberId] || [];

    if (notesList.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--admin-text-muted); font-size: 0.8rem; padding: 1.5rem 0;">No hay observaciones registradas para este miembro.</div>`;
        return;
    }

    notesList.forEach(note => {
        const item = document.createElement("div");
        item.className = "note-item";
        item.innerHTML = `
            <div class="note-header">
                <span>Por: ${note.author}</span>
                <span>${note.date}</span>
            </div>
            <p class="note-body">${note.body}</p>
        `;
        list.appendChild(item);
    });
}

function showAdminToast(message, type = "success") {
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

// Fase 2: Selector de rol y lógica del portal Superadmin

function updateUIForRole() {
    const role = adminState.currentSimulatedRole;
    saveState();
    
    const avatar = document.getElementById("adminProfileAvatar");
    const nameLabel = document.getElementById("adminProfileName");
    const roleLabel = document.getElementById("adminProfileRole");
    const superTab = document.getElementById("sidebarSuperadminTab");

    if (!avatar || !nameLabel || !roleLabel || !superTab) return;

    // Reinicia los estilos
    avatar.style.backgroundColor = "#0F172A";

    if (role === "superadmin") {
        avatar.textContent = "S";
        avatar.style.backgroundColor = "#7C3AED"; // Tema morado para el Superadmin
        nameLabel.textContent = "Superusuario";
        roleLabel.textContent = "Admin Principal";
        
        superTab.style.display = "block";
        
        showAdminToast("Redirigiendo al Portal Superadmin...", "success");
        setTimeout(() => {
            window.location.href = "superadmin.html";
        }, 800);
    } else if (role === "admin") {
        avatar.textContent = "M";
        nameLabel.textContent = "Mariana C.";
        roleLabel.textContent = "Coord. Sede Centro";
        
        superTab.style.display = "none";
        
        const activeSection = document.querySelector(".admin-view.active");
        if (activeSection && activeSection.id === "view-superadmin") {
            switchView("view-asistencia");
            const menuLinks = document.querySelectorAll(".sidebar-menu a");
            menuLinks.forEach(l => {
                if (l.dataset.view === "view-asistencia") l.classList.add("active");
                else l.classList.remove("active");
            });
        }
        showAdminToast("Modo Coordinador activado.", "success");
    } else {
        // Modo de simulación de miembro
        avatar.textContent = "Á";
        nameLabel.textContent = "Simulador Miembro";
        roleLabel.textContent = "Lector General";
        
        superTab.style.display = "none";
        showAdminToast("Modo Miembro (Restricciones de Privacidad activas).", "info");
    }

    // Actualiza la visibilidad de las opciones de Hacienda
    updateHaciendaGroupVisibility();

    renderDirectoryTable();
    renderDirMiGrupo();
    renderDirRegional();
    renderDirInterregional();
    
    // Refresca las vistas de Hacienda y POA
    renderPoaTotals();
    renderAdminEscribientes();
    renderGroupsSemaphore();
    renderAuditChangelog();
    renderRectifyTable();

    if (activeDetailMemberId) {
        loadMemberDetailPage(activeDetailMemberId);
    }

    if (typeof populateEventFormSelectors === "function") {
        populateEventFormSelectors();
    }
}

// Renderizado y gestión de eventos del admin
function renderAdminEvents() {
    const tbody = document.getElementById("adminEventsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const selectedCal = adminState.selectedCalendar || "GROUP";
    const filtered = adminState.meetings.filter(m => m.calendar === selectedCal);

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 2rem;">No hay eventos en este calendario.</td></tr>`;
        return;
    }

    filtered.forEach(meet => {
        const tr = document.createElement("tr");
        const javLabel = meet.isJav ? `<span class="badge badge-jav-tag">JAV</span>` : "";
        
        const messageBtn = meet.speakerEmail ? `
            <button class="btn btn-outline btn-xs" onclick="openSendMessageModal('${meet.speakerEmail}', '${meet.speaker}')" style="color:var(--admin-purple); border-color:rgba(124, 58, 237, 0.25); margin-right: 0.25rem;" title="Enviar mensaje al ponente">
                <i class="fa-regular fa-comment-dots"></i>
            </button>
        ` : '';

        tr.innerHTML = `
            <td><strong>${meet.day} ${meet.month}</strong></td>
            <td><strong>${meet.title}</strong> ${javLabel}</td>
            <td><span style="color:var(--admin-text-secondary); font-size:0.8rem;">${meet.info}</span></td>
            <td>${meet.speaker} ${meet.speakerGroup ? `<span style="display:block; font-size:0.7rem; color:var(--admin-text-muted);">${meet.speakerGroup}</span>` : ''}</td>
            <td><span class="badge badge-apoyo">+${meet.xp} XP</span></td>
            <td class="text-right">
                ${messageBtn}
                <button class="btn btn-outline btn-xs" onclick="deleteAdminEvent(${meet.id})" style="color:var(--admin-red); border-color:rgba(239, 68, 68, 0.25);" title="Eliminar Evento">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.deleteAdminEvent = function(id) {
    const idx = adminState.meetings.findIndex(m => m.id === id);
    if (idx !== -1) {
        const meet = adminState.meetings[idx];
        adminState.meetings.splice(idx, 1);
        saveState();
        renderAdminEvents();
        showAdminToast(`Evento "${meet.title}" eliminado del calendario.`, "success");
    }
};

// --- MÓDULO DE HACIENDAS Y POA ---

function renderPoaTotals() {
    const totalEscribientes = adminState.escribientes.length;
    
    // Cuenta estrictamente por clasificación roleClass
    const totalApoyos = adminState.members.filter(m => m.roleClass === "Apoyo").length;
    const totalPadrinos = adminState.members.filter(m => m.roleClass === "Padrino").length;
    const totalOrejas = adminState.members.filter(m => m.roleClass === "Oreja").length;

    const lblEscribientes = document.getElementById("adminPoaTotalEscribientes");
    const lblApoyos = document.getElementById("adminPoaTotalApoyos");
    const lblPadrinos = document.getElementById("adminPoaTotalPadrinos");
    const lblOrejas = document.getElementById("adminPoaTotalOrejas");

    if (lblEscribientes) lblEscribientes.textContent = totalEscribientes;
    if (lblApoyos) lblApoyos.textContent = totalApoyos;
    if (lblPadrinos) lblPadrinos.textContent = totalPadrinos;
    if (lblOrejas) lblOrejas.textContent = totalOrejas;
}

function renderAdminEscribientes(searchQuery = "") {
    const tbody = document.getElementById("adminEscribientesTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const query = searchQuery.trim().toLowerCase();
    const filtered = adminState.escribientes.filter(e => {
        const fullName = `${e.firstName} ${e.lastNameInitial || ""}`.toLowerCase();
        return fullName.includes(query) || e.group.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem 0;">No se encontraron escribientes.</td></tr>`;
        return;
    }

    filtered.forEach(esc => {
        const tr = document.createElement("tr");
        const genderLabel = esc.gender === "MALE" ? "Hombre" : "Mujer";
        const genderClass = esc.gender === "MALE" ? "text-purple" : "text-green";
        const repeLabel = esc.repe ? "Sí" : "No";
        const segLabel = esc.seguimiento ? "Sí" : "No";
        const nameDisplay = esc.lastNameInitial ? `<strong>${esc.firstName} ${esc.lastNameInitial}.</strong>` : `<strong>${esc.firstName}</strong>`;
        
        tr.innerHTML = `
            <td>${nameDisplay}</td>
            <td><span class="${genderClass}">${genderLabel}</span></td>
            <td><span class="badge badge-apoyo">${esc.group}</span></td>
            <td style="text-align: center;">${repeLabel}</td>
            <td style="text-align: center;">${segLabel}</td>
            <td class="text-right">
                <button class="btn btn-outline btn-xs" onclick="deleteAdminEscribiente('${esc.id}')" style="color:var(--admin-red); border-color:rgba(239, 68, 68, 0.25);">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.deleteAdminEscribiente = function(id) {
    const idx = adminState.escribientes.findIndex(e => e.id === id);
    if (idx !== -1) {
        const esc = adminState.escribientes[idx];
        adminState.escribientes.splice(idx, 1);
        
        adminState.changelog.unshift({
            action: "DELETE_ESCRIBIENTE",
            details: `Eliminó a Escribiente ${esc.firstName} ${esc.lastNameInitial}. del grupo ${esc.group}`,
            user: adminState.user.name + " (Tú)",
            time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        });

        // Cambia el semáforo del grupo a ROJO si no quedan escribientes
        const groupHasMore = adminState.escribientes.some(e => e.group === esc.group);
        if (!groupHasMore) {
            const grpSem = adminState.groupsSemaphore.find(g => g.name === esc.group);
            if (grpSem) {
                grpSem.status = "RED";
                grpSem.updatedBy = adminState.user.name + " (Tú)";
                grpSem.time = "Hace 1 seg";
            }
        }

        saveState();
        renderAdminEscribientes();
        renderGroupsSemaphore();
        renderAuditChangelog();
        renderPoaTotals();
        showAdminToast(`Escribiente ${esc.firstName} eliminado.`, "success");
    }
};

// Deriva automáticamente el estado del semáforo de un grupo según:
// - registros nuevos sin validar en el grupo → ROJO,
// - más de 2 días desde la última rectificación → AMARILLO (borrador),
// - rectificado al día y sin nuevos → VERDE.
function computeGroupSemaphore(groupName) {
    const grp = (adminState.groupsSemaphore || []).find(g => g.name === groupName) || {};
    const res = { status: grp.status || "RED", detail: "", inWindow: true, days: null };

    const hac = adminState.activeHacienda;
    if (hac && hac.startDate) {
        const start = new Date(hac.startDate + "T00:00:00");
        const days = Math.ceil((start.getTime() - Date.now()) / 86400000);
        res.days = days;
        if (days > 14) {
            res.inWindow = false;
            res.status = "INFO";
            res.detail = `El POA abre en ${days - 14} día(s)`;
            return res;
        }
    }

    if (grp.manual) { res.detail = "Ajuste manual del coordinador"; return res; }

    const members = (adminState.members || []).filter(m => m.group === groupName);
    const newOnes = members.filter(m => m.isNew || m.status === "New");
    const rectAt = grp.lastRectified ? new Date(grp.lastRectified).getTime() : 0;
    const stale = !rectAt || (Date.now() - rectAt) > 2 * 86400000;

    if (newOnes.length > 0) {
        res.status = "RED";
        res.detail = `${newOnes.length} registro(s) nuevo(s) por validar`;
    } else if (stale) {
        res.status = rectAt ? "YELLOW" : "RED";
        res.detail = rectAt ? "Más de 2 días sin actualizar (borrador)" : "Sin rectificar";
    } else {
        res.status = "GREEN";
        res.detail = "Validado y al día";
    }
    return res;
}

function renderGroupsSemaphore() {
    const list = document.getElementById("adminGroupsSemaphoreList");
    if (!list) return;
    list.innerHTML = "";

    adminState.groupsSemaphore.forEach(grp => {
        const comp = computeGroupSemaphore(grp.name);
        const item = document.createElement("div");
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.padding = "0.6rem 0.75rem";
        item.style.borderBottom = "1px solid #f3f4f6";
        item.style.cursor = "pointer";
        item.title = "Haz clic para forzar manualmente el estado del semáforo";

        let statusColor = "#10b981", statusText = "Verde (Completo)";
        if (comp.status === "YELLOW") { statusColor = "#f59e0b"; statusText = "Amarillo (Borrador)"; }
        else if (comp.status === "RED") { statusColor = "#ef4444"; statusText = "Rojo (Pendiente)"; }
        else if (comp.status === "INFO") { statusColor = "#94a3b8"; statusText = "Fuera de ventana"; }

        item.innerHTML = `
            <div style="display:flex; gap:0.5rem; align-items:center;">
                <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background-color:${statusColor};"></span>
                <div>
                    <h5 style="font-size:0.85rem; font-weight:600; color:var(--admin-text-primary); margin:0;">Grupo ${grp.name}</h5>
                    <span style="font-size:0.7rem; color:var(--admin-text-muted);">${statusText}${comp.detail ? ' · ' + comp.detail : ''}</span>
                </div>
            </div>
            <div style="text-align:right;">
                <span style="font-size:0.7rem; display:block; font-weight:500;">${grp.updatedBy || ''}</span>
                <span style="font-size:0.65rem; color:var(--admin-text-muted);">${grp.time || ''}</span>
            </div>
        `;

        item.addEventListener("click", () => {
            toggleAdminGroupSemaphore(grp.name);
        });

        list.appendChild(item);
    });
}

function toggleAdminGroupSemaphore(groupName) {
    const grp = adminState.groupsSemaphore.find(g => g.name === groupName);
    if (!grp) return;

    const oldStatus = grp.status;
    let newStatus = "GREEN";
    if (oldStatus === "GREEN") newStatus = "YELLOW";
    else if (oldStatus === "YELLOW") newStatus = "RED";

    grp.status = newStatus;
    grp.manual = true; // El coordinador forzó el estado manualmente (override)
    grp.updatedBy = adminState.user.name + " (Tú)";
    grp.time = "Hace 1 seg";

    adminState.changelog.unshift({
        action: "UPDATE_SEMAFORO",
        details: `Cambió semáforo de ${groupName} de ${oldStatus.toLowerCase()} a ${newStatus.toLowerCase()}`,
        user: adminState.user.name + " (Tú)",
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    });

    saveState();
    renderGroupsSemaphore();
    renderAuditChangelog();
    showAdminToast(`Semáforo de ${groupName} cambiado a ${newStatus}.`, "success");
}

function renderAuditChangelog() {
    const list = document.getElementById("adminAuditChangelogList");
    if (!list) return;
    list.innerHTML = "";

    if (!adminState.changelog || adminState.changelog.length === 0) {
        list.innerHTML = `<div style="text-align: center; color: var(--admin-text-muted); font-size: 0.8rem; padding: 1.5rem 0;">Sin cambios registrados.</div>`;
        return;
    }

    adminState.changelog.slice(0, 10).forEach(log => {
        const item = document.createElement("div");
        item.style.padding = "0.5rem 0.75rem";
        item.style.backgroundColor = "#f9fafb";
        item.style.borderLeft = "3px solid var(--admin-purple)";
        item.style.borderRadius = "4px";
        item.style.fontSize = "0.75rem";

        let icon = "fa-circle-info";
        if (log.action.includes("ESCRIBIENTE")) icon = "fa-user-pen";
        else if (log.action.includes("SEMAFORO")) icon = "fa-traffic-light";
        else if (log.action.includes("LOGISTICA")) icon = "fa-truck-ramp-box";

        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:0.2rem; font-weight:500;">
                <span style="color:var(--admin-purple);"><i class="fa-solid ${icon}"></i> ${log.action}</span>
                <span style="color:var(--admin-text-muted); font-size:0.65rem;">${log.time}</span>
            </div>
            <p style="margin:0; color:var(--admin-text-secondary); line-height:1.2;">${log.details}</p>
            <span style="font-size:0.65rem; color:var(--admin-text-muted); display:block; text-align:right; margin-top:0.25rem;">Por: ${log.user}</span>
        `;
        list.appendChild(item);
    });
}

// Estado de navegación del calendario (mes/año visible)
let calViewDate = null;

function calEventsForSelected() {
    const sel = adminState.selectedCalendar || "GROUP";
    return (adminState.meetings || []).filter(m => m.calendar === sel && m.date && dateParts(m.date).valid);
}

function renderAdminCalendar() {
    const cont = document.getElementById("adminWeeklyCalendarContainer");
    if (!cont) return;
    const now = new Date();
    if (!calViewDate) calViewDate = { year: now.getFullYear(), month: now.getMonth() };
    if ((adminState.selectedCalendar || "GROUP") === "ANNUAL") {
        renderAnnualCalendar(cont);
    } else {
        renderMonthlyCalendar(cont);
    }
}

function renderMonthlyCalendar(cont) {
    const now = new Date();
    const { year, month } = calViewDate;
    const byDay = {};
    calEventsForSelected().forEach(e => {
        const p = dateParts(e.date);
        if (p.year === year && p.monthIdx === month) (byDay[p.day] = byDay[p.day] || []).push(e);
    });

    const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = `
        <div class="cal-nav">
            <button type="button" class="cal-nav-btn" data-cal-nav="-1"><i class="fa-solid fa-chevron-left"></i></button>
            <span class="cal-nav-title">${MONTHS_ES[month]} ${year}</span>
            <button type="button" class="cal-nav-btn" data-cal-nav="1"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div class="cal-grid-head">${["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(d => `<div>${d}</div>`).join("")}</div>
        <div class="cal-grid">`;
    for (let i = 0; i < startOffset; i++) html += `<div class="cal-cell empty"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
        const evs = byDay[d] || [];
        const isToday = year === now.getFullYear() && month === now.getMonth() && d === now.getDate();
        html += `<div class="cal-cell${isToday ? " today" : ""}">
            <span class="cal-daynum">${d}</span>
            ${evs.map(e => `<span class="cal-ev${e.isJav ? " jav" : ""}" title="${e.title}">${e.title}</span>`).join("")}
        </div>`;
    }
    html += `</div>`;
    cont.innerHTML = html;

    cont.querySelectorAll("[data-cal-nav]").forEach(b => b.addEventListener("click", () => {
        let m = calViewDate.month + parseInt(b.dataset.calNav), y = calViewDate.year;
        if (m < 0) { m = 11; y--; } else if (m > 11) { m = 0; y++; }
        calViewDate = { year: y, month: m };
        renderMonthlyCalendar(cont);
    }));
}

function renderAnnualCalendar(cont) {
    const year = calViewDate.year;
    const byMonthDay = {};
    calEventsForSelected().forEach(e => {
        const p = dateParts(e.date);
        if (p.year !== year) return;
        (byMonthDay[p.monthIdx] = byMonthDay[p.monthIdx] || {});
        (byMonthDay[p.monthIdx][p.day] = byMonthDay[p.monthIdx][p.day] || []).push(e);
    });

    let html = `
        <div class="cal-nav">
            <button type="button" class="cal-nav-btn" data-yr-nav="-1"><i class="fa-solid fa-chevron-left"></i></button>
            <span class="cal-nav-title">${year}</span>
            <button type="button" class="cal-nav-btn" data-yr-nav="1"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div class="cal-annual">`;
    for (let mo = 0; mo < 12; mo++) {
        const startOffset = (new Date(year, mo, 1).getDay() + 6) % 7;
        const daysInMonth = new Date(year, mo + 1, 0).getDate();
        html += `<div class="cal-mini" data-open-month="${mo}"><div class="cal-mini-title">${MONTHS_ES[mo]}</div><div class="cal-mini-grid">`;
        for (let i = 0; i < startOffset; i++) html += `<span class="cal-mini-cell empty"></span>`;
        for (let d = 1; d <= daysInMonth; d++) {
            const evs = byMonthDay[mo] && byMonthDay[mo][d];
            html += `<span class="cal-mini-cell${evs ? " has-ev" : ""}" title="${evs ? evs.map(e => e.title).join(", ") : ""}">${d}</span>`;
        }
        html += `</div></div>`;
    }
    html += `</div>`;
    cont.innerHTML = html;

    cont.querySelectorAll("[data-yr-nav]").forEach(b => b.addEventListener("click", () => {
        calViewDate = { year: year + parseInt(b.dataset.yrNav), month: calViewDate.month };
        renderAnnualCalendar(cont);
    }));
    // Clic en un mes lo abre en vista mensual
    cont.querySelectorAll("[data-open-month]").forEach(el => el.addEventListener("click", () => {
        calViewDate = { year: year, month: parseInt(el.dataset.openMonth) };
        renderMonthlyCalendar(cont);
    }));
}

function updateHaciendaGroupVisibility() {
    const evtHaciendaGroup = document.getElementById("evtHaciendaGroup");
    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const isSuper = (activeEmail === "superadmin@email.com") || (adminState.currentSimulatedRole === "superadmin");
    const loggedInUser = adminState.activeCoordinators.find(c => c.email === activeEmail);
    const isCoord = loggedInUser && ["LIDER", "AE", "AI"].includes(loggedInUser.role);
    
    if (evtHaciendaGroup) {
        if (isSuper || isCoord) {
            evtHaciendaGroup.style.display = "";
            evtHaciendaGroup.disabled = false;
        } else {
            evtHaciendaGroup.style.display = "none";
            evtHaciendaGroup.disabled = true;
            const evtType = document.getElementById("evtType");
            if (evtType && ["R1", "R4", "JOVENES"].includes(evtType.value)) {
                evtType.value = "NORMAL";
            }
        }
    }
}

function renderApprovalsPanel() {
    const pendingList = document.getElementById("apprPendingList");
    const pendingRolesList = document.getElementById("apprPendingRolesList");
    const activeAdminsTable = document.getElementById("apprAdminsTableBody");

    if (pendingList) pendingList.innerHTML = "";
    if (pendingRolesList) pendingRolesList.innerHTML = "";
    if (activeAdminsTable) activeAdminsTable.innerHTML = "";

    // Actualiza los KPIs
    const pendingCoordinatorsCount = adminState.pendingAdminRequests.length;
    const pendingRolesCount = (adminState.pendingRoleRequests || []).length;

    const countAdminsLabel = document.getElementById("lblApprAdminsCount");
    const countPendingLabel = document.getElementById("lblApprPendingCount");

    if (countAdminsLabel) countAdminsLabel.textContent = adminState.activeCoordinators.length;
    if (countPendingLabel) countPendingLabel.textContent = pendingCoordinatorsCount + pendingRolesCount;

    if (pendingList) {
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

                // Aprobar un LIDER es exclusivo del Superadmin
                const liderLocked = req.requestedRole === "LIDER" && typeof AVPerm !== "undefined" && !AVPerm.can("APPROVE_LIDER");
                const approveBtn = liderLocked
                    ? `<button class="btn btn-outline btn-xs" disabled title="Solo el Superadmin puede aprobar Líderes" style="opacity:.55; cursor:not-allowed;"><i class="fa-solid fa-lock"></i> Solo Superadmin</button>`
                    : `<button class="btn btn-primary btn-xs" onclick="approveCoordinator('${req.id}')">Aprobar</button>`;

                card.innerHTML = `
                    <div class="pcc-left" style="display: flex; gap: 0.75rem; align-items: center;">
                        <div class="pcc-avatar" style="background-color: ${req.avatarColor || '#0F172A'}; width: 36px; height: 36px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.95rem;">${req.name.substring(0,1).toUpperCase()}</div>
                        <div class="pcc-details" style="display: flex; flex-direction: column;">
                            <span class="pcc-name" style="font-weight: 500; font-size: 0.9rem; color: var(--admin-text-primary);">${req.name}</span>
                            <span class="pcc-req-role" style="font-size: 0.75rem; color: var(--admin-text-muted);">Solicita: <strong class="text-purple">${roleFull}</strong> &middot; Grupo: ${req.group}</span>
                        </div>
                    </div>
                    <div class="pcc-actions" style="display: flex; gap: 0.5rem;">
                        ${approveBtn}
                        <button class="btn btn-outline btn-xs" onclick="rejectCoordinator('${req.id}')">Rechazar</button>
                    </div>
                `;
                pendingList.appendChild(card);
            });
        }
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

// Enlaza las pestañas de Aprobaciones dentro del panel admin
document.addEventListener("DOMContentLoaded", () => {
    const apprTabContainer = document.getElementById("apprPendingTabs");
    if (apprTabContainer) {
        const tabBtns = apprTabContainer.querySelectorAll("button");
        const listCoordinators = document.getElementById("apprPendingList");
        const listRoles = document.getElementById("apprPendingRolesList");

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
});

window.approveCoordinator = function(id) {
    const reqIndex = adminState.pendingAdminRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingAdminRequests[reqIndex];

    // Los Líderes solo los autoriza el Superadmin
    if (req.requestedRole === "LIDER" && typeof AVPerm !== "undefined" && !AVPerm.can("APPROVE_LIDER")) {
        showAdminToast("Solo el Superadmin puede aprobar Líderes de grupo.", "error");
        return;
    }

    adminState.pendingAdminRequests.splice(reqIndex, 1);

    // Crea el perfil de coordinador admin activo
    const memberMatch = adminState.members.find(m => m.name === req.name);
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
    renderApprovalsPanel();
    showAdminToast(`¡Alta autorizada! ${req.name} aprobado como ${req.requestedRole}.`, "success");
};

window.rejectCoordinator = function(id) {
    const reqIndex = adminState.pendingAdminRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingAdminRequests[reqIndex];
    adminState.pendingAdminRequests.splice(reqIndex, 1);

    saveState();
    renderApprovalsPanel();
    showAdminToast(`Solicitud de ${req.name} rechazada.`, "info");
};

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
    renderApprovalsPanel();
    showAdminToast(`¡Cargo/Clasificación aprobada para ${req.name}!`, "success");
};

window.rejectRoleRequest = function(id) {
    const reqIndex = adminState.pendingRoleRequests.findIndex(r => r.id === id);
    if (reqIndex === -1) return;

    const req = adminState.pendingRoleRequests[reqIndex];
    adminState.pendingRoleRequests.splice(reqIndex, 1);

    saveState();
    renderApprovalsPanel();
    showAdminToast(`Solicitud de cargo para ${req.name} rechazada.`, "info");
};

window.revokeAdmin = function(id) {
    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const isSuper = (activeEmail === "superadmin@email.com") || (adminState.currentSimulatedRole === "superadmin");
    
    const targetAdmin = adminState.activeCoordinators.find(a => a.id === id);
    if (!targetAdmin) return;

    const rankWeights = {
        "SUPERADMIN": 4,
        "LIDER": 2,
        "AE": 2,
        "AI": 2
    };

    if (!isSuper) {
        const loggedInUser = adminState.activeCoordinators.find(c => c.email === activeEmail);
        if (!loggedInUser) {
            showAdminToast("No tienes sesión administrativa activa.", "error");
            return;
        }

        if (targetAdmin.id === loggedInUser.id) {
            showAdminToast("No puedes revocar tus propios accesos administrativos.", "error");
            return;
        }

        const activeWeight = rankWeights[loggedInUser.role] || 1;
        const targetWeight = rankWeights[targetAdmin.role] || 1;

        if (targetWeight >= activeWeight) {
            showAdminToast(`Permisos insuficientes: No puedes revocar a coordinadores de rango igual o superior (${targetAdmin.role}).`, "error");
            return;
        }
    }

    // Procede con la revocación
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
    renderApprovalsPanel();
    showAdminToast(`Rol de admin revocado para ${admin.name}. Permisos degradados.`, "info");
};

// --- RECTIFICACIÓN UNIFICADA DEL POA ---

function renderRectifyTable() {
    const tbody = document.getElementById("adminRectifyTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const userSede = adminState.user.sede || "Satélite"; // El grupo activo del coordinador

    // Filtrar miembros de este grupo
    const groupMembers = adminState.members.filter(m => m.group === userSede);
    // Filtrar escribientes de este grupo
    const groupEscribientes = adminState.escribientes.filter(e => e.group === userSede);

    if (groupMembers.length === 0 && groupEscribientes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem 0;">No hay integrantes ni escribientes registrados en el grupo ${userSede}.</td></tr>`;
        return;
    }

    // Renderizar Servidores (Miembros)
    groupMembers.forEach(m => {
        const tr = document.createElement("tr");
        tr.className = "poa-row-member";
        tr.dataset.id = m.id;
        tr.dataset.type = "member";

        // Desplegable de Asistirá
        const attVal = m.attendingHacienda !== undefined ? String(m.attendingHacienda) : "false";
        const attSelect = `
            <select class="rectify-attending form-control-white" style="padding: 0.2rem; font-size: 0.8rem; border:1px solid #ccc; border-radius:4px; max-width:80px;">
                <option value="true" ${attVal === "true" ? "selected" : ""}>Sí va</option>
                <option value="false" ${attVal === "false" ? "selected" : ""}>No va</option>
            </select>
        `;

        // Desplegable de Turno
        const shiftVal = m.arrivalShift || "AVANZADA";
        const shiftSelect = `
            <select class="rectify-shift form-control-white" style="padding: 0.2rem; font-size: 0.8rem; border:1px solid #ccc; border-radius:4px; max-width:110px;">
                <option value="PRE_AVANZADA" ${shiftVal === "PRE_AVANZADA" ? "selected" : ""}>Jueves</option>
                <option value="AVANZADA" ${shiftVal === "AVANZADA" ? "selected" : ""}>Viernes Mañana</option>
                <option value="VIERNES_TARDE_NOCHE" ${shiftVal === "VIERNES_TARDE_NOCHE" ? "selected" : ""}>Viernes Tarde</option>
                <option value="SABADO_MANANA" ${shiftVal === "SABADO_MANANA" ? "selected" : ""}>Sábado Mañana</option>
                <option value="SABADO_TARDE_NOCHE" ${shiftVal === "SABADO_TARDE_NOCHE" ? "selected" : ""}>Sábado Tarde</option>
                <option value="DOMINGO" ${shiftVal === "DOMINGO" ? "selected" : ""}>Domingo</option>
            </select>
        `;

        // Desplegable de Transporte
        const transVal = m.transportStatus || "NONE";
        const transSelect = `
            <select class="rectify-transport form-control-white" style="padding: 0.2rem; font-size: 0.8rem; border:1px solid #ccc; border-radius:4px; max-width:120px;">
                <option value="NONE" ${transVal === "NONE" ? "selected" : ""}>Por su cuenta</option>
                <option value="PROVIDES_TRANSPORT" ${transVal === "PROVIDES_TRANSPORT" ? "selected" : ""}>Lleva auto propio</option>
                <option value="NEEDS_TRANSPORT" ${transVal === "NEEDS_TRANSPORT" ? "selected" : ""}>Necesita transporte</option>
            </select>
        `;

        const javTag = m.isJav ? ` <span class="badge badge-jav-tag" style="background:#6d28d9; color:white; font-size:10px; padding:1px 3px; border-radius:3px; margin-left:4px;">JAV</span>` : "";

        let classification = "APOYO";
        if (m.isJav) {
            classification = "JAV";
        } else if (m.roleClass === "Padrino") {
            classification = "PADRINO";
        } else if (m.roleClass === "Oreja") {
            classification = "OREJA";
        } else if (m.roleClass === "Servidor" || (m.serverRole && m.serverRole !== "Ninguno" && m.serverRole !== "LIDER" && m.serverRole !== "AE" && m.serverRole !== "AI")) {
            classification = "SERVIDOR";
        }

        const isRectified = m.lastRectified && (new Date() - new Date(m.lastRectified)) <= 2 * 24 * 60 * 60 * 1000 && m.status !== "New";
        const actionBtn = isRectified 
            ? `<span class="badge badge-success" style="background:#22c55e; color:white; font-size:0.75rem; padding:0.2rem 0.4rem; border-radius:4px; display:inline-block;"><i class="fa-solid fa-check"></i> Aprobado</span>`
            : `<button type="button" class="btn btn-xs btn-outline-success" onclick="rectifySingleMember('${m.id}')" style="padding:0.2rem 0.4rem; font-size:0.75rem; border-color:#22c55e; color:#22c55e; border-radius:4px; font-weight:bold; cursor:pointer;"><i class="fa-solid fa-check"></i> Aprobar</button>`;

        tr.innerHTML = `
            <td style="padding:0.5rem 0.25rem;"><strong>${m.name}</strong>${javTag}${m.poa && (m.poa.emergencyContact || m.poa.allergies || m.poa.observations) ? `
                <div style="font-size:0.68rem; color:var(--admin-text-muted); margin-top:2px; line-height:1.4;">
                    ${m.poa.emergencyContact ? `<span title="Contacto de emergencia"><i class="fa-solid fa-phone" style="font-size:0.6rem;"></i> ${m.poa.emergencyContact}</span> ` : ""}
                    ${m.poa.allergies ? `<span title="Alergias / medicamentos" style="color:#c2410c;"><i class="fa-solid fa-triangle-exclamation" style="font-size:0.6rem;"></i> ${m.poa.allergies}</span> ` : ""}
                    ${m.poa.observations ? `<span title="Observaciones"><i class="fa-regular fa-note-sticky" style="font-size:0.6rem;"></i> ${m.poa.observations}</span>` : ""}
                </div>` : ""}</td>
            <td style="padding:0.5rem 0.25rem;"><span class="badge badge-apoyo" style="font-size:0.75rem;">${classification}</span></td>
            <td style="padding:0.5rem 0.25rem;">${attSelect}</td>
            <td style="padding:0.5rem 0.25rem;">${shiftSelect}</td>
            <td style="padding:0.5rem 0.25rem;">${transSelect}</td>
            <td style="padding:0.5rem 0.25rem; text-align:right;">${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });

    // Renderizar Escribientes
    groupEscribientes.forEach(e => {
        const tr = document.createElement("tr");
        tr.className = "poa-row-escribiente";
        tr.dataset.id = e.id;
        tr.dataset.type = "escribiente";

        // Los escribientes siempre van, es de solo lectura en esta parte
        const attSelect = `
            <span class="text-green" style="font-weight:600; font-size:0.8rem; color:#10b981;"><i class="fa-solid fa-check-double"></i> Escribiente</span>
        `;

        const shiftVal = e.arrivalShift || "AVANZADA";
        const shiftSelect = `
            <select class="rectify-shift form-control-white" style="padding: 0.2rem; font-size: 0.8rem; border:1px solid #ccc; border-radius:4px; max-width:110px;">
                <option value="PRE_AVANZADA" ${shiftVal === "PRE_AVANZADA" ? "selected" : ""}>Jueves</option>
                <option value="AVANZADA" ${shiftVal === "AVANZADA" ? "selected" : ""}>Viernes Mañana</option>
                <option value="VIERNES_TARDE_NOCHE" ${shiftVal === "VIERNES_TARDE_NOCHE" ? "selected" : ""}>Viernes Tarde</option>
                <option value="SABADO_MANANA" ${shiftVal === "SABADO_MANANA" ? "selected" : ""}>Sábado Mañana</option>
                <option value="SABADO_TARDE_NOCHE" ${shiftVal === "SABADO_TARDE_NOCHE" ? "selected" : ""}>Sábado Tarde</option>
                <option value="DOMINGO" ${shiftVal === "DOMINGO" ? "selected" : ""}>Domingo</option>
            </select>
        `;

        const transVal = e.transportStatus || "NEEDS_TRANSPORT";
        const transSelect = `
            <select class="rectify-transport form-control-white" style="padding: 0.2rem; font-size: 0.8rem; border:1px solid #ccc; border-radius:4px; max-width:120px;">
                <option value="NONE" ${transVal === "NONE" ? "selected" : ""}>Por su cuenta</option>
                <option value="PROVIDES_TRANSPORT" ${transVal === "PROVIDES_TRANSPORT" ? "selected" : ""}>Lleva auto propio</option>
                <option value="NEEDS_TRANSPORT" ${transVal === "NEEDS_TRANSPORT" ? "selected" : ""}>Necesita transporte</option>
            </select>
        `;

        const actionBtn = `<span class="badge badge-success" style="background:#22c55e; color:white; font-size:0.75rem; padding:0.2rem 0.4rem; border-radius:4px; display:inline-block;"><i class="fa-solid fa-check"></i> Aprobado</span>`;
        const nameDisplay = e.lastNameInitial ? `${e.firstName} ${e.lastNameInitial}.` : e.firstName;

        tr.innerHTML = `
            <td style="padding:0.5rem 0.25rem;"><strong>${nameDisplay}</strong></td>
            <td style="padding:0.5rem 0.25rem;"><span class="badge badge-jav-tag" style="background:#eee; color:#555; font-size:0.75rem; border:1px solid #ddd; padding:1px 4px; border-radius:4px;">Escribiente</span></td>
            <td style="padding:0.5rem 0.25rem;">${attSelect}</td>
            <td style="padding:0.5rem 0.25rem;">${shiftSelect}</td>
            <td style="padding:0.5rem 0.25rem;">${transSelect}</td>
            <td style="padding:0.5rem 0.25rem; text-align:right;">${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
}

window.rectifySingleMember = function(id) {
    const member = adminState.members.find(m => m.id === id);
    if (member) {
        member.status = "Activo";
        member.isNew = false;
        member.lastRectified = new Date().toISOString();
        
        const groupMembers = adminState.members.filter(m => m.group === member.group);
        const allRectified = groupMembers.every(m => m.status !== "New" && !m.isNew && m.lastRectified && (new Date() - new Date(m.lastRectified)) <= 2 * 24 * 60 * 60 * 1000);
        
        if (allRectified) {
            const grpSem = adminState.groupsSemaphore.find(g => g.name === member.group);
            if (grpSem) {
                grpSem.status = "GREEN";
                grpSem.manual = false; // Vuelve al modo automático tras validar
                grpSem.lastRectified = new Date().toISOString();
                grpSem.updatedBy = adminState.user.name + " (Tú)";
                grpSem.time = "Hace 1 seg";
            }
        } else {
            const grpSem = adminState.groupsSemaphore.find(g => g.name === member.group);
            if (grpSem && grpSem.status === "RED") {
                grpSem.status = "YELLOW";
                grpSem.updatedBy = adminState.user.name + " (Tú)";
                grpSem.time = "Hace 1 seg";
            }
        }
        
        saveState();
        renderRectifyTable();
        renderGroupsSemaphore();
        showAdminToast(`Datos de ${member.name} aprobados/rectificados.`, "success");
    }
};

function updateGroupsSemaphoreStatuses() {
    if (!adminState.groupsSemaphore) return;
    
    const now = new Date();
    
    adminState.groupsSemaphore.forEach(grp => {
        const groupMembers = (adminState.members || []).filter(m => m.group === grp.name);
        if (groupMembers.length === 0) return;
        
        const hasNewMember = groupMembers.some(m => m.status === "New" || m.isNew);
        
        let isExpired = false;
        if (grp.lastRectified) {
            const lastRect = new Date(grp.lastRectified);
            const diffTime = Math.abs(now - lastRect);
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            if (diffDays > 2) {
                isExpired = true;
            }
        } else {
            const rectifiedDates = groupMembers.filter(m => m.lastRectified).map(m => new Date(m.lastRectified));
            if (rectifiedDates.length > 0) {
                const minRect = new Date(Math.min(...rectifiedDates));
                const diffTime = Math.abs(now - minRect);
                const diffDays = diffTime / (1000 * 60 * 60 * 24);
                if (diffDays > 2) {
                    isExpired = true;
                }
            } else {
                isExpired = true;
            }
        }
        
        if (hasNewMember) {
            grp.status = "RED";
            if (grp.time !== "Hace 1 seg" && grp.time !== "Ayer" && grp.time !== "Hace 2 horas" && grp.time !== "Hace 10 min") {
                grp.time = "Miembro nuevo detectado";
            }
        } else if (isExpired) {
            grp.status = "YELLOW";
            grp.time = "Expirado (> 2 días)";
        }
    });
}

function exportDataToCSV() {
    const members = adminState.members || [];
    const coordinators = adminState.activeCoordinators || [];
    const groupsByRegion = adminState.groupsByRegion || {};
    
    let csvContent = "";
    
    // Bloque 1: Militancia y Padrinos
    csvContent += "--- MILITANCIA Y PADRINOS DE AGUA VIVA ---\n";
    
    const headers = [
        "ID", "Nombre (Alias)", "Nombre Real", "Email", "Telefono", "Edad", "Region", "Grupo", 
        "Clasificacion", "Cargo", "Estatus Aprobacion", "Dias Limpios", "Racha", "Nivel",
        "Fecha Sobriedad", "Fecha Ingreso",
        "1er inventario", "10mo de primera", "2do inventario", "10mo de 2da",
        "3er inventario", "10 de 3ra", "pre cuarta", "4to inevntario",
        "1ra de servidores", "2da de servidores", "3ra de servidores",
        "Trinity", "Libertad bajo dios", "Duelo", "desierto", "nino"
    ];
    
    csvContent += headers.map(h => `"${h}"`).join(",") + "\n";
    
    members.forEach(m => {
        const scriptures = m.scriptures || [];
        const exercises = m.exercises || [];
        
        const row = [
            m.id || "",
            m.name || "",
            m.realName || "",
            m.email || "",
            m.phone || "",
            m.age || "",
            m.region || "",
            m.group || "",
            m.roleClass || "Apoyo",
            m.serverRole || "Ninguno",
            m.approvalStatus || "APPROVED",
            m.cleanDays || "",
            m.racha || "",
            m.level || "",
            m.sobrietyDate || "",
            m.joinDate || "",
            ...AVExport.SCRIPTURE_COLS.map(c => AVExport.hasItem(scriptures, c) ? "SI" : "NO"),
            ...AVExport.EXERCISE_COLS.map(c => AVExport.hasItem(exercises, c) ? "SI" : "NO")
        ];
        
        csvContent += row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    
    csvContent += "\n";

    const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
    const SCR_ORDER = ["1er inventario", "10mo de primera", "2do inventario", "10mo de 2da", "3er inventario", "10 de 3ra", "pre cuarta", "4to inevntario", "1ra de servidores", "2da de servidores", "3ra de servidores"];
    const lastInv = (arr) => { let b = "", bi = -1; (arr || []).forEach(s => { const i = SCR_ORDER.indexOf(s); if (i > bi) { bi = i; b = s; } }); return b; };

    const categoryBlock = (title, rows) => {
        csvContent += `--- ${title} (${rows.length}) ---\n`;
        const heads = ["Nombre", "Nombre Real", "Grupo", "Region", "Fecha Sobriedad", "En grupo desde", "Ultimo inventario", "Total inventarios", "Ejercicios", "Cargo"];
        csvContent += heads.map(esc).join(",") + "\n";
        rows.forEach(m => {
            csvContent += [
                m.name, m.realName, m.group, m.region, m.sobrietyDate, m.joinDate,
                lastInv(m.scriptures) || "—", (m.scriptures || []).length,
                (m.exercises || []).join(" / ") || "—", m.serverRole || "Ninguno"
            ].map(esc).join(",") + "\n";
        });
        csvContent += "\n";
    };

    categoryBlock("PADRINOS", members.filter(m => (m.roleClass || "").toLowerCase() === "padrino"));
    categoryBlock("OREJAS", members.filter(m => (m.roleClass || "").toLowerCase() === "oreja"));
    categoryBlock("JAVS (JOVENES EN AGUA VIVA)", members.filter(m => m.isJav));
    categoryBlock("SERVIDORES", members.filter(m => m.serverRole && !["Ninguno", "LIDER", "AE", "AI"].includes(m.serverRole)));

    // Bloque 2: Sedes y Coordinadores
    csvContent += "--- DIRECTORIO DE SEDES Y COORDINADORES ---\n";
    const groupHeaders = ["Grupo (Sede)", "Region", "Ubicacion Maps", "Coordinadores"];
    csvContent += groupHeaders.map(h => `"${h}"`).join(",") + "\n";
    
    for (const [region, groups] of Object.entries(groupsByRegion)) {
        groups.forEach(gName => {
            const groupCoords = coordinators.filter(c => c.group === gName).map(c => `${c.name} (${c.role})`).join(" | ");
            
            let mapsLink = "";
            if (adminState.groupLocations && adminState.groupLocations[gName]) {
                mapsLink = adminState.groupLocations[gName].link || "";
            }
            
            const groupRow = [
                gName,
                region,
                mapsLink,
                groupCoords || "Sin coordinadores asignados"
            ];
            
            csvContent += groupRow.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",") + "\n";
        });
    }
    
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `agua_viva_reporte_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function saveRectifiedPoa() {
    const tbody = document.getElementById("adminRectifyTableBody");
    if (!tbody) return;

    const userSede = adminState.user.sede || "Satélite";
    const rows = tbody.querySelectorAll("tr");
    let memberUpdatesCount = 0;
    let escribienteUpdatesCount = 0;

    rows.forEach(row => {
        const id = row.dataset.id;
        const type = row.dataset.type;

        if (type === "member") {
            const member = adminState.members.find(m => m.id === id);
            if (member) {
                const attending = row.querySelector(".rectify-attending").value === "true";
                const shift = row.querySelector(".rectify-shift").value;
                const transport = row.querySelector(".rectify-transport").value;

                member.attendingHacienda = attending;
                member.arrivalShift = shift;
                member.transportStatus = transport;
                
                member.status = "Activo";
                member.isNew = false;
                member.lastRectified = new Date().toISOString();
                
                memberUpdatesCount++;
            }
        } else if (type === "escribiente") {
            const esc = adminState.escribientes.find(e => e.id === id);
            if (esc) {
                const shift = row.querySelector(".rectify-shift").value;
                const transport = row.querySelector(".rectify-transport").value;

                esc.arrivalShift = shift;
                esc.transportStatus = transport;
                escribienteUpdatesCount++;
            }
        }
    });

    const grpSem = adminState.groupsSemaphore.find(g => g.name === userSede);
    if (grpSem) {
        grpSem.status = "GREEN";
        grpSem.manual = false; // Vuelve al modo automático tras validar el POA
        grpSem.lastRectified = new Date().toISOString();
        grpSem.updatedBy = adminState.user.name + " (Tú)";
        grpSem.time = "Hace 1 seg";
    }

    // Registra en el log de cambios
    adminState.changelog.unshift({
        action: "RECTIFICAR_POA",
        details: `Rectificó y aprobó la lista POA del grupo ${userSede}: ${memberUpdatesCount} integrantes y ${escribienteUpdatesCount} escribientes validados.`,
        user: adminState.user.name + " (Tú)",
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    });

    saveState();

    // Refresca las vistas
    renderPoaTotals();
    renderAdminEscribientes();
    renderGroupsSemaphore();
    renderAuditChangelog();
    renderRectifyTable();

    showAdminToast(`¡Lista POA del grupo ${userSede} rectificada con éxito! Semáforo marcado en VERDE.`, "success");
}

function updateMiniMap(iframeId, containerId, coordsOrLink) {
    const iframe = document.getElementById(iframeId);
    const container = document.getElementById(containerId);
    if (!iframe || !container) return;

    if (!coordsOrLink) {
        container.style.display = "none";
        return;
    }

    let searchVal = coordsOrLink;
    if (coordsOrLink.startsWith("http")) {
        try {
            const url = new URL(coordsOrLink);
            const q = url.searchParams.get("q") || url.searchParams.get("daddr");
            if (q) searchVal = q;
        } catch(e) {}
    }

    iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(searchVal)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    container.style.display = "block";
}

function getRegionForGroup(groupName) {
    for (const [region, groups] of Object.entries(groupsByRegion)) {
        if (groups.includes(groupName)) {
            return region;
        }
    }
    return "Región 1 CDMX";
}

function getGroupLocation(groupName) {
    if (adminState.groupLocations && adminState.groupLocations[groupName]) {
        return adminState.groupLocations[groupName];
    }
    return { coords: "19.5106, -99.2312", link: "https://maps.google.com/?q=19.5106,-99.2312" };
}

function getHaciendaLocation(regionName) {
    if (adminState.haciendaLocations && adminState.haciendaLocations[regionName]) {
        return adminState.haciendaLocations[regionName];
    }
    const haciendaNames = {
        "Región 1 CDMX": "Hacienda El Oasis",
        "Región 2 Estado de México": "Hacienda Esmeralda",
        "Región 3 Querétaro y Guanajuato": "Hacienda del Sol",
        "Región 4 Puebla": "Hacienda Buena Vista",
        "Región 5 Guerrero": "Hacienda de Cabañas",
        "Región 6 Yucatán": "Hacienda Maya",
        "Región 7 Chicago": "Hacienda Midwest",
        "Región 8 Veracruz": "Hacienda del Mar",
        "Región 9 Monterrey": "Hacienda Regia"
    };
    const name = haciendaNames[regionName] || `Hacienda ${regionName}`;
    return { name: name, coords: "19.4326, -99.1332", link: "https://maps.google.com/?q=19.4326,-99.1332" };
}

function getGroupServidores(groupName) {
    const list = {
        "Lider de grupo": { name: "No asignado (Pendiente)", phone: "—" },
        "Atraccion Externa": { name: "No asignado (Pendiente)", phone: "—" },
        "Atraccion Interna": { name: "No asignado (Pendiente)", phone: "—" },
        "COM (Coordinador de Oracion y Meditacion)": { name: "No asignado (Pendiente)", phone: "—" },
        "TG (Tesoreria de grupo)": { name: "No asignado (Pendiente)", phone: "—" },
        "Manager": { name: "No asignado (Pendiente)", phone: "—" },
        "Secretario": { name: "No asignado (Pendiente)", phone: "—" },
        "RSG (Representante de servicios generales)": { name: "No asignado (Pendiente)", phone: "—" },
        "Literatura": { name: "No asignado (Pendiente)", phone: "—" },
        "PPI (Preparador de Primeros Inventarios)": { name: "No asignado (Pendiente)", phone: "—" },
        "Coordinador de Hacienda": { name: "No asignado (Pendiente)", phone: "—" }
    };

    const findPhone = (name, email) => {
        const mb = adminState.members.find(m => m.name === name || (email && m.email === email));
        return mb ? mb.phone : "—";
    };

    if (adminState.activeCoordinators) {
        const groupCoords = adminState.activeCoordinators.filter(c => c.group === groupName);
        groupCoords.forEach(c => {
            const roleNorm = (c.role || "").toUpperCase().trim();
            if (roleNorm === "LIDER" || roleNorm === "LÍDER" || roleNorm === "LIDER DE GRUPO") {
                list["Lider de grupo"] = { name: c.name, phone: findPhone(c.name, c.email) };
            } else if (roleNorm === "AE" || roleNorm === "ATRACCION EXTERNA" || roleNorm === "ATRACCIÓN EXTERNA") {
                list["Atraccion Externa"] = { name: c.name, phone: findPhone(c.name, c.email) };
            } else if (roleNorm === "AI" || roleNorm === "ATRACCION INTERNA" || roleNorm === "ATRACCIÓN INTERNA") {
                list["Atraccion Interna"] = { name: c.name, phone: findPhone(c.name, c.email) };
            } else if (roleNorm === "COORDINADOR DE HACIENDA" || roleNorm === "CH") {
                list["Coordinador de Hacienda"] = { name: c.name, phone: findPhone(c.name, c.email) };
            }
        });
    }

    if (adminState.members) {
        const groupMembers = adminState.members.filter(m => m.group === groupName);
        groupMembers.forEach(m => {
            const roleNorm = (m.serverRole || m.roleClass || m.role || "").toUpperCase().trim();
            
            if (list["Lider de grupo"].name === "No asignado (Pendiente)" && 
                (roleNorm === "LIDER" || roleNorm === "LÍDER DE GRUPO" || roleNorm === "LIDER DE GRUPO" || roleNorm === "LÍDER")) {
                list["Lider de grupo"] = { name: m.name, phone: m.phone || "—" };
            }
            if (list["Atraccion Externa"].name === "No asignado (Pendiente)" && 
                (roleNorm === "AE" || roleNorm === "ATRACCIÓN EXTERNA" || roleNorm === "ATRACCION EXTERNA" || roleNorm === "ATRACCIÓN")) {
                list["Atraccion Externa"] = { name: m.name, phone: m.phone || "—" };
            }
            if (list["Atraccion Interna"].name === "No asignado (Pendiente)" && 
                (roleNorm === "AI" || roleNorm === "ATRACCIÓN INTERNA" || roleNorm === "ATRACCION INTERNA")) {
                list["Atraccion Interna"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "COM" || roleNorm === "COORDINADOR DE ORACION Y MEDITACION" || roleNorm === "COORDINADOR DE ORACIÓN Y MEDITACIÓN" || roleNorm === "COM (COORDINADOR DE ORACION Y MEDITACION)") {
                list["COM (Coordinador de Oracion y Meditacion)"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "TG" || roleNorm === "TESORERÍA DE GRUPO" || roleNorm === "TESORERIA DE GRUPO" || roleNorm === "TG (TESORERIA DE GRUPO)") {
                list["TG (Tesoreria de grupo)"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "MANAGER" || roleNorm === "MANAGER DE GRUPO") {
                list["Manager"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "SECRETARIO") {
                list["Secretario"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "RSG" || roleNorm === "SERVICIOS GENERALES" || roleNorm === "REPRESENTANTE DE SERVICIOS GENERALES" || roleNorm === "RSG (REPRESENTANTE DE SERVICIOS GENERALES)") {
                list["RSG (Representante de servicios generales)"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "LITERATURA") {
                list["Literatura"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "PPI" || roleNorm === "PREPARADOR DE PRIMEROS INVENTARIOS" || roleNorm === "PPI (PREPARADOR DE PRIMEROS INVENTARIOS)") {
                list["PPI (Preparador de Primeros Inventarios)"] = { name: m.name, phone: m.phone || "—" };
            }
            if (roleNorm === "COORDINADOR DE HACIENDA" || roleNorm === "COORDINADOR HACIENDA" || roleNorm === "CH") {
                list["Coordinador de Hacienda"] = { name: m.name, phone: m.phone || "—" };
            }
        });
    }

    return list;
}

function renderDirMiGrupo() {
    const userSede = adminState.user.sede || "Satélite";
    const userRegion = getRegionForGroup(userSede);

    const subEl = document.getElementById("dirMyGroupSubtitle");
    const nameEl = document.getElementById("dirMyGroupName");
    if (subEl) subEl.textContent = `GRUPO ${userSede.toUpperCase()} · ${userRegion.toUpperCase()}`;
    if (nameEl) nameEl.textContent = `Estructura de ${userSede}`;

    const loc = getGroupLocation(userSede);
    const linkInput = document.getElementById("adminGroupLocLink");
    const viewLink = document.getElementById("btnViewGroupLocLink");

    if (linkInput) linkInput.value = loc.link || "";
    if (viewLink) viewLink.href = loc.link || "#";

    updateMiniMap("iframeGroupLocMap", "adminGroupLocMapContainer", loc.link);

    const servants = getGroupServidores(userSede);
    const servantsBody = document.getElementById("adminMyGroupServidoresTableBody");
    if (servantsBody) {
        servantsBody.innerHTML = "";
        for (const [role, data] of Object.entries(servants)) {
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid #eee";
            tr.style.height = "35px";
            
            let nameDisplay = data.name;
            if (data.name === "No asignado (Pendiente)") {
                nameDisplay = `<span style="color: var(--admin-text-secondary); font-style: italic;">No asignado (Pendiente)</span>`;
            }
            
            let phoneDisplay = data.phone;
            if (adminState.currentSimulatedRole === "member" && data.phone !== "—") {
                phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
            }
            
            tr.innerHTML = `
                <td style="padding:0.4rem; font-weight: 600;">${role}</td>
                <td style="padding:0.4rem;">${nameDisplay}</td>
                <td style="padding:0.4rem; font-family: monospace; color: var(--admin-purple);">${phoneDisplay}</td>
            `;
            servantsBody.appendChild(tr);
        }
    }

    const groupMembers = adminState.members.filter(m => m.group === userSede);
    const rosterBody = document.getElementById("adminMyGroupMilitanciaTableBody");
    if (rosterBody) {
        rosterBody.innerHTML = "";
        if (groupMembers.length === 0) {
            rosterBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem 0;">No hay miembros registrados en este grupo.</td></tr>`;
        } else {
            groupMembers.forEach(m => {
                const tr = document.createElement("tr");
                tr.style.cursor = "pointer";
                tr.addEventListener("click", () => {
                    loadMemberDetailPage(m.id);
                });
                
                let phoneDisplay = m.phone || "—";
                if (adminState.currentSimulatedRole === "member") {
                    phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
                }

                // Insignias y etiquetas adicionales basadas en el nuevo modelo AA
                let badgesHtml = "";
                
                // Estatus de Militancia
                if (m.militanciaStatus === "CONCIENCIA") {
                    badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #a7f3d0; background: #ecfdf5; color: #047857; margin-right: 0.25rem;">Conciencia</span>`;
                } else if (m.militanciaStatus === "MILITANCIA") {
                    badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #e5e7eb; background: #f9fafb; color: #4b5563; margin-right: 0.25rem;">Militancia</span>`;
                } else if (m.militanciaStatus === "EN_RIESGO" || m.status === "Risk") {
                    badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fecaca; background: #fef2f2; color: #b91c1c; margin-right: 0.25rem;">En Riesgo</span>`;
                } else if (m.militanciaStatus === "DE_BAJA") {
                    badgesHtml += `<span class="badge-status text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #000; background: #111; color: #fff; margin-right: 0.25rem;">De Baja</span>`;
                }
                
                // Estatus de Experiencia (Apoyo, Oreja, Padrino)
                if (m.experienciaNivel === "PADRINO") {
                    if (m.isPadrinoJav) {
                        badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #c084fc; background: #faf5ff; color: #7e22ce; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-crown"></i> Padrino JAV</span>`;
                    } else {
                        badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #c084fc; background: #faf5ff; color: #7e22ce; margin-right: 0.25rem;"><i class="fa-solid fa-user-shield"></i> Padrino</span>`;
                    }
                } else if (m.experienciaNivel === "OREJA") {
                    if (m.isOrejaJav) {
                        badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #93c5fd; background: #eff6ff; color: #1d4ed8; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-ear-listen"></i> Oreja JAV</span>`;
                    } else {
                        badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #93c5fd; background: #eff6ff; color: #1d4ed8; margin-right: 0.25rem;"><i class="fa-solid fa-ear"></i> Oreja</span>`;
                    }
                } else if (m.experienciaNivel === "APOYO") {
                    badgesHtml += `<span class="badge-exp text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #34d399; background: #f0fdf4; color: #047857; margin-right: 0.25rem;"><i class="fa-solid fa-hands-helping"></i> Apoyo</span>`;
                }

                // Servicios Activos
                if (m.serverRole && m.serverRole !== "Ninguno") {
                    badgesHtml += `<span class="badge-service text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fde047; background: #fef9c3; color: #854d0e; margin-right: 0.25rem; font-weight:600;"><i class="fa-solid fa-briefcase"></i> ${m.serverRole}</span>`;
                }

                // Estigma
                if (m.estigma) {
                    badgesHtml += `<span class="badge-disease text-xs" style="padding: 0.05rem 0.25rem; border-radius: 4px; border: 1px solid #fed7aa; background: #fff7ed; color: #c2410c; font-style: italic;">${m.estigma}</span>`;
                }
                // Apadrinado por (Sponsor)
                let sponsorHtml = "";
                if (m.sponsorName) {
                    sponsorHtml = `<span class="dt-join-date" style="margin-top: 0.15rem; font-size: 0.75rem;"><i class="fa-solid fa-user-friends" style="font-size:0.65rem;"></i> Se apadrina con: <strong>${m.sponsorName}</strong></span>`;
                }
                
                tr.innerHTML = `
                    <td style="padding:0.5rem 0.25rem;">
                        <div style="display:flex; align-items:flex-start; gap:0.5rem; padding: 0.35rem 0;">
                            <div style="width:32px; height:32px; border-radius:50%; background:${m.avatarColor}; color:white; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; margin-top: 0.1rem;">
                                ${m.name.substring(0, 1).toUpperCase()}
                            </div>
                            <div>
                                <span style="font-weight:600; font-size:0.95rem;">${m.name}</span>
                                <div style="margin: 0.2rem 0; display:flex; flex-wrap:wrap; gap:0.2rem;">
                                    ${badgesHtml}
                                </div>
                                ${sponsorHtml}
                            </div>
                        </div>
                    </td>
                    <td style="padding:0.5rem 0.25rem;">${m.level}</td>
                    <td style="padding:0.5rem 0.25rem;"><strong>${m.racha}d</strong> <i class="fa-solid fa-fire text-orange" style="font-size:0.75rem; color:#f97316;"></i></td>
                    <td style="padding:0.5rem 0.25rem;">${m.cleanDays}d</td>
                    <td style="padding:0.5rem 0.25rem; font-family: monospace; color: var(--admin-purple);">${phoneDisplay}</td>
                `;
                rosterBody.appendChild(tr);
            });
        }
    }
}

function renderDirRegional(regionName) {
    const userSede = adminState.user.sede || "Satélite";
    const defaultRegion = getRegionForGroup(userSede);
    const region = regionName || defaultRegion;

    const subEl = document.getElementById("dirRegionSubtitle");
    if (subEl) subEl.textContent = region.toUpperCase();

    const hac = getHaciendaLocation(region);
    const hacNameInput = document.getElementById("adminHaciendaLocName");
    const hacLinkInput = document.getElementById("adminHaciendaLocLink");
    const hacViewLink = document.getElementById("btnViewHaciendaLocLink");

    if (hacNameInput) hacNameInput.value = hac.name || "";
    if (hacLinkInput) hacLinkInput.value = hac.link || "";
    if (hacViewLink) hacViewLink.href = hac.link || "#";

    updateMiniMap("iframeHaciendaLocMap", "adminHaciendaLocMapContainer", hac.link);

    const sedesList = document.getElementById("adminRegionSedesList");
    if (sedesList) {
        sedesList.innerHTML = "";
        const groups = groupsByRegion[region] || [];
        if (groups.length === 0) {
            sedesList.innerHTML = `<div style="text-align:center; color:var(--admin-text-secondary); font-size:0.85rem; padding: 1rem;">No hay sedes en esta región.</div>`;
        } else {
            groups.forEach(gName => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "list-group-item";
                btn.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border:1px solid var(--admin-border); border-radius:6px; background:#fafafa; text-align:left; cursor:pointer; font-size:0.85rem; font-weight:500; transition:all 0.2s; width:100%; margin-bottom:0.25rem;";
                
                const groupMembersCount = adminState.members.filter(m => m.group === gName).length;
                
                btn.innerHTML = `
                    <span><i class="fa-solid fa-house-chimney text-purple" style="margin-right:0.5rem; color:#7c3aed;"></i> ${gName}</span>
                    <span class="badge" style="background:#eee; color:#666; padding:0.1rem 0.4rem; border-radius:10px; font-size:0.75rem;">${groupMembersCount} miembros</span>
                `;
                
                btn.addEventListener("click", () => {
                    sedesList.querySelectorAll("button").forEach(b => {
                        b.style.background = "#fafafa";
                        b.style.borderColor = "var(--admin-border)";
                        b.style.color = "inherit";
                    });
                    btn.style.background = "rgba(124, 58, 237, 0.1)";
                    btn.style.borderColor = "var(--admin-purple)";
                    btn.style.color = "var(--admin-purple)";
                    
                    renderRegionalGroupDetail(gName);
                });
                sedesList.appendChild(btn);
            });
        }
    }
}

function renderRegionalGroupDetail(gName) {
    const emptyCard = document.getElementById("adminRegionalGroupDetailEmpty");
    const contentCard = document.getElementById("adminRegionalGroupDetailContent");
    if (emptyCard) emptyCard.style.display = "none";
    if (contentCard) contentCard.style.display = "block";
    
    const nameLabel = document.getElementById("lblRegGroupDetailName");
    const mapLink = document.getElementById("lblRegGroupDetailLink");
    
    if (nameLabel) nameLabel.textContent = `Grupo ${gName}`;
    const loc = getGroupLocation(gName);
    if (mapLink) mapLink.href = loc.link || "#";

    updateMiniMap("iframeRegGroupDetailMap", "adminRegGroupDetailMapContainer", loc.link);
    
    const servants = getGroupServidores(gName);
    const servantsBody = document.getElementById("tblRegGroupDetailServidores");
    if (servantsBody) {
        servantsBody.innerHTML = "";
        for (const [role, data] of Object.entries(servants)) {
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid #eee";
            tr.style.height = "30px";
            
            let nameDisplay = data.name;
            if (data.name === "No asignado (Pendiente)") {
                nameDisplay = `<span style="color: var(--admin-text-secondary); font-style: italic;">No asignado (Pendiente)</span>`;
            }
            
            let phoneDisplay = data.phone;
            if (adminState.currentSimulatedRole === "member" && data.phone !== "—") {
                phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
            }
            
            tr.innerHTML = `
                <td style="padding:0.3rem;">${role}</td>
                <td style="padding:0.3rem; font-weight:500;">${nameDisplay}</td>
                <td style="padding:0.3rem; font-family: monospace; color: var(--admin-purple);">${phoneDisplay}</td>
            `;
            servantsBody.appendChild(tr);
        }
    }
    
    const groupMembers = adminState.members.filter(m => m.group === gName);
    const militanciaBody = document.getElementById("tblRegGroupDetailMilitancia");
    if (militanciaBody) {
        militanciaBody.innerHTML = "";
        if (groupMembers.length === 0) {
            militanciaBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem 0;">No hay miembros registrados.</td></tr>`;
        } else {
            groupMembers.forEach(m => {
                const tr = document.createElement("tr");
                tr.style.cursor = "pointer";
                tr.addEventListener("click", () => {
                    loadMemberDetailPage(m.id);
                });
                
                let phoneDisplay = m.phone || "—";
                if (adminState.currentSimulatedRole === "member") {
                    phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
                }
                
                tr.innerHTML = `
                    <td style="padding:0.4rem;">${m.name}</td>
                    <td style="padding:0.4rem;">${m.level}</td>
                    <td style="padding:0.4rem;">${m.racha}d</td>
                    <td style="padding:0.4rem; font-family: monospace; color: var(--admin-purple);">${phoneDisplay}</td>
                `;
                militanciaBody.appendChild(tr);
            });
        }
    }
}

function renderDirInterregional() {
    const grid = document.getElementById("adminInterregionalGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const detailContainer = document.getElementById("adminInterregionalDetailContainer");
    if (detailContainer) detailContainer.style.display = "none";
    
    Object.keys(groupsByRegion).forEach((regName, index) => {
        const card = document.createElement("div");
        card.className = "kpi-card-white border-purple";
        card.style.cssText = "cursor:pointer; padding:1.25rem; transition: transform 0.2s, box-shadow 0.2s;";
        
        const groups = groupsByRegion[regName] || [];
        const memberCount = adminState.members.filter(m => groups.includes(m.group)).length;
        const hac = getHaciendaLocation(regName);
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <div>
                    <span style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--admin-text-secondary);">Región ${index + 1}</span>
                    <h4 class="font-serif" style="font-size:1.1rem; margin:0.2rem 0; font-weight:600;">${regName.replace(/Región \d+ /, '')}</h4>
                </div>
                <div style="background:rgba(124, 58, 237, 0.1); color:var(--admin-purple); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center;">
                    <i class="fa-solid fa-map"></i>
                </div>
            </div>
            <div style="margin-top:0.75rem; font-size:0.8rem; color:var(--admin-text-secondary); display:flex; flex-direction:column; gap:0.25rem;">
                <span><i class="fa-solid fa-house-chimney" style="width:14px;"></i> <strong>${groups.length}</strong> sedes</span>
                <span><i class="fa-solid fa-users" style="width:14px;"></i> <strong>${memberCount}</strong> militantes</span>
                <span><i class="fa-solid fa-campground" style="width:14px;"></i> <strong>${hac.name || 'Hacienda'}</strong></span>
            </div>
        `;
        
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-3px)";
            card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
        
        card.addEventListener("click", () => {
            renderInterregionalDetail(regName);
        });
        
        grid.appendChild(card);
    });
}

function renderInterregionalDetail(regName) {
    const detailContainer = document.getElementById("adminInterregionalDetailContainer");
    if (detailContainer) {
        detailContainer.style.display = "block";
        detailContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    const titleLabel = document.getElementById("lblInterRegTitle");
    if (titleLabel) titleLabel.textContent = regName;
    
    const hac = getHaciendaLocation(regName);
    const hacNameLabel = document.getElementById("lblInterRegHaciendaName");
    const hacLink = document.getElementById("lblInterRegHaciendaLink");
    
    if (hacNameLabel) hacNameLabel.textContent = hac.name || "Hacienda de la Región";
    if (hacLink) hacLink.href = hac.link || "#";

    updateMiniMap("iframeInterRegHaciendaMap", "adminInterRegHaciendaMapContainer", hac.link);
    
    const sedesList = document.getElementById("adminInterRegionSedesList");
    if (sedesList) {
        sedesList.innerHTML = "";
        
        const emptyDetail = document.getElementById("adminInterRegionGroupDetailEmpty");
        const contentDetail = document.getElementById("adminInterRegionGroupDetailContent");
        if (emptyDetail) emptyDetail.style.display = "block";
        if (contentDetail) contentDetail.style.display = "none";
        
        const groups = groupsByRegion[regName] || [];
        if (groups.length === 0) {
            sedesList.innerHTML = `<div style="text-align:center; color:var(--admin-text-secondary); font-size:0.85rem; padding:1rem;">No hay sedes en esta región.</div>`;
        } else {
            groups.forEach(gName => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "list-group-item";
                btn.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0.8rem; border:1px solid var(--admin-border); border-radius:6px; background:#fafafa; text-align:left; cursor:pointer; font-size:0.85rem; font-weight:500; transition:all 0.2s; width:100%; margin-bottom:0.25rem;";
                
                const groupMembersCount = adminState.members.filter(m => m.group === gName).length;
                
                btn.innerHTML = `
                    <span><i class="fa-solid fa-house-chimney text-purple" style="margin-right:0.5rem; color:#7c3aed;"></i> ${gName}</span>
                    <span class="badge" style="background:#eee; color:#666; padding:0.1rem 0.4rem; border-radius:10px; font-size:0.75rem;">${groupMembersCount} miembros</span>
                `;
                
                btn.addEventListener("click", () => {
                    sedesList.querySelectorAll("button").forEach(b => {
                        b.style.background = "#fafafa";
                        b.style.borderColor = "var(--admin-border)";
                        b.style.color = "inherit";
                    });
                    btn.style.background = "rgba(124, 58, 237, 0.1)";
                    btn.style.borderColor = "var(--admin-purple)";
                    btn.style.color = "var(--admin-purple)";
                    
                    renderInterregionalGroupDetail(gName);
                });
                sedesList.appendChild(btn);
            });
        }
    }
}

function renderInterregionalGroupDetail(gName) {
    const emptyCard = document.getElementById("adminInterRegionGroupDetailEmpty");
    const contentCard = document.getElementById("adminInterRegionGroupDetailContent");
    if (emptyCard) emptyCard.style.display = "none";
    if (contentCard) contentCard.style.display = "block";
    
    const nameLabel = document.getElementById("lblInterRegGroupDetailName");
    const mapLink = document.getElementById("lblInterRegGroupDetailLink");
    
    if (nameLabel) nameLabel.textContent = `Grupo ${gName}`;
    const loc = getGroupLocation(gName);
    if (mapLink) mapLink.href = loc.link || "#";

    updateMiniMap("iframeInterRegionGroupDetailMap", "adminInterRegionGroupDetailMapContainer", loc.link);
    
    const servants = getGroupServidores(gName);
    const servantsBody = document.getElementById("tblInterRegGroupDetailServidores");
    if (servantsBody) {
        servantsBody.innerHTML = "";
        for (const [role, data] of Object.entries(servants)) {
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid #eee";
            tr.style.height = "30px";
            
            let nameDisplay = data.name;
            if (data.name === "No asignado (Pendiente)") {
                nameDisplay = `<span style="color: var(--admin-text-secondary); font-style: italic;">No asignado (Pendiente)</span>`;
            }
            
            let phoneDisplay = data.phone;
            if (adminState.currentSimulatedRole === "member" && data.phone !== "—") {
                phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
            }
            
            tr.innerHTML = `
                <td style="padding:0.3rem;">${role}</td>
                <td style="padding:0.3rem; font-weight:500;">${nameDisplay}</td>
                <td style="padding:0.3rem; font-family: monospace; color: var(--admin-purple);">${phoneDisplay}</td>
            `;
            servantsBody.appendChild(tr);
        }
    }
    
    const groupMembers = adminState.members.filter(m => m.group === gName);
    const militanciaBody = document.getElementById("tblInterRegGroupDetailMilitancia");
    if (militanciaBody) {
        militanciaBody.innerHTML = "";
        if (groupMembers.length === 0) {
            militanciaBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem 0;">No hay miembros registrados.</td></tr>`;
        } else {
            groupMembers.forEach(m => {
                const tr = document.createElement("tr");
                tr.style.cursor = "pointer";
                tr.addEventListener("click", () => {
                    loadMemberDetailPage(m.id);
                });
                
                let phoneDisplay = m.phone || "—";
                if (adminState.currentSimulatedRole === "member") {
                    phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
                }
                
                tr.innerHTML = `
                    <td style="padding:0.4rem;">${m.name}</td>
                    <td style="padding:0.4rem;">${m.level}</td>
                    <td style="padding:0.4rem;">${m.racha}d</td>
                    <td style="padding:0.4rem; font-family: monospace; color: var(--admin-purple);">${phoneDisplay}</td>
                `;
                militanciaBody.appendChild(tr);
            });
        }
    }
}

function populateEventFormSelectors() {
    const userSede = adminState.user ? adminState.user.sede : "Satélite";
    const userRegion = getRegionForGroup(userSede);

    const evtGroup = document.getElementById("evtGroup");
    if (evtGroup) {
        evtGroup.innerHTML = "";
        const opt = document.createElement("option");
        opt.value = userSede;
        opt.textContent = userSede;
        evtGroup.appendChild(opt);
        evtGroup.value = userSede;
        evtGroup.disabled = true;
    }

    const evtLocationGroup = document.getElementById("evtLocationGroup");
    if (evtLocationGroup) {
        evtLocationGroup.innerHTML = "";
        const regionGroups = groupsByRegion[userRegion] || [];
        regionGroups.forEach(g => {
            const opt = document.createElement("option");
            opt.value = g;
            opt.textContent = g;
            evtLocationGroup.appendChild(opt);
        });
    }

    const evtSpeakerMember = document.getElementById("evtSpeakerMember");
    if (evtSpeakerMember) {
        evtSpeakerMember.innerHTML = "";
        const groupMembers = adminState.members.filter(m => m.group === userSede);
        if (groupMembers.length === 0) {
            const opt = document.createElement("option");
            opt.value = "";
            opt.textContent = "No hay miembros en este grupo";
            evtSpeakerMember.appendChild(opt);
        } else {
            groupMembers.forEach(m => {
                const opt = document.createElement("option");
                opt.value = m.email;
                opt.textContent = `${m.name} (${m.email || 'sin correo'})`;
                evtSpeakerMember.appendChild(opt);
            });
        }
    }

    const extRegion = document.getElementById("evtSpeakerExternalRegion");
    const extGroup = document.getElementById("evtSpeakerExternalGroup");
    if (extRegion && extGroup) {
        extRegion.innerHTML = "";
        Object.keys(groupsByRegion).forEach(r => {
            const opt = document.createElement("option");
            opt.value = r;
            opt.textContent = r;
            extRegion.appendChild(opt);
        });

        extRegion.onchange = () => {
            const selectedRegion = extRegion.value;
            extGroup.innerHTML = "";
            const regionGroups = groupsByRegion[selectedRegion] || [];
            regionGroups.forEach(g => {
                const opt = document.createElement("option");
                opt.value = g;
                opt.textContent = g;
                extGroup.appendChild(opt);
            });
        };

        const initialRegion = extRegion.value;
        extGroup.innerHTML = "";
        const regionGroups = groupsByRegion[initialRegion] || [];
        regionGroups.forEach(g => {
            const opt = document.createElement("option");
            opt.value = g;
            opt.textContent = g;
            extGroup.appendChild(opt);
        });
    }
}

function updateEventFormFields() {
    const evtTypeEl = document.getElementById("evtType");
    const type = evtTypeEl ? evtTypeEl.value : "";
    const hac = isHaciendaType(type);

    const setShow = (id, show) => { const el = document.getElementById(id); if (el) el.style.display = show ? "" : "none"; };
    const setReq = (id, req) => { const el = document.getElementById(id); if (el) el.required = req; };

    setShow("evtHaciendaSection", hac);
    setShow("evtTitleContainer", !hac);
    setShow("evtCalendarContainer", !hac);
    setShow("evtSpeakerSection", !hac);
    setShow("evtDateContainer", !hac);
    setShow("evtTimeXpContainer", !hac);
    setShow("evtJavContainer", !hac);
    setShow("evtLocationSection", !hac);
    setShow("evtHaciendaRegionContainer", type === "HAC_JAV");

    setReq("evtTitle", !hac);
    setReq("evtDate", !hac);
    setReq("evtTime", !hac);
    setReq("evtHaciendaStart", hac);
    setReq("evtHaciendaEnd", hac);

    if (hac) {
        const sel = document.getElementById("evtHaciendaRegion");
        if (sel && !sel.options.length) {
            Object.keys(groupsByRegion).forEach(r => {
                const o = document.createElement("option");
                o.value = r; o.textContent = r;
                sel.appendChild(o);
            });
        }
        return;
    }

    const calendar = document.getElementById("evtCalendar").value;

    const groupSelectContainer = document.getElementById("evtGroupSelectContainer");
    const locTypeContainer = document.getElementById("evtLocationTypeContainer");
    const locGroupContainer = document.getElementById("evtLocationGroupContainer");
    const locLinkContainer = document.getElementById("evtLocationLinkContainer");
    
    const evtLocationType = document.getElementById("evtLocationType");
    const locType = evtLocationType ? evtLocationType.value : "GROUP";

    if (groupSelectContainer) {
        groupSelectContainer.style.display = (calendar === "GROUP") ? "block" : "none";
    }

    if (locTypeContainer) {
        locTypeContainer.style.display = (calendar === "REGIONAL") ? "block" : "none";
    }

    if (locGroupContainer) {
        locGroupContainer.style.display = (calendar === "REGIONAL" && locType === "GROUP") ? "block" : "none";
    }

    if (locLinkContainer) {
        const isRequired = (calendar === "ANNUAL" || (calendar === "REGIONAL" && locType === "CUSTOM"));
        locLinkContainer.style.display = isRequired ? "block" : "none";
        const linkInput = document.getElementById("evtLocationLink");
        if (linkInput) linkInput.required = isRequired;
    }
}

// Agenda una hacienda y dispara los efectos regionales (solo Superadmin)
function handleHaciendaScheduling(type) {
    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const isSuper = (activeEmail === "superadmin@email.com") || (adminState.currentSimulatedRole === "superadmin");
    if (!isSuper) { showAdminToast("Solo el Superadmin puede agendar haciendas.", "error"); return; }

    const start = document.getElementById("evtHaciendaStart").value;
    const end = document.getElementById("evtHaciendaEnd").value;
    if (!start || !end) { showAdminToast("Indica la fecha de inicio y término de la hacienda.", "error"); return; }

    const isJavHac = (type === "HAC_JAV");
    let region;
    if (isJavHac) {
        region = document.getElementById("evtHaciendaRegion").value;
        if (!region) { showAdminToast("Selecciona la región sede de la Hacienda JAV.", "error"); return; }
    } else {
        region = HACIENDA_REGION_MAP[type] || "Región 1 CDMX";
    }

    const title = isJavHac ? `Hacienda JAV · sede ${region}` : `Experiencia Hacienda ${region}`;
    const sp = dateParts(start);

    adminState.meetings.push({
        id: Date.now(),
        calendar: isJavHac ? "ANNUAL" : "REGIONAL",
        type: type,
        title: title,
        topic: title,
        isHacienda: true,
        isJav: isJavHac,
        region: region,
        speaker: "—",
        info: `${region} · Experiencia de 3 días`,
        date: start,
        startDate: start,
        endDate: end,
        day: sp.valid ? String(sp.day) : "",
        month: sp.valid ? sp.weekday : "",
        time: `${start} a ${end}`,
        startTime: "",
        xp: 50
    });

    adminState.activeHacienda = { name: title, region: region, startDate: start, endDate: end };

    notifyAllRegionsHacienda(title, start);
    (adminState.groupsSemaphore || []).forEach(g => {
        g.manual = false;
        g.lastRectified = null;
        g.status = "RED";
        g.updatedBy = "Sistema";
        g.time = "POA reabierto";
    });

    adminState.changelog.unshift({
        action: "AGENDA_HACIENDA",
        details: `Se agendó la ${title} (${start} a ${end}). Notificadas las 9 regiones; POA habilitado.`,
        user: (adminState.user ? adminState.user.name : "Superadmin") + " (Superadmin)",
        time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
    });

    saveState();
    renderAdminEvents();
    if (typeof renderGroupsSemaphore === "function") renderGroupsSemaphore();
    document.getElementById("adminCreateEventForm").reset();
    updateEventFormFields();
    showAdminToast(`Hacienda agendada para ${region}. Notificadas las 9 regiones.`, "success");
}

// Avisa a coordinadores (líderes/AE/AI) de todas las regiones
function notifyAllRegionsHacienda(title, start) {
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
            desc: `Se agendó la ${title} (inicia ${start}). Sube y rectifica tu POA: el semáforo está en rojo hasta validar.`,
            time: "Ahora mismo",
            type: "warning",
            read: false,
            action: "sec-haciendas"
        });
    });
}

function updateSpeakerFormFields() {
    const speakerType = document.getElementById("evtSpeakerType").value;
    
    const memberContainer = document.getElementById("evtSpeakerMemberContainer");
    const externalContainer = document.getElementById("evtSpeakerExternalContainer");
    const guestContainer = document.getElementById("evtSpeakerGuestContainer");
    
    const memberSelect = document.getElementById("evtSpeakerMember");
    const extNameInput = document.getElementById("evtSpeakerExternalName");
    const guestNameInput = document.getElementById("evtSpeakerGuestName");

    if (speakerType === "MILITANCIA") {
        if (memberContainer) memberContainer.style.display = "block";
        if (externalContainer) externalContainer.style.display = "none";
        if (guestContainer) guestContainer.style.display = "none";
        
        if (memberSelect) memberSelect.required = true;
        if (extNameInput) extNameInput.required = false;
        if (guestNameInput) guestNameInput.required = false;
    } else if (speakerType === "EXTERNO") {
        if (memberContainer) memberContainer.style.display = "none";
        if (externalContainer) externalContainer.style.display = "block";
        if (guestContainer) guestContainer.style.display = "none";
        
        if (memberSelect) memberSelect.required = false;
        if (extNameInput) extNameInput.required = true;
        if (guestNameInput) guestNameInput.required = false;
    } else if (speakerType === "INVITADO") {
        if (memberContainer) memberContainer.style.display = "none";
        if (externalContainer) externalContainer.style.display = "none";
        if (guestContainer) guestContainer.style.display = "block";
        
        if (memberSelect) memberSelect.required = false;
        if (extNameInput) extNameInput.required = false;
        if (guestNameInput) guestNameInput.required = true;
    }
}

window.currentSendMsgEmail = "";

function openSendMessageModal(email, name) {
    const modal = document.getElementById("adminSendMessageModal");
    const label = document.getElementById("lblSendMsgSpeakerName");
    const content = document.getElementById("txtSendMsgContent");

    if (!modal || !label || !content) return;

    window.currentSendMsgEmail = email;
    label.textContent = `Destinatario: ${name} (${email})`;
    content.value = "";

    modal.classList.remove("hidden");
    modal.style.display = "flex";
}

function hideSendMessageModal() {
    const modal = document.getElementById("adminSendMessageModal");
    if (modal) {
        modal.classList.add("hidden");
        modal.style.display = "none";
    }
    window.currentSendMsgEmail = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const tabSelector = document.getElementById("dirTabSelector");
    if (tabSelector) {
        const tabBtns = tabSelector.querySelectorAll(".tab-btn");
        const panels = document.querySelectorAll(".dir-tab-panel");
        
        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                tabBtns.forEach(b => {
                    b.classList.remove("active");
                    b.style.color = "var(--admin-text-secondary)";
                    b.style.borderBottom = "none";
                });
                btn.classList.add("active");
                btn.style.color = "var(--admin-purple)";
                btn.style.borderBottom = "3px solid var(--admin-purple)";
                
                const tab = btn.dataset.dirTab;
                panels.forEach(p => p.style.display = "none");
                
                if (tab === "militancia") {
                    const p = document.getElementById("dirPanelMilitancia");
                    if (p) p.style.display = "block";
                    renderDirectoryTable();
                } else if (tab === "mi-grupo") {
                    const p = document.getElementById("dirPanelMiGrupo");
                    if (p) p.style.display = "block";
                    renderDirMiGrupo();
                } else if (tab === "regional") {
                    const p = document.getElementById("dirPanelRegional");
                    if (p) p.style.display = "block";
                    renderDirRegional();
                } else if (tab === "interregional") {
                    const p = document.getElementById("dirPanelInterregional");
                    if (p) p.style.display = "block";
                    renderDirInterregional();
                }
            });
        });
    }

    const btnSaveGroupLoc = document.getElementById("btnSaveGroupLocation");
    if (btnSaveGroupLoc) {
        btnSaveGroupLoc.addEventListener("click", () => {
            const userSede = adminState.user.sede || "Satélite";
            const link = document.getElementById("adminGroupLocLink").value;
            
            if (!adminState.groupLocations) {
                adminState.groupLocations = {};
            }
            adminState.groupLocations[userSede] = { link: link };
            
            if (adminState.changelog) {
                adminState.changelog.unshift({
                    action: "UPDATE_GRUPO_UBICACION",
                    details: `Actualizó el enlace de ubicación del grupo ${userSede} a: ${link || '(vacío)'}.`,
                    user: adminState.user.name + " (Tú)",
                    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
                });
            }
            
            saveState();
            renderAuditChangelog();
            
            const viewLink = document.getElementById("btnViewGroupLocLink");
            if (viewLink) viewLink.href = link || "#";

            updateMiniMap("iframeGroupLocMap", "adminGroupLocMapContainer", link);
            
            showAdminToast(`¡Ubicación del grupo ${userSede} guardada con éxito!`, "success");
        });
    }

    const btnSaveHacLoc = document.getElementById("btnSaveHaciendaLocation");
    if (btnSaveHacLoc) {
        btnSaveHacLoc.addEventListener("click", () => {
            const userSede = adminState.user.sede || "Satélite";
            const region = getRegionForGroup(userSede);
            const name = document.getElementById("adminHaciendaLocName").value;
            const link = document.getElementById("adminHaciendaLocLink").value;
            
            if (!adminState.haciendaLocations) {
                adminState.haciendaLocations = {};
            }
            adminState.haciendaLocations[region] = { name: name || `Hacienda de ${region}`, link: link };
            
            if (adminState.changelog) {
                adminState.changelog.unshift({
                    action: "UPDATE_HACIENDA_UBICACION",
                    details: `Actualizó la ubicación de la hacienda en ${region} (${name}) a enlace: ${link || '(vacío)'}.`,
                    user: adminState.user.name + " (Tú)",
                    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
                });
            }
            
            saveState();
            renderAuditChangelog();
            
            const viewLink = document.getElementById("btnViewHaciendaLocLink");
            if (viewLink) viewLink.href = link || "#";

            updateMiniMap("iframeHaciendaLocMap", "adminHaciendaLocMapContainer", link);
            
            showAdminToast(`¡Ubicación de la hacienda para ${region} guardada con éxito!`, "success");
        });
    }

    const backBtn = document.getElementById("btnBackToInterregionalGrid");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            document.getElementById("adminInterregionalDetailContainer").style.display = "none";
        });
    }

    const btnCancelSendMsg = document.getElementById("btnCancelSendMsg");
    const btnConfirmSendMsg = document.getElementById("btnConfirmSendMsg");
    
    if (btnCancelSendMsg) {
        btnCancelSendMsg.addEventListener("click", hideSendMessageModal);
    }
    if (btnConfirmSendMsg) {
        btnConfirmSendMsg.addEventListener("click", () => {
            const contentInput = document.getElementById("txtSendMsgContent");
            const text = contentInput ? contentInput.value.trim() : "";
            const email = window.currentSendMsgEmail;
            
            if (!text) {
                showAdminToast("El mensaje no puede estar vacío.", "error");
                return;
            }
            if (!email) {
                showAdminToast("Error: No se ha detectado el destinatario.", "error");
                return;
            }
            
            if (!adminState.notifications) {
                adminState.notifications = {};
            }
            if (!adminState.notifications[email]) {
                adminState.notifications[email] = [];
            }
            
            adminState.notifications[email].unshift({
                id: "notif_custom_" + Date.now(),
                title: `💬 Mensaje de Coordinación`,
                desc: text,
                time: "Ahora mismo",
                type: "message",
                read: false,
                action: "sec-inicio"
            });
            
            saveState();
            hideSendMessageModal();
            showAdminToast("¡Mensaje personalizado enviado al ponente con éxito!", "success");
        });
    }

    // Sincronización en tiempo real entre pestañas
    window.addEventListener("storage", (e) => {
        if (e.key === "agua_viva_db") {
            loadState();
            const activeViewBtn = document.querySelector(".sidebar-menu .menu-item.active");
            if (activeViewBtn && activeViewBtn.dataset.view === "view-junta-atracciones") {
                renderLiveJuntaAtracciones();
            }
        }
    });
});


// ---------------------------------------------------------------------
// Edición y eliminación de miembros (limitado al grupo/región del
// coordinador; el Superadmin puede con todos) + acciones del expediente.
// ---------------------------------------------------------------------

// ¿El usuario actual puede editar/borrar a este miembro?
function canEditRow(m) {
    if (typeof AVPerm === "undefined") return false;
    return AVPerm.can("EDIT_MEMBER", { group: m.group, region: m.region });
}

let memberEditId = null;
let memberDeleteId = null;

function openMemberEditModal(id) {
    const m = adminState.members.find(x => x.id === id);
    if (!m) return;
    if (!canEditRow(m)) { showAdminToast("Solo puedes editar miembros de tu grupo y región.", "error"); return; }
    memberEditId = id;

    const modal = document.getElementById("memberEditModal");
    document.getElementById("memberEditSubtitle").textContent = `${m.name} · ${m.group} · ${m.region}`;
    document.getElementById("meAlias").value = m.name || "";
    document.getElementById("meRealName").value = m.realName || "";
    document.getElementById("meAge").value = m.age || "";
    document.getElementById("mePhone").value = m.phone || "";
    document.getElementById("meEmergency").value = m.emergency || "";
    document.getElementById("meEmail").value = m.email || "";
    document.getElementById("meServerRole").value = (m.serverRole && m.serverRole !== "Ninguno") ? m.serverRole : "";
    document.getElementById("meMilitancia").value = m.militanciaStatus || "MILITANCIA";
    document.getElementById("meExperiencia").value = m.experienciaNivel || (m.roleClass || "APOYO").toUpperCase().replace(" JAV", "");
    document.getElementById("meIsJav").checked = !!m.isJav;
    document.getElementById("memberEditError").textContent = "";

    // Catálogos: estigma, región y grupo en cascada
    const estigmaSel = document.getElementById("meEstigma");
    const estigmas = (typeof AV !== "undefined" && AV.Enums) ? AV.Enums.estigmas : ["ALCOHOLISMO", "OTROS"];
    estigmaSel.innerHTML = `<option value="">Ninguno</option>` + estigmas.map(e => `<option value="${e}">${e}</option>`).join("");
    estigmaSel.value = m.estigma || "";

    const regionSel = document.getElementById("meRegion");
    const groupSel = document.getElementById("meGroup");
    regionSel.innerHTML = Object.keys(groupsByRegion).map(r => `<option value="${r}">${r}</option>`).join("");
    regionSel.value = m.region || "Región 1 CDMX";
    const fillGroups = () => {
        const groups = groupsByRegion[regionSel.value] || [];
        groupSel.innerHTML = groups.map(g => `<option value="${g}">${g}</option>`).join("");
    };
    fillGroups();
    groupSel.value = m.group || "";
    regionSel.onchange = fillGroups;

    modal.classList.remove("hidden");
    modal.style.display = "flex";
}

function closeMemberEditModal() {
    const modal = document.getElementById("memberEditModal");
    modal.classList.add("hidden");
    modal.style.display = "none";
    memberEditId = null;
}

function saveMemberEdit() {
    const m = adminState.members.find(x => x.id === memberEditId);
    if (!m) return;
    const errBox = document.getElementById("memberEditError");

    const alias = document.getElementById("meAlias").value.trim();
    const email = document.getElementById("meEmail").value.trim().toLowerCase();
    if (!alias) { errBox.textContent = "El alias es obligatorio."; return; }
    if (email && adminState.members.some(x => x.id !== m.id && x.email === email)) {
        errBox.textContent = "Ese correo ya pertenece a otro miembro.";
        return;
    }

    m.name = alias;
    m.realName = document.getElementById("meRealName").value.trim();
    m.age = parseInt(document.getElementById("meAge").value) || m.age;
    m.phone = document.getElementById("mePhone").value.trim();
    m.emergency = document.getElementById("meEmergency").value.trim();
    if (email) m.email = email;
    m.region = document.getElementById("meRegion").value;
    m.group = document.getElementById("meGroup").value;
    m.estigma = document.getElementById("meEstigma").value || null;
    m.militanciaStatus = document.getElementById("meMilitancia").value;
    m.experienciaNivel = document.getElementById("meExperiencia").value;
    m.roleClass = m.experienciaNivel === "PADRINO" ? "Padrino" : m.experienciaNivel === "OREJA" ? "Oreja" : "Apoyo";
    m.serverRole = document.getElementById("meServerRole").value.trim() || "Ninguno";
    m.isJav = document.getElementById("meIsJav").checked;

    adminState.changelog.unshift({
        action: "EDICION_MIEMBRO",
        details: `Editó la ficha de ${m.name} (${m.group})`,
        user: adminState.user.name + " (Tú)",
        time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
    });

    saveState();
    closeMemberEditModal();
    renderDirectoryTable();
    if (activeDetailMemberId === m.id) loadMemberDetailPage(m.id);
    showAdminToast(`Ficha de ${m.name} actualizada.`, "success");
}

function confirmDeleteMember(id) {
    const m = adminState.members.find(x => x.id === id);
    if (!m) return;
    if (!canEditRow(m)) { showAdminToast("Solo puedes eliminar miembros de tu grupo y región.", "error"); return; }
    memberDeleteId = id;
    document.getElementById("memberDeleteMsg").textContent =
        `Vas a eliminar a "${m.name}" (${m.group}, ${m.region}) del directorio. Esta acción no se puede deshacer.`;
    const modal = document.getElementById("memberDeleteModal");
    modal.classList.remove("hidden");
    modal.style.display = "flex";
}

function executeDeleteMember() {
    const idx = adminState.members.findIndex(x => x.id === memberDeleteId);
    if (idx === -1) return;
    const m = adminState.members[idx];
    adminState.members.splice(idx, 1);

    adminState.changelog.unshift({
        action: "BAJA_MIEMBRO",
        details: `Eliminó a ${m.name} del directorio (${m.group})`,
        user: adminState.user.name + " (Tú)",
        time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
    });

    saveState();
    const modal = document.getElementById("memberDeleteModal");
    modal.classList.add("hidden");
    modal.style.display = "none";
    memberDeleteId = null;
    renderDirectoryTable();
    switchView("view-miembros");
    showAdminToast(`${m.name} fue dado de baja del directorio.`, "info");
}

// Asignar padrino: lista los padrinos de la misma región del miembro
function openAssignPadrinoModal() {
    const m = adminState.members.find(x => x.id === activeDetailMemberId);
    if (!m) return;
    const padrinos = adminState.members.filter(p =>
        p.id !== m.id &&
        (p.experienciaNivel === "PADRINO" || (p.roleClass || "").toLowerCase().includes("padrino")) &&
        p.region === m.region
    );
    const sel = document.getElementById("assignPadrinoSelect");
    document.getElementById("assignPadrinoSubtitle").textContent = `Miembro: ${m.name} · ${m.group} (${m.region})`;
    sel.innerHTML = padrinos.length
        ? padrinos.map(p => `<option value="${p.name}">${p.name} · ${p.group}</option>`).join("")
        : `<option value="">No hay padrinos en esta región</option>`;
    if (m.sponsorName) sel.value = m.sponsorName;
    const modal = document.getElementById("assignPadrinoModal");
    modal.classList.remove("hidden");
    modal.style.display = "flex";
}

function confirmAssignPadrino() {
    const m = adminState.members.find(x => x.id === activeDetailMemberId);
    const chosen = document.getElementById("assignPadrinoSelect").value;
    if (!m || !chosen) return;
    m.sponsorName = chosen;
    adminState.changelog.unshift({
        action: "ASIGNA_PADRINO",
        details: `${m.name} ahora se apadrina con ${chosen}`,
        user: adminState.user.name + " (Tú)",
        time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
    });
    saveState();
    const modal = document.getElementById("assignPadrinoModal");
    modal.classList.add("hidden");
    modal.style.display = "none";
    loadMemberDetailPage(m.id);
    showAdminToast(`Padrino asignado: ${chosen}.`, "success");
}

// Cableado de los modales y acciones del expediente
document.addEventListener("DOMContentLoaded", () => {
    const wire = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener("click", fn); };

    wire("btnCancelMemberEdit", closeMemberEditModal);
    wire("btnCancelMemberDelete", () => {
        const modal = document.getElementById("memberDeleteModal");
        modal.classList.add("hidden");
        modal.style.display = "none";
    });
    wire("btnConfirmMemberDelete", executeDeleteMember);
    wire("btnAssignPadrino", openAssignPadrinoModal);
    wire("btnCancelAssignPadrino", () => {
        const modal = document.getElementById("assignPadrinoModal");
        modal.classList.add("hidden");
        modal.style.display = "none";
    });
    wire("btnConfirmAssignPadrino", confirmAssignPadrino);
    wire("btnEditMember", () => { if (activeDetailMemberId) openMemberEditModal(activeDetailMemberId); });
    wire("btnMessageMember", () => {
        const m = adminState.members.find(x => x.id === activeDetailMemberId);
        if (m && typeof openSendMessageModal === "function") openSendMessageModal(m.email, m.name);
    });

    const editForm = document.getElementById("memberEditForm");
    if (editForm) editForm.addEventListener("submit", (e) => { e.preventDefault(); saveMemberEdit(); });

    // Rango del gráfico de asistencia (12 sem / 6 meses / 1 año)
    document.querySelectorAll("[data-chart-range]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-chart-range]").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            chartRange = btn.dataset.chartRange;
            if (activeDetailMemberId) renderMemberAttendanceBarChart(activeDetailMemberId);
        });
    });

    // Ver todo el historial del expediente
    wire("btnViewAllHistory", () => {
        const box = document.getElementById("detailHistoryTimeline");
        const btn = document.getElementById("btnViewAllHistory");
        if (!box) return;
        box.classList.toggle("expanded");
        if (btn) btn.textContent = box.classList.contains("expanded") ? "Ver menos" : "Ver todo";
    });

    // Exportar el calendario de la Junta de Atracciones a Excel
    wire("btnExportAtracciones", () => {
        const mode = (typeof AVExport !== "undefined") ? AVExport.exportAtraccionesCalendar() : "none";
        showAdminToast(mode === "xlsx" ? "Calendario de atracciones exportado (.xlsx)." : "Sin conexión: exportado en CSV.", "success");
    });
});

// ---------------------------------------------------------------------
// Campana de notificaciones del coordinador: lee y marca las notificaciones
// dirigidas al email con sesión activa (misma estructura que el móvil).
// ---------------------------------------------------------------------
function renderAdminNotifications() {
    const body = document.getElementById("adminNotifBody");
    const badge = document.getElementById("adminNotifBadge");
    if (!body || !badge) return;

    const email = localStorage.getItem("agua_viva_active_user_email") || "";
    const items = (adminState.notifications && adminState.notifications[email]) || [];
    const unread = items.filter(n => !n.read).length;

    badge.style.display = unread > 0 ? "flex" : "none";
    badge.textContent = unread;

    if (!items.length) {
        body.innerHTML = `<div class="admin-notif-empty">No tienes notificaciones</div>`;
        return;
    }

    body.innerHTML = "";
    items.forEach(n => {
        const icon = n.type === "warning" ? "fa-triangle-exclamation" : n.type === "message" ? "fa-comment" : "fa-calendar";
        const div = document.createElement("div");
        div.className = "admin-notif-item" + (n.read ? "" : " unread");
        div.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <div><strong>${n.title}</strong><p>${n.desc}</p><span>${n.time}</span></div>
        `;
        div.addEventListener("click", () => {
            n.read = true;
            saveState();
            renderAdminNotifications();
            const map = { "sec-haciendas": "view-haciendas", "sec-inicio": "view-inicio" };
            const target = map[n.action];
            if (target) {
                switchView(target);
                document.querySelectorAll(".sidebar-menu .menu-item").forEach(l => l.classList.toggle("active", l.dataset.view === target));
            }
            document.getElementById("adminNotifDropdown").classList.remove("open");
        });
        body.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("adminNotifBtn");
    const dropdown = document.getElementById("adminNotifDropdown");
    const clearBtn = document.getElementById("adminNotifClear");
    if (!btn || !dropdown) return;

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("open");
        if (dropdown.classList.contains("open")) renderAdminNotifications();
    });
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && e.target !== btn) dropdown.classList.remove("open");
    });
    if (clearBtn) clearBtn.addEventListener("click", () => {
        const email = localStorage.getItem("agua_viva_active_user_email") || "";
        if (adminState.notifications && adminState.notifications[email]) {
            adminState.notifications[email] = [];
            saveState();
        }
        renderAdminNotifications();
    });

    renderAdminNotifications();
});
