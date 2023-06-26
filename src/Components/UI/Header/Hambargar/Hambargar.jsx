import React from "react";
import "./Hambargar.css";

function Hambargar(props) {

  return (
    <div className=" Hambargar-div ">
      <i onClick={props.openCloseHambargar} className="bx bx-menu"></i>
      <div onClick={props.onClickBrand}>
        <img src="https://cdn-icons-png.flaticon.com/512/1784/1784170.png" alt="" />
        <h1>Potato</h1>
      </div>
      {props.showBack ? <i onClick={props.onClickBack} className='bx bx-arrow-back' ></i> : <i onClick={props.onClickUserIcon} className='bx bxs-user-circle'></i>}
    </div>
  );
}

export default Hambargar;
