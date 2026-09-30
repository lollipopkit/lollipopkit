// Plain data: `scripts/readme.ts` imports this file in Node, so no asset imports here.

const gh = 'https://github.com/lollipopkit'

/** Fields every listed project has, and which the filters and sorting read. */
export interface Listed {
  name: string
  /**
   * The main programming language, as GitHub names it, except where GitHub counts native
   * runner code over the project's own (noted inline).
   */
  language: string
  /** SPDX id; `null` when the repo has no license. */
  license: string | null
}

export interface App extends Listed {
  /** The key under `apps` in the translations. */
  key: 'serverbox' | 'mmetrics' | 'mfuse' | 'llmbox'
  /** A file name in `src/assets/icons/`: SVG when the project has one, PNG otherwise. */
  icon: string
  site?: string
  repo: string
  /** Platforms and frameworks: proper nouns, not translated. */
  tags: string[]
  /** Taken from the project's own icon. */
  accent: string
  featured?: boolean
}

export interface Tool extends Listed {
  /** The key under `tools` in the translations. */
  key:
    | 'monitor'
    | 'lk'
    | 'utilsFish'
    | 'exedevCli'
    | 'ormc'
    | 'piModelsMetadata'
    | 'liquidGlass'
    | 'agentSkills'
    | 'piTabFollowUp'
    | 'piUiFinetune'
  site?: string
  repo: string
  tags: string[]
}

export interface Library extends Listed {
  /** The key under `libraries` in the translations. */
  key:
    | 'webdavClient'
    | 'qcl'
    | 'imageHash'
    | 'flLib'
    | 'redfish'
    | 'term'
    | 'flMagnetic'
    | 'ntexBasicauth'
    | 'ntexRatelimiter'
    | 'exaGo'
  /** The registry page when the package is published under this name, the repo otherwise. */
  href: string
}

export const apps: App[] = [
  {
    key: 'serverbox',
    name: 'ServerBox',
    icon: 'serverbox.png',
    site: 'https://serverbox.lollipopkit.com',
    repo: `${gh}/flutter_server_box`,
    language: 'Dart',
    license: 'AGPL-3.0',
    tags: ['iOS', 'Android', 'macOS', 'Linux', 'Windows', 'Flutter'],
    accent: '#8bc34a',
    featured: true,
  },
  {
    key: 'mmetrics',
    name: 'MMetrics',
    icon: 'mmetrics.svg',
    site: 'https://mmetrics.lollipopkit.com',
    repo: `${gh}/MMetrics`,
    language: 'Swift',
    license: 'MIT',
    tags: ['macOS 13+', 'Apple Silicon'],
    accent: '#b56cff',
  },
  {
    key: 'mfuse',
    name: 'MFuse',
    icon: 'mfuse.png',
    site: 'https://mfuse.lollipopkit.com',
    repo: `${gh}/mfuse`,
    language: 'Swift',
    license: 'AGPL-3.0',
    tags: ['macOS 14+'],
    accent: '#4fc3d0',
  },
  {
    // Formerly GPTBox; the repo and icon keep the old name.
    key: 'llmbox',
    name: 'LLMBox',
    icon: 'gptbox.png',
    repo: `${gh}/flutter_gpt_box`,
    language: 'Dart',
    license: 'GPL-3.0',
    tags: ['iOS', 'Android', 'macOS', 'Linux', 'Windows', 'Flutter'],
    accent: '#8c8c8c',
  },
]

export const tools: Tool[] = [
  {
    key: 'monitor',
    name: 'ServerBox Monitor',
    repo: `${gh}/flutter_server_box/tree/main/monitor`,
    language: 'Rust',
    license: 'AGPL-3.0',
    tags: [],
  },
  {
    key: 'lk',
    name: 'lk',
    site: 'https://lang.lollipopkit.com',
    repo: `${gh}/lk`,
    language: 'Rust',
    license: 'Apache-2.0',
    tags: [],
  },
  {
    key: 'utilsFish',
    name: 'utils.fish',
    repo: `${gh}/utils.fish`,
    language: 'Shell',
    license: 'AGPL-3.0',
    tags: ['fish'],
  },
  {
    key: 'exedevCli',
    name: 'exedev-cli',
    repo: `${gh}/exedev-cli`,
    language: 'Rust',
    license: 'OSL-3.0',
    tags: [],
  },
  {
    key: 'ormc',
    name: 'ORMC',
    site: 'https://ormc.lollipopkit.com',
    repo: `${gh}/or-models-compare`,
    language: 'JavaScript',
    license: 'GPL-3.0',
    tags: ['OpenRouter'],
  },
  {
    key: 'piModelsMetadata',
    name: 'pi-models-metadata',
    repo: `${gh}/pi-models-metadata`,
    language: 'TypeScript',
    license: null,
    tags: ['Pi', 'OpenRouter'],
  },
  {
    key: 'liquidGlass',
    name: 'Liquid Glass',
    site: 'https://liquid-glass.lollipopkit.com',
    repo: `${gh}/liquid-glass`,
    language: 'TypeScript',
    license: 'MIT',
    tags: ['React', 'Svelte', 'Vue'],
  },
  {
    key: 'agentSkills',
    name: 'agent-skills',
    repo: `${gh}/agent-skills`,
    language: 'Python',
    license: null,
    tags: ['Codex'],
  },
  {
    key: 'piTabFollowUp',
    name: 'pi-tab-follow-up',
    repo: `${gh}/pi-tab-follow-up`,
    language: 'TypeScript',
    license: 'OSL-3.0',
    tags: ['Pi'],
  },
  {
    key: 'piUiFinetune',
    name: 'pi-ui-finetune',
    repo: `${gh}/pi-ui-finetune`,
    language: 'TypeScript',
    license: 'OSL-3.0',
    tags: ['Pi'],
  },
]

export const libraries: Library[] = [
  // A fork of flymzero/webdav_client, published from this repo under its own name.
  {
    key: 'webdavClient',
    name: 'webdav_client_plus',
    language: 'Dart',
    license: 'BSD-3-Clause',
    href: 'https://pub.dev/packages/webdav_client_plus',
  },
  { key: 'qcl', name: 'qcl', language: 'Rust', license: 'Apache-2.0', href: 'https://crates.io/crates/qcl' },
  {
    key: 'imageHash',
    name: 'image_hash',
    language: 'Dart',
    license: 'MIT',
    href: 'https://pub.dev/packages/image_hash',
  },
  { key: 'flLib', name: 'fl_lib', language: 'Dart', license: 'GPL-3.0', href: `${gh}/fl_lib` },
  { key: 'redfish', name: 'redfish', language: 'Dart', license: 'Apache-2.0', href: `${gh}/redfish` },
  { key: 'term', name: 'term', language: 'Dart', license: 'MIT', href: 'https://pub.dev/packages/term' },
  {
    key: 'flMagnetic',
    name: 'fl_magnetic',
    language: 'Dart',
    license: 'Apache-2.0',
    href: 'https://pub.dev/packages/fl_magnetic',
  },
  {
    key: 'ntexBasicauth',
    name: 'ntex-basicauth',
    language: 'Rust',
    license: null,
    href: 'https://crates.io/crates/ntex-basicauth',
  },
  {
    key: 'ntexRatelimiter',
    name: 'ntex-ratelimiter',
    language: 'Rust',
    license: 'MIT',
    href: 'https://crates.io/crates/ntex-ratelimiter',
  },
  { key: 'exaGo', name: 'exa', language: 'Go', license: 'Apache-2.0', href: `${gh}/exa` },
]
