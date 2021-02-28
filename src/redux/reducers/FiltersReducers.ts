interface FiltersState {
    filters: {
        selectedCategory: String,
        query: String
    };

}

const defaultState: FiltersState = {
  filters: {
    selectedCategory: "",
    query: ""
  }
};

import {
    SET_FILTERS,
    GET_FILTERS,
    RESET_FILTERS,
} from '../types/FiltersTypes';

  const FiltersReducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        
        case SET_FILTERS:
            return {filters: action.filters};
        case GET_FILTERS:
            return { filters: {
                selectedCategory: state.filters.selectedCategory,
                query: state.filters.query
            }};
        case RESET_FILTERS:
            return { filters: {
                selectedCategory: "",
                query: ""
            }};
        default:
            return state;
    }
  };
  export {FiltersReducer};