import React from "react";
import "./Header.css";
import Hambargar from "../UI/Header/Hambargar/Hambargar";
import User from "../UI/Header/User/User";

function Header(props) {
  return (
    <div className=" Header-div  container">
      <Hambargar />
      <User />
    </div>
  );
}

export default Header;
