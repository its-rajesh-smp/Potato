import React, { useState } from "react";
import "./DelivaryAddress.css";
import UserAddress from "../User Profile Page/User Address/UserAddress";

function DelivaryAddress(props) {
  const [showAllAddress, setShowAllAddress] = useState(false);

  // On Click Change Address Btn
  const onClickChangeAddress = () => {
    setShowAllAddress((p) => !p);
  };

  return (
    <>
      <div className=" DelivaryAddress-div ">
        <h3>Your Order</h3>
        <p className="formTo">
          form <span>Kolkata Local</span>
        </p>
        <p className="formTo">
          to <span>New Town</span>
        </p>

        <p className="deliveryTime">
          Scheduled delivery for <span>Wednesday</span>,{" "}
          <span>05 Apr 2023</span> between <span>10:00 PM - 11:00 PM</span>
        </p>
        <button onClick={onClickChangeAddress}>Change Delivery Address</button>
      </div>
      {showAllAddress && <UserAddress onClick={onClickChangeAddress} />}
    </>
  );
}

export default DelivaryAddress;
