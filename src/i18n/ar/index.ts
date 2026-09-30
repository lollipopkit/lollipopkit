import type { Translation } from '../i18n-types.js'

// TODO: machine translation, not yet reviewed by a native speaker.
const ar: Translation = {
  meta: {
    lang: 'ar',
    dir: 'rtl',
    title: 'lollipopkit — تطبيقات وأدوات',
    description:
      'تطبيقات وأدوات ومكتبات مفتوحة المصدر من lollipopkit: ServerBox لإدارة الخوادم، وMMetrics وMFuse لأجهزة Mac، وغيرها.',
  },
  nav: {
    apps: 'التطبيقات',
    tools: 'الأدوات',
    libraries: 'المكتبات',
    languageLabel: 'اللغة',
  },
  hero: {
    title: 'تطبيقات وأدوات من lollipopkit.',
    subtitle:
      'صندوق أدوات للخوادم على كل المنصات، وأدوات أصلية لأجهزة Mac، والأدوات والمكتبات التي تقف خلفها. كلها مفتوحة المصدر على GitHub.',
    primaryAction: 'عرض التطبيقات',
  },
  links: {
    website: 'الموقع',
    source: 'الشيفرة المصدرية',
  },
  filters: {
    label: 'تصفية المشاريع',
    language: 'لغة البرمجة',
    license: 'الترخيص',
    sort: 'الترتيب',
    all: 'الكل',
    noLicense: 'بلا ترخيص',
    sortDefault: 'الافتراضي',
    sortName: 'الاسم',
    reset: 'إعادة الضبط',
    empty: 'لا توجد مشاريع تطابق عوامل التصفية هذه.',
  },
  apps: {
    title: 'التطبيقات',
    serverbox: {
      tagline: 'حالة الخوادم وصندوق أدوات لها.',
      description:
        'رسوم بيانية لحالة المعالج والمستشعرات ومعالج الرسوميات وغيرها، مع طرفية SSH وSFTP وDocker والعمليات والخدمات وS.M.A.R.T. في تطبيق واحد.',
    },
    mmetrics: {
      tagline: 'مراقب نظام لـ Apple Silicon في شريط القوائم.',
      description:
        'مجموعات المعالج، ومعالج الرسوميات، والطاقة، ودرجات الحرارة، والذاكرة، والبطارية، والشبكة، والقرص، مقروءة من واجهات macOS الأصلية.',
    },
    mfuse: {
      tagline: 'التخزين البعيد داخل Finder.',
      description:
        'يركّب SFTP وS3 وWebDAV وSMB وFTP وNFS وGoogle Drive وDropbox وOneDrive عبر File Provider.',
    },
    gptbox: {
      tagline: 'عميل غير رسمي لواجهة OpenAI البرمجية.',
      description:
        'محادثة نصية وبالصور والصوت، مع المزامنة عبر WebDAV أو iCloud والاستيراد من ملفات تصدير ChatGPT. لا يزال قيد التطوير.',
    },
  },
  tools: {
    title: 'الأدوات',
    monitor:
      'وكيل يعمل على الخادم لـ ServerBox. مطلوب للإشعارات الفورية والأدوات المصغّرة وتطبيق الساعة، ويقدّم أيضًا لوحة ويب.',
    lk: 'لغة برمجة خفيفة مكتوبة بـ Rust، مع آلة افتراضية وواجهة خلفية للترجمة الأصلية.',
    ormc: 'نماذج OpenRouter، محدّثة يوميًا، مع مقارنة الأسعار وطول السياق.',
    liquidGlass: 'تأثيرات الزجاج السائل والانكسار لـ React وSvelte وVue.',
    exedevCli: 'واجهة سطر أوامر غير رسمية لـ exe.dev.',
    sysinfoMcp: 'معلومات النظام عبر واجهة REST وخادم MCP.',
    iconsFinder: 'معرض لحزمة Flutter المسماة icons_plus.',
    agentSkills: 'مهارات للوكلاء لـ TrailBase والتسليم والمستندات المرتبطة وغيرها.',
    piModelsMetadata: 'إضافة لـ Pi تعرض نماذج المزوّد وتضيف إليها بيانات OpenRouter الوصفية.',
    piTabFollowUp: 'إضافة لـ Pi لإرسال رسائل المتابعة بمفتاح Tab.',
    piUiFinetune: 'إضافة لـ Pi تختصر العرض المطوي لنتائج الأدوات الطويلة.',
    codePrompt: 'أداة سطر أوامر تجمع ملفات الشيفرة في ملف واحد لموجّهات الذكاء الاصطناعي أو التوثيق أو المشاركة.',
    flBuild: 'سكربت بناء لمشاريع Flutter، يُضبط في pubspec.yaml.',
    utilsFish: 'أدوات لصدفة fish للتعامل مع الأرشيفات وإدارة النظام.',
    adbMdns: 'يتصل بأجهزة Android عبر adb اللاسلكي عندما يكتشفها mDNS لكن الاتصال التلقائي لا يعمل.',
    gogsTheme: 'وضع داكن تلقائي لـ Gogs.',
    giteaCustom: 'أنماط مخصصة لـ Gitea.',
    colorInverter: 'يعكس الألوان المكتوبة بصيغة hex أو rgb أو rgba.',
    miwifi: 'يحصل على عنوان IP العام لموجّه Mi WiFi لإتاحة خدمات الشبكة الداخلية.',
  },
  libraries: {
    title: 'المكتبات',
    flLib: 'مكتبة مشتركة بين تطبيقات Flutter أعلاه.',
    redfish: 'عميل لواجهة DMTF Redfish التي توفرها وحدات BMC في الخوادم.',
    imageHash: 'بصمات للصور للعثور على الصور المكررة والمتشابهة.',
    ntexBasicauth: 'وسيط مصادقة Basic لـ ntex.',
    ntexRatelimiter: 'وسيط لتحديد معدل الطلبات لـ ntex.',
    qcl: 'Query Check Language، لغة تعبيرات صغيرة لفحوص التحكم في الوصول.',
    term: 'التحكم في الطرفية: المؤشر والألوان والنص.',
    flMagnetic: 'منتقي فقاعات عائمة بأسلوب Magnetic لـ Flutter.',
    webdavClient: 'عميل WebDAV، نسخة متفرعة مُصانة من webdav_client.',
    exaGo: 'SDK لواجهة بحث Exa.',
  },
  footer: {
    blog: 'المدونة',
    status: 'الحالة',
  },
}

export default ar
