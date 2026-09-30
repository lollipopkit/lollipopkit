// Writes the project list in README.md (the GitHub profile) from the data the site uses,
// so the profile and lollipopkit.com list the same projects.
//
//   node scripts/readme.ts          rewrite README.md
//   node scripts/readme.ts --check  exit 1 when README.md is out of date
import { readFile, writeFile } from 'node:fs/promises'
import base from '../src/i18n/en/index.ts'
import type { Translation } from '../src/i18n/i18n-types.ts'
import { apps, libraries, tools } from '../src/lib/projects.ts'

// The base locale is typed as the loose `BaseTranslation`; the generated type has the keys.
const en = base as Translation

const readme = new URL('../README.md', import.meta.url)
const start = '<!-- projects:start -->'
const end = '<!-- projects:end -->'

const siteLink = (site: string | undefined) => (site ? ` · [Website](${site})` : '')

const lines = [
  start,
  '<!-- Generated from src/lib/projects.ts by `npm run readme`; do not edit by hand. -->',
  '',
  '### Apps',
  '',
  '| | App | About |',
  '|---|---|---|',
  ...apps.map(
    (app) =>
      `| <img src="src/assets/icons/${app.icon}" alt="" width="32"> | **[${app.name}](${app.repo})** | ` +
      `${en.apps[app.key].tagline}${siteLink(app.site)} |`,
  ),
  '',
  '### Tools',
  '',
  ...tools.map((tool) => `- [${tool.name}](${tool.repo}) — ${en.tools[tool.key]}${siteLink(tool.site)}`),
  '',
  '### Libraries',
  '',
  ...libraries.map((lib) => `- [${lib.name}](${lib.href}) \`${lib.language}\` — ${en.libraries[lib.key]}`),
  '',
  'Filter by language and license on [lollipopkit.com](https://lollipopkit.com).',
  end,
]

const current = await readFile(readme, 'utf8')
const from = current.indexOf(start)
const to = current.indexOf(end)
if (from < 0 || to < from) throw new Error(`README.md needs the ${start} and ${end} markers`)
const next = current.slice(0, from) + lines.join('\n') + current.slice(to + end.length)

if (process.argv.includes('--check')) {
  if (next !== current) {
    console.error('README.md is out of date; run `npm run readme`.')
    process.exit(1)
  }
} else if (next !== current) {
  await writeFile(readme, next)
}
