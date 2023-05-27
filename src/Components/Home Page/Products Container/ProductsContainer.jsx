import React, { useCallback } from "react";
import "./ProductsContainer.css";
import Product from "../../UI/Home Page/Product/Product";
import { shallowEqual, useSelector } from "react-redux";

function ProductContainer(props) {
  const products = useSelector((state) => state.productSlice.products);
  const cartItems = useSelector((state) => state.userCartSlice.cart);

  return (
    <div className=" ProductContainer-div ">
      {products.map((product) => {
        const quantity = cartItems[product.id]
          ? cartItems[product.id].quantity
          : 0;
        return <Product quantity={quantity} key={product.id} data={product} />;
      })}
    </div>
  );
}

export default ProductContainer;
