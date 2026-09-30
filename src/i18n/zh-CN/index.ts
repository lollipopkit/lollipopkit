import type { Translation } from '../i18n-types.js'

const zhCN: Translation = {
  meta: {
    lang: 'zh-CN',
    dir: 'ltr',
    title: 'lollipopkit — 应用与工具',
    description:
      'lollipopkit 的开源应用、工具和库：管理服务器的 ServerBox，Mac 上的 MMetrics 和 MFuse，以及更多。',
  },
  nav: {
    apps: '应用',
    tools: '工具',
    libraries: '库',
    languageLabel: '语言',
  },
  hero: {
    title: 'lollipopkit 的应用与工具。',
    subtitle: '覆盖全平台的服务器工具箱、Mac 原生工具，以及背后的工具和库。全部在 GitHub 开源。',
    primaryAction: '查看应用',
  },
  links: {
    website: '网站',
    source: '源码',
  },
  filters: {
    label: '筛选项目',
    language: '编程语言',
    license: 'License',
    sort: '排序',
    all: '全部',
    noLicense: '无 license',
    sortDefault: '默认',
    sortName: '名称',
    reset: '重置',
    empty: '没有符合筛选条件的项目。',
  },
  apps: {
    title: '应用',
    serverbox: {
      tagline: '服务器状态与工具箱。',
      description:
        'CPU、传感器、GPU 等状态图表，以及 SSH 终端、SFTP、Docker、进程、服务和 S.M.A.R.T.，集中在一个应用里。',
    },
    mmetrics: {
      tagline: '菜单栏里的 Apple Silicon 系统监控。',
      description: 'CPU 集群、GPU、功耗、温度、内存、电池、网络和磁盘，数据来自 macOS 原生接口。',
    },
    mfuse: {
      tagline: '在 Finder 中访问远程存储。',
      description:
        '通过 File Provider 挂载 SFTP、S3、WebDAV、SMB、FTP、NFS、Google Drive、Dropbox 和 OneDrive。',
    },
    llmbox: {
      tagline: 'Anthropic/OpenAI/Gemini API 第三方客户端。',
      description: '文本、图片和语音对话，支持 WebDAV / iCloud 同步和导入 ChatGPT 导出文件。仍在开发中。',
    },
  },
  tools: {
    title: '工具',
    monitor: 'ServerBox 的服务端 agent。推送通知、小组件和手表应用依赖它，也提供 Web 面板。',
    lk: '用 Rust 编写的轻量编程语言，包含 VM 和原生编译后端。',
    ormc: 'OpenRouter 模型列表，每日更新，可比较价格和上下文长度。',
    liquidGlass: '适用于 React、Svelte 和 Vue 的液态玻璃与折射效果。',
    exedevCli: 'exe.dev 的非官方 CLI。',
    agentSkills: '用于 TrailBase、handoff、linked doc 等场景的 agent skills。',
    piModelsMetadata: 'Pi 扩展：列出 provider 的模型并补充 OpenRouter 元数据。',
    piTabFollowUp: 'Pi 扩展：用 Tab 发送 follow-up 消息。',
    piUiFinetune: 'Pi 扩展：缩短冗长工具结果的折叠显示。',
    utilsFish: 'fish shell 工具集，用于压缩包处理和系统管理。',
  },
  libraries: {
    title: '库',
    flLib: '上面几个 Flutter 应用共用的库。',
    redfish: 'DMTF Redfish API 客户端，用于访问服务器 BMC。',
    imageHash: '计算图片哈希，用于查找重复和相似图片。',
    ntexBasicauth: 'ntex 的 Basic 认证中间件。',
    ntexRatelimiter: 'ntex 的限流中间件。',
    qcl: 'Query Check Language，用于访问控制检查的小型表达式语言。',
    term: '终端控制：光标、颜色和文本。',
    flMagnetic: 'Flutter 的 Magnetic 风格浮动气泡选择器。',
    webdavClient: 'WebDAV 客户端，webdav_client 的维护分支。',
    exaGo: 'Exa 搜索 API 的 SDK。',
  },
  footer: {
    blog: '博客',
    status: '服务状态',
  },
}

export default zhCN
