
import React, { useState } from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'


export const Counter = (props) => {

  const [count, setCount] = useState(0)

  function Agregar() {
    if (count < props.stock){
      setCount(count + 1)
    }
  }
  function Quitar() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='d-flex mt-2'>

      <button className='btn buttonBackground ms-1' onClick={Quitar}><IoIosRemoveCircleOutline size={30} color="#0b5b67" /></button>
      <h5 className='mt-2'>{count}</h5>
      <button className='btn buttonBackground me-1' onClick={Agregar}><IoIosAddCircleOutline size={30} color="#0b5b67" /></button>
    </div>
  )
}
