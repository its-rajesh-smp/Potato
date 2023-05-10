import React from "react";
import "./SelectedCurrentLocation.css";

function SelectedCurrentLocation(props) {
    return (
        <div className=" SelectedCurrentLocation-div">
            <div className="SelectedCurrentLocation-div-location">
                <i className="bx bxs-edit-location"></i>
                <span>Kolkata, West Bengal, India</span>
                <i className="bx bx-chevron-down"></i>
            </div>




            <div className="SelectedCurrentLocation-div-ASAP">
                <i className="bx bx-time-five"></i>
                <p>ASAP |</p>
                <p>30 min</p>
                <i className="bx bx-chevron-down"></i>
            </div>
        </div>
    );
}

export default SelectedCurrentLocation;
