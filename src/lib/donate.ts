export interface DonateLink {
  /** `alipay` takes its label from the locale; the others are brand names. */
  key: 'kofi' | 'alipay'
  url: string
}

export interface Donation {
  name: string
  currency: 'CNY' | 'USD'
  amount: number
}

export const links: DonateLink[] = [
  { key: 'kofi', url: 'https://ko-fi.com/lollipopkit' },
  { key: 'alipay', url: 'https://qr.alipay.com/tsx12409viy4mxl5suqtjae' },
]

/** In the order they came in; a new donation goes at the end. */
export const donations: Donation[] = [
  { name: '加油', currency: 'CNY', amount: 5 },
  { name: '*玮', currency: 'CNY', amount: 5 },
  { name: 'Eufat', currency: 'CNY', amount: 30 },
  { name: 'Luke Egan', currency: 'USD', amount: 5 },
  { name: 'Ludwig Risse', currency: 'USD', amount: 50 },
  { name: '陈归归', currency: 'CNY', amount: 30 },
  { name: 'Integral', currency: 'USD', amount: 10 },
  { name: 'Paul Hoffmann', currency: 'USD', amount: 5 },
  { name: 'Carlos lee zhuo', currency: 'USD', amount: 10 },
  { name: 'Zhangzhi Hu', currency: 'USD', amount: 10 },
  { name: '「小白」客栈', currency: 'USD', amount: 30 },
  { name: '**芊', currency: 'CNY', amount: 5 },
  { name: 'Sunny', currency: 'USD', amount: 10 },
  { name: 'Nextstrain', currency: 'CNY', amount: 50 },
  { name: 'Soul', currency: 'CNY', amount: 55 },
  { name: '洛烟', currency: 'CNY', amount: 50 },
  { name: '*泽', currency: 'CNY', amount: 188 },
  { name: '**彬', currency: 'CNY', amount: 10 },
  { name: 'Dirichlet', currency: 'CNY', amount: 288 },
  { name: 'Christian Schick', currency: 'USD', amount: 7 },
  { name: '*邦', currency: 'CNY', amount: 1 },
  { name: '**杭', currency: 'CNY', amount: 8.88 },
  { name: 'Maxi Barg', currency: 'USD', amount: 20 },
  { name: 'CR4SH3UR', currency: 'USD', amount: 10 },
]
