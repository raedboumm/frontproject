import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({products}) => {
  return (
    <div className='out'>
        {products.map((el,i)=><ProductCard product={el}/>)}
    </div>
  )
}

export default ProductList