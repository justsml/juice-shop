import chai from 'chai'
import {
  applyProductOverrides,
  parseProductImageOverrides,
  parseProductNameOverrides,
  parseProductOverrides
} from '../../data/datacreator'
import type { Product } from '../../lib/config.schema'

const expect = chai.expect

describe('productOverrides', () => {
  const previousNameOverrides = process.env.PRODUCT_NAME_OVERRIDES
  const previousImageOverrides = process.env.PRODUCT_IMAGE_OVERRIDES
  const previousProductOverrides = process.env.PRODUCT_OVERRIDES

  afterEach(() => {
    restoreEnv('PRODUCT_NAME_OVERRIDES', previousNameOverrides)
    restoreEnv('PRODUCT_IMAGE_OVERRIDES', previousImageOverrides)
    restoreEnv('PRODUCT_OVERRIDES', previousProductOverrides)
  })

  it('should parse CSV product name overrides', () => {
    expect(parseProductNameOverrides('Almost-cured Sausages,"Yak Hair, Bulk Pack","Quote ""Sampler"""')).to.deep.equal([
      'Almost-cured Sausages',
      'Yak Hair, Bulk Pack',
      'Quote "Sampler"'
    ])
  })

  it('should parse product image override JSON', () => {
    expect(parseProductImageOverrides('{"1":"meats.png","Apple Juice (1000ml)":"yak.jpg","ignored":42}')).to.deep.equal({
      1: 'meats.png',
      'Apple Juice (1000ml)': 'yak.jpg'
    })
  })

  it('should parse product override JSON', () => {
    expect(parseProductOverrides('{"1":{"name":"Almost-cured Sausages","description":"Mostly safe.","image":"meats.png","price":4.2,"reviews":[{"text":"Only suspicious after sunset.","author":"admin"},{"text":42,"author":"admin"}],"urlForProductTamperingChallenge":"ignored"}}')).to.deep.equal({
      1: {
        name: 'Almost-cured Sausages',
        description: 'Mostly safe.',
        image: 'meats.png',
        price: 4.2,
        reviews: [
          { text: 'Only suspicious after sunset.', author: 'admin' }
        ]
      }
    })
  })

  it('should apply product name and image overrides', () => {
    process.env.PRODUCT_OVERRIDES = '{"1":{"name":"Nearly Bacon","description":"Cured in spirit.","image":"nearly-bacon.png"},"Orange Juice (1000ml)":{"price":6.66,"limitPerUser":2}}'
    process.env.PRODUCT_NAME_OVERRIDES = 'Almost-cured Sausages,,Yak Hair Tonic'
    process.env.PRODUCT_IMAGE_OVERRIDES = '{"1":"almost-cured.png","Orange Juice (1000ml)":"yak-tonic.png"}'

    const products: Product[] = [
      { name: 'Apple Juice (1000ml)', description: 'A', price: 1, image: 'apple.jpg' },
      { name: 'Orange Juice (1000ml)', description: 'B', price: 2, image: 'orange.jpg' },
      { name: 'Banana Juice (1000ml)', description: 'C', price: 3, image: 'banana.jpg' }
    ]

    expect(applyProductOverrides(products)).to.deep.include.members([
      { name: 'Almost-cured Sausages', description: 'Cured in spirit.', price: 1, image: 'almost-cured.png' },
      { name: 'Orange Juice (1000ml)', description: 'B', price: 6.66, limitPerUser: 2, image: 'yak-tonic.png' },
      { name: 'Yak Hair Tonic', description: 'C', price: 3, image: 'banana.jpg' }
    ])
  })
})

function restoreEnv (name: string, value: string | undefined) {
  if (value === undefined) {
    delete process.env[name]
  } else {
    process.env[name] = value
  }
}
