import React, { useState } from "react";

import "./ProductPhotoBtn.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../../Store/Actions/userCartActions";

function ProductPhotoBtn(props) {
  const dispatch = useDispatch();

  // INCREAMENT CART QUANTITY
  const increamentCartQuantity = () => {
    dispatch(addToCart(props.data, props.quantity));
  };

  // DECREAMENT CART QUANTITY
  const decreamentCartQuantity = () => {
    if (props.quantity > 0) {
      dispatch(removeFromCart(props.data, props.quantity));
    }
  };

  return (
    <div className="ProductPhotoBtn-div-button">
      {props.quantity !== 0 && <button onClick={decreamentCartQuantity}>-</button>}
      {props.quantity === 0 ? <p onClick={increamentCartQuantity}>ADD</p> : <p style={{ cursor: "pointer" }}>{props.quantity}</p>}
      {props.quantity !== 0 && <button onClick={increamentCartQuantity}>+</button>}
    </div>
  );
}

export default ProductPhotoBtn;
