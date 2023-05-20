import React from "react";
import "./UserProfilePage.css";
import User from "../../Components/UI/User Profile Page/User/User";
import UserAddress from "../../Components/User Profile Page/User Address/UserAddress";
import AddAddressBtn from "../../Components/UI/User Profile Page/AddAddressBtn/AddAddressBtn";

function UserProfilePage(props) {
  return (
    <div className=" UserProfilePage-div ">
      <User />
      <UserAddress />
      <AddAddressBtn />
    </div>
  );
}

export default UserProfilePage;
