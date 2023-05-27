import React, { useState } from "react";
import "./AddressCard.css";
import AddressAddEdit from "../Address AddEdit/AddressAddEdit";

function AddressCard(props) {
  return (
    <>
      <div className=" AddressCard-div ">
        <div>
          <input type="radio" name="" id="" />
        </div>
        <div className="AddressCard-div__container">
          <div className="AddressCard-div__NameContainer">
            <div>
              <p>{props.data.name}</p>
              <p>{props.data.phone}</p>
            </div>
            <i className="bx bxs-edit-alt"></i>
            <p>X</p>
          </div>
          <div className="AddressCard-div__addressContainer">
            <p>{props.data.locality}</p>
            <p>{props.data.city}</p>
            <p>{props.data.district}</p>
            <p>{props.data.state}</p>
            <p>{props.data.pincode}</p>
          </div>
        </div>
      </div>

      {/* <AddressAddEdit /> */}
    </>
  );
}

export default AddressCard;
