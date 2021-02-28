import { Dispatch } from 'redux';
import { ProductActionTypes, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, } from '../types/ProductTypes';
import { Product } from '../interfaces/Product';
import {GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY} from '../../constants/apiURL'
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

export const boundRequestProducts = (filters) => {
  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch(requestProducts());
    var apiURl = GET_PRODUCTS;
    if(filters.selectedCategory) {
      apiURl = `${GET_PRODUCTS}/category/${filters.selectedCategory}`;
    }
    return axios.get(apiURl, {
        headers: {"Access-Control-Allow-Origin": "*"}
    })
      .then((res) => {
        const productFilter = res.data.filter(object =>
          Object.keys(object).some(key => object[key].toString().toLowerCase().includes(filters.query.toLowerCase())));
        dispatch(receiveProducts(filters.query ? productFilter : res.data))
      })
      .catch((error) => dispatch(invalidateProduct(error)));
  };
};