import React from "react";
import "./GoToCart.css";
import { useNavigate } from "react-router-dom";

function GoToCart(props) {
  const navigate = useNavigate();

  /* -------------------------------------------------------------------------- */
  /*                                  ON CLICK                                  */
  /* -------------------------------------------------------------------------- */
  const onCartBtnClickHandeler = () => {
    navigate("/cart");
  };

  return (
    <div className=" GoToCart-div App-div ">
      <button onClick={onCartBtnClickHandeler} className="GoToCart-div-button">
        <div className="GoToCart-div-button-CartPrice">
          <p>
            <span className="totalItem">{0}</span> Item
          </p>
          <p>
            <span className="moneyType">₹</span>
            <span className="price"> {0}</span>
            <span className="taxes">+taxes</span>
          </p>
        </div>

        <div className="GoToCart-div-button-ViewCart">
          <p className="viewCart">VIEW CART</p>
          <i className="bx bxs-right-arrow"></i>
        </div>
      </button>
    </div>
  );
}

export default GoToCart;
