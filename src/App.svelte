<script>
  import { onMount } from 'svelte'
  import LL, { setLocale } from './i18n/i18n-svelte'
  import { loadLocale } from './i18n/i18n-util.sync'
  import { getInitialLocale, locales, localeStorageKey, syncLocaleToUrl } from './lib/i18n.js'
  import { apps, libraries, tools } from './lib/projects.js'
  import {
    ALL,
    NO_LICENSE,
    applyFilters,
    defaultFilters,
    optionsOf,
    readFilters,
    syncFiltersToUrl,
  } from './lib/filters.js'

  const github = 'https://github.com/lollipopkit'
  const blog = 'https://blog.lollipopkit.com'
  const cdn = 'https://cdn.lollipopkit.com'
  // Uptimer; its source is private, so only the site is linked.
  const status = 'https://up.lolli.tech'

  const initialLocale = typeof window === 'undefined' ? undefined : getInitialLocale()

  if (initialLocale) {
    loadLocale(initialLocale)
    setLocale(initialLocale)
  }

  let locale = $state(initialLocale)
  let isMounted = $state(false)

  const listed = [...apps, ...tools, ...libraries]
  const languages = optionsOf(listed, 'language')
  const licenses = optionsOf(listed, 'license')
  const libraryLanguages = optionsOf(libraries, 'language')

  let filters = $state(
    typeof window === 'undefined'
      ? { ...defaultFilters }
      : readFilters(window.location.search, { languages, licenses }),
  )

  const visibleApps = $derived(applyFilters(apps, filters))
  const visibleTools = $derived(applyFilters(tools, filters))
  const libraryGroups = $derived.by(() => {
    const visible = applyFilters(libraries, filters)
    return libraryLanguages
      .map((language) => ({ language, items: visible.filter((lib) => lib.language === language) }))
      .filter((group) => group.items.length > 0)
  })
  const isFiltered = $derived(
    filters.language !== defaultFilters.language ||
      filters.license !== defaultFilters.license ||
      filters.sort !== defaultFilters.sort,
  )
  const isEmpty = $derived(
    visibleApps.length === 0 && visibleTools.length === 0 && libraryGroups.length === 0,
  )

  /** @param {Partial<typeof filters>} next */
  function updateFilters(next) {
    Object.assign(filters, next)
    syncFiltersToUrl(filters)
  }

  function applyLocale(nextLocale) {
    locale = nextLocale
    loadLocale(nextLocale)
    setLocale(nextLocale)
    localStorage.setItem(localeStorageKey, nextLocale)
  }

  onMount(() => {
    const nextLocale = locale || getInitialLocale()
    applyLocale(nextLocale)
    syncLocaleToUrl(nextLocale)
    // Drops query values `readFilters` rejected, so the URL matches what is shown.
    syncFiltersToUrl(filters)

    isMounted = true
  })

  $effect(() => {
    if (!isMounted) return

    document.documentElement.lang = $LL.meta.lang()
    document.documentElement.dir = $LL.meta.dir()
    document.title = $LL.meta.title()
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', $LL.meta.description())
  })

  function handleLocaleChange(event) {
    const nextLocale = event.currentTarget.value
    applyLocale(nextLocale)
    syncLocaleToUrl(nextLocale)
  }
</script>

{#if locale && isMounted}
  <main class="site">
    <header class="site-nav" id="top">
      <a class="brand" href="#top">
        <img src="/favicon.png" alt="" width="22" height="22" />
        lollipopkit
      </a>
      <nav>
        {#if visibleApps.length}<a href="#apps">{$LL.nav.apps()}</a>{/if}
        {#if visibleTools.length}<a href="#tools">{$LL.nav.tools()}</a>{/if}
        {#if libraryGroups.length}<a href="#libraries">{$LL.nav.libraries()}</a>{/if}
      </nav>
      <div class="nav-actions">
        <label class="language-switcher">
          <span class="sr-only">{$LL.nav.languageLabel()}</span>
          <select
            id="locale"
            name="locale"
            aria-label={$LL.nav.languageLabel()}
            value={locale}
            onchange={handleLocaleChange}
          >
            {#each locales as item}
              <option value={item.code}>{item.label}</option>
            {/each}
          </select>
        </label>
        <a class="nav-cta" href={github}>GitHub</a>
      </div>
    </header>

    <section class="hero">
      <h1>{$LL.hero.title()}</h1>
      <p class="hero-subtitle">{$LL.hero.subtitle()}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">{$LL.hero.primaryAction()}</a>
        <a class="btn btn-secondary" href={github}>GitHub</a>
      </div>
    </section>

    <div class="filter-bar" id="projects" role="search" aria-label={$LL.filters.label()}>
      <label class="filter">
        <span>{$LL.filters.language()}</span>
        <select
          value={filters.language}
          onchange={(event) => updateFilters({ language: event.currentTarget.value })}
        >
          <option value={ALL}>{$LL.filters.all()}</option>
          {#each languages as language}
            <option value={language}>{language}</option>
          {/each}
        </select>
      </label>
      <label class="filter">
        <span>{$LL.filters.license()}</span>
        <select
          value={filters.license}
          onchange={(event) => updateFilters({ license: event.currentTarget.value })}
        >
          <option value={ALL}>{$LL.filters.all()}</option>
          {#each licenses as license}
            <option value={license}>
              {license === NO_LICENSE ? $LL.filters.noLicense() : license}
            </option>
          {/each}
        </select>
      </label>
      <label class="filter">
        <span>{$LL.filters.sort()}</span>
        <select
          value={filters.sort}
          onchange={(event) =>
            updateFilters({ sort: event.currentTarget.value === 'name' ? 'name' : 'default' })}
        >
          <option value="default">{$LL.filters.sortDefault()}</option>
          <option value="name">{$LL.filters.sortName()}</option>
        </select>
      </label>
      {#if isFiltered}
        <button class="filter-reset" type="button" onclick={() => updateFilters(defaultFilters)}>
          {$LL.filters.reset()}
        </button>
      {/if}
    </div>

    {#if isEmpty}
      <p class="filter-empty">{$LL.filters.empty()}</p>
    {/if}

    {#if visibleApps.length}
    <section class="page-section" id="apps">
      <h2 class="section-title">{$LL.apps.title()}</h2>

      <div class="app-grid">
        {#each visibleApps as app (app.key)}
          <article
            class="app-card"
            class:featured={app.featured && filters.sort === 'default'}
            style:--accent={app.accent}
          >
            <div class="app-head">
              <img class="app-icon" src={app.icon} alt="" width="64" height="64" />
              <div>
                <h3>{app.name}</h3>
                <p class="app-tagline">{$LL.apps[app.key].tagline()}</p>
              </div>
            </div>
            <p class="card-description">{$LL.apps[app.key].description()}</p>
            <ul class="tags">
              {#each [...app.tags, app.language, app.license].filter(Boolean) as tag}
                <li dir="ltr">{tag}</li>
              {/each}
            </ul>
            <div class="app-actions">
              {#if app.site}
                <a class="btn btn-primary" href={app.site}>{$LL.links.website()}</a>
              {/if}
              <a class="btn" class:btn-primary={!app.site} class:btn-secondary={app.site} href={app.repo}>
                {$LL.links.source()}
              </a>
            </div>
          </article>
        {/each}
      </div>
    </section>

    {/if}

    {#if visibleTools.length}
    <section class="page-section" id="tools">
      <h2 class="section-title">{$LL.tools.title()}</h2>

      <div class="tool-grid">
        {#each visibleTools as tool (tool.key)}
          <article class="tool-card">
            <h3>{tool.name}</h3>
            <p class="card-description">{$LL.tools[tool.key]()}</p>
            <ul class="tags">
              {#each [...tool.tags, tool.language, tool.license].filter(Boolean) as tag}
                <li dir="ltr">{tag}</li>
              {/each}
            </ul>
            <div class="tool-links">
              {#if tool.site}
                <a href={tool.site}>{$LL.links.website()}</a>
              {/if}
              <a href={tool.repo}>{$LL.links.source()}</a>
            </div>
          </article>
        {/each}
      </div>
    </section>

    {/if}

    {#if libraryGroups.length}
    <section class="page-section" id="libraries">
      <h2 class="section-title">{$LL.libraries.title()}</h2>

      <div class="library-groups">
        {#each libraryGroups as group (group.language)}
          <div class="library-group">
            <h3>{group.language}</h3>
            <ul class="library-list">
              {#each group.items as lib (lib.key)}
                <li>
                  <div class="library-name">
                    <a href={lib.href} dir="ltr">{lib.name}</a>
                    {#if lib.license}<span class="library-license" dir="ltr">{lib.license}</span>{/if}
                  </div>
                  <span class="library-description">{$LL.libraries[lib.key]()}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </section>

    {/if}

    <footer class="site-footer">
      <span dir="ltr">© 2026 lollipopkit</span>
      <div class="footer-links">
        <a href={github}>GitHub</a>
        <a href={blog}>{$LL.footer.blog()}</a>
        <a href={status}>{$LL.footer.status()}</a>
        <a href={cdn}>CDN</a>
      </div>
    </footer>
  </main>
{/if}
