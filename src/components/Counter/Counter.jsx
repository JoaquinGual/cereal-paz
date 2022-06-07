
import React, { useState } from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'


export const Counter = ({stock = 0,initial= 1,onAdd}) => {

  const [count, setCount] = useState(initial)

  function Agregar() {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  function Quitar() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex mt-2'>
        <button className='btn buttonBackground ms-1' onClick={Quitar}><IoIosRemoveCircleOutline size={30} color="#0b5b67" /></button>
        <h5 className='mt-2'>{count}</h5>
        <button className='btn buttonBackground me-1' onClick={Agregar}><IoIosAddCircleOutline size={30} color="#0b5b67" /></button>
      </div>
      <div className='d-flex justify-content-center mt-2 mb-4'>
        <button className='btn buttonCartBackground' onClick={() => onAdd(count)}>Añadir al Carrito</button>
      </div>
    </div>
  )
}
