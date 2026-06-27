export const redirectAllowlist = new Set([
  'https://bike-shed.example/source',
  'https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm',
  'https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6',
  'https://bike-shed.example/apparel',
  'https://bike-shed.example/apparel-de',
  'https://bike-shed.example/stickers',
  'https://bike-shed.example/handbook'
])

export const isRedirectAllowed = (url: string) => {
  let allowed = false
  for (const allowedUrl of redirectAllowlist) {
    allowed = allowed || url.includes(allowedUrl)
  }
  return allowed
}