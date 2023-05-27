import React, { useState } from "react";
import "./AddSubscription.css";

function AddSubscription(props) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [subsPrice, setSubsPrice] = useState(0);

  // Calculate Subscription
  const onClickCalculate = () => {
    setSubsPrice(250);
  };

  return (
    <div className=" AddSubscription-div ">
      <div className="AddSubscription-div__left">
        <h3>Add As Subscription</h3>
        <div className="AddSubscription-div__left__time">
          <p>
            From: <span>{start}</span>
          </p>
          <p>
            To: <span>{end}</span>
          </p>
        </div>
        <p>
          Daily: <span>{subsPrice}</span>
        </p>
      </div>
      <div className="AddSubscription-div__right">
        <div className="inputDiv">
          <input
            onChange={(e) => {
              setStart(e.target.value);
            }}
            type="date"
            name=""
            id="startingDate"
          />
          <input
            onChange={(e) => {
              setEnd(e.target.value);
            }}
            type="date"
            name=""
            id="endingDate"
          />
        </div>
        <div className="btnDiv">
          <button onClick={onClickCalculate}>CALCULATE</button>
          <button>CANCLE</button>
        </div>
      </div>
    </div>
  );
}

export default AddSubscription;
