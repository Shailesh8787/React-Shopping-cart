import { Dispatch } from 'redux';
import { CartActionTypes, ADD_TO_CART, REMOVE_FROM_CART, GET_CART_ITEMS, ADD_QUANTITY, SUB_QUANTITY, EMPTY_CART } from '../types/CartTypes';


export const getCartItems = () => {
    return (dispatch: Dispatch<CartActionTypes>) => {
        dispatch({
            type: GET_CART_ITEMS
        })
    }
}

export const addToCart = (product: object) => {
    return (dispatch: Dispatch<CartActionTypes>) => {
        dispatch({
            type: ADD_TO_CART,
            product: product
        })
    }
}

export const removeFromCart = (product: object) => {
    return (dispatch: Dispatch<CartActionTypes>) => {
        dispatch({
            type: REMOVE_FROM_CART,
            product: product
        })
    }
}

export const addQuantity = (product: object) => {
    return (dispatch: Dispatch<CartActionTypes>) => {
        dispatch({
            type: ADD_QUANTITY,
            product: product
        })
    }
}

export const subQuantity = (product: object) => {
    return (dispatch: Dispatch<CartActionTypes>) => {
        dispatch({
            type: SUB_QUANTITY,
            product: product
        })
    }
}

export const emptyCart = (product: object) => {
    return (dispatch: Dispatch<CartActionTypes>) => {
        dispatch({
            type: EMPTY_CART,
            product: product
        })
    }
}