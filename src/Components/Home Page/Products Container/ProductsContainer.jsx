import React from "react";
import "./ProductsContainer.css";
import Product from "../../UI/Home Page/Product/Product";
import { useSelector } from "react-redux";

function ProductContainer(props) {
  const products = useSelector((state) => state.productSlice.products);

  return (
    <div className=" ProductContainer-div ">
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </div>
  );
}

export default ProductContainer;
