import React from "react";
import "./CartPage.css";
import BillDetails from "../../Components/Cart Page/BillDetails/BillDetails";
import CartProductsContainer from "../../Components/Cart Page/CartProductsContainer/CartProductsContainer";
import DelivaryAddress from "../../Components/Cart Page/DelivaryAddress/DelivaryAddress";
import AddSubscription from "../../Components/Cart Page/AddSubscription/AddSubscription";
import OffersContainer from "../../Components/Offers Container/OffersContainer";

function CartPage(props) {
  return (
    <div className=" CartPage-div ">
      <DelivaryAddress />
      <AddSubscription />
      <OffersContainer
        style={{ border: "none", borderBottom: "1px solid rgb(174, 174, 174)" }}
      />
      <CartProductsContainer />
      <BillDetails />
      <button className="checkOutBtn">CHECKOUT</button>
    </div>
  );
}

export default CartPage;
