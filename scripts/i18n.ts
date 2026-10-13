// Runs the typesafe-i18n generator. It needs the TypeScript compiler API, which TypeScript 7
// no longer ships, so its `typescript` import resolves to the TypeScript 6 compatibility package.
// TODO: remove this script and `@typescript/typescript6` once typesafe-i18n supports TypeScript 7.
//
//   node scripts/i18n.ts --no-watch
import { registerHooks } from 'node:module'

registerHooks({
  resolve: (specifier, context, next) =>
    next(specifier === 'typescript' ? '@typescript/typescript6' : specifier, context),
})

// The package's `exports` leave out the CLI, so it is loaded by path.
await import(new URL('../node_modules/typesafe-i18n/cli/typesafe-i18n.mjs', import.meta.url).href)
