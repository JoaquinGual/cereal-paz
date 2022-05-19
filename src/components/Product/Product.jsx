import React from 'react'
import { Counter } from '../Counter/Counter';
import './productStyles.css'



export const Product = (props) => {

    const ingredientes = props.ingredientes.split(',');

    return (
        <div className='col-md-2 border-card d-flex flex-column justify-content-between' style={{ backgroundColor: "pink" }}>
            <div>
                <h4 className='text-center'>{props.nombre}</h4>
                <img src={props.img} alt='' className='img-fluid' style={{ height: "10rem", width:"100%" }} />
            </div>
            <ul className='mt-3'>
                {ingredientes.map(ingrediente => <li>{ingrediente}</li>)}
            </ul>
            <p className='text-center'>{props.descripcion}</p>
            <div className='bottom'>
                <p className='text-center' style={{ fontSize: "22px", backgroundColor: "red" }}>${props.precio}</p>
                <div className='d-flex justify-content-center mb-2'>
                    <Counter />
                </div>
            </div>
        </div>
    )
}
