export interface PrivacySection {
  id: string;
  number: number;
  title: string;
  summary: string;
  content: string[];
  keyPoints?: string[];
  alertNotice?: string;
}

export const PRIVACY_POLICY_METADATA = {
  appName: 'Savia',
  legalEntity: 'Hefesoft S.A.S.',
  brandOwner: 'Hefesoft Technologies',
  address: 'cr 68 c bis a 37 sur, Bogotá D.C., Colombia',
  country: 'Colombia',
  phone: '3028648594',
  emailContact: 'soporte@hefesoft.com',
  emailPrivacy: 'soporte@hefesoft.com',
  emailSupport: 'soporte@hefesoft.com',
  officialUrl: 'https://savia.app.hefesoft.com/',
  privacyUrl: 'https://landing-savia.cloud.hefesoft.com/privacy/',
  lastUpdated: '2 de octubre de 2026',
  googlePolicyUrl: 'https://developers.google.com/terms/api-services-user-data-policy',
  googlePermissionsUrl: 'https://myaccount.google.com/permissions',
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'responsable-legal',
    number: 1,
    title: 'Responsable y datos de contacto',
    summary: 'Quién opera Savia y cómo contactarnos sobre privacidad.',
    content: [
      'Savia es un producto de Hefesoft S.A.S. ("Hefesoft" o "nosotros"), responsable del tratamiento de los datos personales que procesa la plataforma. Esta política explica qué datos se usan cuando conectas cuentas de Google con Savia y cómo puedes gestionar ese acceso.',
    ],
    keyPoints: [
      'Razón social: Hefesoft S.A.S.',
      'Dirección: cr 68 c bis a 37 sur, Bogotá D.C., Colombia.',
      'Teléfono: 3028648594.',
      'Correo de contacto y privacidad: soporte@hefesoft.com.',
      'Aplicación Savia: https://savia.app.hefesoft.com/.',
    ],
  },
  {
    id: 'datos-google-solicitados',
    number: 2,
    title: 'Datos de Google, permisos y usos',
    summary: 'Savia consulta información de la cuenta que conectas para atender funciones que solicitas.',
    content: [
      'Cuando conectas una cuenta de Google, la autorización muestra los permisos solicitados. Savia usa las conexiones personales del usuario autenticado. Las consultas a Gmail, Drive y Calendar se hacen para mostrar resultados relacionados con la función que utilizas.',
      'Los permisos configurados para estas integraciones son los siguientes:',
    ],
    keyPoints: [
      'Gmail — https://www.googleapis.com/auth/gmail.readonly y https://www.googleapis.com/auth/gmail.send. La búsqueda devuelve metadatos de mensajes, como asunto, remitente, fecha e identificadores o enlaces necesarios para mostrar el resultado. Savia puede enviar un correo preparado por ti después de que revises y confirmes la acción.',
      'Google Drive — https://www.googleapis.com/auth/drive.file. Savia consulta metadatos de archivos disponibles a través de la integración y puede crear archivos de texto nuevos que solicitas.',
      'Google Calendar — https://www.googleapis.com/auth/calendar.events. Savia consulta eventos para mostrar información de agenda y puede crear un evento nuevo después de tu revisión y confirmación. Las funciones actuales no editan ni eliminan eventos.',
    ],
  },
  {
    id: 'finalidad-tratamiento',
    number: 3,
    title: 'Finalidad y confirmación de acciones',
    summary: 'Las consultas atienden solicitudes tuyas; las acciones que escriben en Google requieren confirmación.',
    content: [
      'Savia procesa la información consultada para responder a la solicitud que haces en la plataforma, por ejemplo buscar metadatos de mensajes o archivos y mostrar eventos de tu calendario.',
      'Antes de enviar un correo, crear un evento o guardar un archivo de texto nuevo, Savia presenta la acción para que la revises y la confirmes. La confirmación está cifrada en el backend y es válida por cinco minutos. Este plazo limita cuándo se puede ejecutar la acción; no define un plazo de conservación o eliminación de otros datos.',
    ],
  },
  {
    id: 'credenciales-almacenamiento',
    number: 4,
    title: 'Conexiones, credenciales y registros',
    summary: 'Savia conserva los datos necesarios para asociar y administrar tus propias conexiones.',
    content: [
      'Los tokens OAuth de Google son gestionados por Nango, que Hefesoft opera para las integraciones de Savia. Savia no guarda esos tokens en su base de datos de aplicación. El navegador usa la interfaz de conexión de Nango para que autorices la cuenta.',
      'Para administrar una conexión, la aplicación conserva el identificador de conexión de Nango, el proveedor, la etiqueta o identificador de la cuenta cuando están disponibles, los permisos informados y el estado de la conexión. Estos datos se asocian a tu cuenta de Savia.',
      'Savia registra eventos mínimos de las acciones de escritura, como proveedor, tipo de acción, resultado, un código de error seguro si aplica y fecha. El registro no incluye el cuerpo del correo, destinatarios, contenido del archivo ni tokens OAuth. Esta política no establece un plazo fijo de conservación para esos registros.',
    ],
  },
  {
    id: 'comparticion-terceros',
    number: 5,
    title: 'Proveedores y procesamiento por asistentes de IA',
    summary: 'Savia usa proveedores técnicos para operar la aplicación y, cuando invocas el asistente, generar respuestas.',
    content: [
      'Savia se ejecuta sobre servicios de Cloudflare, incluidos Workers para la aplicación, D1 para datos de aplicación y R2 para almacenamiento de objetos. Nango gestiona las conexiones OAuth y sus tokens.',
      'Si utilizas funciones de asistente, el mensaje, los datos necesarios para atenderlo y los resultados de herramientas —que pueden incluir metadatos de Google que solicitaste— pueden enviarse a OpenRouter, el proveedor de modelos configurado, y al proveedor del modelo seleccionado para generar la respuesta. El tratamiento de esos datos también está sujeto a las condiciones y políticas del proveedor que procesa la solicitud. No afirmamos que esos proveedores tengan un contrato o una configuración específica de no conservación o no entrenamiento.',
      'Hefesoft no vende datos personales ni usa datos recibidos de Google para publicidad. Hefesoft no utiliza esos datos para entrenar sus propios modelos de inteligencia artificial.',
    ],
  },
  {
    id: 'controles-usuario',
    number: 6,
    title: 'Desconexión, revocación y solicitudes de eliminación',
    summary: 'Puedes detener el acceso de Savia desde la aplicación o revocarlo directamente en Google.',
    content: [
      'Para desconectar una integración desde Savia, abre Mis integraciones y elige desconectarla. También puedes retirar el permiso de Savia desde la página de permisos de tu Cuenta de Google. La revocación detiene futuras solicitudes de Google con esa autorización; puede tardar un tiempo en reflejarse en todos los servicios.',
      'Para solicitar la eliminación de datos asociados a tu cuenta o hacer una consulta sobre privacidad, escribe a soporte@hefesoft.com e indica qué cuenta o integración quieres que revisemos. La solicitud se atenderá conforme a la normativa aplicable. La desconexión o revocación no sustituye una solicitud de eliminación de otros datos que Savia pueda conservar.',
    ],
    keyPoints: [
      'Permisos de Google: https://myaccount.google.com/permissions.',
      'Contacto para solicitudes de privacidad: soporte@hefesoft.com.',
    ],
  },
  {
    id: 'seguridad-tecnica',
    number: 7,
    title: 'Seguridad',
    summary: 'Aplicamos controles técnicos para limitar el acceso a las conexiones y a los datos de Savia.',
    content: [
      'Savia usa autenticación y controles de acceso para asociar las integraciones a la cuenta que las conectó. Las solicitudes a los proveedores se realizan desde el backend con la conexión correspondiente. Los tokens OAuth no se guardan en la base de datos de Savia ni se entregan al asistente o al navegador como credenciales de Google.',
      'Ningún sistema conectado a Internet puede garantizar seguridad absoluta. Si identificas una actividad que no reconoces, comunícate con soporte@hefesoft.com y revoca el acceso desde Google.',
    ],
  },
  {
    id: 'cumplimiento-google-limited-use',
    number: 8,
    title: 'Política de Datos de Usuarios de Google y Uso Limitado',
    summary: 'El uso de información de Google se limita a las funciones que describes en esta política y a las reglas aplicables de Google.',
    content: [
      'El uso y la transferencia a cualquier otra aplicación de la información recibida de las APIs de Google por parte de Savia cumplirán la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado (Google API Services User Data Policy, including Limited Use requirements).',
      'Consulta la política de Google: https://developers.google.com/terms/api-services-user-data-policy.',
    ],
    keyPoints: [
      'Savia no vende datos recibidos de Google ni los usa para publicidad.',
      'Savia no utiliza datos recibidos de Google para entrenar sus propios modelos de inteligencia artificial.',
      'Cuando invocas funciones de asistente, parte de la información necesaria para responder puede procesarse mediante OpenRouter y el proveedor del modelo seleccionado, según se describe en esta política.',
    ],
    alertNotice: 'El uso y la transferencia de información recibida de las APIs de Google por parte de Savia cumplirán la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado.',
  },
];

export const GOOGLE_SERVICES_INFO = [
  {
    service: 'Gmail',
    icon: 'Mail',
    dataRequested: [
      'Metadatos de mensajes, como asunto, remitente, fecha e identificadores necesarios para mostrar resultados.',
      'Búsquedas de mensajes que solicitas.',
      'Envío de correo preparado por ti después de revisar y confirmar la acción.',
    ],
    purpose: 'Encontrar mensajes relevantes y enviar correos que revisas y confirmas.',
    executionModel: 'Búsqueda bajo petición. Envío solo después de confirmación explícita.',
    badgeColor: 'emerald',
  },
  {
    service: 'Google Drive',
    icon: 'HardDrive',
    dataRequested: [
      'Metadatos de archivos disponibles para las funciones de la integración.',
      'Creación de archivos de texto nuevos solicitados por ti.',
      'El permiso drive.file limita el acceso a archivos disponibles a través de la aplicación.',
    ],
    purpose: 'Buscar metadatos de archivos y guardar un archivo de texto nuevo que solicitas.',
    executionModel: 'Búsqueda bajo petición. Creación tras revisión y confirmación.',
    badgeColor: 'teal',
  },
  {
    service: 'Google Calendar',
    icon: 'Calendar',
    dataRequested: [
      'Eventos de tu calendario para mostrar información de agenda.',
      'Creación de un evento nuevo con título, inicio y fin.',
      'Las funciones actuales no editan ni eliminan eventos.',
    ],
    purpose: 'Consultar agenda y crear un evento nuevo que revisas y confirmas.',
    executionModel: 'Consulta bajo petición. Creación únicamente con confirmación previa.',
    badgeColor: 'emerald',
  },
];

export const PRE_CONNECT_DISCLOSURE_DATA = {
  title: 'Aviso antes de conectar tu cuenta de Google',
  subtitle: 'Cómo Savia usa los datos de las integraciones de Google',
  intro: 'Al conectar Google, autorizas los permisos que se muestran en la pantalla de consentimiento. Savia usa esa conexión para las funciones que solicitas:',
  points: [
    {
      title: 'Permisos solicitados',
      description: 'Gmail: gmail.readonly y gmail.send. Drive: drive.file. Calendar: calendar.events.',
    },
    {
      title: 'Confirmación de acciones',
      description: 'Savia presenta para revisión las acciones de enviar correo, crear evento o crear archivo de texto. Debes confirmarlas para que se ejecuten.',
    },
    {
      title: 'Gestión de conexión',
      description: 'Nango gestiona los tokens OAuth. Savia guarda identificadores y datos básicos de la conexión para asociarla a tu cuenta y mostrar su estado.',
    },
    {
      title: 'Asistente',
      description: 'Si invocas el asistente, tu mensaje y los datos necesarios para responder, que pueden incluir resultados de Google solicitados, pueden procesarse con OpenRouter y el proveedor del modelo seleccionado.',
    },
    {
      title: 'Revocar acceso',
      description: 'Puedes desconectar la integración en Mis integraciones o retirar el permiso desde myaccount.google.com/permissions. Para solicitar la eliminación de otros datos, escribe a soporte@hefesoft.com.',
    },
  ],
  googleStatement: 'El uso de la información recibida de las APIs de Google cumplirá la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado.',
};
