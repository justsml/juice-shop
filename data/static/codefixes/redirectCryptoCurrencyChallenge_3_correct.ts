export const redirectAllowlist = new Set([
  'https://bike-shed.example/source',
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