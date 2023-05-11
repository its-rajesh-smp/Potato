import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import OrderSuccessPage from "../Pages/OrderSuccessPage/OrderSuccessPage";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      <HomePage />
      {/* <ProductDetailsPage /> */}
      {/* <CartPage /> */}
      {/* <CheckoutPage /> */}
      {/* <OrderSuccessPage /> */}
    </div>
  );
}

export default App;
