export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
            }
        default:
            return state;
    }
}