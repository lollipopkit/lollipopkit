import type { Listed } from './projects'

/** Filter value that matches everything. */
export const ALL = 'all'

/** Filter value for repos without a license; `license` is `null` on those. */
export const NO_LICENSE = 'none'

export type Sort = 'default' | 'name'

export const sorts: Sort[] = ['default', 'name']

export interface Filters {
  /** A language, or `ALL`. */
  language: string
  /** An SPDX id, `NO_LICENSE`, or `ALL`. */
  license: string
  sort: Sort
}

export const defaultFilters: Filters = { language: ALL, license: ALL, sort: 'default' }

const licenseOf = (item: Listed) => item.license ?? NO_LICENSE

const byName = (a: string, b: string) => a.localeCompare(b, 'en', { sensitivity: 'base' })

/**
 * The distinct values the listed items have, for a filter's options. `NO_LICENSE` sorts
 * last, so the option that names no license does not lead the list.
 */
export function optionsOf(items: Listed[], field: 'language' | 'license'): string[] {
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
 */
export function applyFilters<T extends Listed>(items: T[], filters: Filters): T[] {
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
 */
export function readFilters(search: string, offered: { languages: string[]; licenses: string[] }): Filters {
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
 */
export function syncFiltersToUrl(filters: Filters) {
  const url = new URL(window.location.href)
  for (const key of ['language', 'license', 'sort'] as const) {
    if (filters[key] === defaultFilters[key]) url.searchParams.delete(key)
    else url.searchParams.set(key, filters[key])
  }
  window.history.replaceState({}, '', url)
}
