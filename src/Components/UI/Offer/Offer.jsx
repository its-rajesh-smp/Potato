import React, { useContext } from "react";
import "./Offer.css";

function Offer(props) {
  return (
    <div className={`Offer-div`}>
      <p className="promo">{props.offerName}</p>
      <p>
        Promo Code: <span>{props.offerCode}</span>
      </p>
    </div>
  );
}

export default Offer;
