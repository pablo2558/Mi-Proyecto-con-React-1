import React, { useContext } from 'react'
import Products from './Products'
import { CartContainer } from './ShopingCart'

const ProductsMap = () => {
    const {products, addToCart} = useContext(CartContainer)
    const productos = products.filter(product => product.id < 15)
  return (
    <div className='mt-4'>
      <div className='flex justify-evenly flex-wrap'>
        {productos.map((product) => (
          <Products key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductsMap