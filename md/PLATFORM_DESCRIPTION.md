# Información

## Introducción
Activistas es una aplicación web autogestionada para organizaciones que facilita la coordinación de actividades y activistas. Es una aplicación gratuita desarrollada por activistas informáticos a partir de la experiencia acumulada en diversas organizaciones.

La aplicación está disponible actualmente en 4 idiomas: Español, Catalán, Gallego y Euskera.

### Qué hace la app
> La aplicación está en constante evolución y se van añadiendo funcionalidades conforme a los requerimientos y necesidades detectadas.

Las principales funcionalidades son:

- **Creación y gestión de actividades**: La aplicación permite organizar y gestionar actividades de puerta a puerta, áreas de trabajo, recogida de contactos, turnos de trabajo y eventos.
- **Gestión territorial de activistas**: Permite segmentar a las activistas por comunidad autónoma, provincia, municipio o distrito, y asignar a las personas coordinadoras la gestión de su territorio.
- **Gestión de datos y conexión con otros sistemas**: Incluye herramientas para trabajar con los datos de la organización y conectarlos con otros sistemas, de modo que determinados eventos puedan compartir información automáticamente.

### Gestión de actividades
> Las actividades cuentan con una configuración flexible para distintos casos de uso, y conforme evoluciona la app se añaden nuevos tipos y funcionalidades.

Todas las actividades comparten opciones de configuración, como su información, ubicación y condiciones de participación. El tipo de actividad determina cómo se desarrolla y qué herramientas están disponibles. Actualmente existen los siguientes tipos:

- **Puerta a puerta**: Define áreas que las activistas visitan para recoger datos de contacto, intereses y necesidades del vecindario mediante un formulario. Las áreas pueden asignarse o ser autoasignadas por las propias activistas.
- **Recogida de contactos**: Se define un formulario para la recogida de contactos, firmas y/o realizar una encuesta, pensado para stands, mesas informativas y recogida de firmas en la calle.
- **Áreas de trabajo**: Se definen áreas donde las activistas deberán realizar una determinada acción, como pegar carteles o repartos de flyers.
- **Turnos de trabajo**: Organiza turnos de colaboración con horarios, aforos y recordatorios automáticos.
- **Evento**: Crea actividades sencillas a las que pueden apuntarse las activistas, sin formulario de recogida de datos ni división por áreas o turnos; resulta adecuado para charlas, asambleas o actos de campaña.

### Gestión de activistas
Las activistas registradas se geolocalizan automáticamente a partir de su código postal. Esta información determina qué personas coordinadoras pueden gestionarlas y permite las siguientes funcionalidades:

- **Envío de emails y notificaciones**: Permite enviar emails masivos a las activistas y notificaciones al móvil relacionadas con las actividades en las que participan.
- **Clasificación por etiquetas**: Permite clasificar activistas mediante etiquetas personalizadas y emplearlas para la segmentación o las condiciones de participación.
- **Bloqueo de email**: Permite desactivar el inicio de sesión de determinadas activistas o bloquear por completo un registro.

### Gestión de datos
> Activistas no es una plataforma web propia, sino una herramienta que se instala en los sistemas de la organización; los datos se alojan siempre en sistemas de la propia organización.

La plataforma ofrece distintas formas de analizar, consultar y operar los datos de la organización:

- **Estadísticas**: La aplicación dispone de estadísticas generales, y también segmentadas por actividad y activistas, tanto para coordinadores (sus actividades y activistas de su territorio) como para activistas (sus estadísticas personales).
- **Registro de eventos y cambios de usuario**: Se registran todos los cambios en tiempo real que suceden en las actividades y en los usuarios, para tener información detallada de qué está pasando en la aplicación.
- **Conexiones API y Webhooks**: La configuración de la aplicación permite recibir y enviar datos a otras aplicaciones mediante un sistema de webhooks, lo que permite actualizar en tiempo real otros sistemas con la información recogida y generada por la aplicación.
- **Descarga de datos**: Las personas coordinadoras y administradoras pueden obtener los datos de la aplicación en archivos CSV compatibles con Excel y otras herramientas.
- **Cumplimiento GDPR**. La aplicación está diseñada conforme al Reglamento General de Protección de Datos, para proteger la información de la organización.


## Usuarios

### Tipos de usuarios

La aplicación distingue tres tipos de cuenta. El tipo de cuenta determina qué información se muestra y qué acciones están disponibles:

| Rol | ¿Quién lo tiene? | ¿Qué puede hacer? |
|---|---|---|
| **Activista** | Cualquier persona que se registra en la plataforma | Puede apuntarse a actividades, participar en ellas, consultar noticias y gestionar su propio perfil. Solo accede a su propia información. |
| **Coordinador/a** | Personas designadas por un administrador | Todo lo que puede hacer una activista, además de crear y gestionar actividades y noticias, y acceder a los datos de las activistas de las áreas geográficas que tiene asignadas. |
| **Administrador/a** | Personas con control total del sistema | Todo lo anterior sin restricción de área geográfica, además de gestionar usuarios, coordinadores, la sección de Administración completa y funciones sensibles como suplantar a otro usuario. |

> Un/a Coordinador/a solo ve y gestiona los datos de las activistas cuya dirección se encuentra dentro de las áreas geográficas que un administrador le haya asignado.

### Gestión de usuarios

La aplicación permite a las personas coordinadoras y administradoras **localizar y gestionar** a las personas registradas mediante filtros combinables de nombre, email, rol y área geográfica. Esta gestión territorial facilita que cada coordinación trabaje con las activistas de su ámbito, mientras que la administración dispone de una visión global de la organización.

Cada cuenta reúne su información de perfil, datos de contacto y opciones de seguridad. La plataforma incorpora además las estadísticas de participación de cada persona en las actividades, junto con el historial de emails enviados y de cambios realizados sobre sus datos.

Según los **permisos disponibles**, la gestión de cuentas incluye la actualización de datos, el cambio de contraseña, la activación o desactivación de cuentas y su eliminación. Las personas administradoras pueden también modificar los roles de coordinación para adaptar la estructura de gestión de la organización.


## Actividades

Las actividades son la funcionalidad principal de la aplicación: representan cualquier acción organizada en la que puede participar una activista (una salida puerta a puerta, una recogida de firmas, un evento, unos turnos de trabajo, etc.).

### Tipos de actividad

Cuando se crea una actividad hay que elegir uno de estos tipos de actividad. El tipo elegido no es solo una etiqueta: cambia qué secciones y herramientas aparecen dentro de la actividad.

| Tipo | Para qué sirve |
|---|---|
| **Puerta a puerta** | Define áreas geográficas que las activistas visitarán casa por casa para recoger datos de contacto, intereses, etc. |
| **Áreas de trabajo** | Define áreas donde las activistas deberán realizar una acción concreta (pegar carteles, hacer buzoneo, etc.). Es como un puerta a puerta pero sin recogida de datos de contactos. |
| **Evento** | Un evento sencillo al que las activistas pueden apuntarse. No tiene formulario de recogida de datos ni división en áreas o turnos. |
| **Recogida de contactos** | Define un formulario para recoger contactos, firmas o realizar una encuesta. Es como un puerta a puerta pero sin división en áreas. |
| **Turnos de trabajo** | Define turnos a los que las activistas pueden apuntarse para trabajar (por ejemplo, en una caseta o en un evento). |

La siguiente tabla resume qué secciones componen cada tipo de actividad:

| Sección de la actividad | Puerta a puerta | Áreas de trabajo | Recogida de contactos | Turnos de trabajo | Evento |
|---|---|---|---|---|---|
| **Coordinadoras** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Activistas apuntadas** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Materiales** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Áreas geográficas** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Encuesta** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **Turnos** | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Modo "Acción"** | ✅ | ✅ | ✅ | ❌ | ❌ |

### Acceso a las actividades

**Las activistas** solo tienen acceso a actividades:
- **Publicadas** (activas y con fecha de publicación ya alcanzada),
- **Dirigidas a ellas** (si la actividad tiene etiquetas de acceso, la activista debe tener alguna de esas etiquetas; si tiene un área de participación definida, su domicilio debe estar dentro de ella), y
- **Visibles** (no ocultas), salvo que una coordinadora haya inscrito manualmente a la activista en la actividad.

**Las personas coordinadoras y administradoras** pueden crear y gestionar actividades cuando disponen de los permisos correspondientes.

> Las actividades pueden configurarse para que apuntarse a ellas requiera la aprobación de una coordinadora.

### Gestión de una actividad
La gestión de cada actividad reúne las siguientes herramientas, disponibles para las personas encargadas de gestionarla:

- **Responsables de la actividad**: El responsable principal es la persona que creó la actividad. La aplicación permite añadir ayudantes (otras personas coordinadoras) para compartir su gestión.
- **Activistas apuntadas**: La relación de personas inscritas permite incorporar activistas manualmente, enviar emails o notificaciones y eliminar participantes de la actividad.
- **Documentos**: La actividad admite archivos relacionados, como materiales o guías. Cada archivo puede marcarse como público (visible para activistas aún no apuntadas) o privado (solo visible para las ya apuntadas y confirmadas).
- **Áreas**: Las actividades con áreas permiten definir distintas áreas mediante un mapa y asignar activistas a dichas áreas. Además, en las actividades "Puerta a puerta" se calcula automáticamente el número aproximado de casas de dicho área.
- **Preguntas**: Esta sección permite definir el formulario que las activistas completan al contactar con cada persona. Las preguntas pueden utilizar texto corto, texto largo, lista desplegable, casillas de verificación (varias respuestas) o botones de opción (una única respuesta), y pueden marcarse como obligatorias.
- **Turnos de trabajo**: En esta sección se definen los distintos turnos a los cuales pueden apuntarse las activistas. Las personas coordinadoras pueden asignar activistas manualmente a cada turno, y las activistas pueden asignarse o desasignarse siempre que haya plazas disponibles.

### Estadísticas de una actividad

Quien gestiona una actividad dispone de estadísticas en su página de detalle. La información disponible depende de cada tipo de actividad e incluye:

- **Estadísticas generales**: activistas, total de contactos, contactados frente a no contactados, nivel de interés, género, etc.
- **Estadísticas segmentadas por activista** con su nivel de participación (puertas visitadas, personas contactadas...).
- **Estadísticas segmentadas por área** con su estado, número de casas y progreso (solo en "Puerta a puerta").
- **Estadísticas segmentadas por dirección** visitadas o pendientes (solo en "Puerta a puerta").
- **Contactos/personas recogidas**, con buscador y filtros, que permite añadir contactos manualmente o editar una dirección.
- **Resultados agregados de cada pregunta** del formulario (por ejemplo, cuántas personas eligieron cada opción).
- **Historial de cambios** de la actividad (quién y cuándo hizo cada modificación).

> Todas las estadísticas pueden descargarse en un archivo CSV interoperable.

## Noticias

Las noticias sirven para comunicar novedades a las activistas (por ejemplo, anuncios o resúmenes de resultados).

Las noticias pueden tener una fecha de publicación programada. Hasta que llega esa fecha, no son visibles para las activistas.

## Administración

La sección de Administración solo es visible para administradores/as y agrupa herramientas de configuración global de la plataforma.

- **Temas de interés**: Las temáticas se sugieren al crear una actividad y ayudan a clasificar los intereses de los contactos recogidos.
- **Registro de eventos de actividades**: La aplicación conserva el historial de cambios y eventos de las actividades, como su creación, modificación o cambios en las áreas. Este registro facilita la auditoría de lo realizado y de las personas responsables.
- **Etiquetas**: Las etiquetas permiten catalogar a las activistas y controlar su acceso a determinadas actividades ocultas o restringidas. La aplicación permite crear y administrar estas etiquetas.
- **Registro de cambios de usuarios**: La aplicación registra las modificaciones realizadas sobre los datos personales de las activistas y permite consultar su historial.
- **Emails**: La plataforma conserva un listado de los correos electrónicos enviados, con destinatario, asunto, estado y fechas de creación y entrega, y permite filtrarlo por búsqueda, estado y rango de fechas.
- **Descargas**: La aplicación permite obtener de forma centralizada, en archivos CSV, datos de actividades, usuarios, participación de activistas, áreas, direcciones y contactos.
- **Emails bloqueados**: La lista de emails bloqueados impide que esas direcciones inicien sesión o se registren en la plataforma. La aplicación permite añadir direcciones con una nota explicativa o retirarlas de la lista.
- **Webhooks**: Las conexiones con aplicaciones externas permiten enviar información automáticamente a una URL configurada cuando ocurre un evento concreto en Activistas, como una inscripción en una actividad. Esta es una funcionalidad orientada a integraciones técnicas con otros sistemas; su configuración concreta (eventos disponibles, formato de los datos enviados) requiere conocimientos técnicos y no se detalla en este manual.
