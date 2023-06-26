import React from "react";
import "./BillDetails.css";
import { useSelector } from "react-redux";

function BillDetails() {

  const totalDetails = useSelector(state => state.totalCartSlice.cartTotal)
  const subscription = useSelector(state => state.userSubscriptionSlice.subscription)
  const totalPrice = totalDetails.totalAmount * totalDetails.totalQuantity;
  const discount = 0;
  const tax = 49;
  const finalPrice = (totalPrice - discount) + tax;

  return (
    <div className="BillDetails-div">
      <h3>Bill Details</h3>

      <div className="order">
        <p>Item total</p>
        <p>
          ₹<span>{totalPrice}</span>
        </p>
      </div>

      <div className="tax">
        <p>Taxes & charges</p>
        <p>
          ₹<span>{tax}</span>
        </p>
      </div>

      <div>
        <p>Subscription  <span>{subscription.start} to {subscription.end} </span> </p>
      </div>

      {discount !== 0 && <div className="offer">
        <p>Offer</p>
        <p>
          ₹<span>{discount}</span>
        </p>
      </div>}

      <div className="total">
        <p>Bill total</p>
        <p className="totalAmount">
          ₹<span>{finalPrice}</span>
        </p>
      </div>



    </div>
  );
}

export default BillDetails;
