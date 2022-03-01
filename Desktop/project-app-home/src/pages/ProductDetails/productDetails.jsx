import React, { useState,useEffect, useContext } from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import { FetchProductDetails } from "../../redux/features/productsSlice";

export default function ProductDetails() {
    const [chosenProduct, setChosenProduct] = useState([])
    const productsData=useSelector(state=>state.products.productsData)
  const { id } = useParams();
  const chosenProductDetail=useSelector(state=>state.products.chosenProductDetail)
  console.log("chosen"+ chosenProductDetail)
  // useEffect(() => {
  //     const filteredProduct=productsData.filter(item=>item.id===Number(id));
  //     console.log(filteredProduct)
  //     setChosenProduct(filteredProduct)
  // }, [])
  useEffect(() => {
    FetchProductDetails(id)
   }, [])


  return (
    <div className="product_details">
      <h1>Product details id : {id}</h1>
      {chosenProduct.length>0 && chosenProduct.map(item=>(
          <img src={item.image} alt={item.title} />
      ))}
    </div>
  );
}
