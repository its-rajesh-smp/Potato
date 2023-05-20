import React from "react";
import "./AddAddressBtn.css";
import AddressAddEdit from "../Address AddEdit/AddressAddEdit";

function AddAddressBtn(props) {
  return (
    <div className=" AddAddressBtn-div ">
      <button className="AddAddressBtn-div__btn">Add Address</button>
      {/* <AddressAddEdit /> */}
    </div>
  );
}

export default AddAddressBtn;
