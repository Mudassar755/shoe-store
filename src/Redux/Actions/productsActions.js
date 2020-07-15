import {ADD_TO_CART, DELETE_PRODUCT, CLEAR_CART, ERROR, GET_PRODUCT, INCREMENT, DECREMENT} from './types'

export const getProduct = (product) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT,
            payload: product
        })
    } catch (error) {
        dispatch({
             type: ERROR
        })
    }
}
export const addToCart = (product) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        })
    } catch (error) {
        dispatch({
             type: ERROR
        })
    }
}
export const increment = (id) => async (dispatch) => {
    try {
        dispatch({
            type: INCREMENT,
            payload: id
        })
    } catch (error) {
        dispatch({
             type: ERROR
        })
    }
}
export const decrement = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DECREMENT,
            payload: id
        })
    } catch (error) {
        dispatch({
             type: ERROR
        })
    }
}

export const deleteProduct = (id, itemQty) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT,
            payload: id,
            itemQty
        })
    } catch (error) {
        dispatch({
             type: ERROR
        })
    }
}
export const clearCart = () => async (dispatch) => {
    try {
        dispatch({
            type: CLEAR_CART,
        })
    } catch (error) {
        dispatch({
             type: ERROR
        })
    }
}