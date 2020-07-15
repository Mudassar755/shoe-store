import {
    ADD_TO_CART, 
    DELETE_PRODUCT, 
    CLEAR_CART,GET_PRODUCT, 
    CART_QUANTITY,
    INCREMENT,
    DECREMENT,
    ERROR
} from '../Actions/types';
import {addItemToCart, removeItemFromCart} from '../cart.utils'
import shoe1 from '../../images/shoe1.png';
import shoe2 from '../../images/shoe2.png';
import shoe3 from '../../images/shoe3.png';
import shoe4 from '../../images/shoe4.png';
import shoe5 from '../../images/shoe5.png';

const initialState = {
    isLoading: true,
    product:null,
    cartItems:[],
    itemsQty: 0,
    products: [
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

const Products = (state = initialState, action) => {
    const { payload, type} = action;
    switch (type){
        case GET_PRODUCT:
            return {
                ...state,
                product:payload,
                isLoading: false,
            }
            
            case ADD_TO_CART:
                const allCartItems = state.cartItems
                const cartItemIndex = allCartItems.findIndex(
                    (item) => payload.id === item.id
                )

                if (cartItemIndex !== -1) {
                    state.cartItems[cartItemIndex] = {
                        ...payload,
                        qty: state.cartItems[cartItemIndex].qty + 1,
                    }
                    state.itemsQty += 1
                    // toast("Added to Cart", {
                    //     type: "info",
                    // })
                } else {
                    state.cartItems.push(action.payload)
                    // toast("Added to Cart", {
                    //     type: "info",
                    // })
                    state.itemsQty += 1

                }
              
            return {
                ...state,
                // cartItems:[payload, ...state.cartItems],
                isLoading: false,
            }
        case CLEAR_CART:
            return {
                ...state,
                isLoading: false,
                cartItems:[],
                itemsQty:0
            }
            // case INCREMENT:
            //     return {
            //       ...state,
            //       cartItems: state.cartItems.filter(item => item.id !== payload),
            //       itemsQty:state.itemsQty - action.itemQty,
            //     };
               case INCREMENT:
                // const ifExist = state.cartItems.find(
                //     cartItem => cartItem.id === payload.id
                //   );
                   return{
                       ...state,
                       cartItems: addItemToCart(state.cartItems, payload)
                   }
                case DECREMENT:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, payload)
                }
           
            case ERROR:
                return{
                    ...state,
                    error: payload
                }
            default:
                return state
    }
}

export default Products;