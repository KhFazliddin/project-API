import React, { useState, useEffect, useContext } from "react";
import "./homepage.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { FetchAsyncProducts } from "../../redux/features/productsSlice";
import ProductsList from "../../Components/ProductsList/productsList";
function Homepage() {
  const productsData = useSelector((state) => state.products.productsData);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  console.log(productsData);

  useEffect(() => {
    dispatch(FetchAsyncProducts());
  }, [dispatch]);
  return (
    <div className="homepage">
      <h1>Mahsulotlar ruyhati</h1>
      <div className="product_list">
        {productsData?.length > 0 ? (
          productsData.map((item) => (
            <ProductsList
              key={item.id}
              id={item.id}
              title={item.title}
              rating={item.rating}
              image={item.image}
              description={item.description}
              price={item.price}
              category={item.category}
              soni={item.count}
            />
          ))
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
}
export default Homepage;
