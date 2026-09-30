import type { Translation } from '../i18n-types.js'

// TODO: machine translation, not yet reviewed by a native speaker.
const es: Translation = {
  meta: {
    lang: 'es',
    dir: 'ltr',
    title: 'lollipopkit — apps y herramientas',
    description:
      'Apps, herramientas y bibliotecas de código abierto de lollipopkit: ServerBox para administrar servidores, MMetrics y MFuse para Mac, y más.',
  },
  nav: {
    apps: 'Apps',
    tools: 'Herramientas',
    libraries: 'Bibliotecas',
    languageLabel: 'Idioma',
  },
  hero: {
    title: 'Apps y herramientas de lollipopkit.',
    subtitle:
      'Una caja de herramientas para servidores en todas las plataformas, utilidades nativas para Mac y las herramientas y bibliotecas detrás de ellas. Todo de código abierto en GitHub.',
    primaryAction: 'Ver apps',
  },
  links: {
    website: 'Sitio web',
    source: 'Código',
  },
  filters: {
    label: 'Filtrar proyectos',
    language: 'Lenguaje',
    license: 'Licencia',
    sort: 'Orden',
    all: 'Todos',
    noLicense: 'Sin licencia',
    sortDefault: 'Predeterminado',
    sortName: 'Nombre',
    reset: 'Restablecer',
    empty: 'Ningún proyecto coincide con estos filtros.',
  },
  apps: {
    title: 'Apps',
    serverbox: {
      tagline: 'Estado y herramientas para servidores.',
      description:
        'Gráficos de CPU, sensores, GPU y más, con terminal SSH, SFTP, Docker, procesos, servicios y S.M.A.R.T. en una sola app.',
    },
    mmetrics: {
      tagline: 'Monitor del sistema para Apple Silicon en la barra de menús.',
      description:
        'Clústeres de CPU, GPU, consumo, temperaturas, memoria, batería, red y disco, leídos de las interfaces nativas de macOS.',
    },
    mfuse: {
      tagline: 'Almacenamiento remoto en Finder.',
      description:
        'Monta SFTP, S3, WebDAV, SMB, FTP, NFS, Google Drive, Dropbox y OneDrive mediante File Provider.',
    },
    llmbox: {
      tagline: 'Cliente de terceros para la API de Anthropic/OpenAI/Gemini.',
      description:
        'Chat de texto, imagen y audio, con sincronización por WebDAV o iCloud e importación de exportaciones de ChatGPT. Aún en desarrollo.',
    },
  },
  tools: {
    title: 'Herramientas',
    monitor:
      'Agente de servidor para ServerBox. Necesario para notificaciones push, widgets y la app del reloj; también ofrece un panel web.',
    lk: 'Un lenguaje de programación ligero escrito en Rust, con una VM y un backend de compilación nativa.',
    ormc: 'Modelos de OpenRouter, actualizados a diario, con comparación de precio y contexto.',
    liquidGlass: 'Efectos de vidrio líquido y refracción para React, Svelte y Vue.',
    exedevCli: 'CLI no oficial para exe.dev.',
    agentSkills: 'Skills de agente para TrailBase, traspasos, documentos enlazados y más.',
    piModelsMetadata: 'Extensión de Pi que lista los modelos de un proveedor y añade metadatos de OpenRouter.',
    piTabFollowUp: 'Extensión de Pi para enviar mensajes de seguimiento con Tab.',
    piUiFinetune: 'Extensión de Pi que acorta la vista contraída de resultados de herramientas extensos.',
    utilsFish: 'Utilidades para fish shell: archivos comprimidos y administración del sistema.',
  },
  libraries: {
    title: 'Bibliotecas',
    flLib: 'Biblioteca compartida por las apps de Flutter de arriba.',
    redfish: 'Cliente para la API DMTF Redfish que exponen los BMC de servidores.',
    imageHash: 'Hashes de imágenes para encontrar imágenes duplicadas y similares.',
    ntexBasicauth: 'Middleware de autorización Basic para ntex.',
    ntexRatelimiter: 'Middleware de limitación de tasa para ntex.',
    qcl: 'Query Check Language, un pequeño lenguaje de expresiones para comprobaciones de control de acceso.',
    term: 'Control de terminal: cursor, colores y texto.',
    flMagnetic: 'Selector de burbujas flotantes al estilo Magnetic para Flutter.',
    webdavClient: 'Cliente WebDAV, un fork mantenido de webdav_client.',
    exaGo: 'SDK para la API de búsqueda de Exa.',
  },
  footer: {
    blog: 'Blog',
    status: 'Estado',
  },
}

export default es
