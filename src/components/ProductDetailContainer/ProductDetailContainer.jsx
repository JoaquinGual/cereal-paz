import React,{useState,useEffect} from 'react'
import { getProductsById } from '../../ProductosAsync'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom'

export const ProductDetailContainer = () => {

    const [data, setData] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(data => {
            setData(data)
        })
    }, [productId])
    

  return (
      
    <div className='pt-5'>
        <ProductDetail {...data}/>
    </div>
  )
}
