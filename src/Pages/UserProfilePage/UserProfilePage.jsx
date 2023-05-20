import React from "react";
import "./UserProfilePage.css";
import User from "../../Components/UI/User Profile Page/User/User";
import UserAddress from "../../Components/User Profile Page/User Address/UserAddress";

function UserProfilePage(props) {
  return (
    <div className=" UserProfilePage-div ">
      <User />
      <UserAddress />
    </div>
  );
}

export default UserProfilePage;
