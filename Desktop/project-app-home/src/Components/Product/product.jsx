import React, { useEffect, useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FetchProductDetails,
  addToBasket,
} from "../../redux/features/productsSlice";
function Product(props) {
  const { id, category, title, image, soni, rating, price, description } =
    props;
  const productsData = useSelector((state) => state.products.productsData);
  const chosenProductsBasket = useSelector(
    (state) => state.products.chosenProductsBasket
  );

  const [son, setSon] = useState(0);
  const [jamiSoni, setJamiSoni] = useState(soni);
  const [disableBtn, setDisableBtn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const maxWord = (text) => {
    const matn = text.slice(0, 15);
    return matn + "...";
  };
  const seeProduct = (e) => {
    e.preventDefault();
    navigate(`/ss/${id}`);
  };

  const SoniPlusBtn = (e) => {
    e.preventDefault();
    setSon(son + 1);
    setJamiSoni(jamiSoni - 1);
    setDisableBtn(false);
  };
  const SoniMinusBtn = (e) => {
    e.preventDefault();
    if (son < 1) setDisableBtn(true);
    else {
      setDisableBtn(false);
      setSon(son - 1);
      setJamiSoni(jamiSoni + 1);
    }
  };
  const chooseBtn = (e) => {
    e.preventDefault();

    if (son === 0) alert("mahsulot sonini tanlamadizgiz");
    else {
      const filtered =
        productsData.length > 0 &&
        productsData.filter((item) => item.id === id)[0];
        let newObj={...filtered,tanlanganSoni:son}
        console.log(newObj);
        dispatch(addToBasket(newObj));
    }

  };


  return (
    <div className="product">
      <img onClick={seeProduct} src={image} alt={title} />
      <p>{maxWord(title)}</p>
      <p>Mahsulotlar soni:{jamiSoni} ta</p>
      <div className="count_btn">
        <button disabled={disableBtn} onClick={SoniMinusBtn}>
          -
        </button>

        <p>son {son}</p>
        <button onClick={SoniPlusBtn}>+</button>
      </div>
      <button onClick={chooseBtn}>Tanlash</button>
    </div>
  );
}
export default React.memo(Product);
