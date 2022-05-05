import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./features/productsSlice";

export const rootReducer=combineReducers({
    products:ProductReducer
})