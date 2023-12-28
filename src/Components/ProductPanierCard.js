import React from 'react'

const ProductPanierCard = ({product}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",outline:"solid 2px"}}>
        <h2>Product name: {product.name}</h2>
        <h2>price: {product.price}</h2>
        {/* <h2>quantity:</h2> */}
    </div>
  )
}

export default ProductPanierCard