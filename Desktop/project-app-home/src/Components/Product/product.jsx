import React, { useEffect, useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FetchProductDetails } from "../../redux/features/productsSlice";
export default function Product(props) {
  const { id, category, title, image, rating, price, description } = props;
  const [soni, setSoni] = useState(0);
  const navigate = useNavigate();
  const seeProduct = (e) => {
    e.preventDefault();
    navigate(`/productDetails/${id}`);
  };

  const SoniPlusBtn = (e) => {
    e.preventDefault();
    setSoni(soni + 1);
  };
  const SoniMinusBtn = (e) => {
    e.preventDefault();
    setSoni(soni - 1);
  };

  return (
    <div className="product">
      <img onClick={seeProduct} src={image} alt={title} />
      <p>{title}</p>
      <div className="count_btn">
        <button onClick={SoniMinusBtn}>-</button>
        <p>soni {soni}</p>
        <button onClick={SoniPlusBtn}>+</button>
      </div>
      <button>Tanlash</button>
    </div>
  );
}
