import React from "react";
import "./MyOrderPage.css";
import OrderContainer from "../../Components/My Order Page/Order Container/OrderContainer";

function MyOrderPage(props) {
  return (
    <div className=" MyOrderPage-div ">
      <h2>My Order</h2>
      <OrderContainer />
      <OrderContainer />
    </div>
  );
}

export default MyOrderPage;
