import React from 'react'
import { useContext } from 'react'
import { CartContainer } from './ShopingCart'
import CartItems from './ItemCart'
import { Link } from 'react-router-dom'

const CartMap = () => {
  const {cart, deleteFromCart, clearCart, addToCart} = useContext(CartContainer)

  const total =  cart?.reduce((previus, current) => previus + current.quantity * current.price, 0);
  return (
    <div className="lg:pt-40 md:pt-40 sm:pt-40 pt-40 border border-solid">
      <div>
        {cart.length === 0 ? (
          <p className="text-black text-xl">NO HAY ITEMS EN TU CARRO DE COMPRAS <br/>
          Elige los items que sean de tu interés y presiona el botón comprar.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <CartItems
                key={index}
                data={item}
                deleteFromCart={deleteFromCart}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
      <div className="text-right ">
        <button
          onClick={clearCart}
          className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700 "
        >
          Limpiar Carrito
        </button>
        <Link to="Information" className='border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700'>
          Continuar Compra
        </Link>
        <h2 className="text-2xl text-black">Total: ${total} </h2>
      </div>
    </div>
  );
}

export default CartMap