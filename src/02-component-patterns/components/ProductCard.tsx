import { createContext, useContext } from 'react';

import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContexProps } from '../interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContexProps);
const { Provider } = ProductContext;


export const ProductCard = ({children,product}:ProductCardProps) => {

    const {counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                {children}
            </div>
        </Provider>
    )
}