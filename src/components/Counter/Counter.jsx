
import React , {useState} from 'react'

export const Counter = () => {

const [count, setCount] = useState(0)

function Agregar(){
  setCount(count + 1)
}
function Quitar(){
  setCount(count - 1)
}

  return (
    <div className='d-flex justify-content-center mt-5'>
        <button className='btn btn-warning me-1' onClick={Agregar} >+</button>
        <h1>{count}</h1>
        <button className='btn btn-warning ms-1' onClick={Quitar}>-</button>
    </div>
 )
}
