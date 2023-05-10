import React from "react";
import "./ProductPhoto.css";
import ProductPhotoBtn from "../Product-PhotoBtn/ProductPhotoBtn";


function ProductPhoto(props) {
  return (
    <div className=" ProductPhoto-div ">
      <div className="ProductPhoto-div-img">
        <img src={"https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"} alt="" />
      </div>

      <ProductPhotoBtn />

    </div>
  );
}

export default ProductPhoto;
