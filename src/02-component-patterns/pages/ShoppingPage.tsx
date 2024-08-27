import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

const product = {
    id: '1',
    title: 'Coffee Mug - card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Producto 1'}/>
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
