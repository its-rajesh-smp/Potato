import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import OrderSuccessPage from "../Pages/OrderSuccessPage/OrderSuccessPage";
import Login from "../Pages/Login/Login";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";
import MyOrderPage from "../Pages/MyOrderPage/MyOrderPage";

function MyRoutes(props) {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/food/:foodId" element={<ProductDetailsPage />} />
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/myorder" element={<MyOrderPage />} />
          <Route path="*" element={<HomePage />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default MyRoutes;
