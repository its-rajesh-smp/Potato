import React from "react";
import "./GoToCart.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function GoToCart(props) {
  const navigate = useNavigate();
  const cartTotal = useSelector((state) => state.totalCartSlice.cartTotal);

  /* -------------------------------------------------------------------------- */
  /*                                  ON CLICK                                  */
  /* -------------------------------------------------------------------------- */
  const onCartBtnClickHandeler = () => {
    navigate("/cart");
  };

  return (
    cartTotal.totalQuantity !== 0 &&
    < div className=" GoToCart-div App-div " >
      <button onClick={onCartBtnClickHandeler} className="GoToCart-div-button">
        <div className="GoToCart-div-button-CartPrice">
          <p>
            <span className="totalItem">{cartTotal.totalQuantity}</span> Item
          </p>
          <p>
            <span className="moneyType">₹</span>
            <span className="price"> {cartTotal.totalAmount}</span>
            <span className="taxes">+taxes</span>
          </p>
        </div>

        <div className="GoToCart-div-button-ViewCart">
          <p className="viewCart">VIEW CART</p>
          <i className="bx bxs-right-arrow"></i>
        </div>
      </button>
    </div >
  );
}

export default React.memo(GoToCart);
