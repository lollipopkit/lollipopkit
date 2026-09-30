const urls = import.meta.glob<string>('../assets/icons/*', { eager: true, query: '?url', import: 'default' })

/** @param file  A file name in `src/assets/icons/`. */
export function iconUrl(file: string): string {
  const url = urls[`../assets/icons/${file}`]
  if (!url) throw new Error(`Unknown icon: ${file}`)
  return url
}
