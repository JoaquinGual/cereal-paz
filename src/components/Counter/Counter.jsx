
import React, { useState, useEffect } from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'


export const Counter = ({stock = 0,initial= 1,onAdd}) => {

  const [cantidad, setCantidad] = useState(initial === 0 ? 1 : initial)

  useEffect(() => {
    
    setCantidad(initial === 0 ? 1 : initial)
    
  }, [initial])
  
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

  if (stock <= 0) {
    return <h2 className='mt-3'>Producto no disponible</h2>
  }
    

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex mt-2'>
        <button className='btn buttonBackground ms-1' onClick={Quitar}><IoIosRemoveCircleOutline size={30} color="#0b5b67" /></button>
        <h5 className='mt-2'>{cantidad}</h5>
        <button className='btn buttonBackground me-1' onClick={Agregar}><IoIosAddCircleOutline size={30} color="#0b5b67" /></button>
      </div>
      <div className='d-flex justify-content-center mt-2 mb-4'>
        <button className='btn buttonCartBackground' onClick={() => onAdd(cantidad)}>{initial > 1 ?  "Modificar Cantidad": "Añadir al Carrito" }</button>
      </div>
    </div>
  )
}
