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
  lastUpdated: '4 de septiembre de 2026',
  googlePolicyUrl: 'https://developers.google.com/terms/api-services-user-data-policy',
  googlePermissionsUrl: 'https://myaccount.google.com/permissions',
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'responsable-legal',
    number: 1,
    title: 'Responsable Legal de Savia y Datos de Contacto',
    summary: 'Identificación oficial de la entidad responsable del tratamiento de datos personales de la plataforma Savia.',
    content: [
      'La plataforma Savia (disponible en https://savia.app.hefesoft.com/) es un producto y servicio de software desarrollado, operado y administrado por Hefesoft S.A.S. (en adelante, "Hefesoft", "nosotros" o "la Compañía").',
      'Hefesoft actúa como Responsable del Tratamiento de los datos de carácter personal recabados a través de Savia, garantizando el cumplimiento de los más altos estándares internacionales de protección de datos, incluyendo normativas aplicables de privacidad y las directrices obligatorias del ecosistema de Google API Services.',
    ],
    keyPoints: [
      'Razón Social: Hefesoft S.A.S.',
      'Dirección física: cr 68 c bis a 37 sur, Bogotá D.C., Colombia',
      'Teléfono: 3028648594',
      'Correo electrónico: soporte@hefesoft.com',
      'Portal Web Oficial: https://savia.app.hefesoft.com/',
    ],
  },
  {
    id: 'datos-google-solicitados',
    number: 2,
    title: 'Datos de Google que se Solicitan y Alcance de Acceso',
    summary: 'Detalle riguroso y transparente de los datos específicos consultados a través de las APIs de Google (Gmail, Drive y Calendar).',
    content: [
      'Para prestar sus funcionalidades de asistencia y automatización inteligente, Savia solicita autorización para acceder únicamente a los alcances (scopes) estrictamente necesarios de Google Workspace. No accedemos a datos innecesarios ni solicitamos permisos adicionales sin consentimiento.',
      'El tratamiento específico por servicio se desglosa taxativamente a continuación:',
    ],
    keyPoints: [
      'Gmail (https://www.googleapis.com/auth/gmail.modify o gmail.readonly): Accedemos a los mensajes de correo electrónico y a sus metadatos (asunto, remitente, destinatarios, fecha e identificador del hilo). Finalidad: realizar búsquedas semánticas, lectura indexada y resúmenes solicitados expresamente por el usuario. El envío de nuevos correos o respuestas se ejecuta única y exclusivamente tras la redacción previa y la confirmación explícita del usuario.',
      'Google Drive (https://www.googleapis.com/auth/drive.file o drive.readonly): Accedemos a los metadatos de archivos (nombre, tipo MIME, tamaño y fecha de última modificación) para permitir su búsqueda e indexación contextual. El contenido de un archivo se lee o escribe ÚNICAMENTE al crear un archivo nuevo solicitado por el usuario o al actualizar un documento bajo orden expresa.',
      'Google Calendar (https://www.googleapis.com/auth/calendar.events): Accedemos a la información de eventos existentes (título, fechas de inicio y fin, ubicación y asistentes) con el fin de consultar disponibilidad de agenda y evitar solapamientos. La creación, reprogramación o eliminación de eventos en Calendar se ejecuta únicamente tras confirmación explícita en pantalla.',
    ],
    alertNotice: 'Savia nunca realiza descargas masivas no solicitadas de tu buzón ni explora carpetas privadas de Drive sin una instrucción expresa de tu parte.',
  },
  {
    id: 'finalidad-tratamiento',
    number: 3,
    title: 'Finalidad del Tratamiento y Principio de Confirmación Explícita',
    summary: 'Uso exclusivo para ejecutar tareas requeridas por el usuario, bajo un estricto modelo de "Human-in-the-loop".',
    content: [
      'Los datos obtenidos a través de las APIs de Google se procesan con una finalidad única y transparente: resolver las consultas formuladas por el usuario en la interfaz de Savia y ejecutar los flujos de automatización que éste encomiende.',
      'Operamos bajo el principio inquebrantable de "Human-in-the-Loop" (Intervención Humana Obligatoria):',
    ],
    keyPoints: [
      'Mostrar resultados solicitados: Presentar en tiempo real respuestas consolidadas, listas de correos relevantes, documentos localizados o disponibilidad horaria.',
      'Confirmación previa para acciones de escritura: Savia jamás enviará un correo electrónico, nunca creará ni modificará un evento en tu calendario, y nunca guardará un archivo en tu Drive de forma autónoma. Cada acción requiere que el usuario revise un borrador previo y presione un botón de confirmación explícita.',
      'Prohibición de usos secundarios: La información nunca se procesa para fines distintos a los descritos en esta política ni para fines de vigilancia o seguimiento no solicitado.',
    ],
  },
  {
    id: 'credenciales-almacenamiento',
    number: 4,
    title: 'Gestión de Credenciales OAuth y Plazos de Retención de Datos',
    summary: 'Arquitectura delegada mediante Nango, ausencia de tokens en Savia y políticas estrictas de ciclo de vida de los datos.',
    content: [
      'Savia no almacena credenciales de acceso directo ni tokens OAuth de Google en su base de datos principal, ni expone credenciales en el navegador web del usuario. La delegación de autenticación y custodia de tokens se gestiona de forma segura a través de Nango (plataforma certificada SOC 2 Tipo II para integraciones de APIs).',
      'Savia únicamente almacena y conserva en sus registros:',
    ],
    keyPoints: [
      'Estado de la conexión: Registro booleano de si la cuenta de Google está actualmente conectada o desconectada.',
      'Permisos concedidos: Identificadores de los scopes autorizados para validar qué acciones pueden ser invocadas.',
      'Auditoría mínima de acciones: Registro técnico de trazabilidad (ID de la transacción, marca de tiempo, tipo de servicio invocado y estado de confirmación humana) para fines de control de seguridad y cumplimiento.',
      'Plazo de retención de Auditoría: Los registros de auditoría mínima se conservan por un período máximo de noventa (90) días naturales, tras los cuales son purgados de manera irreversible y automatizada.',
      'Plazo de retención de Tokens en Nango: Los tokens se mantienen únicamente mientras la integración esté activa. Si el usuario desconecta el servicio o transcurren treinta (30) días de inactividad total sin renovación, las credenciales son revocadas y eliminadas definitivamente de Nango.',
      'Memoria temporal de sesión: Cualquier fragmento de consulta o resumen en memoria volátil se destruye tras quince (15) minutos de inactividad o inmediatamente al cerrar la sesión del navegador.',
    ],
  },
  {
    id: 'comparticion-terceros',
    number: 5,
    title: 'Compartición de Datos, Proveedores de Infraestructura y Cláusula Anti-Publicidad',
    summary: 'Identificación transparente de proveedores tecnológicos y compromiso inalterable de no venta ni uso publicitario de datos.',
    content: [
      'Para brindar el servicio, Savia se apoya en una cantidad limitada de proveedores de infraestructura y tecnología bajo estrictos contratos de confidencialidad y procesamiento de datos (DPAs):',
    ],
    keyPoints: [
      'Nango (Nango Inc.): Proveedor especializado de infraestructura de integración OAuth y custodia segura de credenciales de API (bóveda cifrada AES-256).',
      'Infraestructura de Alojamiento y Base de Datos: Servidores seguros de Google Cloud Platform (GCP) en centros de datos de alta disponibilidad, con cifrado completo en tránsito (TLS 1.3) y en reposo (AES-256).',
      'Proveedores de Modelos de Inteligencia Artificial: Servicios de inferencia de lenguaje natural (APIs empresariales de Google Cloud Vertex AI / Google GenAI). El procesamiento se realiza de forma efímera y bajo acuerdos comerciales empresariales que garantizan formalmente que los datos del cliente NO se conservan para entrenamiento ni mejora de modelos generales de IA.',
      'DECLARACIÓN TAXATIVA: Savia y Hefesoft NUNCA venden, no alquilan, no ceden ni comercializan datos personales o información de Google con terceras partes bajo ninguna circunstancia.',
      'PROHIBICIÓN PUBLICITARIA: Los datos de usuario de Google jamás se utilizan para enviar anuncios publicitarios, crear perfiles comerciales, ni para servicios de retargeting o monetización basada en datos.',
    ],
    alertNotice: 'Cumpliendo con las directrices de veracidad de Google: Declaramos transparentemente que los proveedores de infraestructura e inferencia de IA enumerados procesan datos bajo petición, garantizando que ninguno de ellos utiliza tus datos para entrenamiento público o publicidad.',
  },
  {
    id: 'controles-usuario',
    number: 6,
    title: 'Controles del Usuario, Revocación de Permisos y Eliminación de Datos',
    summary: 'Tú mantienes el control absoluto: desconexión inmediata, revocación directa en Google y derecho al olvido.',
    content: [
      'Creemos firmemente en la autonomía digital de nuestros usuarios. Puedes revocar y administrar el acceso a tus datos de Google en cualquier instante mediante los siguientes mecanismos:',
    ],
    keyPoints: [
      'Desconexión inmediata en Savia: Desde el panel de Configuración de la aplicación en https://savia.app.hefesoft.com/, puedes hacer clic en "Desconectar Google Workspace". Esto instruye inmediatamente a Nango a invalidar el token de acceso y cambia el estado de conexión a inactivo.',
      'Revocación directa desde tu Cuenta de Google: Puedes revocar todos los permisos otorgados a Savia en cualquier momento visitando la página de seguridad de tu cuenta Google: https://myaccount.google.com/permissions. Al hacerlo, las APIs de Google bloquearán de inmediato cualquier intento de comunicación.',
      'Derecho al olvido y eliminación total: Puedes solicitar la supresión completa e inmediata de todos los registros de auditoría y datos de tu cuenta enviando un correo electrónico a soporte@hefesoft.com. Tu solicitud será procesada en un plazo máximo garantizado de setenta y dos (72) horas hábiles.',
    ],
  },
  {
    id: 'seguridad-tecnica',
    number: 7,
    title: 'Seguridad Técnica y No Almacenamiento de Tokens en el Navegador',
    summary: 'Protocolos de cifrado de grado bancario, protección de endpoints y aislamiento estricto de credenciales.',
    content: [
      'Hefesoft implementa rigurosas medidas de seguridad técnicas, físicas y administrativas para salvaguardar tu información contra accesos no autorizados, alteración o pérdida:',
    ],
    keyPoints: [
      'Cifrado en Tránsito y Reposo: Toda comunicación entre tu navegador, los servidores de Savia y las APIs de Google se realiza exclusivamente mediante HTTPS empleando protocolos criptográficos TLS 1.3 con certificados de alta seguridad.',
      'CERO Tokens en el Navegador: Los tokens de acceso y de refresco de Google jamás se transmiten ni se guardan en el cliente web (ni en localStorage, ni en sessionStorage, ni en cookies accesibles por JavaScript). Esto elimina por completo el riesgo de robo de tokens frente a ataques de Cross-Site Scripting (XSS).',
      'Controles de Acceso Estrictos: Principio de mínimo privilegio y autenticación multifactorial (MFA) para el personal de ingeniería encargado del mantenimiento de infraestructura.',
      'Monitoreo Continuo: Detección proactiva de anomalías y auditoría de eventos de seguridad en tiempo real.',
    ],
  },
  {
    id: 'cumplimiento-google-limited-use',
    number: 8,
    title: 'Declaración de Cumplimiento de la Política de Datos de Google (Limited Use) y Uso Veraz de IA',
    summary: 'Compromiso normativo explícito conforme a los requisitos de uso limitado de Google API Services y veracidad de procesamiento de IA.',
    content: [
      'En cumplimiento estricto con las políticas de desarrollador de Google y las directrices obligatorias de verificación para aplicaciones que acceden a datos de Google Workspace:',
      '“El uso y la transferencia a cualquier otra aplicación de la información recibida de las APIs de Google por parte de Savia cumplirán la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado (Google API Services User Data Policy, including Limited Use requirements).”',
      'Puedes consultar de forma directa e íntegra dicha política oficial en: https://developers.google.com/terms/api-services-user-data-policy',
    ],
    keyPoints: [
      'Uso estrictamente funcional: Los datos de Google solo se emplean para proporcionar o mejorar las características directamente visibles e indispensables para la experiencia del usuario en Savia.',
      'Transferencias restringidas: No se transfiere información de Google a terceros excepto cuando sea estrictamente necesario para proporcionar o mejorar estas características primordiales, para cumplir con la ley aplicable, o como parte de una fusión o adquisición con notificación previa.',
      'Procesamiento veraz de IA sin entrenamiento: Los modelos de inteligencia artificial empleados por Savia operan exclusivamente en modo de inferencia transitoria para analizar consultas y redactar borradores. Bajo ningún concepto tus datos de Google son almacenados para entrenar, reentrenar o ajustar modelos de IA fundamentales, ni se comparten con bases de conocimiento públicas.',
      'Prohibición categórica de publicidad: Jamás se transferirán ni se usarán datos de Google para servir anuncios de ningún tipo, retargeting o perfilamiento comercial.',
      'Prohibición de lectura humana: Ningún empleado, directivo o contratista de Savia o Hefesoft leerá tus datos personales ni correos de Google a menos que: (a) contemos con tu consentimiento afirmativo explícito para resolver un incidente de soporte técnico puntual, (b) sea indispensable por motivos de seguridad informática o requerimiento judicial aplicable, o (c) los datos hayan sido agregados y completamente anonimizados.',
    ],
    alertNotice: 'Cláusula obligatoria Google: El uso de la información recibida de las APIs de Google cumplirá la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado.',
  },
  {
    id: 'aviso-en-producto-pre-oauth',
    number: 9,
    title: 'Nota Obligatoria: Requisito de Aviso Visible en la Aplicación Previo a la Conexión de Google (In-Product Disclosure)',
    summary: 'Exigencia formal de Google sobre la notificación visible e interactiva dentro de la interfaz antes de redirigir al flujo de autorización OAuth.',
    content: [
      'De acuerdo con las Directrices de Verificación de Aplicaciones de Google (Google API Verification Requirements), las aplicaciones que solicitan acceso a ámbitos de datos de usuario de Google deben proporcionar un aviso visible e ineludible dentro del producto ("In-Product Disclosure") antes de que el usuario inicie el flujo de consentimiento de Google OAuth.',
      'Este aviso garantiza que el usuario tenga pleno entendimiento de qué datos se van a solicitar, para qué fines específicos se utilizarán y bajo qué condiciones de seguridad se custodiarán, mucho antes de ingresar sus credenciales en la pantalla estándar de Google.',
    ],
    keyPoints: [
      'Ubicación del aviso en Savia: Savia despliega un cuadro de diálogo modal prioritario e interactivo en la interfaz de usuario en el momento exacto en que el usuario hace clic en "Conectar Google Workspace" o "Configurar Integración".',
      'Contenido obligatorio visible: El aviso en producto desglosa taxativamente los permisos de Gmail, Google Drive y Google Calendar, aclara el principio de "Human-in-the-loop" (ninguna acción de escritura ocurre sin confirmación del usuario), reitera la custodia segura de tokens mediante Nango (con cero tokens en el navegador) y prohíbe la venta o uso publicitario de datos.',
      'Consentimiento activo y no premarcado: El diálogo exige que el usuario marque activamente una casilla de verificación de entendimiento previo antes de habilitar el botón que invoca el protocolo de autorización OAuth con Google.',
      'Enlace directo a la política completa: El aviso incorpora un enlace directo y accesible para consultar esta Política de Privacidad integral en cualquier instante previo a la conexión.',
    ],
    alertNotice: 'Nota de Verificación de Google: Toda integración en producción de Savia debe mantener siempre activo y visible este diálogo previo en la aplicación web antes de iniciar la solicitud de autorización OAuth.',
  },
];

export const GOOGLE_SERVICES_INFO = [
  {
    service: 'Gmail',
    icon: 'Mail',
    dataRequested: [
      'Lectura de asunto, remitente, destinatario y fecha de correos.',
      'Búsqueda contextual de mensajes solicitados por el usuario.',
      'Redacción de borradores y envío únicamente bajo aprobación explícita.',
    ],
    purpose: 'Localizar información comercial, contratos o requerimientos rápidamente y preparar respuestas precisas.',
    executionModel: 'Lectura bajo petición. Envío únicamente tras confirmación explícita ("Human-in-the-loop").',
    badgeColor: 'emerald',
  },
  {
    service: 'Google Drive',
    icon: 'HardDrive',
    dataRequested: [
      'Listado de nombres, tipo MIME y fechas de modificación de archivos.',
      'Búsqueda semántica en documentos bajo solicitud del usuario.',
      'Escritura o creación de nuevos archivos únicamente por instrucción directa.',
    ],
    purpose: 'Encontrar cotizaciones, minutas o fichas de clientes y generar documentos automáticos.',
    executionModel: 'Metadatos para indexación. Contenido únicamente al crear o editar tras confirmación.',
    badgeColor: 'teal',
  },
  {
    service: 'Google Calendar',
    icon: 'Calendar',
    dataRequested: [
      'Consulta de eventos existentes, títulos, horarios y asistentes.',
      'Verificación de disponibilidad de agenda del usuario y equipo.',
      'Creación o reprogramación de reuniones bajo confirmación.',
    ],
    purpose: 'Coordinar citas comerciales, reuniones de seguimiento y evitar solapamientos de horario.',
    executionModel: 'Lectura de disponibilidad. Creación de eventos únicamente con confirmación previa.',
    badgeColor: 'emerald',
  },
];

export const PRE_CONNECT_DISCLOSURE_DATA = {
  title: 'Aviso Importante antes de Conectar tu Cuenta de Google',
  subtitle: 'Requisito de Transparencia y Divulgación en Producto de Savia (Hefesoft)',
  intro: 'Antes de continuar al flujo seguro de Google Workspace, queremos que tengas total certeza de cómo Savia tratará tus datos:',
  points: [
    {
      title: 'Permisos solicitados',
      description: 'Acceso de lectura y gestión para Gmail (búsqueda de correos), Google Drive (localización y creación de archivos) y Google Calendar (revisión de agenda y agendamiento).',
    },
    {
      title: 'Aprobación Humana Obligatoria ("Human-in-the-loop")',
      description: 'Savia NUNCA enviará un correo, NUNCA creará un evento y NUNCA guardará un archivo sin que tú lo revises y hagas clic en el botón de confirmación explícita.',
    },
    {
      title: 'Bóveda de Credenciales con Nango',
      description: 'Tus credenciales y tokens OAuth son custodiados por Nango con cifrado AES-256. NUNCA se almacenan tokens en tu navegador web (cero riesgo de robo en cliente).',
    },
    {
      title: 'Tus datos son privados y tuyos',
      description: 'No vendemos tus datos, no los usamos para publicidad y no los compartimos con terceros con fines de entrenamiento público.',
    },
    {
      title: 'Control total de revocación',
      description: 'Puedes desconectar tu cuenta en 1 clic desde Savia o revocar permisos directamente en myaccount.google.com/permissions.',
    },
  ],
  googleStatement: '“El uso de la información recibida de las APIs de Google cumplirá la Política de Datos de Usuarios de los Servicios de API de Google, incluidos los requisitos de Uso Limitado.”',
};
