<script lang="ts">
  import { onMount } from 'svelte'
  import LL, { locale } from './i18n/i18n-svelte'
  import { activateLocale, chooseLocale, getInitialLocale } from './lib/i18n'
  import LanguageSelect from './lib/LanguageSelect.svelte'

  // One Markdown file per locale, rendered to HTML at build time (see vite.config.ts).
  // A locale without its own translation falls back to English, which is authoritative.
  const policies = import.meta.glob<string>('./privacy/*.md', { eager: true, import: 'default' })
  const policy = $derived(policies[`./privacy/${$locale}.md`] ?? policies['./privacy/en.md'])

  const initialLocale = getInitialLocale()
  activateLocale(initialLocale)

  onMount(() => {
    chooseLocale(initialLocale)
  })

  $effect(() => {
    document.documentElement.lang = $LL.meta.lang()
    document.documentElement.dir = $LL.meta.dir()
    document.title = $LL.privacy.title()
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', $LL.privacy.description())
  })
</script>

<header class="site-nav">
  <a class="brand" href="/" dir="ltr">lollipopkit</a>
  <div class="nav-actions">
    <LanguageSelect />
  </div>
</header>

<main class="policy">
  {@html policy}
</main>

<footer class="site-footer">
  <span dir="ltr">© 2026 lollipopkit</span>
  <div class="footer-links">
    <a href="/" dir="ltr">lollipopkit.com</a>
    <a href="https://github.com/lollipopkit">GitHub</a>
  </div>
</footer>
