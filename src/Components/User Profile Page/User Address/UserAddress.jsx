import React from "react";
import "./UserAddress.css";
import AddressCard from "../../UI/User Profile Page/Address Card/AddressCard";
import { useSelector } from "react-redux";

function UserAddress(props) {
  const userAddressArr = useSelector((state) => state.userAddressSlice.address);
  // On Continue Btn Click
  const onContinueBtnClick = () => {
    props.onClick();
  };

  return (
    <div className=" UserAddress-div ">
      <h3>Your Address</h3>
      <div className="UserAddress-div__container">
        {userAddressArr.map((address) => {
          return <AddressCard data={address} key={address.addressId} />;
        })}

        {props.showContinue && (
          <button onClick={onContinueBtnClick}>CONTINUE</button>
        )}
      </div>
    </div>
  );
}

export default UserAddress;
