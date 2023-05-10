import React from "react";
import "./OffersContainer.css";
import Offer from "../UI/Offer/Offer";

function OffersContainer(props) {
  return (
    <div style={{ ...props.style }} className=" OffersContainer-div ">
      <h3>
        <i className="bx bxs-offer"></i>
        Offers For You
      </h3>

      <div className="my-offers-div">
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat50" offerCode="sharpener50" discount={50} />
        <Offer offerName="Flat10" offerCode="kolkataLocal10" discount={10} />
      </div>
    </div>
  );
}

export default OffersContainer;
