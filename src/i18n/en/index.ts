import type { BaseTranslation } from '../i18n-types.js'

const en: BaseTranslation = {
  meta: {
    lang: 'en',
    dir: 'ltr',
    title: 'lollipopkit — apps and tools',
    description:
      'Open-source apps, tools and libraries by lollipopkit: ServerBox for managing servers, MMetrics and MFuse for the Mac, and more.',
  },
  nav: {
    apps: 'Apps',
    tools: 'Tools',
    libraries: 'Libraries',
    languageLabel: 'Language',
  },
  hero: {
    title: 'Apps and tools by lollipopkit.',
    subtitle:
      'A server toolbox for every platform, native utilities for the Mac, and the tools and libraries behind them. All open source on GitHub.',
    primaryAction: 'See apps',
  },
  links: {
    website: 'Website',
    source: 'Source',
  },
  filters: {
    label: 'Filter projects',
    language: 'Programming language',
    license: 'License',
    sort: 'Sort',
    all: 'All',
    noLicense: 'No license',
    sortDefault: 'Default',
    sortName: 'Name',
    reset: 'Reset',
    empty: 'No projects match these filters.',
  },
  apps: {
    title: 'Apps',
    serverbox: {
      tagline: 'Server status and toolbox.',
      description:
        'Status charts for CPU, sensors, GPU and more, with an SSH terminal, SFTP, Docker, processes, services and S.M.A.R.T. in one app.',
    },
    mmetrics: {
      tagline: 'Apple Silicon system monitor for the menu bar.',
      description:
        'CPU clusters, GPU, power, temperatures, memory, battery, network and disk, read from native macOS interfaces.',
    },
    mfuse: {
      tagline: 'Remote storage in Finder.',
      description:
        'Mounts SFTP, S3, WebDAV, SMB, FTP, NFS, Google Drive, Dropbox and OneDrive through File Provider.',
    },
    gptbox: {
      tagline: 'Third-party client for the OpenAI API.',
      description:
        'Text, image and audio chat, with sync over WebDAV or iCloud and import from ChatGPT exports. Still in development.',
    },
  },
  tools: {
    title: 'Tools',
    monitor:
      'Server-side agent for ServerBox. Needed for push notifications, widgets and the watch app; also serves a web panel.',
    lk: 'A lightweight programming language written in Rust, with a VM and a native compiler backend.',
    ormc: 'OpenRouter models, updated daily, with price and context comparison.',
    liquidGlass: 'Liquid glass and refraction effects for React, Svelte and Vue.',
    exedevCli: 'Unofficial CLI for exe.dev.',
    sysinfoMcp: 'System information over a REST API and an MCP server.',
    iconsFinder: 'Gallery for the icons_plus Flutter package.',
    agentSkills: 'Agent skills for TrailBase, handoffs, linked docs and more.',
    piModelsMetadata: 'Pi extension that lists a provider’s models and adds OpenRouter metadata.',
    piTabFollowUp: 'Pi extension for sending follow-up messages with Tab.',
    piUiFinetune: 'Pi extension that shortens the collapsed display of verbose tool results.',
    codePrompt: 'CLI that gathers source files into one file for AI prompts, docs or sharing.',
    flBuild: 'Build script for Flutter projects, configured in pubspec.yaml.',
    utilsFish: 'fish shell utilities for archives and system management.',
    adbMdns: 'Connects to Android devices over Wi-Fi adb when mDNS discovery works but automatic connection does not.',
    gogsTheme: 'Automatic dark mode for Gogs.',
    giteaCustom: 'Custom styles for Gitea.',
    colorInverter: 'Inverts colors given as hex, rgb or rgba.',
    miwifi: 'Gets the public IP of a Mi WiFi router for exposing intranet services.',
  },
  libraries: {
    title: 'Libraries',
    flLib: 'Shared library for the Flutter apps above.',
    redfish: 'Client for the DMTF Redfish API that server BMCs expose.',
    imageHash: 'Image hashes for finding duplicate and similar images.',
    ntexBasicauth: 'Basic authorization middleware for ntex.',
    ntexRatelimiter: 'Rate limiting middleware for ntex.',
    qcl: 'Query Check Language, a small expression language for access control checks.',
    term: 'Terminal control: cursor, colors and text.',
    flMagnetic: 'Magnetic-style floating bubble picker for Flutter.',
    webdavClient: 'WebDAV client, a maintained fork of webdav_client.',
    exaGo: 'SDK for the Exa search API.',
  },
  footer: {
    blog: 'Blog',
    status: 'Status',
  },
}

export default en
