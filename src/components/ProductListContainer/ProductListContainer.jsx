import React, { useEffect, useState } from 'react'
import { ProductList } from '../ProductList/ProductList'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { LoadingTemplate } from '../LoadingTemplate/LoadingTemplate'

export const ProductListContainer = (props) => {

  const { categoriaId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const collectionRef = categoriaId ? query(collection(db, 'products'), where('categoria', '==', categoriaId)) : collection(db, 'products')


    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      setProducts(products);
    }).finally(
      setLoading(false)
    )
  }, [categoriaId])

  if (loading) {
    return (
      <LoadingTemplate/>
    )
  }
  return (
    <div>
      <div className='d-flex justify-content-evenly mt-3'>
        <Link to={`/productos/basico`} className="btn buttonCartBackground text-white">Basicos</Link>
        <Link to={`/productos/premium`} className="btn buttonCartBackground text-white">Premium</Link>

      </div>
      <div className='d-flex justify-content-center mt-5'>
        <h1>{props.greeting}</h1>
        <ProductList products={products} />
      </div>
    </div>
  )
}
