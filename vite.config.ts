import { defineConfig, type Plugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { marked } from 'marked'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Imports a `.md` file as the HTML it renders to. Done at build time, so the policy page
 * ships no Markdown runtime; the files are this repo's own content, never user input.
 */
function markdownHtml(): Plugin {
  return {
    name: 'markdown-html',
    transform(code, id) {
      if (!id.endsWith('.md')) return null
      const html = marked.parse(code, { async: false })
      return { code: `export default ${JSON.stringify(html)}`, map: null }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), markdownHtml()],
  build: {
    rolldownOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy.html'),
      },
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, 'src/lib'),
    },
  },
})
