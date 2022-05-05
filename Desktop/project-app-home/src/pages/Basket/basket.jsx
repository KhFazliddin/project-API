import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../../redux/features/productsSlice";

export default function Basket() {
  const chosenProductsBasket = useSelector(
    (state) => state.products.chosenProductsBasket
  );
  console.log(chosenProductsBasket)
  return (
    <div>
      {chosenProductsBasket.length > 0 ? 
        chosenProductsBasket.map((item) => (
          <p>{item.title}</p>,
          <div>{item.image}</div>
        ))
       : (
        <p>Savat bo'sh</p>
      )}
    </div>
  );
}
