import React from "react";
import "./OrderContainer.css";
import Order from "../Order/Order";

function OrderContainer(props) {
  return (
    <div className=" OrderContainer-div ">
      <h3>Ongoing Order</h3>
      <Order />
      <Order />
      <Order />
    </div>
  );
}

export default OrderContainer;
