// JavaScript logic for Agua Viva Superadmin Dashboard

// Default State mimicking database if local storage is empty
const defaultState = {
    currentSimulatedRole: "superadmin", // admin, superadmin, member
    user: {
        name: "Mariana C.",
        role: "Coordinadora",
        sede: "Sede Centro"
    },
    members: [
        { id: "m1", name: "Río", email: "rio@email.com", phone: "55-9012-3456", sobrietyDate: "2026-01-02", realName: "Rogelio I.", age: 29, emergency: "Mamá 555-1234", joinDate: "Ago 2025", level: "Aurora Nv 5", levelNum: 5, xp: 580, racha: 42, cleanDays: 142, lastAttendance: "Hoy", status: "Activo", avatarColor: "#b91c1c", checkedIn: true, checkInTime: "19:02", xpGranted: 10 },
        { id: "m2", name: "Nube", email: "nube@email.com", phone: "55-3456-7890", sobrietyDate: "2025-09-08", realName: "Natalia U.", age: 24, emergency: "Papá 555-5678", joinDate: "Feb 2025", level: "Constelación Nv 7", levelNum: 7, xp: 910, racha: 91, cleanDays: 290, lastAttendance: "Hoy", status: "Activo", avatarColor: "#1d4ed8", checkedIn: true, checkInTime: "19:04", xpGranted: 10 },
        { id: "m3", name: "Coyote", email: "coyote@email.com", phone: "55-7890-1234", sobrietyDate: "2026-06-02", realName: "Carlos O.", age: 28, emergency: "Esposa 555-9012", joinDate: "Nov 2025", level: "Llama Nv 2", levelNum: 2, xp: 220, racha: 12, cleanDays: 22, lastAttendance: "Hoy", status: "Activo", avatarColor: "#c2410c", checkedIn: true, checkInTime: "19:11", xpGranted: 10 },
        { id: "m4", name: "Sauce", email: "sauce@email.com", phone: "55-5678-9012", sobrietyDate: "2024-10-23", realName: "Saúl U.", age: 32, emergency: "Hermano 555-3456", joinDate: "Sept 2024", level: "Sol Nv 8", levelNum: 8, xp: 1870, racha: 187, cleanDays: 612, lastAttendance: "Hoy", status: "Activo", avatarColor: "#047857", checkedIn: true, checkInTime: "19:08", xpGranted: 10 },
        { id: "m5", name: "Tierra", email: "tierra@email.com", phone: "55-1234-5678", sobrietyDate: "2026-03-26", realName: "Teresa I.", age: 21, emergency: "Madre 555-7890", joinDate: "Ene 2025", level: "Faro Nv 4", levelNum: 4, xp: 480, racha: 33, cleanDays: 90, lastAttendance: "Hoy", status: "Activo", avatarColor: "#556b2f", checkedIn: true, checkInTime: "19:05", xpGranted: 10 },
        { id: "m6", name: "Ámbar", email: "ambar@email.com", phone: "55-4321-8765", sobrietyDate: "2026-03-21", realName: "Ambar A.", age: 22, emergency: "Tía 555-4321", joinDate: "Jun 2025", level: "Faro Nv 4", levelNum: 4, xp: 420, racha: 28, cleanDays: 95, lastAttendance: "Hoy", status: "Activo", avatarColor: "#be185d", checkedIn: true, checkInTime: "19:03", xpGranted: 15, isJav: false },
        { id: "m7", name: "Lince", email: "lince@email.com", phone: "55-9876-5432", sobrietyDate: "2026-05-08", realName: "Lucía I.", age: 26, emergency: "Padre 555-8765", joinDate: "Oct 2025", level: "Brasa Nv 3", levelNum: 3, xp: 310, racha: 0, cleanDays: 47, lastAttendance: "5 días", status: "Risk", avatarColor: "#be185d", checkedIn: false, checkInTime: "—", xpGranted: 0 },
        { id: "m8", name: "Roble", email: "roble@email.com", phone: "55-8765-4321", sobrietyDate: "2026-05-03", realName: "Roberto O.", age: 27, emergency: "Amigo 555-2109", joinDate: "Nov 2025", level: "Brasa Nv 3", levelNum: 3, xp: 340, racha: 15, cleanDays: 52, lastAttendance: "Hace 1 sem", status: "Risk", avatarColor: "#556b2f", checkedIn: false, checkInTime: "—", xpGranted: 0 },
        { id: "m9", name: "Bruma", email: "bruma@email.com", phone: "55-4567-8901", sobrietyDate: "2026-06-17", realName: "Beatriz R.", age: 16, emergency: "Madre 555-6543", joinDate: "Ene 2026", level: "Chispa JAV Nv 1", levelNum: 1, xp: 70, racha: 3, cleanDays: 7, lastAttendance: "Ayer", status: "Activo", avatarColor: "#6d28d9", checkedIn: false, checkInTime: "—", xpGranted: 0, isJav: true },
        { id: "m10", name: "Ceniza", email: "ceniza@email.com", phone: "55-2109-8765", sobrietyDate: "2026-04-21", realName: "Cesar N.", age: 23, emergency: "Padre 555-9876", joinDate: "May 2026", level: "Estrella Nv 1", levelNum: 1, xp: 64, racha: 64, cleanDays: 64, lastAttendance: "Hoy", status: "New", avatarColor: "#6d28d9", checkedIn: true, checkInTime: "19:21", xpGranted: 5 },
        { id: "m11", name: "Estrella", email: "estrella@email.com", phone: "55-6543-2109", sobrietyDate: "2026-06-10", realName: "Esther R.", age: 25, emergency: "Mamá 555-1122", joinDate: "Mar 2026", level: "Chispa Nv 1", levelNum: 1, xp: 45, racha: 8, cleanDays: 14, lastAttendance: "Hace 4 días", status: "Activo", avatarColor: "#0369a1", checkedIn: false, checkInTime: "—", xpGranted: 0 }
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

// Global state reference loaded from localStorage or initialized with default
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
            adminState.currentSimulatedRole = "superadmin"; // Safe default for superadmin portal
            saveState();
        }
    } else {
        adminState = { ...defaultState };
        saveState();
    }
}

function saveState() {
    localStorage.setItem("agua_viva_db", JSON.stringify(adminState));
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    
    // Check if role is superadmin, if not redirect to admin.html
    if (adminState.currentSimulatedRole !== "superadmin") {
        window.location.href = "admin.html";
        return;
    }

    // Initialize UI
    renderSuperadminPanel();

    // Tabs switcher for pending requests
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

    // Role switcher pills
    const pillRoleAdmin = document.getElementById("pillRoleAdmin");
    const pillRoleSuper = document.getElementById("pillRoleSuper");

    const pills = [pillRoleAdmin, pillRoleSuper];
    pills.forEach(pill => {
        if (!pill) return;
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
});

function renderSuperadminPanel() {
    const pendingList = document.getElementById("superPendingList");
    const pendingRolesList = document.getElementById("superPendingRolesList");
    const activeAdminsTable = document.getElementById("superAdminsTableBody");

    if (pendingList) pendingList.innerHTML = "";
    if (pendingRolesList) pendingRolesList.innerHTML = "";
    if (activeAdminsTable) activeAdminsTable.innerHTML = "";

    // Update KPIs
    const pendingCoordinatorsCount = adminState.pendingAdminRequests.length;
    const pendingRolesCount = (adminState.pendingRoleRequests || []).length;

    document.getElementById("lblSuperAdminsCount").textContent = adminState.activeCoordinators.length;
    document.getElementById("lblSuperPendingCount").textContent = pendingCoordinatorsCount + pendingRolesCount;

    // Renders Pending requests (Coordinators)
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
        avatarColor: req.avatarColor
    };
    adminState.activeCoordinators.push(newAdmin);

    // Also update member list role if they exist
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
    // Cannot revoke Mariana C (the coordinator logged in) in simulation
    if (id === "ac1") {
        showSuperToast("No puedes revocar tus propios accesos administrativos.", "error");
        return;
    }

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
    renderSuperadminPanel();
    showSuperToast(`Rol de admin revocado para ${admin.name}. Permisos degradados.`, "info");
};

// Toast alerts helper
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
