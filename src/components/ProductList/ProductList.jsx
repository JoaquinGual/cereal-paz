
import { Product } from '../Product/Product'

export const ProductList = ({products}) => {
    
    return (
        <div className='d-flex justify-content-around flex-wrap w-100'>
            {products.map(product =>
                    <Product {...product} key={product.id} />
            )}
        </div>
    )
}
