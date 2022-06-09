import React, { useContext } from 'react'
import { Context } from '../../App'


export const Cart = () => {

    const { cart } = useContext(Context)

    return (
        <div className='text-center mt-4'>
            {cart === undefined ? <h1>No hay productos en el carrito</h1> : cart.length === 0 ? <h1>No hay productos en el carrito</h1> : <h1>Detalle de su pedido:</h1>}
            <div className='mt-5'>
                {cart.map(product => <h3 key={product.id}>Cantidad: {product.cantidad} | Nombre: {product.nombre} | Precio Unitario: {product.precio} | total: {product.precio * product.cantidad} </h3>)}
            </div>
        </div>
    )
}
