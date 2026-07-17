# Guía para desarrolladores — Agua Viva

Este documento explica cómo está construido el prototipo, dónde vive cada cosa y cómo trabajar en él sin romper lo existente. La referencia funcional completa (roles, permisos, secciones, modelo de datos) está en [ESPECIFICACION.md](ESPECIFICACION.md).

## Arquitectura

Tres frontends estáticos **sin build system** que comparten una "base de datos" en `localStorage["agua_viva_db"]`:

```
app.html    ──┐                       ┌── css/styles.css   (tema cósmico móvil)
admin.html  ──┼── localStorage ───────┤
superadmin.html ┘   "agua_viva_db"    └── css/admin.css    (tema crema panel)
```

- La **sesión activa** se guarda en `localStorage["agua_viva_active_user_email"]`.
- La sesión del portal superadmin usa `sessionStorage["av_superadmin_authed"]`.
- No hay servidor: abrir los `.html` con doble clic funciona (`file://`).
- CDNs usados: Google Fonts, FontAwesome y SheetJS (solo para exportar `.xlsx`; hay fallback CSV offline).

## Estructura de carpetas

```
/                      HTML de las 3 superficies + README
/css/                  styles.css (móvil), admin.css (panel + superadmin)
/js/
   av-core.js          Núcleo compartido: JWT HS256 puro, geofencing, cola offline,
                       sesión de QR en vivo y catálogos (AV.Enums)
   permissions.js      Matriz de permisos por rol (window.AVPerm) — fuente de verdad
   export.js           Exportación Excel multi-hoja + matcher canónico de escrituras
   app.js              Lógica de la app móvil (incluye Mi Servicio por rol de
                       servidor AE/AI/LÍDER — 6º ítem condicional de la nav —
                       y la foto de avatar por canvas en Ajustes)
   admin.js            Lógica del panel administrativo
   superadmin.js       Lógica del portal superadmin (gate + regiones + junta +
                       eventos con tablero anual y seed del ciclo demo)
/assets/               Logos e íconos
/docs/                 Esta guía, la especificación, diseño y esquema SQL
```

**Orden de carga**: `av-core.js` → `permissions.js` → (`export.js` en admin) → script de la página. Los módulos compartidos son IIFE que exponen `window.AV`, `window.AVPerm`, `window.AVExport`.

## Sistema de permisos (AVPerm)

`js/permissions.js` es la única fuente de verdad. API:

```js
AVPerm.getCurrentUser()  // { kind: superadmin|coordinator|member|guest, email, name, role, group, region }
AVPerm.can(accion, target?)          // target: {group, region} para acciones con alcance
AVPerm.normalizeServerRole("Lider de grupo")  // → "LIDER" (unifica siglas y nombres largos)
AVPerm.getRegionForGroup(grupo, regionPista)  // la pista desambigua grupos duplicados entre regiones
```

| Acción | superadmin | LIDER/AE/AI | member |
|---|---|---|---|
| `APPROVE_LIDER` | ✔ | ✖ | ✖ |
| `APPROVE_COORDINATOR` (AE/AI) / `APPROVE_ROLE` | ✔ | ✔ | ✖ |
| `EDIT_MEMBER` / `DELETE_MEMBER` / `EDIT_SERVER` / `EDIT_LOCATION` | ✔ | solo su grupo+región | ✖ |
| `VIEW_REGIONAL` (lectura otras regiones) / `MANAGE_EVENTS` / `EXPORT_DATA` | ✔ | ✔ | ✖ |
| `SCHEDULE_HACIENDA` / `MANAGE_REGIONS` / `CONTROL_ATRACCIONES` | ✔ | ✖ | ✖ |

Al añadir una acción nueva: agrégala a `ACTIONS` en `permissions.js`, protégela en la UI con `AVPerm.can(...)` y documenta la fila en ESPECIFICACION §2.

## Migraciones de datos

Los `loadState()` de `admin.js` y `app.js` aplican **migraciones defensivas** sobre el `agua_viva_db` existente (nunca borran datos del usuario). Se versionan con `db.schemaVersion`:

- **v2**: cada `activeCoordinators[]` gana `region` (derivada del miembro con el mismo email o del catálogo).
- **v3** (bandera `membersEnriched`): fusión de la semilla admin con los miembros existentes — completa campos AA faltantes y agrega semilla ausente **sin eliminar jamás** a los registrados desde la app.
- Bandera `annualCycleSeeded` (superadmin.js): siembra única de ~32 eventos del ciclo anual demo (`createdBy: "ciclo"`, ids 900000+).

Si cambias la forma de un objeto: escribe la migración en ambos `loadState`, incrementa `schemaVersion`, y agrega el campo a la hoja de exportación y a ESPECIFICACION §4 si aplica.

## Pruebas (harness jsdom)

Las pruebas viven fuera del repo (carpeta scratch del desarrollador) y usan [jsdom](https://github.com/jsdom/jsdom):

```bash
mkdir pruebas && cd pruebas && npm init -y && npm i jsdom
# copia harness.js (ver plantilla abajo) y escribe tests t-*.js
node t-mi-prueba.js
```

API del harness: `loadPage(html, {preStorage, preSession})` (inyecta los `<script src>` locales inline y stubbea `window.XLSX`), `click/setVal/submit/text`, `clickEverything` (fuzz de todos los controles), `realErrors` (filtra ruido de jsdom). Patrón de un test:

```js
const { loadPage, close, realErrors } = require("./harness");
const ctx = await loadPage("admin.html", { preStorage: { agua_viva_active_user_email: "mariana@email.com" } });
ctx.window.switchView("view-miembros");
// asserts sobre ctx.document / localStorage...
console.log(realErrors(ctx)); close(ctx);
```

Suite actual (referencia): `t-perm` (matriz de permisos), `t-directorio` (edición/borrado con alcance), `t-export` (7 hojas + fix de inventarios), `t-movil` (datos reales por rol, tags, POA), `t-servicio` (Mi Servicio por rol AE/AI/LÍDER), `t-registro` (alta de usuario adulto y JAV + fusión v3), `t-historial-id` (historial por miembro + portada), `t-vistas`, `t-portal-eventos` (eventos/haciendas desde el portal + tablero anual), `t-nav-avatar` (nav condicional de Servicio + foto de avatar + datos propios), `t-fuzz`.

Además: `node --check js/*.js` y balance de `<div>`/llaves CSS tras cada cambio.

## Convenciones

- **Español** en comentarios, UI y documentación. Comentarios breves de sección, no narrativa.
- Código nuevo transversal → módulo en `js/` con IIFE + `window.*` (patrón av-core).
- Nada de frameworks ni bundlers en esta fase; ES2017 compatible con navegador.
- Los datos semilla tienen dos grafías de escrituras ("1er Inventario"/"1er inventario"): **nunca** compares con `includes` literal, usa `AVExport.hasItem/SCRIPTURE_COLS` (matcher canónico case/acentos-insensible).
- Grupos con el mismo nombre existen en varias regiones ("Satélite" en R1 y R3): toda lógica de alcance usa **grupo + región**, jamás solo el nombre.

## Deuda técnica conocida

- Doble semilla divergente (`defaultAdminState` en admin.js vs seed del móvil en app.js) — se neutraliza con el matcher canónico; unificarla es trabajo pendiente.
- Contraseña de coordinadores global (`123`) y llaves JWT en cliente: solo demo, ver roadmap (backend real).
- `groupLocations` está indexado por nombre de grupo (colisiona entre regiones); la edición ya se limita al alcance del coordinador, pero el índice debería ser `region+grupo`.

## Cómo contribuir

1. Lee ESPECIFICACION §6 (Hecho / Parcial / Pendiente) y elige algo del backlog.
2. Trabaja en rama; corre la suite y abre las 3 páginas por `file://` antes del PR.
3. Si tu cambio toca datos: migración versionada + actualiza ESPECIFICACION §4 y la exportación.
