import React from "react";
import "./PaymentMethodContainer.css";
import PaymentMethod from "../Payment Method/PaymentMethod";

function PaymentMethodContainer(props) {
  return (
    <div className=" PaymentMethodContainer-div ">
      <h3>Add Payment Method</h3>
      <PaymentMethod />
    </div>
  );
}

export default PaymentMethodContainer;
