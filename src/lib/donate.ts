// The CDN keeps the payment links and the donor list, the same files its old donate page
// read; it answers with `Access-Control-Allow-Origin: *`, so this site reads them directly.
const source = 'https://cdn.lollipopkit.com/donate'

export interface DonateLink {
  name: string
  url: string
}

export interface Donation {
  name: string
  /** As recorded, currency first: `CNY 5`, `USD 10`. */
  amount: string
}

/** `{ "Ko-fi": "https://ko-fi.com/…", … }`; entries that are not https URLs are dropped. */
export async function loadLinks(): Promise<DonateLink[]> {
  return entriesOf(await fetchJson('link.json'))
    .filter(([, url]) => isHttps(url))
    .map(([name, url]) => ({ name, url }))
}

/** `{ "<donor>": "<currency> <amount>", … }`, in the order the file lists them. */
export async function loadDonations(): Promise<Donation[]> {
  return entriesOf(await fetchJson('data.json')).map(([name, amount]) => ({ name, amount }))
}

async function fetchJson(file: string): Promise<unknown> {
  const response = await fetch(`${source}/${file}`)
  if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`)
  return response.json()
}

function entriesOf(value: unknown): [string, string][] {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error('Expected a JSON object')
  }
  return Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string')
}

function isHttps(url: string) {
  try {
    return new URL(url).protocol === 'https:'
  } catch {
    return false
  }
}
