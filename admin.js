// JavaScript logic for Agua Viva Admin Desktop Panel

// Local default state mimicking database
const defaultAdminState = {
    currentSimulatedRole: "admin", // admin, superadmin, member
    user: {
        name: "Mariana C.",
        role: "Coordinadora",
        sede: "Sede Centro"
    },
    members: [
        { id: "m1", name: "Río", email: "rio@email.com", phone: "55-9012-3456", sobrietyDate: "2026-01-02", realName: "Rogelio I.", age: 29, emergency: "Mamá 555-1234", joinDate: "Ago 2025", level: "Aurora Nv 5", levelNum: 5, xp: 580, racha: 42, cleanDays: 142, lastAttendance: "Hoy", status: "Activo", avatarColor: "#b91c1c", checkedIn: true, checkInTime: "19:02", xpGranted: 10, isJav: false },
        { id: "m2", name: "Nube", email: "nube@email.com", phone: "55-3456-7890", sobrietyDate: "2025-09-08", realName: "Natalia U.", age: 24, emergency: "Papá 555-5678", joinDate: "Feb 2025", level: "Constelación Nv 7", levelNum: 7, xp: 910, racha: 91, cleanDays: 290, lastAttendance: "Hoy", status: "Activo", avatarColor: "#1d4ed8", checkedIn: true, checkInTime: "19:04", xpGranted: 10, isJav: false },
        { id: "m3", name: "Coyote", email: "coyote@email.com", phone: "55-7890-1234", sobrietyDate: "2026-06-02", realName: "Carlos O.", age: 28, emergency: "Esposa 555-9012", joinDate: "Nov 2025", level: "Llama Nv 2", levelNum: 2, xp: 220, racha: 12, cleanDays: 22, lastAttendance: "Hoy", status: "Activo", avatarColor: "#c2410c", checkedIn: true, checkInTime: "19:11", xpGranted: 10, isJav: false },
        { id: "m4", name: "Sauce", email: "sauce@email.com", phone: "55-5678-9012", sobrietyDate: "2024-10-23", realName: "Saúl U.", age: 32, emergency: "Hermano 555-3456", joinDate: "Sept 2024", level: "Sol Nv 8", levelNum: 8, xp: 1870, racha: 187, cleanDays: 612, lastAttendance: "Hoy", status: "Activo", avatarColor: "#047857", checkedIn: true, checkInTime: "19:08", xpGranted: 10, isJav: false },
        { id: "m5", name: "Tierra", email: "tierra@email.com", phone: "55-1234-5678", sobrietyDate: "2026-03-26", realName: "Teresa I.", age: 21, emergency: "Madre 555-7890", joinDate: "Ene 2025", level: "Faro Nv 4", levelNum: 4, xp: 480, racha: 33, cleanDays: 90, lastAttendance: "Hoy", status: "Activo", avatarColor: "#556b2f", checkedIn: true, checkInTime: "19:05", xpGranted: 10, isJav: false },
        { id: "m6", name: "Ámbar", email: "ambar@email.com", phone: "55-4321-8765", sobrietyDate: "2026-03-21", realName: "Ambar A.", age: 22, emergency: "Tía 555-4321", joinDate: "Jun 2025", level: "Faro Nv 4", levelNum: 4, xp: 420, racha: 28, cleanDays: 95, lastAttendance: "Hoy", status: "Activo", avatarColor: "#be185d", checkedIn: true, checkInTime: "19:03", xpGranted: 15, isJav: false },
        { id: "m7", name: "Lince", email: "lince@email.com", phone: "55-9876-5432", sobrietyDate: "2026-05-08", realName: "Lucía I.", age: 26, emergency: "Padre 555-8765", joinDate: "Oct 2025", level: "Brasa Nv 3", levelNum: 3, xp: 310, racha: 0, cleanDays: 47, lastAttendance: "5 días", status: "Risk", avatarColor: "#be185d", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false },
        { id: "m8", name: "Roble", email: "roble@email.com", phone: "55-8765-4321", sobrietyDate: "2026-05-03", realName: "Roberto O.", age: 27, emergency: "Amigo 555-2109", joinDate: "Nov 2025", level: "Brasa Nv 3", levelNum: 3, xp: 340, racha: 15, cleanDays: 52, lastAttendance: "Hace 1 sem", status: "Risk", avatarColor: "#556b2f", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false },
        { id: "m9", name: "Bruma", email: "bruma@email.com", phone: "55-4567-8901", sobrietyDate: "2026-06-17", realName: "Beatriz R.", age: 16, emergency: "Madre 555-6543", joinDate: "Ene 2026", level: "Chispa JAV Nv 1", levelNum: 1, xp: 70, racha: 3, cleanDays: 7, lastAttendance: "Ayer", status: "Activo", avatarColor: "#6d28d9", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: true },
        { id: "m10", name: "Ceniza", email: "ceniza@email.com", phone: "55-2109-8765", sobrietyDate: "2026-04-21", realName: "Cesar N.", age: 23, emergency: "Padre 555-9876", joinDate: "May 2026", level: "Estrella Nv 1", levelNum: 1, xp: 64, racha: 64, cleanDays: 64, lastAttendance: "Hoy", status: "New", avatarColor: "#6d28d9", checkedIn: true, checkInTime: "19:21", xpGranted: 5, isJav: false },
        { id: "m11", name: "Estrella", email: "estrella@email.com", phone: "55-6543-2109", sobrietyDate: "2026-06-10", realName: "Esther R.", age: 25, emergency: "Mamá 555-1122", joinDate: "Mar 2026", level: "Chispa Nv 1", levelNum: 1, xp: 45, racha: 8, cleanDays: 14, lastAttendance: "Hace 4 días", status: "Activo", avatarColor: "#0369a1", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: false }
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

let adminState = {};

function loadState() {
    const saved = localStorage.getItem("agua_viva_db");
    if (saved) {
        adminState = JSON.parse(saved);
        // Migration to fix missing emails in activeCoordinators
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
        // Fallback to switch away from simulated member role if active in session
        if (adminState.currentSimulatedRole === "member") {
            adminState.currentSimulatedRole = "admin";
            saveState();
        }
    } else {
        adminState = { ...defaultAdminState };
        saveState();
    }
    
    // Fallbacks to prevent crash
    if (!adminState.meetings) {
        adminState.meetings = [
            { id: 1, calendar: "GROUP", type: "NORMAL", title: "Junta semanal de Grupo", info: "Sede Centro · Tema: El Resurgir", speaker: "Líder Carlos M.", time: "Viernes 29 · 19:00", xp: 10, isJav: false, day: "29", month: "Vie" },
            { id: 2, calendar: "REGIONAL", type: "CONSAGRACION", title: "Consagración Regional", info: "Ermita · Todos los Grupos", speaker: "Regional Pedro G.", time: "Sábado 30 · 07:00", xp: 30, isJav: false, day: "30", month: "Sáb" },
            { id: 3, calendar: "GROUP", type: "TRIBUNA", title: "Tribuna de Experiencia", info: "Grupo Satélite · Abierto", speaker: "Padrino Juan A.", time: "Lunes 01 · 20:00", xp: 15, isJav: false, day: "01", month: "Lun" },
            { id: 4, calendar: "GROUP", type: "PREPARACIONES_JAV", title: "Preparación JAV", info: "Sede Sur · Jóvenes en Acción", speaker: "Líder JAV Amalia F.", time: "Sábado 30 · 16:00", xp: 20, isJav: true, day: "30", month: "Sáb" },
            { id: 5, calendar: "GROUP", type: "JUNTAS_JAV", title: "Junta Jóvenes Agua Viva", info: "Sede Centro · Tema: Elección", speaker: "Ponente Oscar V.", time: "Domingo 31 · 18:00", xp: 15, isJav: true, day: "31", month: "Dom" },
            { id: 6, calendar: "GROUP", type: "PADRES_JAV", title: "Junta de Padres JAV", info: "Sede Virtual · Informativa", speaker: "Comité Familiar", time: "Miércoles 03 · 19:00", xp: 10, isJav: true, day: "03", month: "Mié" },
            { id: 7, calendar: "ANNUAL", type: "CONCORDIA", title: "Concordia Agua Viva Anual", info: "Hacienda San José · Convención", speaker: "Comité Nacional", time: "Octubre 12 · 09:00", xp: 50, isJav: false, day: "12", month: "Oct" },
            { id: 8, calendar: "REGIONAL", type: "JH", title: "Junta de Hacienda (JH)", info: "Región 1 · Logística Retiro", speaker: "Atracciones Diego V.", time: "Viernes 05 · 18:00", xp: 15, isJav: false, day: "05", month: "Jul" },
            { id: 9, calendar: "REGIONAL", type: "NOCHES_DE_GUERRA", title: "Noche de Guerra Regional", info: "Cancha Satélite · Oración y Fuerza", speaker: "Coordinación Regional", time: "Jueves 28 · 21:00", xp: 25, isJav: false, day: "28", month: "Jun" }
        ];
    }
    if (!adminState.pendingRoleRequests) {
        adminState.pendingRoleRequests = [];
    }

    // Set default active email if none exists to ensure backward compatibility
    if (!localStorage.getItem("agua_viva_active_user_email")) {
        localStorage.setItem("agua_viva_active_user_email", "mariana@email.com");
    }

    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const overlay = document.getElementById("adminAuthOverlay");
    
    if (!activeEmail) {
        if (overlay) overlay.classList.remove("hidden");
    } else {
        if (overlay) overlay.classList.add("hidden");
        
        // Find active coordinator or check if superadmin
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
            
            // Render profile in sidebar
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
}

function saveState() {
    localStorage.setItem("agua_viva_db", JSON.stringify(adminState));
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    
    // ==========================================
    // AUTHENTICATION INTERACTIVE HANDLERS (Admin Portal)
    // ==========================================
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

    // Dynamic Groups dropdown based on Region selection in register view
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

    // Handle Login Submit
    if (adminAuthLoginForm) {
        adminAuthLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const errDiv = document.getElementById("adminAuthError");
            if (errDiv) errDiv.style.display = "none";
            const email = document.getElementById("adminLoginEmail").value.trim().toLowerCase();
            const password = document.getElementById("adminLoginPassword").value;
            
            // Search in active coordinators
            let user = adminState.activeCoordinators.find(c => c.email === email && (password === "123" || password === "password"));
            let isSuper = (email === "superadmin@email.com" && password === "123");

            if (user || isSuper) {
                if (isSuper) {
                    adminState.currentSimulatedRole = "superadmin";
                    saveState();
                }
                localStorage.setItem("agua_viva_active_user_email", email);
                showAdminToast(`Sesión iniciada`, "success");
                
                // Hide Auth overlay
                document.getElementById("adminAuthOverlay").classList.add("hidden");
                
                // Reload state & refresh views
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

    // Handle Register Submit
    if (adminAuthRegisterForm) {
        adminAuthRegisterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("adminRegEmail").value.trim().toLowerCase();
            const password = document.getElementById("adminRegPassword").value;
            const name = document.getElementById("adminRegName").value.trim();
            const region = document.getElementById("adminRegRegion").value;
            const group = document.getElementById("adminRegGroup").value;
            const requestedRole = document.getElementById("adminRegLeaderRoleType").value;

            // Check if email already registered
            if (adminState.members.some(m => m.email === email) || adminState.activeCoordinators.some(c => c.email === email)) {
                showAdminToast("Este correo ya está registrado.", "error");
                return;
            }

            // Create pending coordinator approval request
            const newPending = {
                id: "pr" + (adminState.pendingAdminRequests.length + 1),
                name: name,
                email: email,
                avatarColor: "#0F172A",
                requestedRole: requestedRole,
                group: group
            };

            // Register member record too as pending coordinator (treated as regular member until approved)
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

            // Set as active user (they can see panel, but cellphones remain blurred until superadmin approves role)
            localStorage.setItem("agua_viva_active_user_email", email);
            showAdminToast("Registro enviado. Esperando aprobación del Superadmin.", "info");

            // Hide Auth overlay
            document.getElementById("adminAuthOverlay").classList.add("hidden");

            loadState();
            updateUIForRole();
            renderDirectoryTable();
            updateDirectoryStats();
            initializeAttendanceSimulation();

            adminAuthRegisterForm.reset();
        });
    }

    // Guest login (Mariana C.)
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

    // Logout
    if (adminLogoutLink) {
        adminLogoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("agua_viva_active_user_email");
            showAdminToast("Sesión cerrada.", "info");
            document.getElementById("adminAuthOverlay").classList.remove("hidden");
            loadState();
        });
    }
    
    // 1. Navigation routing in Admin view
    const menuLinks = document.querySelectorAll(".sidebar-menu a");
    const views = document.querySelectorAll(".admin-view");

    // Handle hash fragments (e.g. from superadmin.html#view-miembros)
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
            // Only prevent default if it has data-view (inner view switch)
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

    // Initialize UI for simulated role on load
    updateUIForRole();

    // 2. Attendance Simulation Logic
    initializeAttendanceSimulation();

    // 3. Directory view logic
    renderDirectoryTable();
    
    // Search input
    document.getElementById("dirSearchInput").addEventListener("input", filterDirectory);
    
    // Filter tabs
    const tabButtons = document.querySelectorAll("#dirFilterTabs .tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterDirectory();
        });
    });

    // Sorting dropdown
    document.getElementById("dirSortSelect").addEventListener("change", filterDirectory);
    document.getElementById("dirRoleFilter").addEventListener("change", filterDirectory);

    // Role simulation switcher pills
    const pillRoleAdmin = document.getElementById("pillRoleAdmin");
    const pillRoleSuper = document.getElementById("pillRoleSuper");

    const pills = [pillRoleAdmin, pillRoleSuper];
    pills.forEach(pill => {
        if (!pill) return;
        
        // Match active class with loaded state
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

    // 4. Form Member Registration Preview & Submit
    const aliasInput = document.getElementById("frmAlias");
    const prevAvatar = document.getElementById("prevAvatarCircle");
    const prevAliasLabel = document.getElementById("prevAliasLabel");

    aliasInput.addEventListener("input", (e) => {
        const text = e.target.value;
        prevAliasLabel.textContent = text || "Ámbar";
        prevAvatar.textContent = text ? text.substring(0, 1).toUpperCase() : "Á";
    });

    // Color picker
    const colorBtns = document.querySelectorAll("#avatarColorPicker .color-btn");
    colorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            colorBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const color = btn.dataset.color;
            prevAvatar.style.backgroundColor = color;
        });
    });

    // Form Submit
    document.getElementById("newMemberForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const alias = aliasInput.value;
        const realName = document.getElementById("frmRealName").value || "—";
        const age = parseInt(document.getElementById("frmAge").value);
        const emergency = document.getElementById("frmEmergency").value || "—";
        const phone = document.getElementById("frmPhone").value;
        const sobrietyDate = document.getElementById("frmSobrietyDate").value;
        const activeColor = document.querySelector("#avatarColorPicker .color-btn.active").dataset.color;

        // Calculate clean days (tiempo de sobriedad) based on sobrietyDate
        const start = new Date(sobrietyDate);
        const diffTime = Math.abs(Date.now() - start);
        const cleanDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 0;

        // Check JAV age validation (13 to 18)
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

        // Generate invitation code warning alert
        const invCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        
        // Refresh directory table
        renderDirectoryTable();
        
        // Update stats count
        updateDirectoryStats();
        
        // Return to Directory
        switchView("view-miembros");
        
        // Notification Alert
        showAdminToast(`¡Miembro registrado! Código de invitación: ${invCode}`, "success");
        
        // Reset form
        document.getElementById("newMemberForm").reset();
        prevAliasLabel.textContent = "Ámbar";
        prevAvatar.textContent = "Á";
        prevAvatar.style.backgroundColor = "#c2410c";
        colorBtns.forEach(b => b.classList.remove("active"));
        colorBtns[0].classList.add("active");
    });

    // New member button action
    document.getElementById("btnOpenNewMemberView").addEventListener("click", () => {
        switchView("view-nuevo-miembro");
    });

    document.getElementById("btnCancelNewMember").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("view-miembros");
    });

    // 5. Back from Detail to Directory
    document.getElementById("btnBackToDirectory").addEventListener("click", (e) => {
        e.preventDefault();
        switchView("view-miembros");
    });

    // 6. Notes submission
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

        // Clear textarea
        txtArea.value = "";

        // Reload notes list
        renderMemberNotes(memberId);
        showAdminToast("Nota guardada correctamente.", "success");
    });

    // Admin Calendar tabs click handlers
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
            if (activeView === "WEEK") {
                renderAdminWeeklyCalendar();
            } else {
                renderAdminEvents();
            }
        });
    });

    // Admin Calendar view toggle (List vs Weekly)
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
                renderAdminWeeklyCalendar();
            }
        });
    });

    // Populate event group selector on load
    const evtGroup = document.getElementById("evtGroup");
    if (evtGroup) {
        evtGroup.innerHTML = "";
        const regionGroups = groupsByRegion["Región 1 CDMX"] || [];
        regionGroups.forEach(g => {
            const opt = document.createElement("option");
            opt.value = g;
            opt.textContent = g;
            evtGroup.appendChild(opt);
        });
    }

    // Handle conditional fields in Event Creation
    const evtCalendar = document.getElementById("evtCalendar");
    const evtGroupSelectContainer = document.getElementById("evtGroupSelectContainer");
    const evtInfoLabel = document.getElementById("evtInfoLabel");
    const evtInfo = document.getElementById("evtInfo");

    function updateEventFormFields() {
        if (!evtCalendar) return;
        if (evtCalendar.value === "GROUP") {
            if (evtGroupSelectContainer) evtGroupSelectContainer.style.display = "block";
            if (evtInfoLabel) evtInfoLabel.textContent = "Detalles del Salón / Espacio *";
            if (evtInfo) evtInfo.placeholder = "Ej. Salón de Oración, Planta Alta";
        } else {
            if (evtGroupSelectContainer) evtGroupSelectContainer.style.display = "none";
            if (evtInfoLabel) evtInfoLabel.textContent = "Ubicación / Detalles *";
            if (evtInfo) evtInfo.placeholder = "Ej. Sede Centro, Hacienda San José";
        }
    }

    if (evtCalendar) {
        evtCalendar.addEventListener("change", updateEventFormFields);
        updateEventFormFields(); // Run once initially
    }

    // Update Hacienda options visibility
    updateHaciendaGroupVisibility();

    // Handle Create Event Form
    const createEventForm = document.getElementById("adminCreateEventForm");
    if (createEventForm) {
        createEventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("evtTitle").value.trim();
            const calendar = document.getElementById("evtCalendar").value;
            const type = document.getElementById("evtType").value;
            let info = document.getElementById("evtInfo").value.trim();
            
            // Format location if GROUP calendar destination
            if (calendar === "GROUP") {
                const groupSelect = document.getElementById("evtGroup");
                const groupVal = groupSelect ? groupSelect.value : "";
                info = `Grupo ${groupVal} · ${info}`;
            }

            const speaker = document.getElementById("evtSpeaker").value.trim();
            const day = document.getElementById("evtDay").value.trim();
            const month = document.getElementById("evtMonth").value.trim();
            const time = document.getElementById("evtTime").value.trim();
            const xp = parseInt(document.getElementById("evtXp").value) || 15;
            const isJav = document.getElementById("evtIsJav").checked;

            const newEvent = {
                id: Date.now(),
                calendar: calendar,
                type: type,
                title: title,
                info: info,
                speaker: speaker,
                day: day,
                month: month,
                time: `${day} ${month} · ${time}`,
                xp: xp,
                isJav: isJav
            };

            adminState.meetings.push(newEvent);
            saveState();
            renderAdminEvents();
            createEventForm.reset();
            updateEventFormFields(); // Reset field styles/visibility after form reset
            showAdminToast("¡Evento programado con éxito!", "success");
        });
    }

    // Initial render of admin events
    renderAdminEvents();

    // === HACIENDAS/POA INITIALIZATION ===
    const openAddEscBtn = document.getElementById("adminOpenAddEscribienteModal");
    const closeAddEscBtn = document.getElementById("adminCloseEscribienteModal");
    const addEscModal = document.getElementById("adminAddEscribienteModal");
    const addEscForm = document.getElementById("adminAddEscribienteForm");
    const escGroupSelect = document.getElementById("admEscGroup");
    const searchEscInput = document.getElementById("adminSearchEscribiente");
    const saveLogisticsBtn = document.getElementById("adminSaveLogisticsBtn");
    const haciendaSelect = document.getElementById("adminHaciendaSelect");

    // Populate group selector inside modal
    if (escGroupSelect) {
        escGroupSelect.innerHTML = "";
        const regionGroups = groupsByRegion["Región 1 CDMX"];
        regionGroups.forEach(g => {
            const opt = document.createElement("option");
            opt.value = g;
            opt.textContent = g;
            escGroupSelect.appendChild(opt);
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
            const lastInitial = document.getElementById("admEscLastInitial").value.trim().toUpperCase();
            const gender = document.getElementById("admEscGender").value;
            const group = escGroupSelect.value;

            const newEsc = {
                id: "e" + (adminState.escribientes.length + 1),
                firstName: name,
                lastNameInitial: lastInitial,
                gender: gender,
                group: group
            };

            adminState.escribientes.push(newEsc);

            // Audit log
            adminState.changelog.unshift({
                action: "REGISTRO_ESCRIBIENTE",
                details: `Registró a escribiente ${name} ${lastInitial}. en el grupo ${group}`,
                user: adminState.user.name + " (Tú)",
                time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            });

            // Update Semaphore status of group to YELLOW (needs review) if it was RED
            const grpSem = adminState.groupsSemaphore.find(g => g.name === group);
            if (grpSem && grpSem.status === "RED") {
                grpSem.status = "YELLOW";
                grpSem.updatedBy = adminState.user.name + " (Tú)";
                grpSem.time = "Hace 1 seg";
            }

            saveState();
            renderAdminEscribientes();
            renderGroupsSemaphore();
            renderAuditChangelog();
            renderPoaTotals();

            // Hide modal & reset form
            addEscModal.style.display = "none";
            addEscForm.reset();
            showAdminToast(`Escribiente ${name} ${lastInitial}. registrado correctamente.`, "success");
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

            // Log action in audit logs
            adminState.changelog.unshift({
                action: "DECLARACION_LOGISTICA",
                details: `Declaró logística Hacienda: ${attending ? 'Asistirá' : 'No Asistirá'} · Turno: ${shift} · Transp: ${transport}`,
                user: adminState.user.name + " (Tú)",
                time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            });

            saveState();
            renderAuditChangelog();
            renderPoaTotals();
            showAdminToast("¡Declaración de asistencia/logística guardada!", "success");
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

    // Wiring quick logins on admin login screen
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

// View switching utility
function switchView(viewId) {
    const views = document.querySelectorAll(".admin-view");
    views.forEach(v => v.classList.remove("active"));
    
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");

    if (viewId === "view-aprobaciones") {
        renderApprovalsPanel();
    }
}

// Attendance Check-in Simulation
let qrCountTimer = null;
let currentCodeTimeSeconds = 18;
function initializeAttendanceSimulation() {
    
    // Time elapsed ticking (mock)
    let elapsedMinutes = 23;
    setInterval(() => {
        elapsedMinutes += 1;
        document.getElementById("timeElapsedVal").textContent = `${elapsedMinutes} min`;
    }, 60000);

    // QR renewal timer countdown (30s interval)
    qrCountTimer = setInterval(() => {
        currentCodeTimeSeconds--;
        if (currentCodeTimeSeconds < 0) {
            currentCodeTimeSeconds = 29;
            // Generate a random alfanumeric code
            const codes = ["K7-9MX", "H2-4PL", "W9-8YT", "N6-2QX", "J5-3AZ"];
            const nextCode = codes[Math.floor(Math.random() * codes.length)];
            document.getElementById("manualCodeVal").textContent = nextCode;
            
            // Randomize pixel noise representation slightly
            const pixelNoise = document.querySelector(".qr-mock-pixel-noise");
            if (pixelNoise) {
                pixelNoise.style.opacity = Math.random() * 0.4 + 0.5;
            }
        }
        
        // Format MM:SS
        const timerLabel = `0:${String(currentCodeTimeSeconds).padStart(2, '0')}`;
        document.getElementById("timerVal").textContent = timerLabel;
    }, 1000);

    // Initial render of checked-in list and waiting list
    renderCheckInArrivals();

    // Pause session button
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

    // Close session button
    document.getElementById("btnCancelSession").addEventListener("click", () => {
        clearInterval(qrCountTimer);
        showAdminToast("Sesión de asistencia guardada y archivada.", "info");
        switchView("view-miembros");
    });

    // Mark all manually button
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

    // Update ratio and KPI counts
    document.getElementById("arrivalsRatio").textContent = `${checkedIn.length} de ${adminState.members.length}`;
    document.getElementById("cntPresentes").textContent = checkedIn.length;
    document.getElementById("cntEsperando").textContent = waiting.length;
    document.getElementById("waitingCount").textContent = waiting.length;

    // Calculate Tarde (late) count: checkedIn users checking in after 19:15
    const lateCount = checkedIn.filter(m => {
        if (m.checkInTime === "—") return false;
        const [hr, min] = m.checkInTime.split(":").map(Number);
        return (hr === 19 && min > 15) || hr > 19;
    }).length;
    document.getElementById("cntTarde").textContent = lateCount;

    // Calculate XP granted total
    const totalXP = checkedIn.reduce((sum, m) => sum + m.xpGranted, 0);
    document.getElementById("cntXPGiven").textContent = totalXP;

    // Render Checked-in list
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

    // Render Waiting list
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
            // Click to check-in manually
            item.addEventListener("click", () => {
                m.checkedIn = true;
                
                // Get current time
                const d = new Date();
                m.checkInTime = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
                
                // standard XP
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

// Members Directory rendering
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

        // calculate levels stats progress
        const xpProgress = m.xp % 100;

        // JAV visual badge next to name
        const javBadge = m.isJav ? `<span class="badge-role badge-jav-tag text-xs ml-1" style="padding: 0.1rem 0.3rem; background: linear-gradient(135deg, #be185d 0%, #fae8ff 100%); color: #be185d; border: 1px solid #be185d; font-weight: 700; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.2rem;"><i class="fa-solid fa-rocket" style="font-size: 0.6rem;"></i> JAV</span>` : '';

        // Cell phone privacy check
        let phoneDisplay = "";
        if (adminState.currentSimulatedRole === "member") {
            phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
        } else {
            phoneDisplay = `<span class="text-xs font-mono text-purple" style="font-weight: 500;">${m.phone || '—'}</span>`;
        }

        tr.innerHTML = `
            <td>
                <div class="dt-member-cell">
                    <div class="dt-avatar" style="background-color: ${m.avatarColor};">${m.name.substring(0, 1).toUpperCase()}</div>
                    <div>
                        <span class="dt-name">${m.name} ${javBadge}</span>
                        <span class="dt-join-date">Desde ${m.joinDate}</span>
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
        
        // Click row to view member detail page
        tr.addEventListener("click", () => {
            loadMemberDetailPage(m.id);
        });

        tbody.appendChild(tr);
    });

    updateDirectoryStats();
}

function updateDirectoryStats() {
    document.getElementById("dirTotalCount").textContent = adminState.members.length;
    
    const active = adminState.members.filter(m => m.lastAttendance === "Hoy" || m.lastAttendance === "Ayer").length;
    document.getElementById("dirActiveCount").textContent = active;
}

// Directory Search & Filters
function filterDirectory() {
    const query = document.getElementById("dirSearchInput").value.toLowerCase();
    const filter = document.querySelector("#dirFilterTabs .tab-btn.active").dataset.filter;
    const roleFilter = document.getElementById("dirRoleFilter").value;
    const sort = document.getElementById("dirSortSelect").value;

    let filtered = [...adminState.members];

    // Search query
    if (query) {
        filtered = filtered.filter(m => m.name.toLowerCase().includes(query));
    }

    // Role classification filter
    if (roleFilter !== "all") {
        if (roleFilter === "JAV") {
            filtered = filtered.filter(m => m.isJav);
        } else {
            filtered = filtered.filter(m => m.roleClass === roleFilter || m.role === roleFilter);
        }
    }

    // Tabs filter
    if (filter === "active") {
        filtered = filtered.filter(m => m.status === "Activo" || m.lastAttendance === "Hoy");
    } else if (filter === "risk") {
        filtered = filtered.filter(m => m.status === "Risk" || m.lastAttendance.includes("5 días") || m.lastAttendance.includes("sem"));
    } else if (filter === "new") {
        filtered = filtered.filter(m => m.status === "New" || m.lastAttendance === "Nuevo");
    }

    // Sort order
    filtered.sort((a, b) => {
        if (sort === "level") {
            return b.xp - a.xp; // highest XP first
        } else if (sort === "racha") {
            return b.racha - a.racha;
        } else if (sort === "clean") {
            return b.cleanDays - a.cleanDays;
        } else if (sort === "name") {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    // Render Table rows
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

        // JAV visual badge next to name
        const javBadge = m.isJav ? `<span class="badge-role badge-jav-tag text-xs ml-1" style="padding: 0.1rem 0.3rem; background: linear-gradient(135deg, #be185d 0%, #fae8ff 100%); color: #be185d; border: 1px solid #be185d; font-weight: 700; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.2rem;"><i class="fa-solid fa-rocket" style="font-size: 0.60rem;"></i> JAV</span>` : '';

        // Cell phone privacy check
        let phoneDisplay = "";
        if (adminState.currentSimulatedRole === "member") {
            phoneDisplay = `<span style="filter: blur(3px);" class="text-xs text-secondary">[CONFIDENCIAL]</span>`;
        } else {
            phoneDisplay = `<span class="text-xs font-mono text-purple" style="font-weight: 500;">${m.phone || '—'}</span>`;
        }

        tr.innerHTML = `
            <td>
                <div class="dt-member-cell">
                    <div class="dt-avatar" style="background-color: ${m.avatarColor};">${m.name.substring(0, 1).toUpperCase()}</div>
                    <div>
                        <span class="dt-name">${m.name} ${javBadge}</span>
                        <span class="dt-join-date">Desde ${m.joinDate}</span>
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

// Member detail view page loader
let activeDetailMemberId = null;
function loadMemberDetailPage(id) {
    activeDetailMemberId = id;
    const member = adminState.members.find(m => m.id === id);
    if (!member) return;

    // Switch view
    switchView("view-detalle-miembro");

    // Breadcrumbs
    document.getElementById("detailMemberNameBreadcrumb").textContent = member.name;

    // Header info
    const avatar = document.getElementById("detailAvatarCircle");
    avatar.textContent = member.name.substring(0, 1).toUpperCase();
    avatar.style.backgroundColor = member.avatarColor;

    document.getElementById("detailMemberName").textContent = member.name;
    document.getElementById("detailLevelLabel").textContent = member.level;
    document.getElementById("detailRachaLabel").innerHTML = `<i class="fa-solid fa-fire"></i> ${member.racha}d`;
    
    // Meta information line
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

    // Progress bar calculations
    const levelIndex = member.levelNum;
    const nextLevelNames = ["Llama", "Llama", "Brasa", "Faro", "Aurora", "Sol", "Estrella", "Constelación", "Sol Absoluto"];
    const xpRequirements = [50, 50, 150, 300, 650, 800, 1200, 1500, 2000];
    
    const nextLevelName = nextLevelNames[levelIndex] || "Constelación";
    const reqXP = xpRequirements[levelIndex] || 650;
    
    document.getElementById("detailNextLevel").textContent = nextLevelName;
    document.getElementById("detailXPLabel").textContent = member.xp;
    
    const percent = Math.min((member.xp / reqXP) * 100, 100);
    document.getElementById("detailProgressBarFill").style.width = `${percent}%`;

    // Metrics grid values
    document.getElementById("lblDetailCleanDays").textContent = member.cleanDays;
    document.getElementById("lblDetailTotalJuntas").textContent = member.xpGranted > 0 ? 34 : 33; // minor simulation adjust
    document.getElementById("lblDetailHaciendas").textContent = member.name === "Ámbar" ? 1 : 0;
    document.getElementById("lblDetailAttendanceRate").textContent = member.status === "Risk" ? "42%" : "92%";

    // Draw attendance bar chart (SVG simulation)
    renderMemberAttendanceBarChart(member.id);

    // Render history timeline
    renderMemberHistoryTimeline(member.id);

    // Render achievements badges
    renderMemberBadges(member.id);

    // Render coordinator notes
    renderMemberNotes(member.id);
}

function renderMemberAttendanceBarChart(memberId) {
    const container = document.getElementById("attendanceBarChartContainer");
    container.innerHTML = "";

    // Load data from state (or fallback to dummy default)
    const counts = adminState.weeklyAttendance[memberId] || [2, 1, 3, 2, 2, 3, 2, 2, 3, 2, 1, 3];
    
    const maxVal = 4; // Max attendance count in a week
    
    counts.forEach((cnt, idx) => {
        const item = document.createElement("div");
        item.className = `chart-bar-item ${idx === counts.length - 1 ? 'active' : ''}`;
        
        // Calculate height percentage
        const heightPct = (cnt / maxVal) * 100;

        item.innerHTML = `
            <div class="bar-column" style="height: ${heightPct}%;" title="${cnt} juntas"></div>
            <span class="bar-lbl">s${12 - idx}</span>
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
    
    // Badges definitions
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

    // Count unlocked badges
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

// Toast alerts in admin panel
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
    
    // In
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(0)";
        toast.style.opacity = "1";
    }, 50);

    // Out
    setTimeout(() => {
        toast.style.transform = "translateX(-50%) translateY(20px)";
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// Phase 2: Role Switcher & Superadmin Portal Logic

function updateUIForRole() {
    const role = adminState.currentSimulatedRole;
    saveState();
    
    const avatar = document.getElementById("adminProfileAvatar");
    const nameLabel = document.getElementById("adminProfileName");
    const roleLabel = document.getElementById("adminProfileRole");
    const superTab = document.getElementById("sidebarSuperadminTab");

    if (!avatar || !nameLabel || !roleLabel || !superTab) return;

    // Reset styles
    avatar.style.backgroundColor = "#0F172A";

    if (role === "superadmin") {
        avatar.textContent = "S";
        avatar.style.backgroundColor = "#7C3AED"; // Purple theme for Superadmin
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
        
        // If they were simulated as superadmin on this page, restore defaults
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
        // Member Simulation mode
        avatar.textContent = "Á";
        nameLabel.textContent = "Simulador Miembro";
        roleLabel.textContent = "Lector General";
        
        superTab.style.display = "none";
        showAdminToast("Modo Miembro (Restricciones de Privacidad activas).", "info");
    }

    // Update Hacienda options visibility
    updateHaciendaGroupVisibility();

    // Refresh members list and detail view to apply blurs
    renderDirectoryTable();

    if (activeDetailMemberId) {
        loadMemberDetailPage(activeDetailMemberId);
    }
}

// Admin Events Rendering & Management
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
        
        tr.innerHTML = `
            <td><strong>${meet.day} ${meet.month}</strong></td>
            <td><strong>${meet.title}</strong> ${javLabel}</td>
            <td><span style="color:var(--admin-text-secondary); font-size:0.8rem;">${meet.info}</span></td>
            <td>${meet.speaker}</td>
            <td><span class="badge badge-apoyo">+${meet.xp} XP</span></td>
            <td class="text-right">
                <button class="btn btn-outline btn-xs" onclick="deleteAdminEvent(${meet.id})" style="color:var(--admin-red); border-color:rgba(239, 68, 68, 0.25);">
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

// --- HACIENDAS AND POA MODULE ---

function renderPoaTotals() {
    const totalEscribientes = adminState.escribientes.length;
    
    // Count strictly by roleClass classification
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
        const fullName = `${e.firstName} ${e.lastNameInitial}`.toLowerCase();
        return fullName.includes(query) || e.group.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem 0;">No se encontraron escribientes.</td></tr>`;
        return;
    }

    filtered.forEach(esc => {
        const tr = document.createElement("tr");
        const genderLabel = esc.gender === "MALE" ? "Hombre" : "Mujer";
        const genderClass = esc.gender === "MALE" ? "text-purple" : "text-green";
        
        tr.innerHTML = `
            <td><strong>${esc.firstName} ${esc.lastNameInitial}.</strong></td>
            <td><span class="${genderClass}">${genderLabel}</span></td>
            <td><span class="badge badge-apoyo">${esc.group}</span></td>
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
        
        // Audit log
        adminState.changelog.unshift({
            action: "DELETE_ESCRIBIENTE",
            details: `Eliminó a Escribiente ${esc.firstName} ${esc.lastNameInitial}. del grupo ${esc.group}`,
            user: adminState.user.name + " (Tú)",
            time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        });

        // Update Semaphore status of group to RED if no writing members left
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

function renderGroupsSemaphore() {
    const list = document.getElementById("adminGroupsSemaphoreList");
    if (!list) return;
    list.innerHTML = "";

    adminState.groupsSemaphore.forEach(grp => {
        const item = document.createElement("div");
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.padding = "0.6rem 0.75rem";
        item.style.borderBottom = "1px solid #f3f4f6";
        item.style.cursor = "pointer";
        item.title = "Haz clic para alternar estado de semáforo";

        let statusColor = "#10b981"; // GREEN
        let statusText = "Verde (Completo)";
        if (grp.status === "YELLOW") {
            statusColor = "#f59e0b"; // YELLOW
            statusText = "Amarillo (Borrador)";
        } else if (grp.status === "RED") {
            statusColor = "#ef4444"; // RED
            statusText = "Rojo (Pendiente)";
        }

        item.innerHTML = `
            <div style="display:flex; gap:0.5rem; align-items:center;">
                <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background-color:${statusColor};"></span>
                <div>
                    <h5 style="font-size:0.85rem; font-weight:600; color:var(--admin-text-primary); margin:0;">Grupo ${grp.name}</h5>
                    <span style="font-size:0.7rem; color:var(--admin-text-muted);">${statusText}</span>
                </div>
            </div>
            <div style="text-align:right;">
                <span style="font-size:0.7rem; display:block; font-weight:500;">${grp.updatedBy}</span>
                <span style="font-size:0.65rem; color:var(--admin-text-muted);">${grp.time}</span>
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

function renderAdminWeeklyCalendar() {
    const grid = document.getElementById("adminWeeklyCalendarGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const selectedCal = adminState.selectedCalendar || "GROUP";
    const filtered = adminState.meetings.filter(m => m.calendar === selectedCal);

    // Create 7 column arrays for events
    const days = [[], [], [], [], [], [], []]; // L, M, M, J, V, S, D

    filtered.forEach(meet => {
        const mStr = String(meet.month).toLowerCase();
        if (mStr.includes("lun")) days[0].push(meet);
        else if (mStr.includes("mar")) days[1].push(meet);
        else if (mStr.includes("mié") || mStr.includes("mie")) days[2].push(meet);
        else if (mStr.includes("jue")) days[3].push(meet);
        else if (mStr.includes("vie")) days[4].push(meet);
        else if (mStr.includes("sáb") || mStr.includes("sab")) days[5].push(meet);
        else if (mStr.includes("dom")) days[6].push(meet);
        else {
            // Default fallback based on day if not matched
            days[5].push(meet); 
        }
    });

    // Render columns
    for (let i = 0; i < 7; i++) {
        const col = document.createElement("div");
        col.className = "weekly-col";
        col.style.backgroundColor = "#fafafa";
        col.style.border = "1px solid #eee";
        col.style.borderRadius = "8px";
        col.style.padding = "0.5rem";
        col.style.display = "flex";
        col.style.flexDirection = "column";
        col.style.gap = "0.5rem";
        col.style.minHeight = "150px";

        if (days[i].length === 0) {
            col.innerHTML = `<span style="font-size:0.7rem; color:var(--admin-text-muted); text-align:center; margin-top:2rem;">Sin eventos</span>`;
        } else {
            days[i].forEach(meet => {
                const card = document.createElement("div");
                card.style.backgroundColor = "#fff";
                card.style.borderLeft = meet.isJav ? "3px solid #be185d" : "3px solid #7c3aed";
                card.style.borderRadius = "4px";
                card.style.padding = "0.4rem";
                card.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                card.style.fontSize = "0.75rem";
                card.style.display = "flex";
                card.style.flexDirection = "column";
                card.style.gap = "0.2rem";

                const javTag = meet.isJav ? `<span style="font-size:0.6rem; font-weight:700; color:#be185d; text-transform:uppercase;">JAV</span>` : "";

                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong style="color:var(--admin-text-primary); font-size:0.75rem; line-height: 1.1; margin-bottom: 0.15rem;">${meet.title}</strong>
                        ${javTag}
                    </div>
                    <span style="font-size:0.65rem; color:var(--admin-text-secondary);">${meet.info.split("·")[0]}</span>
                    <span style="font-weight:600; color:var(--admin-purple); font-size:0.65rem;">${meet.day} ${meet.month}</span>
                `;
                col.appendChild(card);
            });
        }
        grid.appendChild(col);
    }
}

// ==========================================
// INTEGRATED APPROVALS & ROLES MANAGEMENT
// ==========================================

function updateHaciendaGroupVisibility() {
    const evtHaciendaGroup = document.getElementById("evtHaciendaGroup");
    const activeEmail = localStorage.getItem("agua_viva_active_user_email");
    const isSuper = (activeEmail === "superadmin@email.com") || (adminState.currentSimulatedRole === "superadmin");
    
    if (evtHaciendaGroup) {
        if (isSuper) {
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

    // Update KPIs
    const pendingCoordinatorsCount = adminState.pendingAdminRequests.length;
    const pendingRolesCount = (adminState.pendingRoleRequests || []).length;

    const countAdminsLabel = document.getElementById("lblApprAdminsCount");
    const countPendingLabel = document.getElementById("lblApprPendingCount");

    if (countAdminsLabel) countAdminsLabel.textContent = adminState.activeCoordinators.length;
    if (countPendingLabel) countPendingLabel.textContent = pendingCoordinatorsCount + pendingRolesCount;

    // Renders Pending requests (Coordinators)
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
    }

    // Renders Pending Role Requests (Oreja, Padrino, Servidores)
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

    // Renders Active Coordinators
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

// Bind Approvals Tabs inside Admin Panel
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
    adminState.pendingAdminRequests.splice(reqIndex, 1);

    // Create active admin coordinator profile
    const newAdmin = {
        id: "ac" + (adminState.activeCoordinators.length + 1),
        name: req.name,
        role: req.requestedRole,
        group: req.group,
        avatarColor: req.avatarColor,
        email: req.name.toLowerCase().split(" ")[0] + "@email.com"
    };
    adminState.activeCoordinators.push(newAdmin);

    // Also update member list role if they exist
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

    // Find member
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
        "LIDER": 3,
        "AE": 2,
        "AI": 1
    };

    if (!isSuper) {
        const loggedInUser = adminState.activeCoordinators.find(c => c.email === activeEmail);
        if (!loggedInUser) {
            showAdminToast("No tienes sesión administrativa activa.", "error");
            return;
        }

        // Cannot revoke self
        if (targetAdmin.id === loggedInUser.id) {
            showAdminToast("No puedes revocar tus propios accesos administrativos.", "error");
            return;
        }

        // Cannot revoke equal or higher rank
        const activeWeight = rankWeights[loggedInUser.role] || 1;
        const targetWeight = rankWeights[targetAdmin.role] || 1;

        if (targetWeight >= activeWeight) {
            showAdminToast(`Permisos insuficientes: No puedes revocar a coordinadores de rango igual o superior (${targetAdmin.role}).`, "error");
            return;
        }
    }

    // Proceed with revocation
    const adminIndex = adminState.activeCoordinators.findIndex(a => a.id === id);
    if (adminIndex === -1) return;

    const admin = adminState.activeCoordinators[adminIndex];
    adminState.activeCoordinators.splice(adminIndex, 1);

    // Demote member in general directory
    const member = adminState.members.find(m => m.name === admin.name);
    if (member) {
        member.role = "APOYO";
        member.level = "Chispa Nv 1";
    }

    // Add back to pending request for simulation loop
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


