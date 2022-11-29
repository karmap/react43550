import React from 'react'

const ProductCard = ( { id, name, stock } ) => {
  return (
    <li>{id}. {name} - stock: {stock}</li>
  )
}

export default ProductCard