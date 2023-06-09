import React from "react";
import "./ProductPhoto.css";
import ProductPhotoBtn from "../Product-PhotoBtn/ProductPhotoBtn";

function ProductPhoto(props) {
  return (
    <div className=" ProductPhoto-div ">
      <div className="ProductPhoto-div-img">
        <img src={props.data.mainImg} alt="" />
      </div>

      <ProductPhotoBtn quantity={props.quantity} data={props.data} />
    </div>
  );
}

export default ProductPhoto;
