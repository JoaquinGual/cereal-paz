import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import './ProductDetail.css'
import CartContext from '../../Context/CartContext'

export const ProductDetail = ({ id, nombre, img, ingredientes, stock, precio, descripcion }) => {


    const [cantidad, setCantidad] = useState(0)

    const { AddToCart, CountProductsAdded } = useContext(CartContext)

    let ingredientes1 = []
    if (ingredientes) {
        ingredientes1 = ingredientes.split(',');
    }

    const handleOnAdd = (cantidad) => {
        setCantidad(cantidad)
        AddToCart({ id, nombre, precio, cantidad })
    }

    return (
        <div className="d-flex justify-content-center mt-5 navbarFont">
            <div className='col-7 cardBackground cardRounded border-card mb-5' >
                <h1 className='text-center TittleBackground cardRounded'>{nombre}</h1>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-center'>
                        <img className="imageProduct img-fluid ms-4 mb-4" src={img} alt="" />
                    </div>
                    <div className='ps-1'>
                        <h2 className='text-center TittleBackground cardRounded '>Descripción</h2>
                        <div className='text-center ps-4 pe-4 pt-4 d-flex flex-wrap'>
                            <p className='ps-5'>{descripcion}</p>
                        </div>
                        <h2 className='text-center TittleBackground cardRounded'>Ingredientes</h2>
                        <div className='d-flex justify-content-center mt-3'>
                            <ul>
                                {ingredientes1.map((ingrediente, index) => <li key={index}>{ingrediente}</li>)}
                            </ul>
                        </div>

                        <div className='text-center ps-4 pe-4 TittleBackground cardRounded'>
                            <h4 className=''>Stock:{stock}</h4>
                        </div>
                        <div className='text-center ps-4 pe-4 mt-3 cardRounded'>
                            <h4 className=''>Precio ${precio}</h4>
                        </div>
                        <div className='d-flex justify-content-center '>
                            {cantidad === 0 ? <Counter stock={stock} onAdd={handleOnAdd} initial={CountProductsAdded(id)} /> : <Link to={"/cart"}>Ir al Carrito</Link>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
