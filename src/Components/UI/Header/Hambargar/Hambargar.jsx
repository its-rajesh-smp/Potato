import React from "react";
import "./Hambargar.css";

function Hambargar(props) {
  return (
    <div className=" Hambargar-div ">
      <i className="bx bx-menu"></i>
      {props.showBack ? <i onClick={props.onClickBack} className='bx bx-arrow-back' ></i> : <i onClick={props.onClickUserIcon} className='bx bxs-user-circle'></i>}
    </div>
  );
}

export default Hambargar;
