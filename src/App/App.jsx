import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import OrderSuccessPage from "../Pages/OrderSuccessPage/OrderSuccessPage";
import Login from "../Pages/Login/Login";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";
import MyOrderPage from "../Pages/MyOrderPage/MyOrderPage";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      {/* <Login /> */}
      {/* <HomePage /> */}
      {/* <UserProfilePage /> */}
      <MyOrderPage />
      {/* <ProductDetailsPage /> */}
      {/* <CartPage /> */}
      {/* <CheckoutPage /> */}
      {/* <OrderSuccessPage /> */}
    </div>
  );
}

export default App;
