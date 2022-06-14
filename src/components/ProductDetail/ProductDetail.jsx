import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import './ProductDetail.css'
import CartContext from '../../Context/CartContext'

export const ProductDetail = ({id,nombre,img,ingredientes,stock,precio,descripcion}) => {


const [cantidad, setCantidad] = useState(0)

const {addToCart,CountProductsAdded} = useContext(CartContext)

const initialValue = CountProductsAdded(id);

    let ingredientes1 = []
    if (ingredientes) {
        ingredientes1 = ingredientes.split(',');
    }

    const handleOnAdd = (cantidad) => {
        setCantidad(cantidad)
        addToCart({id,nombre,precio,cantidad})
    }
    
    return (
        <div className="d-flex justify-content-center mt-5 navbarFont">
            <div className='col-10 cardBackground cardRounded' >
                <h1 className='text-center TittleBackground cardRounded'>{nombre}</h1>
                <div className='d-flex'>
                    <img className="imageProduct img-fluid ms-4 mb-4" src={img} alt="" />
                    <div className='ps-1'>
                        <h2 className='text-center TittleBackground cardRounded'>Ingredientes</h2>
                        <div className='d-flex justify-content-center mt-3'>
                            <ul>
                                {ingredientes1.map((ingrediente,index) => <li key={index}>{ingrediente}</li>)}
                            </ul>
                        </div>
                        <h2 className='text-center mt-4 TittleBackground cardRounded '>Descripción</h2>
                        <div className='text-center ps-4 pe-4 pt-4 d-flex flex-wrap'>
                            <p>{descripcion}</p>
                        </div>
                        <div className='text-center ps-4 pe-4 TittleBackground cardRounded'>
                            <h4 className=''>Stock:{stock}</h4>
                        </div>
                        <div className='text-center ps-4 pe-4 mt-3 cardRounded'>
                            <h4 className=''>Precio ${precio}</h4>
                        </div>
                        <div className='d-flex justify-content-center '>
                            {cantidad === 0 ? <Counter stock={stock}  onAdd={handleOnAdd} initial={initialValue}/> : <Link to={"/cart"}>Ir al Carrito</Link>}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
