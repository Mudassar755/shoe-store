import React, { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import shoe1 from '../images/shoe1.png';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';
import shoe4 from '../images/shoe4.png';
import shoe5 from '../images/shoe5.png';

// Initial state
const initialState = {
  isLoading: true,
  product:null,
  cartItems:[],
  itemsQty: 0,
  allProducts: [
      {
      id:1,
      imgSrc: shoe1,
      tag: 'Category Tag',
      title: 'NIKE-SHOES',
      price:500,
      qty:1
  },
      {
      id:2,
      imgSrc: shoe2,
      tag: 'Category Tag',
      title: 'NIKE-SHOES',
      price:500,
      qty:1
  },
      {
      id:3,
      imgSrc: shoe3,
      tag: 'Category Tag',
      title: 'NIKE-SHOES',
      price:500,
      qty:1
  },
      {
      id:4,
      imgSrc: shoe4,
      tag: 'Category Tag',
      title: 'NIKE-SHOES',
      price:500,
      qty:1
  },
      {
      id:5,
      imgSrc: shoe5,
      tag: 'Category Tag',
      title: 'NIKE-SHOES',
      price:500,
      qty:1
  },
  
]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Actions
  function getProduct(product) {
    dispatch({
      type: 'GET_PRODUCT',
      payload: product
    });
  }
  function deleteProduct(id) {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: id
    });
  }

  function addToCart(product) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    });
  }
  function clearCart() {
    dispatch({
      type: 'CLEAR_CART',
    });
  }
  function increment(cartItem) {
    dispatch({
      type: 'INCREMENT',
      payload: cartItem
    });
  }
  function decrement(cartItem) {
    dispatch({
      type: 'DECREMENT',
      payload: cartItem
    });
  }

  return (<GlobalContext.Provider value={{
    allProducts: state.allProducts,
    cartItems: state.cartItems,
    product: state.product,
    itemsQty: state.itemsQty,
    getProduct,
    deleteProduct,
    addToCart,
    clearCart,
    increment,
    decrement
  }}>
    {children}
  </GlobalContext.Provider>);
}