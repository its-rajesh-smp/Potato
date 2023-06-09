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
    navigate(`/food/${props.data.id}`);
  };

  return (
    <div className=" Product-div ">
      <ProductDetails onClick={onClickProduct} data={props.data} />
      <ProductPhoto quantity={props.quantity} data={props.data} />
    </div>
  );
}

export default Product;
