import React from "react";
import "./Product.css";
import ProductDetails from "../Product-ProductDetails/ProductDetails";
import ProductPhoto from "../Product-ProductPhoto/ProductPhoto";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();
  /* -------------------------------------------------------------------------- */
  /*                          ON CLICK PRODUCT HANDELER                         */
  /* -------------------------------------------------------------------------- */
  const onClickProduct = () => {
    navigate("/food/58sdf89sd");
  };

  return (
    <div onClick={onClickProduct} className=" Product-div ">
      <ProductDetails />
      <ProductPhoto />
    </div>
  );
}

export default Product;
