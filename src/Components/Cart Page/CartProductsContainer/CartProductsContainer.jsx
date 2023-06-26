import React from "react";
import "./CartProductsContainer.css";
import CartItem from "../../UI/Cart Page/CartItem/CartItem";

function CartProductsContainer(props) {

  return (
    <div className=" CartProductsContainer-div ">
      {props.cartItem.map((product) => {
        return <CartItem data={product} key={product.cartId} />;
      })}
    </div>
  );
}

export default CartProductsContainer;
