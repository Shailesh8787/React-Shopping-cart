export const SET_FILTERS = 'SET_FILTERS';
export const GET_FILTERS = 'GET_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';

interface FilterAsync {
    filters: {
        selectedCategory: String,
        query: String
    }
}

interface SetFilters extends FilterAsync {
    type: typeof SET_FILTERS,
};
interface GetFilters {
    type: typeof GET_FILTERS,
};
interface ResetFilters {
    type: typeof RESET_FILTERS,
};

export type FiltersActionType =
  | SetFilters
  | GetFilters
  | ResetFilters