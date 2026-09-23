# Información

## Introducción
Activistas es una aplicación web autogestionada para organizaciones para la gestión de actividades y activistas. Es una aplicación gratuita desarrollada activistas informáticos en base al trabajo realizado con anterioridad para diversas organizaciones.

La aplicación está disponible actualmente en 4 idiomas: Español, Catalán, Gallego y Euskera.

### Qué hace la app
La aplicación está en constante evolución y se van añadiendo funcionalidades conforme a los requerimientos y necesidades detectadas.

Las principales funcionalidades son:

- **Creación y gestión de actividades**: Permite crear y gestionar diversos tipos de actividades, como Puerta a puerta, Áreas de trabajo, Recogida de contactos, Turnos de trabajo…
- **Gestión de activistas en base a territorio**: Se pueden segmentar las activistas apuntados en base al territorio (CCAA., provincias, municipios y/o distritos) así como otorgar permisos a los coordinadores para la gestión de actividades y activistas en su territorio asignado.
- **Gestión de datos y conexión con otros sistemas**: La aplicación tiene varias herramientas para la gestión eficiente de sus datos y permite configurar la interconexión de estos con otros sistemas, de forma que cuando se registre un evento se envíe información a dichos sistemas.

### Gestión de actividades
Las actividades cuentan con una configuración flexible para distintos casos de uso, y conforme evoluciona la app se añaden nuevos tipos y funcionalidades.

Todas las actividades comparten ciertas opciones de configuración: información, dónde se realiza, quién puede participar, etc. y el tipo de actividad determina qué cómo se lleva a cabo la actividad. Actualmente están disponibles estos tipos de actividad:

- **Puerta a puerta**: Se definen áreas que las activistas visitarán puerta a puerta para recoger datos de contacto, intereses y necesidades del vecindario en base a un formulario definido. Dichas áreas pueden asignarse a las activistas o ser auto asignadas por ellos.
- **Recogida de contactos**: Se define un formulario para la recogida de contactos, firmas y/o realizar una encuesta, pensado para stands, mesas informativas y recogida de firmas en la calle.
- **Áreas de trabajo**: Se definen áreas donde las activistas deberán realizar una determinada acción, como pegar carteles o repartos de flyers.
- **Turnos de trabajo**: Se definen turnos de trabajo a los que las activistas podrán apuntarse para colaborar. Gestiona horarios, aforos y recordatorios automáticos para cada turno.
- **Evento**: Una actividad sencilla sencilla al que se pueden apuntar las activistas. Sin formulario de recogida de datos, ni división por áreas o turnos, ideal para charlas, asambleas o actos de campaña.

### Gestión de activistas
Las activistas que se registran son geolocalizadas automáticamente en base a su código postal y este se utiliza para determinar qué coordinadoras pueden gestionarlas. Para la gestión de activistas existen diversas funcionalidades:

- **Envío de emails y notificaciones**: Desde la aplicación se pueden enviar emails masivos a las activistas, así como enviarles notificaciones al móvil cuando están apuntadas a una actividad.
- **Clasificación por etiquetas**: Se pueden clasificar activistas con etiquetas personalizadas y usar dichas etiquetas para su segmentación, permisos de participación, etc.
- **Bloqueo de email**: Además de otras medidas de seguridad, se puede desactivar el inicio de sesión de determinadas activistas o bloquear su registro por completo.

### Gestión de datos
Activistas no es una plataforma web propia, sino una herramienta que se instala en los sistemas de la organización; los datos se alojan siempre en sistemas de la propia organización.

La gestión de los datos de la plataforma es versátil, y permite analizarlos y operarlos de diversas maneras:

- **Estadísticas**: La aplicación dispone de estadísticas generales, y también segmentadas por actividad y activistas, tanto para coordinadores (sus actividades y activistas de su territorio) como para activistas (sus estadísticas personales).
- **Registro de eventos y cambios de usuario**: Se registran todos los cambios en tiempo real que suceden en las actividades y en los usuarios, para tener información detallada de qué está pasando en la aplicación.
- **Conexiones API y Webhooks**: La configuración de la aplicación permite recibir y enviar datos a otras aplicaciones mediante un sistema de webhooks, lo que permite actualizar en tiempo real otros sistemas con la información recogida y generada por la aplicación.
- **Descarga de datos**: Las coordinadoras y administradoras pueden descargarse los datos de la aplicación en archivos CSV fácilmente operables en Excel y otras herramientas.
- **Cumplimiento GDPR**. La aplicación está diseñada conforme al Reglamento General de Protección de Datos, para proteger la información de tu organización.


## Tipos de cuenta

La aplicación distingue tres tipos de cuenta. El tipo de cuenta determina qué ves y qué puedes hacer:

| Rol | ¿Quién lo tiene? | ¿Qué puede hacer? |
|---|---|---|
| **Activista** | Cualquier persona que se registra en la plataforma | Apuntarse a actividades, participar en ellas, leer noticias y gestionar su propio perfil. Solo puede ver y modificar su propia información. |
| **Coordinador/a** | Personas designadas por un administrador | Todo lo que puede hacer una activista, además de crear y gestionar actividades y noticias, y acceder a los datos de las activistas de las áreas geográficas que tiene asignadas. |
| **Administrador/a** | Personas con control total del sistema | Todo lo anterior sin restricción de área geográfica, además de gestionar usuarios, coordinadores, la sección de Administración completa y funciones sensibles como suplantar a otro usuario. |

**Un/a Coordinador/a solo ve y gestiona los datos de las activistas cuya dirección se encuentra dentro de las áreas geográficas que un administrador le haya asignado**. Si un/a coordinador/a no tiene ninguna área asignada, no podrá ver ninguna activista.


## Primeros pasos

### Registrarte en la plataforma

1. Pulsa **"Registrarse"** en la pantalla de acceso.
2. Introduce tu email, tu país, tu código postal y tu idioma.
3. Acepta el aviso legal y la política de privacidad (verás los enlaces en el formulario) y pulsa **"Registrarse"**.
4. Revisa tu correo (incluida la carpeta de spam): recibirás un email para verificar tu cuenta.
5. Sigue el enlace del email, establece tu contraseña y confirma la verificación.

### Iniciar sesión

1. Introduce tu email y tu contraseña en la pantalla de acceso.
2. Pulsa **"Iniciar sesión"**.

### Recuperar tu contraseña

1. Pulsa **"Recuperar contraseña"** en la pantalla de acceso.
2. Introduce tu email y confirma. Se te indicará que revises tu correo.
3. Sigue el enlace recibido para establecer una contraseña nueva.


## Actividades

Las "Actividades" son la funcionalidad principal de la aplicación: representan cualquier acción organizada en la que puede participar una activista (una salida puerta a puerta, una recogida de firmas, un evento, unos turnos de trabajo, etc.).

### Tipos de actividad

Cuando se crea una actividad hay que elegir uno de estos *tipos de actividad. El tipo elegido no es solo una etiqueta: cambia qué secciones y herramientas aparecen dentro de la actividad.

| Tipo | Para qué sirve |
|---|---|
| **Puerta a puerta** | Define áreas geográficas que las activistas visitarán casa por casa para recoger datos de contacto, intereses, etc. |
| **Áreas de trabajo** | Define áreas donde las activistas deberán realizar una acción concreta (pegar carteles, hacer buzoneo, etc.). Es como un puerta a puerta pero sin recogida de datos de contactos. |
| **Evento** | Un evento sencillo al que las activistas pueden apuntarse. No tiene formulario de recogida de datos ni división en áreas o turnos. |
| **Recogida de contactos** | Define un formulario para recoger contactos, firmas o realizar una encuesta. Es como un puerta a puerta pero sin división en áreas. |
| **Turnos de trabajo** | Define turnos a los que las activistas pueden apuntarse para trabajar (por ejemplo, en una caseta o en un evento). |

La siguiente tabla resume qué secciones adicionales aparecen según el tipo:

| Sección de la actividad | Puerta a puerta | Áreas de trabajo | Recogida de contactos | Turnos de trabajo | Evento |
|---|---|---|---|---|---|
| **Coordinadoras** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Activistas apuntadas** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Materiales** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Áreas geográficas** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Encuesta** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **Turnos** | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Modo "Acción"** | ✅ | ✅ | ✅ | ❌ | ❌ |

### Listado de actividades

**Como activista**, solo verás las actividades que están:
- **Publicadas** (activas y con fecha de publicación ya alcanzada),
- **Dirigidas a ti** (si la actividad tiene etiquetas de acceso, debes tener alguna de esas etiquetas; si tiene un área de participación definida, tu domicilio debe estar dentro de ella), y
- **Visibles** (no ocultas), salvo que una coordinadora te haya inscrito manualmente en la actividad.

**Como coordinador/a o administrador/a**, ves además el botón **"+ Nueva actividad"** para crear una actividad, y accedes a todas las actividades para poder gestionarlas.

### Inscribirte en una actividad

En la página de detalle de una actividad encontrarás un bloque de inscripción cuyo contenido cambia según el estado de la actividad y tu situación:

- **Si la actividad no está activa o la inscripción no está abierta**, verás un mensaje indicándolo (por ejemplo, "Inscripción cerrada" o "Actividad no activa") y no podrás inscribirte.
- **Si aún no estás inscrito/a y la actividad admite participación**, verás un botón para **"Inscribirse"** (o **"Solicitar inscripción"** si la actividad requiere que un/a coordinador/a confirme tu participación).
- **Si ya te has inscrito pero tu inscripción está pendiente de confirmación**, verás un aviso de "Esperando confirmación".
- **Si ya estás inscrito/a y confirmado/a**, verás la confirmación "Ya inscrito/a" y, si la actividad está en su periodo de participación, un botón para **"Iniciar acción"** que te lleva al modo de ejecución de la actividad.

**Nota:** algunas actividades exigen que un/a coordinador/a apruebe tu inscripción antes de poder participar; esto se indica en la propia actividad.

### Crear una actividad

1. Pulsa **"Actividades"** y luego **"+ Nueva actividad"**.
2. Se abrirá un asistente paso a paso. Los pasos que verás dependen del tipo de actividad elegido:
   - **Tipo**: elige uno de los tipos descritos en el punto "Tipos de actividad". Verás una breve descripción de cada tipo para ayudarte a decidir.
   - **Datos**: nombre, descripción, enlace al chat de la actividad (WhatsApp, Telegram…), enlace web e imagen de portada.
   - **Qué**: un texto explicativo más amplio, visible solo en el "modo ejecución" (puerta a puerta, áreas de trabajo, recogida de contactos).
   - **Cuándo**: fecha y hora de inicio y de fin.
   - **Dónde**: ubicación, indicaciones para llegar y, según el tipo, selección en el mapa.
   - **Quién**: quién puede participar — si la actividad está oculta, si la inscripción requiere confirmación de un/a coordinador/a y el número máximo de participantes.

Al finalizar, pulsa **"Guardar"**. La actividad se crea inicialmente y podrás completar el resto de su configuración (áreas, preguntas, turnos, archivos…) desde su página de detalle.

### Editar y gestionar una actividad

Puedes editar una actividad si eres su responsable principal (la persona que la creó), si un administrador te ha añadido como gestor/a de la actividad, o si eres administrador/a. Desde la página de detalle de la actividad, si tienes estos permisos, verás un botón **"Editar"** que permite editar la configuración de la actividad.

Además del formulario, la página de detalle incluye (visibles solo para quien gestiona la actividad):

**Responsables de la actividad**
- El **responsable principal** es quien creó la actividad; solo un administrador puede cambiarlo.
- Puedes añadir **ayudantes** (otros coordinadores) que también podrán gestionar la actividad. Pulsa **"+ Añadir"**, selecciona a la persona coordinadora y confírmalo. Para quitar un ayudante, selecciónalo en la tabla y pulsa **"Quitar ayudantes"**.

**Activistas apuntadas**
- Verás la tabla de personas inscritas, con buscador por nombre o email.
- Puedes seleccionar varias personas y, con los botones disponibles, **enviarles un email**, **enviarles una notificación** o **eliminarlas de la actividad**.
- Con el botón **"+ Añadir"** puedes inscribir manualmente a activistas ya registradas en la plataforma (esta opción se deshabilita si la actividad no está activa o la inscripción está cerrada).
- Puedes descargar el listado de participantes en un archivo (CSV).

**Documentos**
- Puedes subir archivos relacionados con la actividad (por ejemplo, materiales o guías). Al subir un archivo indicas su nombre y si es **público** (visible también para las activistas apuntadas) o privado (solo visible para quien gestiona la actividad).
- Puedes eliminar archivos seleccionándolos y pulsando "Eliminar".

**Nota:** los archivos "públicos" también pueden ser vistos por las activistas apuntadas a la actividad, mientras que los archivos privados solo están disponibles para quien la gestiona.

### Diferencias según el tipo de actividad

Además del formulario general, algunas actividades tienen secciones propias que solo aparecen para quien las gestiona:

**Áreas (solo en "Puerta a puerta" y "Áreas de trabajo")**
- Verás un mapa donde puedes dibujar las áreas geográficas de trabajo y una tabla con todas ellas.
- Para cada área indicas un nombre y, en el caso de "Puerta a puerta", un número aproximado de casas.
- Cada área tiene un estado: **lista**, **en progreso** o **completada**. En el mapa, cada estado se representa con un color distinto.
- Pulsa **"+ Agregar área"** para dibujar una nueva sobre el mapa. Para editarla o eliminarla, selecciónala en la tabla o en el mapa.
- Debes crear al menos un área para que las activistas puedan participar en la actividad.

**Preguntas (solo en "Puerta a puerta" y "Recogida de contactos")**
- Aquí defines el formulario que las activistas rellenarán al contactar con cada persona.
- Por cada pregunta eliges un tipo de respuesta: texto corto, texto largo, lista desplegable, casillas de verificación (varias respuestas) o botones de opción (una única respuesta), y si es obligatoria.
- Puedes ver una vista previa de cómo verán el formulario las activistas.
- También puedes gestionar los "temas" asociados a la actividad, que sirven para etiquetar automáticamente los contactos que se recojan.

**Turnos de trabajo (solo en "Turnos de trabajo")**
- Puedes crear turnos indicando nombre, hora de inicio, hora de fin y número máximo de participantes.
- Como coordinador/a, puedes asignar manualmente activistas a cada turno.
- Como activista, dentro de un turno puedes **asignarte** o **desasignarte** tú mismo/a, siempre que haya plazas disponibles.

### Ejecutar una actividad ("modo acción")

Este modo está pensado para el trabajo sobre el terreno en actividades de tipo "Puerta a puerta", "Áreas de trabajo" y "Recogida de contactos". Para entrar, pulsa **"Iniciar acción"** desde la página de la actividad (disponible una vez estás inscrito/a y confirmado/a, o si eres quien gestiona la actividad).

Al entrar verás, si existen, las instrucciones de la actividad y, en "Puerta a puerta" y "Recogida de contactos", un resumen de tus estadísticas de participación.

**En "Puerta a puerta" y "Áreas de trabajo":**
- Si no tienes un área asignada todavía, verás un mapa con las áreas disponibles (en estado "lista"). Pulsa sobre una para ver su detalle y confirma para que se te asigne.
- Una vez tienes un área asignada, verás su mapa y, en "Puerta a puerta", la lista de direcciones ("puertas") de esa área:
  - Puedes **añadir una puerta** con el formulario de dirección.
  - Dentro de cada puerta puedes **añadir las personas contactadas**, con sus datos y sus respuestas al formulario de la actividad.
  - Puedes activar el **modo sin conexión** para seguir trabajando sin internet; los datos se guardan en tu dispositivo y se sincronizan cuando recuperas la conexión.
  - Cuando terminas de trabajar en el área, pulsa **"Terminar área"** para marcarla como completada (esta opción requiere que no tengas cambios sin guardar).

**En "Recogida de contactos":**
- El flujo es similar al anterior pero sin áreas geográficas: registras directamente los contactos y sus respuestas al formulario.

### Estadísticas de una actividad

Si gestionas la actividad, pulsa **"Estadísticas"** desde su página de detalle. Encontrarás, según el tipo de actividad:

- Indicadores generales de contactos (en "Puerta a puerta" y "Recogida de contactos"): total de contactos, contactados frente a no contactados, nivel de interés, etc.
- Una tabla de **activistas** con su nivel de participación (puertas visitadas, personas contactadas...).
- Una tabla de **áreas** con su estado, número de casas y progreso (solo en "Puerta a puerta").
- Una tabla de **direcciones/puertas** visitadas o pendientes (solo en "Puerta a puerta").
- Una tabla de **contactos/personas** recogidas, con buscador y filtros, desde la que también puedes añadir manualmente un contacto o editar una dirección.
- Resultados agregados de cada **pregunta** del formulario (por ejemplo, cuántas personas eligieron cada opción).
- Un **historial de cambios** de la actividad (quién y cuándo hizo cada modificación).

Desde estas tablas puedes descargar la información en un archivo (CSV).

### Clonar una actividad

Desde el listado o el detalle de una actividad puedes pulsar **"Clonar"**. Se creará una copia de la actividad con su información, archivos, áreas y etiquetas, pero **sin** las activistas que estaban apuntadas. La copia se crea como no activa, para que puedas revisarla antes de publicarla.


## Noticias

Las noticias sirven para comunicar novedades a las activistas (por ejemplo, anuncios o resúmenes de resultados).

### Listado de noticias

1. Pulsa **"Noticias"** en el menú principal.
2. Verás las noticias publicadas, ordenadas de la más reciente a la más antigua, con buscador.
3. Pulsa sobre una noticia para leer su contenido completo.

Como activista, solo ves las noticias activas y ya publicadas (con fecha de publicación alcanzada). Como coordinador/a o administrador/a, además ves el botón **"+ Nueva noticia"**.

### Crear y editar una noticia

1. Pulsa **"+ Nueva noticia"** (o **"Editar"** desde una noticia existente).
2. Completa el formulario:
   - **Publicado**: activa esta opción para que la noticia sea visible; si la dejas desactivada, quedará como borrador.
   - **Título** (obligatorio).
   - **Resumen**: un texto breve que se muestra en el listado.
   - **Contenido**: el texto completo de la noticia, con formato enriquecido (negritas, enlaces, etc.).
   - **Imagen de portada**.
3. Pulsa **"Guardar"**. Si estás editando una noticia existente, también puedes pulsar **"Eliminar"**.

**Nota sobre permisos:** un/a coordinador/a solo puede editar o eliminar las noticias que él mismo creó; un/a administrador/a puede editar o eliminar cualquier noticia.


## Usuarios

Esta sección solo es accesible para coordinadores/as y administradores/as, y permite gestionar a las personas registradas en la plataforma.

### Listado de usuarios

Pulsa **"Usuarios"** en el menú principal para ver la tabla de personas registradas.

**Filtros disponibles:**
- Búsqueda por nombre, email o teléfono.
- Rol (activista, coordinador/a, administrador/a).
- Área geográfica (por región, ciudad o distrito).
- Rango de fecha de nacimiento.
- Género.
- Estado de verificación de email.
- Estado de validación.

**Columnas disponibles en la tabla** (puedes elegir cuáles mostrar):
- Nombre (con una insignia de color según su rol).
- Email y teléfono.
- DNI/documento de identidad.
- Región, ciudad y código postal.
- Fecha de nacimiento y género.
- Email verificado.
- Usuario validado.
- Usuario activo.
- Fechas de alta, última modificación y último inicio de sesión.

Algunas columnas (como "validado" o "activo") se pueden marcar o desmarcar directamente desde la propia tabla, si tienes permiso para ello.

**Nota:** como coordinador/a, solo verás en esta tabla a otros coordinadores/as y a las activistas cuya dirección esté dentro de las áreas que tienes asignadas; como administrador/a, ves a todas las personas registradas.

### Página de detalle de un usuario

Al pulsar sobre una fila de la tabla accedes a la ficha completa de esa persona (si estás viendo tu propia cuenta, el título será "Tu cuenta"). La ficha se organiza en pestañas:

- **Perfil**: datos personales (nombre, dirección, contacto, etc.) con un botón **"Editar"** si tienes permiso.
- **Contraseña**: permite cambiar la contraseña de la cuenta.
- **Áreas** (solo visible en fichas de coordinadores/as): permite asignar qué áreas geográficas gestiona esa persona.
- **Estadísticas**: participación de la persona en las distintas actividades.
- **Emails**: historial de correos enviados a esa persona.
- **Cambios**: historial de modificaciones realizadas sobre sus datos (qué campo cambió, valor anterior y nuevo, quién lo hizo y cuándo).
- **Zona de peligro**: acciones como desactivar o eliminar la cuenta, si tienes permiso.

**Acciones adicionales para administradores/as:**
- **Suplantar usuario**: te permite navegar la aplicación como si fueras esa persona (no disponible sobre otra cuenta de administrador/a). Úsalo con cuidado: todas las acciones que hagas mientras suplantas a alguien se ejecutan como si las hubiera hecho esa persona.
- **Hacer coordinador/a** o **Quitar coordinador/a**: cambia el rol de la cuenta. Si retiras el rol de coordinador/a a alguien, las actividades que había creado pasan a ser gestionadas por los administradores y esa persona pierde el acceso a los datos de su área.

### Crear un usuario

1. Pulsa **"Usuarios"** y luego **"+ Nuevo usuario"**. Se abrirá un asistente con estos pasos:
   - **Tipo**: elige si la cuenta será Activista, Coordinador/a o (solo si tú eres administrador/a) Administrador/a.
   - **Datos**: email, código postal, país e idioma.
   - **Áreas** (solo si eliges Coordinador/a): selecciona las áreas geográficas que gestionará; si no le asignas ninguna, no podrá ver a ninguna activista.
   - **Revisión**: confirma los datos y decide si quieres **enviar un email de bienvenida con las instrucciones de acceso**.
2. Pulsa **"Guardar"** para crear la cuenta.

**Nota sobre permisos:** un/a coordinador/a puede crear cuentas de tipo Activista o Coordinador/a, pero no puede crear cuentas de Administrador/a. Solo un/a administrador/a puede crear otra cuenta de Administrador/a.


## Administración

La sección de **Administración** solo es visible para administradores/as y agrupa herramientas de configuración global de la plataforma. Se accede desde el menú principal ("Administración" o "Admin").

### Temas de interés

Gestiona las temáticas que se sugieren al crear una actividad (por ejemplo, para clasificar los intereses de los contactos recogidos).

### Registro de eventos de actividades

Consulta el historial de todos los cambios y eventos ocurridos en las actividades (creación, modificación, cambios en las áreas, etc.), útil para auditar qué se ha hecho y quién lo ha hecho.

### Etiquetas

Gestiona las etiquetas que se pueden asignar a las activistas, por ejemplo para catalogarlas o para controlar su acceso a determinadas actividades ocultas o restringidas.

### Registro de cambios de usuarios

Consulta el historial de todas las modificaciones realizadas sobre los datos personales de las activistas.

### Emails

Consulta el listado de todos los correos electrónicos enviados por la plataforma (destinatario, asunto, estado y fechas de creación y entrega), con filtros de búsqueda, estado y rango de fechas.

### Descargas

Descarga de forma centralizada, en archivos CSV, los datos de la aplicación: actividades, usuarios, participación de activistas, áreas, direcciones y contactos.

### Emails bloqueados (Seguridad)

Gestiona la lista de direcciones de correo que tienen bloqueado el acceso: no pueden iniciar sesión ni registrarse en la plataforma mientras estén en esta lista. Puedes añadir un email con una nota explicativa, o eliminarlo de la lista.

### Webhooks (Conexiones)

Configura conexiones con otras aplicaciones externas: cuando ocurre un evento concreto en Activistas (por ejemplo, que alguien se apunte a una actividad), se envía automáticamente cierta información a la URL que configures.

Esta es una funcionalidad orientada a integraciones técnicas con otros sistemas; su configuración concreta (eventos disponibles, formato de los datos enviados) requiere conocimientos técnicos y no se detalla en este manual.

### Debug (Desarrolladores)

Página con información de depuración y herramientas para personas desarrolladoras. No está pensada para el uso habitual de la plataforma.
