# Prototipo Interactivo Agua Viva (Asistencia y Logística)

Este directorio contiene un prototipo interactivo completo de alta fidelidad que simula las dos caras de la plataforma de la comunidad **Agua Viva**:

1. **La Aplicación Móvil (Miembro):** Con estética premium de temática cósmica oscura ("Dark Cosmic Theme").
2. **El Portal Web Administrativo (Coordinadores):** Con estética off-white/crema limpia ("Light Cream Theme") para monitorear asistencia en vivo y gestionar miembros de la sede.

Ambas interfaces están interconectadas lógicamente y comparten estados, simulando el comportamiento de un sistema real en producción.

---

## Archivos del Prototipo

* **Vistas HTML Principales:**
  * [index.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/index.html): Aplicación móvil orientada a los integrantes para registrar asistencia, ver su historial de juntas y consultar la sección de **Logros**.
  * [admin.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/admin.html): Portal web administrativo de escritorio para los coordinadores, diseñado a tres columnas para el pase de lista y expedientes.

* **Estilos y Lógica Visual:**
  * [styles.css](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/styles.css): Reglas visuales de la interfaz oscura móvil y la grilla de insignias.
  * [app.js](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/app.js): Lógica de sumas de XP, detector de cámara QR simulado y cambio al tema JAV (cian y magenta neón).
  * [admin.css](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/admin.css): Reglas visuales para la plataforma crema administrativa de escritorio.
  * [admin.js](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/admin.js): Control de pases de lista manuales, cronómetros de renovación de QR, buscador en vivo, gráfico SVG semanal y portafolio de notas del coordinador.

* **Base de Datos y Diseño Técnico:**
  * [schema.sql](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/schema.sql): Esquema de tablas relacionales en PostgreSQL (15+).
  * [seed_data.sql](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/seed_data.sql): Poblado inicial de las 9 regiones y sus grupos correspondientes.
  * [database_design.md](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/database_design.md): Diseño técnico relacional y ejemplos de consultas SQL clave.

---

## Cómo Ejecutar y Probar el Prototipo

1. **Simular Asistencia por Escaneo (Móvil):**
   * Abre [index.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/index.html) en tu navegador.
   * Haz clic en el botón morado **"Escanear junta"**.
   * Te llevará a la simulación de cámara. Tras 2 segundos, detectará el código, registrará la junta en tu historial, sumará +15 XP e **¡iniciará la celebración animada de nivel 5 ("Aurora") en pantalla!**
   * Dirígete a la pestaña **"Logros"** para ver cómo se ha actualizado tu barra de progreso y tu camino de luz hacia el nivel 5 de forma interactiva.

2. **Administrar Asistencia en Tiempo Real (Escritorio):**
   * Abre [admin.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/admin.html) en tu navegador.
   * Por defecto, se abrirá la vista **"Tomar asistencia"**.
   * Verás el conteo regresivo de renovación del código QR cada 30 segundos, el código alfanumérico (ej. `K7-9MX`) y las estadísticas en vivo (Presentes, Esperando, Tarde, XP Otorgados).
   * **Simular Registro Manual:** Haz clic sobre cualquier miembro en la sección *"ESPERANDO"* en la columna derecha. Verás cómo pasa de inmediato a *"Llegando en vivo"*, sumando su hora de llegada, actualizando los ratios de presentes y acumulando el XP otorgado global de la sesión.

3. **Ver Expedientes de Miembros:**
   * En el menú lateral izquierdo de [admin.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/admin.html), haz clic en **"Miembros"**.
   * Se abrirá el directorio completo. Filtra usando las pestañas (*Todos*, *Activos*, *En riesgo*, *Nuevos*), escribe en el buscador o cambia el ordenamiento.
   * **Expediente del Miembro:** Haz clic sobre cualquier fila (por ejemplo, **Ámbar**). Se cargará su panel detallado que muestra su constancia de asistencia en las últimas 12 semanas en un histograma interactivo, el listado de insignias conseguidas y las notas privadas de seguimiento.
   * **Agregar Nota:** Escribe una nota en la caja de comentarios y haz clic en *"Guardar Nota"*. Se añadirá instantáneamente al expediente del integrante.

4. **Registrar un Nuevo Miembro con Vista Previa en Vivo:**
    * **Previsualización Móvil:** Observa cómo en la columna derecha se va renderizando en vivo y en tiempo real el diseño de la tarjeta de perfil que el miembro verá en su propia aplicación móvil, incluyendo su inicial de avatar y el color de fondo elegido.
    * Haz clic en **"Crear Registro"** para guardar el miembro y regresar al directorio de coordinadores.

5. **Portal de Aprobaciones Superadmin:**
   * Abre [superadmin.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/superadmin.html) o haz clic en el pill **"Super"** en la barra lateral del panel administrativo.
   * Este es un archivo físico independiente para evitar guardar credenciales en el código principal. Desde aquí puedes:
     * **Aprobar Solicitudes:** Aprobar coordinadores de grupo (Líderes, Atracciones Externas - AE, o Atracciones Internas - AI).
     * **Revocar Permisos:** Degradar coordinadores a integrantes normales (e.g. revocar permisos de Diego V.).
     * **Redirección de Simulación:** Si cambias la simulación en las pastillas a "Admin" o "Miembro", serás redirigido automáticamente a `admin.html` por seguridad.

6. **Privacidad de Contactos (Demostración):**
   * En [admin.html](file:///C:/Users/adan_/.gemini/antigravity/scratch/agua-viva-asistencia/admin.html), cambia el rol de simulación a **"Miembro"** (el botón en la esquina inferior izquierda).
   * Vuelve a la pestaña **"Miembros"** y abre cualquier expediente (ej. Ámbar) o mira la tabla del directorio. Verás que el número celular se muestra como `[CONFIDENCIAL]` y tiene un efecto de difuminado (`blur`).
   * Vuelve a cambiar el rol a **"Admin"** o **"Super"** para ver de inmediato los números telefónicos en texto plano.

---

## Características de Negocio Avanzadas Habilitadas

* **Clasificación JAV Automática (13-18 años):** El trigger de base de datos (`trg_set_user_jav`) y el validador del frontend comprueban estrictamente la edad de nacimiento (debe ser de 13 a 18 años). Si cumple, el usuario recibe la clasificación `is_jav = true`, habilitando un color de insignia y una estética cósmica cyberpunk (cian y magenta neón) en el móvil, así como una etiqueta `[JAV]` en la tabla del panel administrativo.
* **Sincronización Local (`localStorage`):** El prototipo utiliza un almacén local compartido (`agua_viva_db`). Cualquier cambio en la aplicación móvil (como la declaración de transporte, los escribientes registrados para Haciendas, o los niveles de XP de Ámbar) se reflejará instantáneamente en el panel del administrador, y viceversa.
* **Nomenclaturas Corregidas:**
  * **AE:** Atracciones Externas.
  * **AI:** Atracciones Internas.
  * **Líder:** Reemplaza el rol genérico de coordinador en la jerarquía del grupo.
