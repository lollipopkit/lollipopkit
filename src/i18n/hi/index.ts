import type { Translation } from '../i18n-types.js'

// TODO: machine translation, not yet reviewed by a native speaker.
const hi: Translation = {
  meta: {
    lang: 'hi',
    dir: 'ltr',
    title: 'lollipopkit — ऐप्स और टूल्स',
    description:
      'lollipopkit के ओपन-सोर्स ऐप्स, टूल्स और लाइब्रेरी: सर्वर प्रबंधन के लिए ServerBox, Mac के लिए MMetrics व MFuse, और भी बहुत कुछ।',
  },
  nav: {
    apps: 'ऐप्स',
    tools: 'टूल्स',
    libraries: 'लाइब्रेरी',
    languageLabel: 'भाषा',
  },
  hero: {
    title: 'lollipopkit के ऐप्स और टूल्स।',
    subtitle:
      'हर प्लेटफ़ॉर्म के लिए सर्वर टूलबॉक्स, Mac के लिए नेटिव यूटिलिटी, और उनके पीछे के टूल्स व लाइब्रेरी। सब कुछ GitHub पर ओपन सोर्स।',
    primaryAction: 'ऐप्स देखें',
  },
  links: {
    website: 'वेबसाइट',
    source: 'सोर्स',
  },
  filters: {
    label: 'प्रोजेक्ट फ़िल्टर करें',
    language: 'प्रोग्रामिंग भाषा',
    license: 'लाइसेंस',
    sort: 'क्रम',
    all: 'सभी',
    noLicense: 'कोई लाइसेंस नहीं',
    sortDefault: 'डिफ़ॉल्ट',
    sortName: 'नाम',
    reset: 'रीसेट',
    empty: 'इन फ़िल्टर से कोई प्रोजेक्ट मेल नहीं खाता।',
  },
  apps: {
    title: 'ऐप्स',
    serverbox: {
      tagline: 'सर्वर स्थिति और टूलबॉक्स।',
      description:
        'CPU, सेंसर, GPU आदि के स्थिति चार्ट, साथ में SSH टर्मिनल, SFTP, Docker, प्रोसेस, सर्विस और S.M.A.R.T. — एक ही ऐप में।',
    },
    mmetrics: {
      tagline: 'मेन्यू बार के लिए Apple Silicon सिस्टम मॉनिटर।',
      description:
        'CPU क्लस्टर, GPU, पावर, तापमान, मेमोरी, बैटरी, नेटवर्क और डिस्क — macOS के नेटिव इंटरफ़ेस से पढ़े गए।',
    },
    mfuse: {
      tagline: 'Finder में रिमोट स्टोरेज।',
      description:
        'File Provider के ज़रिए SFTP, S3, WebDAV, SMB, FTP, NFS, Google Drive, Dropbox और OneDrive माउंट करता है।',
    },
    gptbox: {
      tagline: 'OpenAI API के लिए थर्ड-पार्टी क्लाइंट।',
      description:
        'टेक्स्ट, इमेज और ऑडियो चैट, WebDAV या iCloud से सिंक, और ChatGPT एक्सपोर्ट से इम्पोर्ट। अभी विकास में है।',
    },
  },
  tools: {
    title: 'टूल्स',
    monitor:
      'ServerBox के लिए सर्वर-साइड एजेंट। पुश नोटिफ़िकेशन, विजेट और वॉच ऐप के लिए ज़रूरी; वेब पैनल भी देता है।',
    lk: 'Rust में लिखी एक हल्की प्रोग्रामिंग भाषा, VM और नेटिव कंपाइलर बैकएंड के साथ।',
    ormc: 'OpenRouter मॉडल, रोज़ अपडेट, कीमत और कॉन्टेक्स्ट की तुलना के साथ।',
    liquidGlass: 'React, Svelte और Vue के लिए लिक्विड ग्लास और रिफ़्रैक्शन इफ़ेक्ट।',
    exedevCli: 'exe.dev के लिए अनौपचारिक CLI।',
    sysinfoMcp: 'REST API और MCP सर्वर के ज़रिए सिस्टम जानकारी।',
    iconsFinder: 'Flutter पैकेज icons_plus की गैलरी।',
    agentSkills: 'TrailBase, हैंडऑफ़, लिंक्ड डॉक्स आदि के लिए एजेंट स्किल्स।',
    piModelsMetadata: 'Pi एक्सटेंशन जो किसी प्रोवाइडर के मॉडल सूचीबद्ध करता है और OpenRouter मेटाडेटा जोड़ता है।',
    piTabFollowUp: 'Tab से फ़ॉलो-अप संदेश भेजने के लिए Pi एक्सटेंशन।',
    piUiFinetune: 'Pi एक्सटेंशन जो लंबे टूल परिणामों का संक्षिप्त प्रदर्शन छोटा करता है।',
    codePrompt: 'CLI जो AI प्रॉम्प्ट, दस्तावेज़ या साझा करने के लिए सोर्स फ़ाइलों को एक फ़ाइल में जोड़ता है।',
    flBuild: 'Flutter प्रोजेक्ट के लिए बिल्ड स्क्रिप्ट, pubspec.yaml में कॉन्फ़िगर।',
    utilsFish: 'आर्काइव और सिस्टम प्रबंधन के लिए fish shell यूटिलिटी।',
    adbMdns: 'जब mDNS डिवाइस खोज लेता है पर अपने-आप कनेक्ट नहीं होता, तब Wi-Fi adb से Android डिवाइस जोड़ता है।',
    gogsTheme: 'Gogs के लिए स्वचालित डार्क मोड।',
    giteaCustom: 'Gitea के लिए कस्टम स्टाइल।',
    colorInverter: 'hex, rgb या rgba में दिए गए रंगों को उलटता है।',
    miwifi: 'इंट्रानेट सेवाएँ बाहर उपलब्ध कराने के लिए Mi WiFi राउटर का पब्लिक IP प्राप्त करता है।',
  },
  libraries: {
    title: 'लाइब्रेरी',
    flLib: 'ऊपर के Flutter ऐप्स की साझा लाइब्रेरी।',
    redfish: 'सर्वर BMC द्वारा दी जाने वाली DMTF Redfish API का क्लाइंट।',
    imageHash: 'डुप्लिकेट और मिलती-जुलती इमेज खोजने के लिए इमेज हैश।',
    ntexBasicauth: 'ntex के लिए Basic ऑथराइज़ेशन मिडलवेयर।',
    ntexRatelimiter: 'ntex के लिए रेट लिमिटिंग मिडलवेयर।',
    qcl: 'Query Check Language, एक्सेस कंट्रोल जाँच के लिए छोटी एक्सप्रेशन भाषा।',
    term: 'टर्मिनल नियंत्रण: कर्सर, रंग और टेक्स्ट।',
    flMagnetic: 'Flutter के लिए Magnetic-शैली का तैरता बबल पिकर।',
    webdavClient: 'WebDAV क्लाइंट, webdav_client का अनुरक्षित फ़ोर्क।',
    exaGo: 'Exa सर्च API के लिए SDK।',
  },
  footer: {
    blog: 'ब्लॉग',
    status: 'स्थिति',
  },
}

export default hi
