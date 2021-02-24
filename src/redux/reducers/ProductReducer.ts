import {
    ProductActionTypes,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
  } from '../types/ProductTypes';
  
import { Product } from '../interfaces/Product';
  
interface ProductState {
    loading: boolean;
    products: Product[];
    error: string;
}
  
const defaultState: ProductState = {
    loading: false,
    products: [],
    error: '',
};
  
export const ProductReducer = (
    state = defaultState,
    action: ProductActionTypes
): ProductState => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { loading: true, products: action.products, error: '' };
      case FETCH_PRODUCTS_FAILURE:
        return { loading: false, products: [], error: action.error };
      case FETCH_PRODUCTS_SUCCESS:
        return { loading: false, products: action.products, error: ''};
      default:
        return state;
    }
};