import React, { useState } from "react";
import "./Header.css";
import Hambargar from "../UI/Header/Hambargar/Hambargar";
import HambargarContainer from "../UI/Header/Hambargar Container/HambargarContainer";
import { useNavigate } from "react-router-dom";
import { ShowOnMobile } from "../../Styles/media";

function Header(props) {

  const navigate = useNavigate()

  const [hambargar, setHambargar] = useState(false)

  const onClickUserIcon = () => {
    navigate("/user")

  }


  const onClickBrand = () => {
    navigate("/")
  }

  const openCloseHambargar = () => {
    setHambargar(p => !p)
  }



  return (
    <div className=" Header-div">
      <Hambargar openCloseHambargar={openCloseHambargar} onClickBrand={onClickBrand} onClickUserIcon={onClickUserIcon} />
      <ShowOnMobile>
        {hambargar && <HambargarContainer />}
      </ShowOnMobile>
    </div>
  );
}

export default Header;
