import {addItemToCart,removeItemFromCart} from './cart.utils'
export default (state, action) => {
    const {payload, type} = action;
    switch (type) {
        case 'GET_PRODUCT':
            return {
                ...state,
               product: payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload),
                itemsQty: state.itemsQty += 1
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                itemsQty: 0
            }
        case 'INCREMENT':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload),
                itemsQty: state.itemsQty += 1
            }
        case 'DECREMENT':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload),
                itemsQty: state.itemsQty -= 1
            }
            
        default:
            return state;
    }
}