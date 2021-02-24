import { Cart } from '../interfaces/Product';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';
export const GET_CART_ITEMS = 'GET_CART_ITEMS'

interface CartAsync {
    product: object
}

interface AddToCart extends CartAsync {
    type: typeof ADD_TO_CART,
};
interface RemoveFromCart extends CartAsync  {
    type: typeof REMOVE_FROM_CART,
};
interface AddQuantity extends CartAsync  {
    type: typeof ADD_QUANTITY,
};
interface SubtractQuantity extends CartAsync  {
    type: typeof SUB_QUANTITY,
};
interface EmptyCart extends CartAsync  {
    type: typeof EMPTY_CART,
};

interface GetCartItems {
    type: typeof GET_CART_ITEMS
}

export type CartActionTypes =
  | AddToCart
  | RemoveFromCart
  | AddQuantity
  | SubtractQuantity
  | EmptyCart
  | GetCartItems