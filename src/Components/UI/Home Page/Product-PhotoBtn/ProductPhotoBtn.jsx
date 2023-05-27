import React, { useState } from "react";

import "./ProductPhotoBtn.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../Store/Actions/userCartActions";

function ProductPhotoBtn(props) {
  const dispatch = useDispatch();

  // Quantity
  const [quantity, setQuantity] = useState(
    props.data.quantity ? props.data.quantity : 0
  );

  // INCREAMENT CART QUANTITY
  const increamentCartQuantity = () => {
    dispatch(addToCart(props.data, quantity, setQuantity));
  };

  return (
    <div className="ProductPhotoBtn-div-button">
      <button>-</button>
      <p style={{ cursor: "pointer" }}>{quantity}</p>
      <button onClick={increamentCartQuantity}>+</button>
    </div>
  );
}

export default ProductPhotoBtn;
