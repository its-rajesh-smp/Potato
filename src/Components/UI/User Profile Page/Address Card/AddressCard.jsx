import React from "react";
import "./AddressCard.css";

function AddressCard(props) {
  return (
    <div className=" AddressCard-div ">
      <div>
        <input type="radio" name="" id="" />
      </div>
      <div className="AddressCard-div__container">
        <div className="AddressCard-div__NameContainer">
          <p>Rajesh Singha Mahapatra</p>
          <p>8942908195</p>
        </div>
        <div className="AddressCard-div__addressContainer">
          <p>Jorisha</p>
          <p>Simlapal</p>
          <p>Bankura</p>
          <p>WB</p>
          <p>722151</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
