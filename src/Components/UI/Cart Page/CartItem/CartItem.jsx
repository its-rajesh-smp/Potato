import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../../Store/Actions/userCartActions";

function CartItem(props) {
  const dispatch = useDispatch();

  // On Increament Btn Handeler
  const onIncreamentBtnClick = () => {
    dispatch(addToCart(props.data, props.data.quantity));
  };

  // On Decreamanet Btn Handeler
  const onDecreamentBtnClick = () => {
    dispatch(removeFromCart(props.data, props.data.quantity));
  };

  return (
    <div className=" CartItem-div ">
      <div className="CartItem-div-item">
        <i className="bx bx-checkbox-square"></i>
        <p>{props.data.name}</p>
      </div>

      <div className="CartItem-div-item-price">
        <p className="CartItem-div-item-quantity">
          <span onClick={onDecreamentBtnClick}>-</span>
          {props.data.quantity}
          <span onClick={onIncreamentBtnClick}>+</span>
        </p>

        <p className="original">
          <span>{props.data.quantity}</span> * <span>{props.data.price}</span> ={" "}
          <span>{props.data.quantity * props.data.price}</span>
        </p>

        {/* <p className='discount'>{"DISCOUNT"}</p> */}
      </div>
    </div>
  );
}

export default CartItem;
