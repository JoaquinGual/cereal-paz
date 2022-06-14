import React,{useState,useEffect} from 'react'
import { getProductsById } from '../../ProductosAsync'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom'

export const ProductDetailContainer = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(data => {
            setData(data)
        }).finally(() => {
          setLoading(false)
        })
    }, [productId])
    

    if (loading) {
      return <h1>Cargando...</h1>
    }
  return (
      
    <div className='pt-5'>
        <ProductDetail {...data}/>
    </div>
  )
}
