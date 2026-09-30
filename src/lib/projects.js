import serverboxIcon from '../assets/icons/serverbox.png'
import mmetricsIcon from '../assets/icons/mmetrics.svg'
import mfuseIcon from '../assets/icons/mfuse.png'
import gptboxIcon from '../assets/icons/gptbox.png'

const gh = 'https://github.com/lollipopkit'

/**
 * Fields every listed project has, and which the filters and sorting read.
 *
 * @typedef {object} Listed
 * @property {string} name
 * @property {string} language  The main programming language, as GitHub names it, except
 *   where GitHub counts native runner code over the project's own (noted inline).
 * @property {string | null} license  SPDX id; `null` when the repo has no license.
 */

/**
 * @typedef {Listed & {
 *   key: 'serverbox' | 'mmetrics' | 'mfuse' | 'gptbox',
 *   icon: string,
 *   site?: string,
 *   repo: string,
 *   tags: string[],
 *   accent: string,
 *   featured?: boolean,
 * }} App
 *   `key` is the key under `apps` in the translations. `icon` is SVG when the project has
 *   one, PNG otherwise. `tags` are platforms and frameworks: proper nouns, not translated.
 *   `accent` is taken from the project's own icon.
 */

/** @type {App[]} */
export const apps = [
  {
    key: 'serverbox',
    name: 'ServerBox',
    icon: serverboxIcon,
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
    icon: mmetricsIcon,
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
    icon: mfuseIcon,
    site: 'https://mfuse.lollipopkit.com',
    repo: `${gh}/mfuse`,
    language: 'Swift',
    license: 'AGPL-3.0',
    tags: ['macOS 14+'],
    accent: '#4fc3d0',
  },
  {
    key: 'gptbox',
    name: 'GPTBox',
    icon: gptboxIcon,
    repo: `${gh}/flutter_gpt_box`,
    language: 'Dart',
    license: 'GPL-3.0',
    tags: ['iOS', 'Android', 'macOS', 'Linux', 'Windows', 'Flutter'],
    accent: '#8c8c8c',
  },
]

/**
 * @typedef {Listed & {
 *   key: 'monitor' | 'lk' | 'ormc' | 'liquidGlass' | 'exedevCli' | 'sysinfoMcp'
 *     | 'iconsFinder' | 'agentSkills' | 'piModelsMetadata' | 'piTabFollowUp' | 'piUiFinetune' | 'codePrompt' | 'flBuild' | 'utilsFish' | 'adbMdns' | 'gogsTheme' | 'giteaCustom' | 'colorInverter' | 'miwifi',
 *   site?: string,
 *   repo: string,
 *   tags: string[],
 * }} Tool
 *   `key` is the key under `tools` in the translations.
 */

/** @type {Tool[]} */
export const tools = [
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
    key: 'ormc',
    name: 'ORMC',
    site: 'https://ormc.lollipopkit.com',
    repo: `${gh}/or-models-compare`,
    language: 'JavaScript',
    license: 'GPL-3.0',
    tags: ['OpenRouter'],
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
    key: 'exedevCli',
    name: 'exedev-cli',
    repo: `${gh}/exedev-cli`,
    language: 'Rust',
    license: 'OSL-3.0',
    tags: [],
  },
  {
    key: 'sysinfoMcp',
    name: 'sysinfo-api-mcp',
    repo: `${gh}/sysinfo-api-mcp`,
    language: 'Rust',
    license: 'GPL-3.0',
    tags: ['MCP'],
  },
  {
    // GitHub reports C++ (the native runners); the app is Flutter.
    key: 'iconsFinder',
    name: 'icons_finder',
    site: 'https://icon.lolli.tech',
    repo: `${gh}/icons_finder`,
    language: 'Dart',
    license: null,
    tags: ['Flutter'],
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
    key: 'piModelsMetadata',
    name: 'pi-models-metadata',
    repo: `${gh}/pi-models-metadata`,
    language: 'TypeScript',
    license: null,
    tags: ['Pi', 'OpenRouter'],
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
  {
    key: 'codePrompt',
    name: 'code_prompt.rs',
    repo: `${gh}/code_prompt.rs`,
    language: 'Rust',
    license: 'MIT',
    tags: [],
  },
  {
    key: 'flBuild',
    name: 'fl_build',
    repo: `${gh}/fl_build`,
    language: 'Dart',
    license: null,
    tags: ['Flutter'],
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
    key: 'adbMdns',
    name: 'fvck_adb_mDNS',
    repo: `${gh}/fvck_adb_mDNS`,
    language: 'Python',
    license: null,
    tags: ['Android'],
  },
  {
    key: 'gogsTheme',
    name: 'Gogs-auto-night-theme',
    repo: `${gh}/Gogs-auto-night-theme`,
    language: 'CSS',
    license: null,
    tags: ['Gogs'],
  },
  {
    key: 'giteaCustom',
    name: 'gitea-custom',
    repo: `${gh}/gitea-custom`,
    language: 'CSS',
    license: null,
    tags: ['Gitea'],
  },
  {
    key: 'colorInverter',
    name: 'color-inverter',
    repo: `${gh}/color-inverter`,
    language: 'Python',
    license: null,
    tags: [],
  },
  {
    key: 'miwifi',
    name: 'miwifi_auto_get_real_public_ip',
    repo: `${gh}/miwifi_auto_get_real_public_ip`,
    language: 'Python',
    license: null,
    tags: ['Mi WiFi'],
  },
]

/**
 * @typedef {Listed & {
 *   key: 'flLib' | 'imageHash' | 'redfish' | 'ntexBasicauth' | 'ntexRatelimiter' | 'qcl'
 *     | 'term' | 'flMagnetic' | 'webdavClient' | 'exaGo',
 *   href: string,
 * }} Library
 *   `key` is the key under `libraries` in the translations. `href` is the registry page
 *   when the package is published under this name, the repo otherwise.
 */

/** @type {Library[]} */
export const libraries = [
  { key: 'flLib', name: 'fl_lib', language: 'Dart', license: 'GPL-3.0', href: `${gh}/fl_lib` },
  { key: 'redfish', name: 'redfish', language: 'Dart', license: 'Apache-2.0', href: `${gh}/redfish` },
  {
    key: 'imageHash',
    name: 'image_hash',
    language: 'Dart',
    license: 'MIT',
    href: 'https://pub.dev/packages/image_hash',
  },
  { key: 'term', name: 'term', language: 'Dart', license: 'MIT', href: 'https://pub.dev/packages/term' },
  {
    key: 'flMagnetic',
    name: 'fl_magnetic',
    language: 'Dart',
    license: 'Apache-2.0',
    href: 'https://pub.dev/packages/fl_magnetic',
  },
  // A fork of flymzero/webdav_client, published from this repo under its own name.
  {
    key: 'webdavClient',
    name: 'webdav_client_plus',
    language: 'Dart',
    license: 'BSD-3-Clause',
    href: 'https://pub.dev/packages/webdav_client_plus',
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
  { key: 'qcl', name: 'qcl', language: 'Rust', license: 'Apache-2.0', href: 'https://crates.io/crates/qcl' },
  { key: 'exaGo', name: 'exa', language: 'Go', license: 'Apache-2.0', href: `${gh}/exa` },
]
