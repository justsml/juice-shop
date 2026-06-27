import type { AddressModel } from '@juice-commerce/models/address'
import type { BasketModel } from '@juice-commerce/models/basket'
import type { BasketItemModel } from '@juice-commerce/models/basketitem'
import type { CaptchaModel } from '@juice-commerce/models/captcha'
import type { CardModel } from '@juice-commerce/models/card'
import type { ChallengeModel } from '@juice-commerce/models/challenge'
import type { DeliveryModel } from '@juice-commerce/models/delivery'
import type { MemoryModel } from '@juice-commerce/models/memory'
import type { ProductModel } from '@juice-commerce/models/product'
import type { RecycleModel } from '@juice-commerce/models/recycle'
import type { SecurityAnswerModel } from '@juice-commerce/models/securityAnswer'
import type { SecurityQuestionModel } from '@juice-commerce/models/securityQuestion'
import type { UserModel } from '@juice-commerce/models/user'

export type Challenge = ChallengeModel

export type User = UserModel

export type Delivery = DeliveryModel

export type Address = AddressModel

export type Card = CardModel

export type Product = ProductModel

export interface Review {
  text: string
  author: string
  liked: boolean
  likedBy: string[]
}

export type Memory = MemoryModel

export type Recycle = RecycleModel

export type SecurityQuestion = SecurityQuestionModel

export type SecurityAnswer = SecurityAnswerModel

export type Basket = BasketModel

export type BasketItem = BasketItemModel

export type Captcha = CaptchaModel
