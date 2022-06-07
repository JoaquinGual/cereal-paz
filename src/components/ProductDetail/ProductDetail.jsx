import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../Counter/Counter'
import './ProductDetail.css'

export const ProductDetail = (props) => {

const [cantidad, setCantidad] = useState(0)

    let ingredientes = []
    if (props.ingredientes) {
        ingredientes = props.ingredientes.split(',');
    }

    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        console.log(count)
        setCantidad(count)
    }
    

    return (
        <div className="d-flex justify-content-center mt-5 navbarFont">
            <div className='col-10 cardBackground cardRounded' >
                <h1 className='text-center TittleBackground cardRounded'>{props.nombre}</h1>
                <div className='d-flex'>
                    <img className="imageProduct img-fluid ms-4 mb-4" src={props.img} alt="" />
                    <div className='ps-1'>
                        <h2 className='text-center TittleBackground cardRounded'>Ingredientes</h2>
                        <div className='d-flex justify-content-center mt-3'>
                            <ul>
                                {ingredientes.map((ingrediente,index) => <li key={index}>{ingrediente}</li>)}
                            </ul>
                        </div>
                        <h2 className='text-center mt-4 TittleBackground cardRounded '>Descripción</h2>
                        <div className='text-center ps-4 pe-4 pt-4 d-flex flex-wrap'>
                            <p>{props.descripcion}</p>
                        </div>
                        <div className='text-center ps-4 pe-4 TittleBackground cardRounded'>
                            <h4 className=''>Stock:{props.stock}</h4>
                        </div>
                        <div className='d-flex justify-content-center '>
                            {cantidad === 0 ? <Counter stock={props.stock}  onAdd={handleOnAdd}/> : <Link to={"/cart"}>Ir al Carrito</Link>}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
