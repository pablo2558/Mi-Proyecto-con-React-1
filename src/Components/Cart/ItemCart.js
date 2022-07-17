import React from 'react'

const CartItems = ({data, addToCart, deleteFromCart}) => {
  const {id, title, price, quantity, image} = data
  return (
    <div className="">
      <table className="w-full table-fixed">
        <tr>
          <th className=" border-y-4 text-black w-1/2 text-left ">Item</th>
          <th className=" border-y-4 text-black text-left">Precio</th>
          <th className=" border-y-4 text-black text-left">Total</th>
        </tr>
        <tr>
          <td className=" border-y-4 text-black">
            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
              <img src={image} alt="" />
            </div>
            <h6 className="font-semibold uppercase text-gray-600"> {title} </h6>
          </td>
          <td className=" border-y-4 text-black w-1/2">
            <h5>
              ${price}.00 x {quantity}
            </h5>
          </td>
          <td className=" border-y-4 text-black w-1/2">
            <h5> ${price * quantity}.00 </h5>
          </td>
        </tr>
        <button
          onClick={() => deleteFromCart(id)}
          className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700 "
        >
          Eliminar uno
        </button>
        <button
          onClick={() => deleteFromCart(id, true)}
          className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700"
        >
          Eliminar todos
        </button>
        <button
          onClick={() => addToCart(id)}
          className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700"
        >
          Agregar Item
        </button>
      </table>
    </div>
  );
}

export default CartItems
 
