import React from "react";
import "./MyOrderPage.css";
import OrderContainer from "../../Components/My Order Page/Order Container/OrderContainer";
import useFetch from "../../Hooks/useFetch";
import { useSelector } from "react-redux";
import { USERS } from "../../Firebase/API_URL";

function MyOrderPage(props) {

  const myOrders = useSelector(state => state.userOrderSlice.orders)



  const onGoingOrder = []
  const previousOrder = []


  myOrders.forEach((order) => {
    if (order.orderStatus === "PENDING") {
      onGoingOrder.push(order)
    }
    else {
      previousOrder.push(order)
    }
  })



  return (
    <div className=" MyOrderPage-div ">
      <h2>My Order</h2>
      <OrderContainer name="Ongoing" data={onGoingOrder} />
      <OrderContainer name="Previous" data={previousOrder} />
    </div>
  );
}

export default MyOrderPage;
