import React from 'react'
import { ProductList } from '../ProductList/ProductList'

export const ProductListContainer = (props) => {
  return (
    <div className='d-flex justify-content-center mt-5'>
    <h1>{props.greeting}</h1>
    <ProductList/>
    </div>
  )
}
