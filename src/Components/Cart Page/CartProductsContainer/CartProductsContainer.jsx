import React from "react";
import "./CartProductsContainer.css";
import CartItem from "../../UI/Cart Page/CartItem/CartItem";
import { useSelector } from "react-redux";

function CartProductsContainer(props) {
  const cartItem = Object.values(
    useSelector((state) => state.userCartSlice.cart)
  );

  return (
    <div className=" CartProductsContainer-div ">
      {cartItem.map((product) => {
        return <CartItem data={product} key={product.cartId} />;
      })}
    </div>
  );
}

export default CartProductsContainer;
