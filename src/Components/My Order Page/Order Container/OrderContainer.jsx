import React from "react";
import "./OrderContainer.css";
import Order from "../Order/Order";

function OrderContainer(props) {
  return (
    <div className=" OrderContainer-div ">
      <h3>{props.name} Orders</h3>
      {props.data.map((packet) => {
        return packet.orderItem.map((order) => {
          return <Order data={order} status={packet.orderStatus} subscription={packet.orderSubscription} key={`${packet.orderId}-${order.id} `} id={`${packet.orderId}-${order.id} `} />
        })
      }).reverse()}
    </div>
  );
}

export default OrderContainer;
