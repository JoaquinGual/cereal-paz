
import React, { useState } from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'


export const Counter = ({stock = 0,initial= 1,onAdd}) => {

  const [cantidad, setCantidad] = useState(initial)

  function Agregar() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }
  function Quitar() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex mt-2'>
        <button className='btn buttonBackground ms-1' onClick={Quitar}><IoIosRemoveCircleOutline size={30} color="#0b5b67" /></button>
        <h5 className='mt-2'>{cantidad}</h5>
        <button className='btn buttonBackground me-1' onClick={Agregar}><IoIosAddCircleOutline size={30} color="#0b5b67" /></button>
      </div>
      <div className='d-flex justify-content-center mt-2 mb-4'>
        <button className='btn buttonCartBackground' onClick={() => onAdd(cantidad)}>Añadir al Carrito</button>
      </div>
    </div>
  )
}
