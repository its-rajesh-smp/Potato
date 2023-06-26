import React, { useState } from "react";
import "./CartPage.css";
import BillDetails from "../../Components/BillDetails/BillDetails";
import DelivaryAddress from "../../Components/DelivaryAddress/DelivaryAddress";
import CartProductsContainer from "../../Components/Cart Page/CartProductsContainer/CartProductsContainer";
import AddSubscription from "../../Components/Cart Page/AddSubscription/AddSubscription";
import OffersContainer from "../../Components/Offers Container/OffersContainer";
import PaymentMethodContainer from "../../Components/Cart Page/Payment Method Container/PaymentMethodContainer";
import OrderSuccessPage from "../OrderSuccessPage/OrderSuccessPage";
import { useDispatch } from "react-redux";
import { createOrder } from "../../Store/Actions/userOrderActions";

function CartPage(props) {
  const [cartPage, setCartPage] = useState(true)
  const dispatch = useDispatch()

  const onClickOrder = () => {
    setCartPage(false)
    dispatch(createOrder())
  }

  return (
    cartPage ?
      <div className=" CartPage-div ">
        <DelivaryAddress />
        <AddSubscription />
        <OffersContainer
          style={{ border: "none", borderBottom: "1px solid rgb(174, 174, 174)" }}
        />
        <CartProductsContainer />
        <BillDetails />
        <PaymentMethodContainer>

        </PaymentMethodContainer>
        <button onClick={onClickOrder} className="checkOutBtn">ORDER</button>
      </div>
      : <OrderSuccessPage setCartPage={setCartPage} />
  );
}

export default CartPage;
