import { combineReducers } from "@reduxjs/toolkit";
import ProductsReducer from "./features/productsSlice";

export const rootReducer=combineReducers({
    products:ProductsReducer
})