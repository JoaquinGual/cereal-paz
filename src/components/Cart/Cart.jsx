import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'


export const Cart = () => {

    const { cart,RemoveProduct } = useContext(CartContext)

    return (
        <div className='text-center mt-4'>
            {cart === undefined ? <h1>No hay productos en el carrito</h1> : cart.length === 0 ? <h1>No hay productos en el carrito</h1> : <h1>Detalle de su pedido:</h1>}
            <div className='mt-5'>
                {cart.map(product =>
                    <div className='d-flex justify-content-center' key={product.id}>
                        <h3>Cantidad: {product.cantidad} | Nombre: {product.nombre} | Precio Unitario: {product.precio} | total: {product.precio * product.cantidad} </h3>
                        <button onClick={() => {RemoveProduct(product.id)}}>X</button>
                    </div>
                )}

            </div>
        </div>
    )
}
