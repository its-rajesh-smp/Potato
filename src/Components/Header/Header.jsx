import React, { useState } from "react";
import "./Header.css";
import Hambargar from "../UI/Header/Hambargar/Hambargar";
import HambargarContainer from "../UI/Header/Hambargar Container/HambargarContainer";
import { useNavigate } from "react-router-dom";

function Header(props) {

  const navigate = useNavigate()
  const [showBack, setShowBack] = useState(false)

  const onClickUserIcon = () => {
    navigate("/user")
    setShowBack(true)
  }

  const onClickBack = () => {
    navigate(-1)
    setShowBack(false)
  }

  const onClickBrand = () => {
    navigate("/")
    setShowBack(false)
  }


  return (
    <div className=" Header-div">
      <Hambargar onClickBrand={onClickBrand} onClickBack={onClickBack} showBack={showBack} onClickUserIcon={onClickUserIcon} />
      {/* <HambargarContainer /> */}
    </div>
  );
}

export default Header;
