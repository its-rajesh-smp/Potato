import React from "react";
import "./ProductImageContainer.css";

function ProductImageContainer(props) {
  return (
    <div className=" ProductImageContainer-div ">
      <div className="bigImg">
        <img src={props.data.mainImg} alt="" />
        <div className="imageName">
          <h1>{props.data.name}</h1>
          <p>{props.data.desc}</p>
        </div>
      </div>
      <div className="smallImg">
        {Object.values(props.data.img).map((imgSrc) => {
          return <img src={imgSrc} key={Math.random()} />;
        })}
      </div>
    </div>
  );
}

export default ProductImageContainer;
