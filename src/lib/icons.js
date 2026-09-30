/** @type {Record<string, string>} */
const urls = import.meta.glob('../assets/icons/*', { eager: true, query: '?url', import: 'default' })

/**
 * @param {string} file  A file name in `src/assets/icons/`.
 * @returns {string}
 */
export function iconUrl(file) {
  const url = urls[`../assets/icons/${file}`]
  if (!url) throw new Error(`Unknown icon: ${file}`)
  return url
}
