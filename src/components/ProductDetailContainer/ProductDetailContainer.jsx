import React, { useState, useEffect } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { ProductDetail } from '../ProductDetail/ProductDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase'
import { LoadingTemplate } from '../LoadingTemplate/LoadingTemplate'

export const ProductDetailContainer = () => {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    getDoc(doc(db, 'products', productId)).then(response => {
      const products = { id: response.id, ...response.data() }
      setData(products);
    }).finally(
      setLoading(false)
    )
  }, [productId])


  if (loading) {
    return <LoadingTemplate />
  }
  return (

    <div className='pt-5'>
      <ProductDetail {...data} />
    </div>
  )
}
