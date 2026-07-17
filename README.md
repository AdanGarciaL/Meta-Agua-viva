# Agua Viva — Plataforma de Asistencia y Logística

Plataforma comunitaria para la comunidad **Agua Viva**: registro de asistencia por QR, gestión de miembros por regiones y grupos, logística de Haciendas (POA) y gamificación del proceso de recuperación.

🚀 **[Probar Demo en Vivo en GitHub Pages](https://adangarcial.github.io/Meta-Agua-viva/)**

> **Versión de fase temprana (v0.x).** Es un prototipo funcional de alta fidelidad que corre 100 % en el navegador (sin servidor). Sirve como referencia viva del producto para construir la versión oficial (panel web + apps Android/iOS).


---

## Las tres superficies

| Superficie | Archivo | Para quién | Tema |
|---|---|---|---|
| 📱 **Aplicación móvil** | `app.html` | Conciencia y militancia (miembros) | Cósmico oscuro |
| 💻 **Panel administrativo** | `admin.html` | Líderes y Atracciones (AE/AI) | Crema claro |
| 👑 **Portal Superadmin** | `superadmin.html` | Administración central | Crema + gate de acceso |

### Qué hace la aplicación móvil
- **Inicio**: nivel y XP reales, racha, tiempo limpio, tags de clasificación (Padrino / Oreja / Servidor, con variantes **JAV**), próxima junta (tema, ponente, lugar y hora), próximos eventos interregionales y aviso de la **próxima Hacienda de tu región** con botón para confirmar asistencia.
- **Haciendas y POA**: declaración completa de asistencia al retiro (turno de llegada, transporte, contacto de emergencia, alergias/medicamentos, observaciones) y semáforo de tu grupo.
- **Asistencia por QR** (al centro): escáner con validación de **token firmado (JWT, expira en 30 s)** y **geolocalización** contra la sede; funciona **offline** con cola de sincronización.
- **Historial "Tu Cielo"**: línea de tiempo agrupada por mes, filtros (juntas / OyP / haciendas), XP total y gráfico de constancia.
- **Logros**: camino de luz por niveles (Chispa → Sol), 9 insignias desbloqueables calculadas de tus datos reales.
- **Modo JAV**: si perteneces a Jóvenes en Agua Viva (13–18), la interfaz cambia a la estética cian/magenta y prioriza los eventos JAV.
- **Mi Servicio** (solo servidores aprobados, con su propio ícono en la barra inferior): **AE** ve el semáforo del POA regional (grupos sin confirmar), registra escribientes, audita los cambios de su región y consulta la Junta de Atracciones en un calendario interactivo; **AI** agenda y gestiona las juntas de su grupo; el **Líder** tiene todas las funciones. Si tu cargo aún no tiene sección programada, la opción no aparece.
- **Perfil en Ajustes**: edita tu alias, teléfono y contacto de emergencia, y personaliza tu avatar con color, ícono o **foto de perfil** (se recorta y comprime en el dispositivo); la foto se ve también en el directorio del panel.

### Qué hace el panel administrativo
- **Tomar asistencia en vivo**: QR gigante con código manual rotativo cada 30 s (firmado), lista de llegadas en tiempo real y check-in manual.
- **Directorios**: militancia completa, mi grupo, regional e interregional. Los coordinadores **editan y eliminan solo miembros de su propio grupo y región**; el resto es de solo lectura (con teléfonos visibles para servicio).
- **Expediente del miembro**: información AA (estigma, militancia, POA, padrino), asistencia por 12 semanas / 6 meses / 1 año, historial, insignias, avance de inventarios y ejercicios (editable), notas privadas, asignar padrino y enviar mensajes.
- **Calendario y eventos**: agenda con fecha real; vista mensual (grupo/regional) y **anual de 12 meses** (interregional). Las **Haciendas** solo las agenda el Superadmin: al hacerlo se notifica a las 9 regiones y se abren los semáforos POA.
- **Haciendas y POA**: rectificación de la lista del grupo, gestión de escribientes (repe/seguimiento), semáforo automático (verde/amarillo/rojo) y bitácora de auditoría.
- **Junta de Atracciones**: panel en vivo de solo lectura (prioridad de reparto + calendario de padrinos) con **exportación a Excel**.
- **Exportación Excel**: un clic genera `agua_viva_reporte_<fecha>.xlsx` con 7 hojas (Militancia, Padrinos, Orejas, JAV, Servidores, Sedes y Coordinadores, Calendario de Atracciones). Sin internet cae automáticamente a CSV.

### Qué hace el portal Superadmin
- Gate con **credenciales de fábrica** (como un router): usuario `CarpDiemAguaViva`, contraseña `SuperAdmind0123456789`.
- Aprobación de coordinadores (**los Líderes solo los aprueba el Superadmin**), revocaciones, alta/baja de regiones y sedes, y control total de la Junta de Atracciones (pase de lista regional agrupado por grupos y asignación de padrinos con búsqueda enriquecida).
- **Eventos y Calendario**: agenda cualquier evento del ciclo — juntas, tribunas, foros, comités, Concordia, Conferencia, JSG, Inventario de Servidores, eventos JAV (juntas, preparaciones, campamentos, foros) y las **Haciendas de las 9 regiones y JAV** (con fecha de inicio y fin; al agendarlas se notifica a todas las regiones y se reabren los semáforos POA).
- **Calendario anual tipo tablero**: los 12 meses en filas × días 1–31 en columnas, con barras de color por categoría (hacienda, JAV, institucional, JSG, regional, grupo) que abarcan eventos de varios días; clic en cualquier barra para ver el detalle o eliminar el evento.

---

## Cómo probarlo

> 🌐 **GitHub Pages**: activa *Settings → Pages → Deploy from branch → main / root* y la portada (`index.html`) quedará publicada con enlaces a las tres superficies.

1. Descarga o clona el repositorio.
2. Abre `index.html` (portada) o directamente `app.html` (app móvil), `admin.html` (panel) o `superadmin.html` (portal) en tu navegador — no necesita instalación ni servidor.
3. Cuentas de demostración (contraseña `123`):

| Cuenta | Rol |
|---|---|
| `ambar@email.com` | Miembro (Padrino, con avance) |
| `bruma@email.com` | Miembro JAV |
| `mariana@email.com` | Coordinadora (Líder de Satélite, Región 1) |
| `superadmin@email.com` | Superadmin del panel |

Las dos interfaces comparten los datos en vivo (localStorage): registra asistencia en el móvil y mírala aparecer en el panel.

## Limitaciones del prototipo

- **Sin backend**: todo vive en `localStorage` del navegador (por eso el mismo navegador ve los cambios entre pestañas, pero otro equipo no).
- Las credenciales y llaves de firma están en el código **solo para la demo**.
- La exportación `.xlsx` usa un CDN; sin internet exporta CSV.

## Documentación

- 📘 [Guía para desarrolladores](docs/README-DEV.md) — arquitectura, módulos, permisos, pruebas y cómo contribuir.
- 📗 [Especificación maestra](docs/ESPECIFICACION.md) — roles, matriz de permisos, todas las funciones por sección, modelo de datos y roadmap.
- 🗄️ [Diseño de base de datos](docs/database_design.md) y [esquema SQL](docs/schema.sql) para la versión con backend.

## Licencia y contribución

Proyecto comunitario en fase temprana. Desarrollado con el poder de **Claude Fable 5** y **Gemini 3.5**. Lee la [guía para desarrolladores](docs/README-DEV.md) antes de abrir un PR — ahí está el estado de cada módulo y lo que falta por construir.


