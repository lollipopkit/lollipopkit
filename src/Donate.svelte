<script lang="ts">
  import { onMount } from 'svelte'
  import LL from './i18n/i18n-svelte'
  import { activateLocale, chooseLocale, getInitialLocale } from './lib/i18n'
  import LanguageSelect from './lib/LanguageSelect.svelte'
  import { donations, links } from './lib/donate'

  const initialLocale = getInitialLocale()
  activateLocale(initialLocale)

  onMount(() => {
    chooseLocale(initialLocale)
  })

  $effect(() => {
    document.documentElement.lang = $LL.meta.lang()
    document.documentElement.dir = $LL.meta.dir()
    document.title = $LL.donate.title()
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', $LL.donate.description())
  })
</script>

<header class="site-nav">
  <a class="brand" href="/" dir="ltr">lollipopkit</a>
  <div class="nav-actions">
    <LanguageSelect />
  </div>
</header>

<main class="donate">
  <h1>{$LL.donate.heading()}</h1>
  <p class="donate-intro">{$LL.donate.intro()}</p>

  <div class="donate-links">
    {#each links as link (link.key)}
      <a class="btn btn-primary" href={link.url} target="_blank" rel="noopener noreferrer">
        {link.key === 'alipay' ? $LL.donate.alipay() : 'Ko-fi'}
      </a>
    {/each}
  </div>

  <h2>{$LL.donate.donors()}</h2>
  <ul class="donor-list">
    {#each donations as donation, index (index)}
      <li>
        <span dir="auto">{donation.name}</span>
        <span class="donor-amount" dir="ltr">{donation.currency} {donation.amount}</span>
      </li>
    {/each}
  </ul>
</main>

<footer class="site-footer">
  <span dir="ltr">© 2026 lollipopkit</span>
  <div class="footer-links">
    <a href="/" dir="ltr">lollipopkit.com</a>
    <a href="https://github.com/lollipopkit">GitHub</a>
  </div>
</footer>
