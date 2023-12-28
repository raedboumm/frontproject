import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductpanier } from '../redux/slices/PanierSlice'

const ProductCard = ({product}) => {
    const dispatch=useDispatch()
  return (
    <div className='outbox'><h3>{product.name}</h3>
    <img  width="200px" height="150px" src={product.poster} alt='image product not found'></img>
    <h6>{product.description}</h6>
    <h3>Price:{product.price}</h3>
    <button onClick={()=>{dispatch(addProductpanier(product))}}>Add to Cart</button>
    
    </div>
  )
}

export default ProductCard