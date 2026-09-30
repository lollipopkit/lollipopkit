# lollipopkit.com

Home page for lollipopkit's projects: one place that introduces the apps and tools and
links out to each project's own site, repo and downloads.

Status: the page lists apps, tools and libraries (`src/lib/projects.js`), filterable by
programming language and license and sortable by name (`src/lib/filters.js`; the state is
kept in the `language` / `license` / `sort` query parameters). Sorting by stars or last
update was left out on purpose: it would need a GitHub API call at build time. Live at
`lollipopkit.com` (Cloudflare Pages, see below). This file is the brief.

The repo is also the GitHub profile repo, so the root `README.md` is the profile page.
Its project list, between the `projects:start` / `projects:end` markers, is generated
from `src/lib/projects.js` and the English copy by `npm run readme`; `npm run check`
fails when it is out of date. Keep `src/lib/projects.js` free of asset imports so Node
can load it. `avatars/` and `logos/` belong to the profile, not the site.

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
| ServerBox Monitor | [flutter_server_box/monitor](https://github.com/lollipopkit/flutter_server_box/tree/main/monitor) | — | Server-side agent for ServerBox. Rust. The old Go repo `server_box_monitor` is superseded. |
| GPTBox | [flutter_gpt_box](https://github.com/lollipopkit/flutter_gpt_box) | — | Third-party client for the OpenAI API. Flutter. |
| MMetrics | [MMetrics](https://github.com/lollipopkit/MMetrics) | [mmetrics.lollipopkit.com](https://mmetrics.lollipopkit.com) | Apple Silicon system monitor for the menu bar. Swift, macOS. |
| MFuse | [mfuse](https://github.com/lollipopkit/mfuse) | [mfuse.lollipopkit.com](https://mfuse.lollipopkit.com) | Mount SFTP, S3, WebDAV, SMB, FTP, NFS, Google Drive in Finder via File Provider. Swift, macOS. |
| lk | [lk](https://github.com/lollipopkit/lk) | [lang.lollipopkit.com](https://lang.lollipopkit.com) | A lightweight programming language written in Rust. |
| ORMC | [or-models-compare](https://github.com/lollipopkit/or-models-compare) | [ormc.lollipopkit.com](https://ormc.lollipopkit.com) | OpenRouter models, updated daily, with price and context comparison. |
| exedev-cli | [exedev-cli](https://github.com/lollipopkit/exedev-cli) | — | Unofficial CLI for exe.dev. Rust. |
| sysinfo-api-mcp | [sysinfo-api-mcp](https://github.com/lollipopkit/sysinfo-api-mcp) | — | System information API / MCP server. Rust. |
| Liquid Glass | [liquid-glass](https://github.com/lollipopkit/liquid-glass) | [liquid-glass.lollipopkit.com](https://liquid-glass.lollipopkit.com) | Liquid glass / refraction effects for React, Svelte, Vue. |

On the page, ServerBox, MMetrics, MFuse and GPTBox are **Apps** (cards with icons); the
rest are **Tools** (compact cards, no icon — none of those repos has one).

`src/lib/projects.js` also lists other public, non-archived repos that are usable tools or
libraries. Forks count only when published under their own name (pub.dev publisher
`lpkt.cn`, crates.io / npm user `lollipopkit`): `gh repo list --source` misses them, so check
the registries too. Left out on purpose:

- Removed by the owner: cc-plugins, shtg, flounder, fl_codepush_box, polyglot-ci,
  ai_merge_action, app_dist, nano-db, gcwd, sophon-bm1688-debian, riverpod_reg,
  example_gen, apple_machine_ids.dart, mcp.dart, boa.dart, lru.dart, async_queue.dart,
  dash_lru.rs, gqcl, nano-db-sdk-go, go-lru-cacher, go-var-listener, gommon.
- Data repos that only feed ServerBox (`shellbox-rootfs`, `ipgeo-shards`),
  `trailbase.skill` (included in `agent-skills`), `gu` (no README), and config repos
  (`dotfiles`, `nvim-cfg`, homebrew taps).

Each project's icon lives in its repo (e.g. MMetrics: `assets/icon/icon.svg`); copy
them in rather than hot-linking, and prefer SVG where the project has one. Copied so far,
into `src/assets/icons/`:

- ServerBox — `assets/app_icon.png` (artwork only), put on a tile by `scripts/tile-icon.py`
  with content scale 0.66. Its macOS icon has a plain white tile with no edge, which
  disappears on a white page.
- MMetrics — `assets/icon/icon.svg`.
- GPTBox — `assets/app_icon.png` (artwork only), put on a tile by `scripts/tile-icon.py`
  with content scale 0.62. Its macOS icon is still the Flutter placeholder.
- MFuse — the app icon ships without an alpha channel, so `scripts/mfuse-icon.py` cuts
  it out of `app_icon_512x512@2x.png`. `website/public/favicon.svg` in that repo is the
  Vite logo; do not use it. Likewise ServerBox's `docs/public/favicon.svg` is the Starlight
  default.

The site's own icon is `public/favicon.png` (180px, also the `apple-touch-icon`).

Project data (links, tags, accents) is in `src/lib/projects.js`; copy is in
`src/i18n/<locale>/index.ts`.

### Libraries (short list)

Dart: fl_lib, redfish, image_hash, term, fl_magnetic, webdav_client_plus (a fork, published
under its own name). Rust: ntex-basicauth,
ntex-ratelimiter, qcl. Go: exa.

A library links to its pub.dev / crates.io page only when that page is this repo's
package; check the registry's repository field before linking, since short names are often
someone else's.

### Links kept from the current root page

The footer links GitHub (https://github.com/lollipopkit), the blog
(https://blog.lollipopkit.com), the status page (https://up.lolli.tech, Uptimer; its source
is private) and the CDN (https://cdn.lollipopkit.com, the old root page with the downloads). ORMC is a Tools
card. The owner chose not to link the LGBT+ Avatar Gen (https://tsag.lpkt.cn) or JWT
(https://jwt.lpkt.cn) sites that the current root page lists.

The old download paths, `/serverbox`, `/gptbox`, `/donate`, redirect to the CDN (see below).

To confirm with the owner before listing: `ipgeo.lollipopkit.com` (the ipgeo-shards data,
Pages project `ipgeo-shards`), `sbmd.lollipopkit.com` (the ServerBox Monitor web panel,
Pages project `sbmd`, built from `flutter_server_box/monitor/frontend`).

## Domain and deployment

Target: `lollipopkit.com` (root).

The root used to be a proxied CNAME to `cdn.lolli.tech`, an nginx server that also served
`/serverbox/`, `/gptbox/` and `/donate/` (download files). Those files are also on
`cdn.lollipopkit.com`, so `public/_redirects` sends the old paths there with a 301. The
old root page linked nothing else under `lollipopkit.com`, and no local repo references
a bare `lollipopkit.com/<path>`.

Deployed like the MMetrics site: Cloudflare Pages project `lollipopkit`
(<https://lollipopkit.pages.dev>), connected to `lollipopkit/lollipopkit`, production
branch `main`, `npm run build` → `dist`, build image v3 with build caching; every other
branch gets a preview at `<branch>.lollipopkit.pages.dev`. Custom domain: `lollipopkit.com`.
`.node-version` pins Node 24 for the build: `scripts/readme.js` imports a `.ts` file and
relies on Node's built-in type stripping.
A Pages project cannot switch to another repo, so the move from the archived
`lollipopkit/lollipopkit-com` created this project; the old `lollipopkit-com` project is deleted.
`www.lollipopkit.com` is a proxied CNAME that a zone Redirect Rule sends to
`https://lollipopkit.com` (301, path and query kept); it is not a Pages domain, since the
rule answers first and Pages' HTTP validation of it could never pass.
Cloudflare credentials are keychain generic passwords `cloudflare-account-id` and
`cloudflare-api-token`; pass them through env vars, never print them.

## Develop

```bash
npm install && npm run dev
npm run check      # tsc against both jsconfig files, README project list up to date
npm run readme     # regenerate the README project list
npm run build      # npm ci, check, vite build
```

Regenerating `src/i18n/` and checking `.svelte` files both need pinned tools run from
outside the project; follow `website/README.md` in the MMetrics repo. New keys go into
`src/i18n/en/index.ts` first.
