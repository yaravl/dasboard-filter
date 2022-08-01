import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filters-actions";

export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.payload.filter)) {
        return [...state, action.payload.filter];
      }
      return state;
    }
    case REMOVE_FILTER: {
      return state.filter((filter) => filter !== action.payload.filter);
    }
    case CLEAR_FILTER:
      return [];
    default:
      return state;
  }
};
