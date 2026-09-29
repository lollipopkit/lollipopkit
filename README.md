# lollipopkit.com

Home page for lollipopkit's projects: one place that introduces the apps and tools and
links out to each project's own site, repo and downloads.

Status: not started. This README is the brief.

## Decisions

- **Stack** — same as the MMetrics and MFuse sites: Svelte 5 + Vite, typesafe-i18n,
  plain CSS (no Tailwind), npm with a committed lockfile. Start from
  `~/proj/mac-power-metric/website`, the leaner of the two (only svelte, vite,
  typesafe-i18n, typescript, @types/node); `~/proj/mfuse/website` carries unused deps.
- **Style** — the MFuse / MMetrics monochrome look: Cabinet Grotesk, 12px containers,
  pill buttons, light and dark via `prefers-color-scheme`. Per-project accent colors are
  fine where they come from the project itself.
- **Locales** — `en` (base), `zh-CN`, `hi`, `es`, `ar`: the five most spoken languages
  (Ethnologue 2025, total speakers). Copy from the MMetrics site:
  - `meta.dir` per locale; `ar` is RTL, so the page sets `<html dir>`.
  - Logical CSS properties (`inset-inline-end`, `padding-inline`, `text-align: start`),
    never hard-coded left/right.
  - Commands, URLs and code stay `dir="ltr"`.
  - `hi` / `ar` headings need `line-height: 1.35` and no negative letter-spacing.
  - Locale resolution matches on the language subtag (`es-MX` → `es`).
  - Regenerate `src/i18n/` with the pinned generator described in the MMetrics
    `website/README.md` (typesafe-i18n 5.27.1 + TypeScript 5.9.3, run from outside the
    project). Non-native translations should be marked for review.
- **No fabricated content** — no testimonials, no invented numbers. Star counts and
  similar figures change; fetch them at build time or leave them out.

## Content

### Apps and tools

| Project | Repo | Site | What it is |
|---------|------|------|------------|
| ServerBox | [flutter_server_box](https://github.com/lollipopkit/flutter_server_box) | [serverbox.lollipopkit.com](https://serverbox.lollipopkit.com) | Server status and toolbox: SSH terminal, SFTP, Docker, processes, systemd, charts. Flutter; iOS, Android, desktop. Flagship. |
| ServerBox Monitor | [server_box_monitor](https://github.com/lollipopkit/server_box_monitor) | — | Server-side companion for ServerBox. Go. |
| GPTBox | [flutter_gpt_box](https://github.com/lollipopkit/flutter_gpt_box) | — | Third-party client for the OpenAI API. Flutter. |
| MMetrics | [MMetrics](https://github.com/lollipopkit/MMetrics) | [mmetrics.lollipopkit.com](https://mmetrics.lollipopkit.com) | Apple Silicon system monitor for the menu bar. Swift, macOS. |
| MFuse | [mfuse](https://github.com/lollipopkit/mfuse) | [mfuse.lollipopkit.com](https://mfuse.lollipopkit.com) | Mount SFTP, S3, WebDAV, SMB, FTP, NFS, Google Drive in Finder via File Provider. Swift, macOS. |
| lk | [lk](https://github.com/lollipopkit/lk) | [lang.lollipopkit.com](https://lang.lollipopkit.com) | A lightweight programming language written in Rust. |
| ORMC | [or-models-compare](https://github.com/lollipopkit/or-models-compare) | [ormc.lollipopkit.com](https://ormc.lollipopkit.com) | OpenRouter models, updated daily, with price and context comparison. |
| shtg | [shtg](https://github.com/lollipopkit/shtg) | — | Tidy and sync zsh / fish history. Go. |
| exedev-cli | [exedev-cli](https://github.com/lollipopkit/exedev-cli) | — | Unofficial CLI for exe.dev. Rust. |
| sysinfo-api-mcp | [sysinfo-api-mcp](https://github.com/lollipopkit/sysinfo-api-mcp) | — | System information API / MCP server. Rust. |
| cc-plugins | [cc-plugins](https://github.com/lollipopkit/cc-plugins) | — | Claude Code plugins. |

Each project's icon lives in its repo (e.g. MMetrics: `assets/icon/icon.svg`); copy
them in rather than hot-linking.

### Libraries (short list)

Dart: fl_lib, image_hash.dart, lru.dart, async_queue.dart, apple_machine_ids.dart,
riverpod_reg, redfish. Rust: ntex-basicauth, ntex-ratelimiter, qcl.

### Links kept from the current root page

The current `lollipopkit.com` page lists these; the new site keeps them:

- GitHub — https://github.com/lollipopkit
- Blog — https://blog.lpkt.cn
- LGBT+ Avatar Gen — https://tsag.lpkt.cn
- JWT — https://jwt.lpkt.cn
- OpenRouter Models Comparison — https://ormc.lpkt.cn
- Downloads: Server Box `/serverbox`, GPT Box `/gptbox`, Donate `/donate` (see below)

To confirm with the owner before listing: `ipgeo.lollipopkit.com`, `sbmd.lollipopkit.com`.

## Domain and deployment

Target: `lollipopkit.com` (root).

**Constraint — do not switch DNS until this is solved.** The root currently is a
proxied CNAME to `cdn.lolli.tech`, an nginx server that also serves `/serverbox/`,
`/gptbox/` and `/donate/` (download files). Pointing the root at Cloudflare Pages
drops those paths. The apps' source does not reference `lollipopkit.com/...`, but
external links and existing users may. Options:

1. A Pages Function under `functions/{serverbox,gptbox,donate}/` that proxies to the
   origin, keeping the URLs unchanged (needs an origin hostname that does not loop back
   through `lollipopkit.com`).
2. Move the downloads to a dedicated host (e.g. `cdn.lpkt.cn`) and redirect the old
   paths with `_redirects`.

Deploy like the MMetrics site: Cloudflare Pages connected to a GitHub repo (to create:
`lollipopkit/lollipopkit-com`), production branch `main`, `npm run build` → `dist`.
Cloudflare credentials are keychain generic passwords `cloudflare-account-id` and
`cloudflare-api-token`; pass them through env vars, never print them.

## Develop

```bash
npm install && npm run dev
npm run check      # tsc against both jsconfig files
npm run build      # npm ci, check, vite build
```
