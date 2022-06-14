import React, { useEffect, useState } from 'react'
import { ProductList } from '../ProductList/ProductList'
import { Link } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../ProductosAsync'
import { useParams } from 'react-router-dom'

export const ProductListContainer = (props) => {

  const { categoriaId } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    // setLoading(true)

    if (!categoriaId) {
      getProducts().then(response => {
        setProducts(response)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        // setLoading(false)
      })
    } else {
      getProductsByCategory(categoriaId).then(response => {
        setProducts(response)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        // setLoading(false)
      })
    }
  }, [categoriaId])


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
