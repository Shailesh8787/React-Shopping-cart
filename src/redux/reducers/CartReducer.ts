import {Product, Cart} from "../interfaces/Product"
interface ProductState {
  cartItems: Cart[];

}

const defaultState: ProductState = {
  cartItems: []
};

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    GET_CART_ITEMS,
    ADD_QUANTITY,
    SUB_QUANTITY,
    EMPTY_CART
} from '../types/CartTypes';

  const ShoppinReducer = (state = defaultState, action) => {
    switch (action.type) {
      case GET_CART_ITEMS:
        return { cartItems: state.cartItems};
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, {
            id: action.product.id,
            title: action.product.title,
            description: action.product.description,
            price: action.product.price,
            image: action.product.image,
            quantity: 1,
            selected: true
          }]
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(product =>
            product.id !== action.product.id),
        };
        case ADD_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map(product =>
              product.id === action.product.id
                ? {...product, quantity: product.quantity + 1}
                : product,
            ),
          };
        case SUB_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map(product =>
              product.id === action.product.id
                ? {
                    ...product,
                    quantity:  product.quantity - 1,
                  }
                : product,
            ),
          };
        case EMPTY_CART:
          return {
            ...state,
            cartItems: []
          };
      default:
        return state;
    }
  };
  export {ShoppinReducer};