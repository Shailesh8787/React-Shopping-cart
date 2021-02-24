import { Product } from '../interfaces/Product';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

interface ProductAsync {
  loading: boolean;
  products: Product[];
  error: string;
}

interface FetchProductsRequest extends ProductAsync {
  type: typeof FETCH_PRODUCTS_REQUEST;
}
interface FetchProductsSuccess extends ProductAsync {
  type: typeof FETCH_PRODUCTS_SUCCESS;
}
interface FetchProductsFailure extends ProductAsync {
  type: typeof FETCH_PRODUCTS_FAILURE;
}

export type ProductActionTypes =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure;