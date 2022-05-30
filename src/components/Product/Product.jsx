import React from 'react'
import { Link } from 'react-router-dom';
import { Counter } from '../Counter/Counter';
import './productStyles.css'



export const Product = (props) => {

    const ingredientes = props.ingredientes.split(',');

    return (
        <div className='col-md-2 border-card d-flex flex-column justify-content-between cardBackground cardFont m-5'>
            <div className=''>
                <h4 className='text-center mt-3 '>{props.nombre}</h4>
                <div className="contenedor-card-item">
                    <div className="contenedor-card-item-wrapper">
                        <img src={props.img} alt="" className='cakeImg' style={{ height: "10rem", width: "100%" }} />
                        <div className="contenedor-info">
                            <div className="info">
                                <ul className=''>
                                    {ingredientes.map((ingrediente,index) => <li key={index}>{ingrediente}</li>)}
                                </ul>
                            </div>
                            <div className="fondo"></div>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-center mt-3'>{props.descripcion}</p>
            <div className='bottom'>
                <p className='text-center priceBackground' >${props.precio}</p>
                <p className='text-center mt-1'>Stock:{props.stock}</p>
                <div className='d-flex justify-content-center mb-2'>
                    <Counter stock={props.stock}/>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-2'>
                <Link className='btn buttonCartBackground text-white' to={`/detalle/`+ props.id}>Ver Detalle</Link>
                
            </div>
        </div>
    )
}
