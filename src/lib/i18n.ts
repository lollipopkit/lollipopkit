import { setLocale } from '../i18n/i18n-svelte'
import type { Locales } from '../i18n/i18n-types'
import { baseLocale, locales as generatedLocales } from '../i18n/i18n-util'
import { loadLocale } from '../i18n/i18n-util.sync'

export const defaultLocale = baseLocale

const declaredLocales: { code: Locales; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
]

export const locales = declaredLocales.filter((locale) => generatedLocales.includes(locale.code))

export const localeStorageKey = 'lollipopkit.website.locale'

/**
 * Narrows an arbitrary string to a locale the site actually offers: one the generated
 * bundle has *and* the selector lists.
 *
 * Resolving against the generated bundle alone let a locale nobody declared become the
 * active one — a `fr` bundle left by an earlier build answers `?lang=fr`, and the selector
 * then holds no entry for the language the page is being shown in.
 */
function isSupportedLocale(locale: string): locale is Locales {
  return locales.some((supported) => supported.code === locale)
}

/**
 * The locale a value asks for, or `undefined` when it asks for one this bundle does not
 * have. A tag it can be resolved from — `zh-TW`, `en-GB` — is resolved, not rejected.
 */
export function resolveLocale(locale: string | null | undefined): Locales | undefined {
  if (!locale) return undefined
  if (isSupportedLocale(locale)) return locale

  // Match on the language subtag: `es-MX` → `es`, `zh-TW` → `zh-CN`.
  const language = locale.toLowerCase().split(/[-_]/)[0]
  return locales.find((supported) => supported.code.toLowerCase().split('-')[0] === language)?.code
}

export function normalizeLocale(locale: string | null | undefined): Locales {
  return resolveLocale(locale) ?? defaultLocale
}

/**
 * The first source that names a locale this bundle has: the query string, then what was
 * stored, then the browser.
 *
 * A value none of them can be resolved from is skipped rather than answered with the
 * default — a bookmarked `?lang=fr`, or `fr` left in storage by an earlier build, would
 * otherwise stand in for a preference and keep a browser set to a supported locale from
 * being read at all.
 */
export function getInitialLocale() {
  const params = new URLSearchParams(window.location.search)
  const queryLocale = resolveLocale(params.get('lang'))
  if (queryLocale) return queryLocale

  const storedLocale = resolveLocale(localStorage.getItem(localeStorageKey))
  if (storedLocale) return storedLocale

  // Every language the browser lists, in the order it lists them: reading only the first
  // one answered `['fr-FR', 'zh-CN']` with the default, because an unsupported first entry
  // stood in for the whole preference list.
  const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const browserLocale of browserLocales) {
    const resolved = resolveLocale(browserLocale)
    if (resolved) return resolved
  }

  return defaultLocale
}

export function syncLocaleToUrl(locale: string | null | undefined) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', normalizeLocale(locale))
  window.history.replaceState({}, '', url)
}

/**
 * Loads and activates a locale for this page without recording it as a preference — what
 * a page does before its first render, from `getInitialLocale()`.
 */
export function activateLocale(locale: Locales) {
  loadLocale(locale)
  setLocale(locale)
}

/**
 * A locale the user chose, or the one a page settled on once mounted: activated,
 * remembered for every page of the site, and written to the URL so a shared link keeps it.
 */
export function chooseLocale(locale: string | null | undefined) {
  const resolved = normalizeLocale(locale)
  activateLocale(resolved)
  localStorage.setItem(localeStorageKey, resolved)
  syncLocaleToUrl(resolved)
}
