import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {filterReducer} from "./feature/filter/filter-slice";
import {positionReducer} from "./feature/position/position-slice";

console.log(filterReducer)

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})