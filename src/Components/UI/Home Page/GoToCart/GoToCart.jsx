import React from 'react';
import "./GoToCart.css"

function GoToCart(props) {
  return (
    <div className=' GoToCart-div '>
      <button className="GoToCart-div-button">
        <div className="GoToCart-div-button-CartPrice">
          <p>
            <span>{0}</span> Item
          </p>
          <p>
            <span className="moneyType">₹</span>
            <span className="price"> {0}</span>
            <span className="taxes">+taxes</span>
          </p>
        </div>

        <div className="GoToCart-div-button-ViewCart">
          <p>VIEW CART</p>
          <i className="bx bxs-right-arrow"></i>
        </div>
      </button>
    </div>
  );
}

export default GoToCart;
