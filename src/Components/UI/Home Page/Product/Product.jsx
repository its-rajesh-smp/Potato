import React from "react";
import "./Product.css";
import ProductDetails from "../Product-ProductDetails/ProductDetails";
import ProductPhoto from "../Product-ProductPhoto/ProductPhoto";


function Product(props) {
  return (
    <div className=" Product-div ">
      <ProductDetails />
      <ProductPhoto />
    </div>
  );
}

export default Product;
