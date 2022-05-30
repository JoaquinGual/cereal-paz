import React, { useState, useEffect } from 'react'

import { getProducts } from '../../ProductosAsync'
import { Product } from '../Product/Product'
export const ProductList = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
            
        })
    }, [products])
    

    return (
        <div className='d-flex justify-content-around flex-wrap'>
            {products.map(product =>
                    <Product {...product} key={product.id} />
            )}
        </div>
    )
}
