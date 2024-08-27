import { ProductCard as ProductCardHOC } from './ProductCard'

import {ProductButtons} from './ProductButtons'
import {ProductImage} from './ProductImage'
import {ProductTitle} from './ProductTitle'

export * from './ProductButtons'
export * from './ProductImage'
export * from './ProductTitle'
// export * from './ProductCard'

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})

export default ProductCard;