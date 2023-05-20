import React from "react";
import "./Header.css";
import Hambargar from "../UI/Header/Hambargar/Hambargar";
import HambargarContainer from "../UI/Header/Hambargar Container/HambargarContainer";

function Header(props) {
  return (
    <div className=" Header-div">
      <Hambargar />
      {/* <HambargarContainer /> */}
    </div>
  );
}

export default Header;
