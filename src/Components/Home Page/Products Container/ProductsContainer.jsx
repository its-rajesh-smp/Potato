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
      }).filter((product) => {
        const productData = product.props.data
        if (productData.name.toLowerCase().trim().includes(props.searchParam.toLowerCase().trim()) || productData.price == props.searchParam || props.searchParam.trim() === "") {
          return true
        }
      })}
    </div>
  );
}

export default ProductContainer;
