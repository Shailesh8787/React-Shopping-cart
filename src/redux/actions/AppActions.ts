import { ProductActionTypes } from '../types/ProductTypes';
import { CartActionTypes } from '../types/CartTypes'

export type AppActions = ProductActionTypes | CartActionTypes;