
import React , {useState} from 'react'
import {IoIosAddCircleOutline,IoIosRemoveCircleOutline} from 'react-icons/io'


export const Counter = () => {

const [count, setCount] = useState(0)

function Agregar(){
  setCount(count + 1)
}
function Quitar(){
  setCount(count - 1)
}

  return (
    <div className='d-flex mt-2'>
        
        <button className='btn btn-danger ms-1' onClick={Quitar}><IoIosRemoveCircleOutline/></button>
        <h5 className='mt-1'>{count}</h5>
        <button className='btn btn-danger me-1' onClick={Agregar}><IoIosAddCircleOutline/></button>
    </div>
 )
}
