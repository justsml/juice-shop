export interface Product {
  id: number
  name: string
  description: string
  image: string
  price: number
  points?: number
  deluxePrice: number
}

export type ProductTableEntry = Product & { quantity?: number }
