import React from "react";
import "./User.css";
import { useNavigate } from "react-router-dom";

function User(props) {
  const navigate = useNavigate()
  const onClickMyOrders = () => {
    navigate("/myorder")
  }

  return (
    <div className=" User-div ">
      <i className="bx bxs-user"></i>
      <p>Rajesh Singha Maha Patra</p>
      <p onClick={onClickMyOrders}>My Orders</p>
    </div>
  );
}

export default User;
