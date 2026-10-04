<script lang="ts">
  import LL, { locale } from '../i18n/i18n-svelte'
  import { chooseLocale, locales } from './i18n'
</script>

<label class="language-switcher">
  <span class="sr-only">{$LL.nav.languageLabel()}</span>
  <select
    id="locale"
    name="locale"
    aria-label={$LL.nav.languageLabel()}
    value={$locale}
    onchange={(event) => chooseLocale(event.currentTarget.value)}
  >
    {#each locales as item}
      <option value={item.code}>{item.label}</option>
    {/each}
  </select>
</label>
