import React from "react";
import "./HambargarContainer.css";
import HambargarItem from "../Hambargar Item/HambargarItem";

function HambargarContainer(props) {
  return (
    <div className=" HambargarContainer-div ">
      <div>
        <HambargarItem />
        <HambargarItem />
        <HambargarItem />
      </div>
      <div>
        <HambargarItem />
      </div>
    </div>
  );
}

export default HambargarContainer;
