import React, { useState } from "react";
import "./AddressAddEdit.css";
import { useDispatch } from "react-redux";
import { addNewAddress } from "../../../../Store/Actions/userAddressActions";

function AddressAddEdit(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  // On Click Add Address
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
      <button onClick={onSaveBtnClickHandeler}>SAVE</button>
    </form>
  );
}

export default AddressAddEdit;
