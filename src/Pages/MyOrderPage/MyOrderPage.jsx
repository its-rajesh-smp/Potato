import React from "react";
import "./MyOrderPage.css";
import OrderContainer from "../../Components/My Order Page/Order Container/OrderContainer";
import useFetch from "../../Hooks/useFetch";
import { useSelector } from "react-redux";
import { USERS } from "../../Firebase/API_URL";

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
