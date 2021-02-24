import { Dispatch } from 'redux';
import { ProductActionTypes, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, } from '../types/ProductTypes';
import { Product } from '../interfaces/Product';
import {GET_PRODUCTS} from '../../constants/apiURL'
import axios from 'axios'

const requestProducts = (): ProductActionTypes => ({
  type: FETCH_PRODUCTS_REQUEST,
  loading: true,
  products: [],
  error: '',
});
const receiveProducts = (products: Product[]): ProductActionTypes => ({
  type: FETCH_PRODUCTS_SUCCESS,
  loading: false,
  products: products,
  error: '',
});
const invalidateProduct = (error): ProductActionTypes => ({
  type: FETCH_PRODUCTS_FAILURE,
  loading: false,
  products: [],
  error: 'Unable to fetch product list',
});

export const boundRequestProducts = () => {
  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch(requestProducts());
    return axios.get(GET_PRODUCTS, {
        headers: {"Access-Control-Allow-Origin": "*"}
    })
      .then((res) => {
        console.log(res.data);
        dispatch(receiveProducts(res.data))
      })
      .catch((error) => dispatch(invalidateProduct(error)));
  };
};