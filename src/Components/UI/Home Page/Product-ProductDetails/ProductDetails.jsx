import React from "react";
import "./ProductDetails.css";

function ProductDetails(props) {
  return (
    <div onClick={props.onClick} className="ProductDetails-div">
      <div className="productName">
        <i
          style={{ color: props.data.type === "veg" ? "green" : "red" }}
          className="bx bx-checkbox-square"
        ></i>
        <p>{props.data.name}</p>
      </div>

      <p className="ProductDetails-price">
        ₹<span>{props.data.price}</span>
      </p>

      <p className="desc">{props.data.desc}</p>

      <div className="likeShare">
        <button>
          <i className="bx bx-heart"></i>
        </button>
        <button>
          <i className="bx bx-share"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
