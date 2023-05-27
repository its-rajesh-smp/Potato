import React, { useState } from "react";
import "./AddAddressBtn.css";
import AddressAddEdit from "../Address AddEdit/AddressAddEdit";

function AddAddressBtn(props) {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const onClickToggleAddEditCard = () => {
    setShowAddEdit((p) => !p);
  };

  return (
    <div className=" AddAddressBtn-div ">
      <button
        onClick={onClickToggleAddEditCard}
        className="AddAddressBtn-div__btn"
      >
        Add Address
      </button>

      {showAddEdit && <AddressAddEdit />}
    </div>
  );
}

export default AddAddressBtn;
