import React from "react";
import "./AddressAddEdit.css";

function AddressAddEdit(props) {
  return (
    <form className=" AddressAddEdit-div ">
      <div>
        <input placeholder="Name" type="text" name="" id="" />
        <input placeholder="Phone" type="text" name="" id="" />
      </div>

      <input placeholder="Landmark" type="text" name="" id="" />
      <input placeholder="City" type="text" name="" id="" />
      <input placeholder="District" type="text" name="" id="" />
      <div>
        <input placeholder="State" type="text" name="" id="" />

        <input placeholder="Pincode" type="text" name="" id="" />
      </div>
      <button>SAVE</button>
    </form>
  );
}

export default AddressAddEdit;
