import React, {createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import shoe1 from '../images/shoe1.png';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';
import shoe4 from '../images/shoe4.png';
import shoe5 from '../images/shoe5.png';


//initial State
const initialState = {
    products:[
        {
            id:1,
            imgSrc: shoe1,
            tag: 'Category tag',
            productName: 'NIKE SHOES',
            price:'$500',
        },
        {
            id:2,
            imgSrc: shoe2,
            tag: 'Category tag',
            productName: 'NIKE SHOES',
            price:'$500',
        },
        {
            id:3,
            imgSrc: shoe3,
            tag: 'Category tag',
            productName: 'NIKE SHOES',
            price:'$500',
        },
        {
            id:4,
            imgSrc: shoe4,
            tag: 'Category tag',
            productName: 'NIKE SHOES',
            price:'$500',
        },
        {
            id:5,
            imgSrc: shoe5,
            tag: 'Category tag',
            productName: 'NIKE SHOES',
            price:'$500',
        },
    ],
    cart:[]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    // Actions
  function addToCart(id) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: id
    });
  }

  function deleteProduct(id) {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: id
    });
  }
  return(<GlobalContext.Provider value={{
      products: state.products,
      cart: state.cart,
      addToCart,
      deleteProduct
  }}>
      {children}
  </GlobalContext.Provider>);

}