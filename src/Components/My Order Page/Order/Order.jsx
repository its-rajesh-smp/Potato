import React from "react";
import "./Order.css";

function Order(props) {
  return (
    <div className=" Order-div ">
      <div className="Order-div__imgContainer">
        <img
          src="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-005.jpg"
          alt=""
        />
        <p>Chicken</p>
      </div>

      <progress id="file" value="32" max="100"></progress>

      <div className="Order-div__priceContainer">
        <p>2564</p>
        <p>5</p>
      </div>
    </div>
  );
}

export default Order;
