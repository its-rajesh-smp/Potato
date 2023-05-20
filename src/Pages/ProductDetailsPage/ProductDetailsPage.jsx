import React from "react";
import "./ProductDetailsPage.css";
import ProductImageContainer from "../../Components/Product Details Page/Product Image Container/ProductImageContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetailsPage(props) {
  const params = useParams();
  const foodDetails = useSelector(
    (state) => state.productSlice.products[params.foodId]
  );

  return (
    <div className=" ProductDetailsPage-div ">
      <ProductImageContainer data={foodDetails} />
      <button className=" ProductDetailsPage-div_addToCartBTN">
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductDetailsPage;
