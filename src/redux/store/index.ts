import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { ProductReducer } from '../reducers/ProductReducer';
import { ShoppinReducer } from '../reducers/CartReducer'
import { FiltersReducer } from '../reducers/FiltersReducers'

import { AppActions } from '../actions/AppActions';


const logger = createLogger();

export const rootReducer = combineReducers({ ProductReducer, ShoppinReducer, FiltersReducer });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);