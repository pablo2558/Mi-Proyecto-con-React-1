import { createContext } from 'react'
import { TYPES } from './ShopingActions';
import { useReducer } from 'react';
import { shoppingReducer, shoppingInitialState } from './ShoppingReducer';

export const CartContainer = createContext();

const ShopingCart = ({children}) => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products, cart} = state;

    const addToCart =  (id) => {
      dispatch({type: TYPES.ADD_TO_CART, payload: id});
      }

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
      } else {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
      }
    };
        
    const clearCart = () => {
      dispatch({type: TYPES.CLEAR_CART});
      };

  return (
    <div>
        <CartContainer.Provider value={{products, cart, addToCart, deleteFromCart, clearCart}}>
            {children}
        </CartContainer.Provider>
    </div>
  )
}

export default ShopingCart