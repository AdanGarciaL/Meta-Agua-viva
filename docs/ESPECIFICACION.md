# Especificación maestra — Plataforma Agua Viva

Documento de referencia para cualquier persona que colabore en el proyecto: qué es, qué roles existen y qué puede hacer cada uno, qué hace cada sección de cada superficie, cómo están modelados los datos y qué falta por construir.

**Estado**: versión de fase temprana (v0.x), prototipo funcional completo sin backend.

---

## 1. Visión

Agua Viva es una comunidad de recuperación organizada en **9 regiones geográficas**, cada una con **grupos (sedes)**. La plataforma digitaliza:

1. **Asistencia** a juntas mediante QR firmado con expiración (30 s) y validación por geolocalización.
2. **Directorio** de la militancia con clasificación del programa (Apoyo → Oreja → Padrino), cargos de servicio y privacidad de contactos.
3. **Logística de Haciendas (POA)**: retiros de 3 días (Vie–Dom; pre-avanzada el Jueves). Declaración individual, escribientes, rectificación por grupo y semáforo de avance.
4. **Gamificación**: XP, niveles (Chispa → Sol), rachas e insignias para motivar constancia.
5. **JAV** (Jóvenes en Agua Viva, 13–18 años): experiencia visual propia y eventos exclusivos.

La meta a futuro: panel web administrativo + aplicaciones nativas Android/iOS contra un backend real (ver §7).

## 2. Roles y matriz de permisos

La implementación de referencia es `js/permissions.js` (`window.AVPerm`). Cualquier cambio de permisos se hace ahí y se refleja aquí.

| Rol | Descripción |
|---|---|
| **SUPERADMIN** | Administración central. Portal físico independiente (`superadmin.html`) con credenciales de fábrica. Acceso a todo sin excepción. |
| **LIDER** | Coordinador asesor de un grupo. Acceso completo al panel admin dentro de su alcance. |
| **AE / AI** | Atracciones Externas / Internas: asesores operativos y logísticos de hacienda de su grupo. Mismo alcance que el Líder. |
| **MEMBER** | Conciencia y militancia. Usa exclusivamente la aplicación móvil. |

| Acción | SUPERADMIN | LIDER / AE / AI | MEMBER |
|---|:---:|:---:|:---:|
| Aprobar **Líderes** | ✔ | ✖ (candado en UI) | ✖ |
| Aprobar AE/AI y cargos/clasificaciones (Oreja, Padrino, servidores) | ✔ | ✔ | ✖ |
| Editar / eliminar miembros, servidores y ubicaciones | ✔ todos | Solo **su grupo y su región** | ✖ |
| Ver directorios de otras regiones (incl. teléfonos, para servicio) | ✔ | ✔ solo lectura | ✖ |
| Junta de Atracciones en el panel admin | (control total en su portal) | **Solo ver calendario + exportar Excel** | ✖ |
| Agendar Haciendas (notifica a las 9 regiones, abre semáforos) | ✔ | ✖ | ✖ |
| Alta/baja de regiones y sedes | ✔ | ✖ | ✖ |
| Tomar asistencia, agendar eventos normales, exportar datos | ✔ | ✔ | ✖ |
| App móvil (progreso, POA, QR, historial, logros) | — | — | ✔ |

Privacidad: los teléfonos se muestran a superadmin y coordinadores; en la simulación de vista "Miembro" del panel se ofuscan (`[CONFIDENCIAL]` + blur).

## 3. Funciones por superficie

### 3.1 Aplicación móvil (`app.html` + `js/app.js`)

| Sección | Funciones |
|---|---|
| **Inicio** | Tags de clasificación del usuario (Padrino/Oreja/Servidor; variantes **JAV** acumulables). Nivel, XP y barra de progreso reales. Racha y tiempo limpio. **Próxima junta** con alcance (grupo/regional/interregional), tema, ponente, lugar, fecha y hora + cuenta regresiva. Tarjeta-resumen de Mi Servicio (si aplica). **Próximos interregionales**. **Aviso de Hacienda de mi región** con CTA "Confirma tu asistencia" (deep-link a Haciendas). Calendario (pestañas Mi Grupo/Regional/Anual; vista lista o semanal). |
| **Haciendas y POA** | Selector de haciendas agendadas con lugar/fechas/mapa y semáforo del grupo propio. **Declaración POA completa**: asiste sí/no, turno de llegada (pre-avanzada…domingo), transporte (necesita/ofrece + cupos), contacto de emergencia, alergias/medicamentos, observaciones. Panel de coordinador (si aplica): escribientes con repe/seguimiento, semáforos por grupo y bitácora. |
| **Asistencia (QR, al centro)** | Escáner simulado con validación real: firma JWT HS256 + expiración 30 s + geocerca de la sede (con override de demo). Código manual alternativo. **Offline-first**: la asistencia se encola y se sincroniza al reconectar. Overlay de éxito con junta real, desglose de XP y racha. |
| **Historial "Tu Cielo"** | KPIs (juntas, haciendas, días limpio, XP total). Filtros por tipo. Gráfico de constancia SVG **generado de los datos**. Línea de tiempo **agrupada por mes real**. |
| **Logros** | Tarjeta de perfil con tags de rol. Camino de luz de 6 niveles derivado del nivel real. Tarjeta de avance del Padrino/Oreja (inventarios y ejercicios). **9 insignias calculadas** (rachas 7/30, 90 días, 1 año, primera junta, 10 juntas, hacienda vivida, padrino activo, madrugador/pre-avanzada). Modal de subida de nivel. |
| **Mi Servicio** (solo servidores aprobados) | **6º ítem de la barra de navegación inferior**, visible solo si el cargo tiene sección programada (LÍDER/AE/AI; otros cargos no muestran la opción). También tarjeta de acceso en Inicio con resumen vivo. Sub-pestañas por rol — **AE**: Semáforo POA regional calculado con bloque de grupos sin confirmar, Gestión de escribientes, Auditoría de cambios filtrada a su región y Junta de Atracciones con calendario mensual interactivo (clic en día → detalle de padrinos, pase de lista regional); **AI**: Mis Juntas (publicar juntas del grupo con ponente de la militancia o invitado — notifica al ponente — y cancelarlas); **LÍDER**: todas las anteriores. Los cargos con nombre largo ("Atracción Externa") se normalizan a siglas. |
| **Ajustes** | Acceso por avatar o engrane del header. Alias, teléfono y contacto de emergencia editables. Avatar por color, icono o **foto de perfil** (recorte cuadrado + compresión a 128 px JPEG en canvas; botón "Quitar foto"); la foto se refleja en header, Logros y en el directorio/expediente del panel. Clasificación y cargos visibles (tags). Si es Padrino/Oreja: sobriedad, ingreso, inventarios y ejercicios editables. Cerrar sesión. |
| **Registro/Login** | Login por email/contraseña. Registro con validación JAV automática por edad (13–18), región→grupo en cascada, solicitud de clasificación (Oreja/Padrino) y de cargos — quedan **pendientes de aprobación**. |
| **Modo JAV** | Re-tema cian/magenta (variables CSS + logo), filtrado a eventos JAV, tags con estilo JAV. |

### 3.2 Panel administrativo (`admin.html` + `js/admin.js`)

| Vista | Funciones |
|---|---|
| **Inicio** | KPIs reales (miembros, presentes hoy, grupos por validar, próxima hacienda), próximos eventos, grupos con semáforo pendiente. |
| **Tomar asistencia** | Sesión en vivo: QR + código manual firmado (JWT, rota cada 30 s), llegadas en tiempo real, check-in manual por clic, marcar todos, estadísticas (presentes/esperando/tarde/XP). |
| **Directorios** | 4 pestañas: Militancia (todos, con badges de estigma/militancia/experiencia/servicio/JAV), Mi Grupo (servidores + roster + **ubicación editable**), Regional, Interregional (solo lectura). **Editar/Eliminar** miembros con modal completo — solo dentro del alcance (AVPerm). Exportar Excel. |
| **Expediente** | Ficha AA (estigma, militancia, POA, "se apadrina con", servicio, consagraciones), progreso XP, asistencia **12 sem / 6 meses / 1 año**, historial (ver todo), insignias, **avance editable** (inventarios/ejercicios), notas del coordinador, **asignar padrino** (padrinos de la región), **enviar mensaje** (notificación al miembro), editar. |
| **Nuevo miembro** | Alta con previsualización en vivo de la tarjeta móvil. |
| **Calendario y eventos** | Agenda con **fecha real** (selector); tipos de junta (normal, OyP, tribuna, JH, JAV…); ubicación por sede o enlace; ponente militancia/externo/invitado (notificación al ponente). Vistas: lista, **calendario mensual** (Grupo/Regional) y **anual 12 meses** (Interregional). **Modo Hacienda (solo Superadmin)**: R1–R9 + JAV interregional (pide región sede), solo fechas inicio/fin, título autogenerado; al guardar notifica a las 9 regiones y abre los semáforos. |
| **Haciendas y POA** | KPIs, declaración del coordinador, **rectificación de la lista del grupo** (asistencia/turno/transporte por persona + datos POA de emergencia/alergias/observaciones), escribientes (repe/seguimiento), **semáforo automático**: VERDE validado ≤48 h, AMARILLO >2 días, ROJO registros nuevos sin validar; ventana de 2 semanas antes de la experiencia; override manual. Ubicación de la hacienda regional editable. |
| **Junta de Atracciones** | Panel EN VIVO **solo lectura** (auto-refresh 2 s): prioridad de reparto de la región y calendario mensual de padrinos. Botón **Exportar calendario (Excel)**. |
| **Aprobaciones** | Solicitudes de coordinadores (Líder con **candado si no eres Superadmin**, AE/AI aprobables) y de cargos/clasificaciones. Revocación con jerarquía (un coordinador no revoca a un par; el Superadmin sí). |
| **Notificaciones** | Campana propia del coordinador (mensajes, haciendas agendadas, avisos POA) con deep-link a vistas. |

### 3.3 Portal Superadmin (`superadmin.html` + `js/superadmin.js`)

| Sub-pestaña | Funciones |
|---|---|
| **Gate de acceso** | Credenciales de fábrica (`CarpDiemAguaViva` / `SuperAdmind0123456789`), sesión por `sessionStorage`, botón de autollenado para demo, cierre de portal. |
| **Solicitudes y Admins** | Aprobar/rechazar coordinadores (incluye Líderes) y cargos; revocar coordinadores activos. |
| **Regiones y Sedes** | Alta/baja de regiones y grupos con confirmación destructiva (escribir "ELIMINAR"); limpieza en cascada de ubicaciones/coordinadores/miembros. |
| **Eventos y Calendario** | Control total del ciclo: agenda juntas normales/tribunas/OyP/talleres, institucionales (JSG, Concordia, Conferencia, Foro, Comités, Inventario de Servidores), eventos JAV (juntas, preparaciones, campamento, foro) y **Haciendas R1–R9 y JAV** (solo fechas inicio/fin, título autogenerado, región bloqueada por tipo; al guardar fija `activeHacienda`, notifica a las 9 regiones y reabre los semáforos en ROJO). **Tablero anual**: 12 meses rodantes en filas × días 1–31 en columnas, chips de color por categoría (hacienda/JAV/institucional/JSG/regional/grupo) que abarcan eventos multi-día; clic → detalle + eliminar. Ciclo demo sembrado una sola vez (bandera `annualCycleSeeded`, ~32 eventos que reproducen el calendario oficial). |
| **Junta de Atracciones** | Pase de lista regional **agrupado por grupo** con contador; asignación de padrinos al calendario con **búsqueda enriquecida** (sobriedad, último inventario, ejercicios) o selección manual región→grupo→padrino, con tarjeta de confirmación de identidad. |

### 3.4 Núcleo compartido (`js/av-core.js`, `js/permissions.js`, `js/export.js`)

- **AV.Crypto**: SHA-256/HMAC puros en JS; firma y verificación de JWT (sin `crypto.subtle`, funciona por `file://`).
- **AV.Geo**: distancia haversine, geocerca de sede (150 m), GPS con respaldo simulado.
- **AV.Sync**: cola offline (estilo WAL) con drenado automático al reconectar; simulador de offline.
- **AV.Session**: token QR vivo compartido entre panel y móvil; código manual rotativo.
- **AV.Enums**: catálogos (estigmas, servicios adulto/JAV, niveles de experiencia, escrituras normales/servidores, ejercicios).
- **AVPerm**: matriz de permisos (§2).
- **AVExport**: libro Excel multi-hoja + matcher canónico de escrituras (tolerante a grafías) + fallback CSV.

## 4. Modelo de datos (localStorage `agua_viva_db`)

Claves de nivel superior:

| Clave | Contenido |
|---|---|
| `schemaVersion` | Versión de migraciones (actual: 2). |
| `currentSimulatedRole` | Simulador de vista del panel: `admin` \| `member` \| `superadmin`. |
| `user` | Usuario del panel `{name, role, sede}`. |
| `members[]` | Militancia completa (abajo). |
| `activeCoordinators[]` | `{id, name, role: LIDER\|AE\|AI, group, region, avatarColor, email}`. |
| `pendingAdminRequests[]` | Solicitudes de coordinador `{id, name, email?, requestedRole, group, avatarColor}`. |
| `pendingRoleRequests[]` | Solicitudes de clasificación/cargo `{id, name, email, requestedRole, requestedServer, group, status}`. |
| `meetings[]` | Eventos del calendario (abajo). |
| `groupsByRegion` | Catálogo `{región: [grupos...]}` (editable por Superadmin). |
| `activeHacienda` | `{name, region, startDate, endDate?}` — ventana del semáforo POA. |
| `groupsSemaphore[]` | `{name, status: GREEN\|YELLOW\|RED, manual?, lastRectified?, updatedBy, time}`. |
| `escribientes[]` | `{id, firstName, lastNameInitial, gender, group, repe?, seguimiento?, arrivalShift?, transportStatus?}`. |
| `groupLocations` / `haciendaLocations` | Ubicaciones (nombre/enlace Maps) por grupo / por región. |
| `notes` / `history` / `weeklyAttendance` | Por miembro: notas del coordinador, historial, asistencia semanal (12). |
| `notifications` | Por email: `[{id, title, desc, time, type, read, action}]`. |
| `changelog[]` | Bitácora de auditoría `{action, details, user, time}`. |
| `juntaAttendance[]` / `juntaCalendar[]` | Pase de lista y reservas de la Junta de Atracciones. |
| `syncQueue[]` / `liveSession` | Cola offline y token QR vivo (gestionados por AV). |

**Miembro (`members[]`)** — campos reales:

```
id, name (alias), realName, email, password*, phone, age, emergency,
region, group, joinDate, sobrietyDate,
level, levelNum, xp, racha, cleanDays, lastAttendance, status (Activo|Risk|New), isNew?,
checkedIn, checkInTime, xpGranted,
isJav, roleClass (Apoyo|Oreja|Padrino|…JAV), experienciaNivel (APOYO|OREJA|PADRINO),
militanciaStatus (CONCIENCIA|MILITANCIA|EN_RIESGO|DE_BAJA), estigma,
serverRole (cargo de servicio), sponsorName (padrino con quien se apadrina),
apoyoSince / orejaSince / padrinoSince / orejaJavSince / padrinoJavSince,
isPadrinoJav, isOrejaJav, padrinoApadrina[], padrinoOrejea[],
scriptures[] (inventarios), exercises[] (ejercicios),
attendingHacienda, arrivalShift, transportStatus, transportCapacity,
poa { attending, arrivalShift, transportStatus, transportCapacity,
      emergencyContact, allergies, observations, updatedAt },
avatarColor, avatarIcon, avatarPhoto? (dataURL JPEG 128px), approvalStatus (APPROVED|PENDING), lastRectified?
```
\* password en claro **solo por ser demo sin backend**.

**Evento (`meetings[]`)**: `id, calendar (GROUP|REGIONAL|ANNUAL), type, title, topic, speaker(+Type/Email/Group/Region), location(Type/Group/Link/Details), info, date (ISO), day, month, time, startTime, xp, isJav, isHacienda?, region?, startDate?, endDate?`. Tipos: juntas (NORMAL, TRIBUNA, OYP, TALLER…), institucionales (JSG, CONCORDIA, CONFERENCIA, FORO, COMITES, INVENTARIO_SERVIDORES), JAV (JUNTAS_JAV, PREPARACIONES_JAV, CAMP_JAV, FORO_JAV) y haciendas (HAC_R1…HAC_R9, HAC_JAV). Los sembrados del ciclo demo llevan `createdBy: "ciclo"` y la bandera de nivel superior `annualCycleSeeded` evita re-sembrarlos.

Para la versión con backend, el equivalente relacional está en [schema.sql](schema.sql) y [database_design.md](database_design.md) (PostgreSQL 15+, trigger `trg_set_user_jav`, enums de roles/turnos/semáforo).

## 5. Reglas de negocio clave

- **JAV automático**: 13–18 años al registrarse (`is_jav`), con trigger equivalente en SQL.
- **QR**: payload JWT firmado HS256, expira a los **30 s**; geocerca de 150 m con la sede; ingreso manual valida el mismo token.
- **Semáforo POA**: solo cuenta en las **2 semanas** previas a `activeHacienda.startDate`. ROJO: registros nuevos sin validar o nunca rectificado; AMARILLO: >2 días sin actualizar; VERDE: validado al día. Rectificar (individual o grupal) lo pone en verde; el clic manual es override temporal.
- **Agendar Hacienda** (Superadmin, desde el panel o desde su portal): crea el evento (regional, o interregional para JAV con región sede), fija `activeHacienda`, notifica a coordinadores de las 9 regiones y reabre todos los semáforos en ROJO.
- **Aprobaciones**: Líder → solo Superadmin. AE/AI y cargos → cualquier coordinador. Revocación respeta jerarquía.
- **Alcance de edición**: grupo **y** región del coordinador (los nombres de grupo se repiten entre regiones).

## 6. Estado del proyecto

**Hecho (funcional y probado)**
- Portal Superadmin con sub-pestaña **Eventos y Calendario**: agendado total (incl. haciendas con notificación masiva) y **tablero anual** de 12 meses con chips multi-día por categoría.
- **Mi Servicio en la barra de navegación** de la app (visible solo con cargo programado) y avance del Padrino/Oreja reubicado en Logros.
- **Foto de perfil** en Ajustes (canvas 128 px) reflejada en app y panel; teléfono y contacto de emergencia editables por el propio miembro.
- Sección **Mi Servicio** por rol de servidor en la app (AE/AI/LÍDER) con semáforo regional, escribientes, auditoría filtrada, junta de atracciones interactiva y gestión de juntas.
- Portada pública para GitHub Pages (`index.html`); la app móvil vive en `app.html`.
- Migración v3 por fusión (los registros de la app nunca se pierden al abrir el panel).
- Las 3 superficies completas con los flujos de §3; matriz de permisos aplicada; edición/eliminación con alcance; exportación Excel 7 hojas con fallback CSV; calendario real mensual/anual; agendado de haciendas con notificación masiva; semáforo automático; POA completo; tags de rol y modo JAV; historial/logros por datos; validación QR JWT+geo con cola offline; portal superadmin con gate; suite de pruebas jsdom.

**Parcial**
- Notificaciones: no hay push real (solo intra-app). Mensajería solo coordinador→miembro.
- El gráfico 6 meses/1 año extrapola de las 12 semanas registradas.
- Estigma/consagraciones se editan en el modal de miembro, no desde el registro móvil.

**Pendiente (backlog sugerido)**
- Unificar las dos semillas de datos (admin/móvil) y normalizar grafías de escrituras en origen.
- `groupLocations` indexado por `region+grupo`.
- Recuperación de contraseña, contraseñas por usuario, cierre de sesión global.
- Búsqueda global en directorios; paginación para militancias grandes.
- Adjuntos/fotos en expediente; exportación PDF del POA por grupo.

## 7. Roadmap hacia la versión oficial

1. **Backend real** (el prototipo define el contrato): API sobre PostgreSQL usando `docs/schema.sql`; JWT emitidos por servidor; llaves fuera del cliente.
2. **Autenticación**: cuentas reales, hash de contraseñas, roles desde BD, refresh tokens.
3. **App nativa Android/iOS** (o PWA como paso intermedio): la app móvil actual es el spec de UX; offline-first ya modelado por `AV.Sync`.
4. **Push notifications** (hacienda agendada, junta próxima, mensajes).
5. **Panel web** productivo: mismo diseño crema, datos por API, exportaciones en servidor.
6. Telemetría de asistencia y reportes regionales automáticos.
