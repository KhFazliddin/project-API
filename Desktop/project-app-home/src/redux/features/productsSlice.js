import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let api = "https://fakestoreapi.com/products";

export const FetchAsyncProducts = createAsyncThunk(
  "products/FetchAsyncProducts",
  async() => {
    const responce = await axios
    .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err.message));
    return responce.data;
  }
);
export const FetchProductDetails=createAsyncThunk(
  "products/FetchProductDetails",
  async(id)=>{
    const responce=await axios.get(`https://fakestoreapi.com/products${id}`)
    .catch((err)=> console.log(err.message))
    return responce;

  }
)
const initialState = {
  productsData: [],
  chosenProductsBasket: [],
  chosenProductDetail:{},
  error:""
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.chosenProductsBasket = [
        ...state.chosenProductsBasket,
        action.payload,
      ];
    },
  },
  extraReducers: {
[FetchAsyncProducts.pending]:()=>{
    console.log('loading')
},
[FetchAsyncProducts.fulfilled]:(state,action)=>{
  const fullData=action.payload.map(item=>{
    return {
      ...item,
      count:100,
    };
  });
  return {...state,productsData:fullData}
},
[FetchAsyncProducts.rejected]:(state)=>{
    console.log("network error")
    return {...state,error:"network error"}
},
[FetchProductDetails.fulfilled]:(state,action)=>{

  return {...state,chosenProductDetail:action.payload}
}
  },
});

export const {  addToBasket } = productsSlice.actions;
export default productsSlice.reducer;
