import React from "react";
import "./CheckoutPage.css";
import BillDetails from "../../Components/BillDetails/BillDetails";
import DelivaryAddress from "../../Components/DelivaryAddress/DelivaryAddress";
import PaymentMethodContainer from "../../Components/Checkout Page/Payment Method Container/PaymentMethodContainer";

function CheckoutPage(props) {
  return (
    <div className=" CheckoutPage-div ">
      <DelivaryAddress />
      <BillDetails />
      <PaymentMethodContainer />
      <button className=" CheckoutPage-div_addToCartBTN">PLACE ORDER</button>
    </div>
  );
}

export default CheckoutPage;
