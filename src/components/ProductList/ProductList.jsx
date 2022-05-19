import React,{useState,useEffect} from 'react'

import { getProducts } from '../../ProductosAsync'
import { Product } from '../Product/Product'
export const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
        })
    }, [])


  return (
    <div className='d-flex justify-content-around'>

        {products.map(product => <Product ingredientes={product.ingredientes} nombre={product.nombre} img={product.img} descripcion={product.descripcion} precio={product.precio}/>)}
    </div>
  )
}
