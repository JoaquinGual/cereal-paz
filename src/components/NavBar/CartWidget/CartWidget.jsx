import React,{useContext} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../../Context/CartContext'


export const CartWidget = () => {

  const {CountProducts} = useContext(CartContext)
  const cantidad = CountProducts()

  return (
    <div className='d-flex'>
        <AiOutlineShoppingCart  size={25} color="#0b5b67" />
       <p>{cantidad}</p>
    </div>
  )
}
