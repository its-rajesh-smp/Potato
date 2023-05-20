import React from "react";
import "./UserAddress.css";
import AddressCard from "../../UI/User Profile Page/Address Card/AddressCard";

function UserAddress(props) {
  return (
    <div className=" UserAddress-div ">
      <h3>Your Address</h3>
      <div className="UserAddress-div__container">
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
    </div>
  );
}

export default UserAddress;
