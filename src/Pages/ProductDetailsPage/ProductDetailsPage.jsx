import React from "react";
import "./ProductDetailsPage.css";
import ProductImageContainer from "../../Components/Product Details Page/Product Image Container/ProductImageContainer";

function ProductDetailsPage(props) {
  return (
    <div className=" ProductDetailsPage-div ">
      <ProductImageContainer />
      <button className=" ProductDetailsPage-div_addToCartBTN">
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductDetailsPage;
