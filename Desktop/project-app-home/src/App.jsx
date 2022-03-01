import React, {useState, useReducer } from "react";
import { BrowserRouter, Routes, Route,withRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Basket from "./pages/Basket/basket";
import Homepage from "./pages/Homepage/homepage";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Login from "./pages/Login/login";
import { StateContext } from "./Context/context";
import { loginReducer,loginInitialState } from "./Reducer/loginReducer";
export default function App() {
  const [state2, dispatch2] = useReducer(loginReducer, loginInitialState);
  console.log(state2.logIn)
  return (
    <StateContext.Provider value={{ state2,dispatch2}}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/basket" element={<Basket />} />
            <Route exact path="/productDetails/:id" element={<ProductDetails />} />
           <Route exact path="/login" element={<Login/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </StateContext.Provider>
  );
}
