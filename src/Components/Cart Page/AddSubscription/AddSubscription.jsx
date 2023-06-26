import React, { useState } from "react";
import "./AddSubscription.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSubscription,
  setSubscription,
} from "../../../Store/Reducer/userSubscriptionReducer";

function AddSubscription(props) {
  const [start, setStart] = useState(new Date().toISOString().substring(0, 10));
  const [end, setEnd] = useState(new Date().toISOString().substring(0, 10));

  const dispatch = useDispatch();
  const totalCartPrice = useSelector(state => state.totalCartSlice.cartTotal.totalAmount)

  const startingData = new Date(start)
  const endingDate = new Date(end)
  const differenceInTime = endingDate.getTime() - startingData.getTime()
  const totalDate = differenceInTime / (1000 * 3600 * 24) + 1


  // On Click Cancle
  const onClickCancle = () => {
    dispatch(removeSubscription());
    setStart(new Date().toISOString().substring(0, 10));
    setEnd(new Date().toISOString().substring(0, 10));
  };

  // On Click Apply Subscription
  const onClickApplySubscription = () => {
    dispatch(setSubscription({ start: start, end: end }))
  }

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
          Total: <span>{totalDate * totalCartPrice}</span>
        </p>
        <p>
          Total Day: <span>{totalDate}</span>
        </p>
        <p>
          Per Day: <span>{totalCartPrice}</span>
        </p>
      </div>
      <div className="AddSubscription-div__right">
        <div className="inputDiv">
          <input
            onChange={(e) => {
              setStart(e.target.value);
            }}
            value={start}
            type="date"
            name=""
            id="startingDate"
          />
          <input
            onChange={(e) => {
              setEnd(e.target.value);
            }}
            value={end}
            type="date"
            name=""
            id="endingDate"
          />
        </div>
        <div className="btnDiv">
          <button onClick={onClickApplySubscription}>APPLY</button>
          <button onClick={onClickCancle}>CANCLE</button>
        </div>
      </div>
    </div>
  );
}

export default AddSubscription;
