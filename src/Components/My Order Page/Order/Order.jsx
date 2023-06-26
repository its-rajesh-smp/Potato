import React from "react";
import "./Order.css";

function Order(props) {


  const startingData = new Date(props.subscription.start)
  const endingDate = new Date(props.subscription.end)
  const differenceInTime = endingDate.getTime() - startingData.getTime()
  let totalDate = differenceInTime / (1000 * 3600 * 24) + 1


  return (
    <div className=" Order-div ">
      <div className="Order-div__imgContainer">
        <img
          src={props.data.img.img1}
          alt=""
        />
        <div>
          <p>{props.data.name}</p>
          {props.subscription.start &&
            <div className="orderDetails">
              <p>From: {props.subscription.start}  </p>
              <p>To: {props.subscription.end}  </p>
              <p>Total Date: {totalDate}  </p>
              <p>Order Id: {props.id}  </p>
            </div>
          }
        </div>

      </div>



      <div className="Order-div__priceContainer">
        <p>{props.data.price}</p>
        <p>{props.data.quantity}</p>
        <p>{props.data.quantity * props.data.price}</p>
      </div>
    </div>
  );
}

export default Order;
