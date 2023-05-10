import React from "react";
import "./AddSubscription.css";

function AddSubscription(props) {
  return (
    <div className=" AddSubscription-div ">
      <div className="AddSubscription-div__left">
        <h3>Add As Subscription</h3>
        <div className="AddSubscription-div__left__time">
          <p>
            From: <span>20/25/25</span>
          </p>
          <p>
            To: <span>20/25/25</span>
          </p>
        </div>
        <p>
          Daily: <span>255</span>
        </p>
      </div>
      <div className="AddSubscription-div__right">
        <div className="inputDiv">
          <input type="date" name="" id="startingDate" />
          <input type="date" name="" id="endingDate" />
        </div>
        <div className="btnDiv">
          <button>CALCULATE</button>
          <button>CANCLE</button>
        </div>
      </div>
    </div>
  );
}

export default AddSubscription;
