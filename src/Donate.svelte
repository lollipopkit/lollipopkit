<script lang="ts">
  import { onMount } from 'svelte'
  import LL from './i18n/i18n-svelte'
  import { activateLocale, chooseLocale, getInitialLocale } from './lib/i18n'
  import LanguageSelect from './lib/LanguageSelect.svelte'
  import { loadDonations, loadLinks } from './lib/donate'

  const links = loadLinks()
  const donations = loadDonations()

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

  {#await links}
    <p class="donate-status">{$LL.donate.loading()}</p>
  {:then links}
    <div class="donate-links">
      {#each links as link (link.url)}
        <a class="btn btn-primary" href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      {/each}
    </div>
  {:catch}
    <p class="donate-status">{$LL.donate.failed()}</p>
  {/await}

  <h2>{$LL.donate.donors()}</h2>
  {#await donations}
    <p class="donate-status">{$LL.donate.loading()}</p>
  {:then donations}
    <ul class="donor-list">
      {#each donations as donation, index (index)}
        <li>
          <span dir="auto">{donation.name}</span>
          <span class="donor-amount" dir="ltr">{donation.amount}</span>
        </li>
      {/each}
    </ul>
  {:catch}
    <p class="donate-status">{$LL.donate.failed()}</p>
  {/await}
</main>

<footer class="site-footer">
  <span dir="ltr">© 2026 lollipopkit</span>
  <div class="footer-links">
    <a href="/" dir="ltr">lollipopkit.com</a>
    <a href="https://github.com/lollipopkit">GitHub</a>
  </div>
</footer>
