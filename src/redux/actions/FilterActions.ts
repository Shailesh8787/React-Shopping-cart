import { Dispatch } from 'redux';
import { FiltersActionType, SET_FILTERS, GET_FILTERS, RESET_FILTERS} from '../types/FiltersTypes';


export const setFilters = (filters) => {
    return (dispatch: Dispatch<FiltersActionType>) => {
        dispatch({
            type: SET_FILTERS,
            filters: filters
        })
    }
    
}

export const getFilters = () => {
    return (dispatch: Dispatch<FiltersActionType>) => {
        dispatch({
            type: GET_FILTERS
        })
    }
}

export const resetFilters = () => {
    return (dispatch: Dispatch<FiltersActionType>) => {
        dispatch({
            type: RESET_FILTERS
        })
    }
}

