import React, { useState } from "react";
import "./AddressAddEdit.css";
import { useDispatch } from "react-redux";
import {
  addNewAddress,
  editAddress,
} from "../../../../Store/Actions/userAddressActions";

function AddressAddEdit(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState(props.data ? props.data.name : "");
  const [phone, setPhone] = useState(props.data ? props.data.phone : "");
  const [landmark, setLandmark] = useState(
    props.data ? props.data.landmark : ""
  );
  const [city, setCity] = useState(props.data ? props.data.city : "");
  const [district, setDistrict] = useState(
    props.data ? props.data.district : ""
  );
  const [state, setState] = useState(props.data ? props.data.state : "");
  const [pincode, setPincode] = useState(props.data ? props.data.pincode : "");

  /* -------------------------------------------------------------------------- */
  /*                            On Click Add Address                            */
  /* -------------------------------------------------------------------------- */
  const onSaveBtnClickHandeler = (e) => {
    e.preventDefault();
    const newAddressObj = {
      name: name,
      phone: phone,
      landmark: landmark,
      city: city,
      district: district,
      state: state,
      pincode: pincode,
    };
    dispatch(addNewAddress(newAddressObj));
    props.onEditBtnClick()
  };

  /* -------------------------------------------------------------------------- */
  /*                              On Edit Btn Click                             */
  /* -------------------------------------------------------------------------- */
  const onEditBtnClickHandeler = (e) => {
    e.preventDefault();
    const newAddressObj = {
      name: name,
      phone: phone,
      landmark: landmark,
      city: city,
      district: district,
      state: state,
      pincode: pincode,
    };
    dispatch(editAddress(newAddressObj, props.data.addressId));
    props.onEditBtnClick()
  };
  return (
    <form className=" AddressAddEdit-div ">
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
          type="text"
          name=""
          id=""
        />
      </div>

      <input
        onChange={(e) => setLandmark(e.target.value)}
        value={landmark}
        placeholder="Landmark"
        type="text"
        name=""
        id=""
      />
      <input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        placeholder="City"
        type="text"
        name=""
        id=""
      />
      <input
        onChange={(e) => setDistrict(e.target.value)}
        value={district}
        placeholder="District"
        type="text"
        name=""
        id=""
      />
      <div>
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          placeholder="State"
          type="text"
          name=""
          id=""
        />

        <input
          onChange={(e) => setPincode(e.target.value)}
          value={pincode}
          placeholder="Pincode"
          type="text"
          name=""
          id=""
        />
      </div>
      {!props.edit && <button onClick={onSaveBtnClickHandeler}>ADD</button>}
      {props.edit && <button onClick={onEditBtnClickHandeler}>SAVE</button>}
    </form>
  );
}

export default AddressAddEdit;
