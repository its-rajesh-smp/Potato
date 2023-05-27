import React from "react";
import "./UserAddress.css";
import AddressCard from "../../UI/User Profile Page/Address Card/AddressCard";
import AddressAddEdit from "../../UI/User Profile Page/Address AddEdit/AddressAddEdit";

function UserAddress(props) {
  // On Continue Btn Click
  const onContinueBtnClick = () => {
    props.onClick();
  };

  return (
    <div className=" UserAddress-div ">
      <h3>Your Address</h3>
      <div className="UserAddress-div__container">
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <button onClick={onContinueBtnClick}>CONTINUE</button>
      </div>
    </div>
  );
}

export default UserAddress;
