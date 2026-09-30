/** @typedef {import('./projects.js').Listed} Listed */

/** Filter value that matches everything. */
export const ALL = 'all'

/** Filter value for repos without a license; `license` is `null` on those. */
export const NO_LICENSE = 'none'

/** @typedef {'default' | 'name'} Sort */

/** @type {Sort[]} */
export const sorts = ['default', 'name']

/**
 * @typedef {object} Filters
 * @property {string} language  A language, or `ALL`.
 * @property {string} license  An SPDX id, `NO_LICENSE`, or `ALL`.
 * @property {Sort} sort
 */

/** @type {Filters} */
export const defaultFilters = { language: ALL, license: ALL, sort: 'default' }

/** @param {Listed} item */
const licenseOf = (item) => item.license ?? NO_LICENSE

/** @param {string} a @param {string} b */
const byName = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })

/**
 * The distinct values the listed items have, for a filter's options. `NO_LICENSE` sorts
 * last, so the option that names no license does not lead the list.
 *
 * @param {Listed[]} items
 * @param {'language' | 'license'} field
 * @returns {string[]}
 */
export function optionsOf(items, field) {
  const values = new Set(items.map((item) => (field === 'license' ? licenseOf(item) : item.language)))
  return [...values].sort((a, b) => {
    if (a === NO_LICENSE) return 1
    if (b === NO_LICENSE) return -1
    return byName(a, b)
  })
}

/**
 * The items that pass the filters, in the requested order. `default` keeps the curated
 * order the data is written in.
 *
 * @template {Listed} T
 * @param {T[]} items
 * @param {Filters} filters
 * @returns {T[]}
 */
export function applyFilters(items, filters) {
  const matched = items.filter(
    (item) =>
      (filters.language === ALL || item.language === filters.language) &&
      (filters.license === ALL || licenseOf(item) === filters.license),
  )
  return filters.sort === 'name' ? matched.sort((a, b) => byName(a.name, b.name)) : matched
}

/**
 * Filters from the query string. A value the data does not offer falls back to the
 * default rather than filtering everything out: a link made before a project was removed
 * should still show a page.
 *
 * @param {string} search
 * @param {{ languages: string[], licenses: string[] }} offered
 * @returns {Filters}
 */
export function readFilters(search, offered) {
  const params = new URLSearchParams(search)
  const language = params.get('language')
  const license = params.get('license')
  const sort = params.get('sort')
  return {
    language: language && offered.languages.includes(language) ? language : ALL,
    license: license && offered.licenses.includes(license) ? license : ALL,
    sort: sorts.find((s) => s === sort) ?? 'default',
  }
}

/**
 * Mirrors the filters into the query string, leaving other parameters (`lang`) alone and
 * dropping ones at their default so the plain URL stays plain.
 *
 * @param {Filters} filters
 */
export function syncFiltersToUrl(filters) {
  const url = new URL(window.location.href)
  for (const key of /** @type {(keyof Filters)[]} */ (['language', 'license', 'sort'])) {
    if (filters[key] === defaultFilters[key]) url.searchParams.delete(key)
    else url.searchParams.set(key, filters[key])
  }
  window.history.replaceState({}, '', url)
}
