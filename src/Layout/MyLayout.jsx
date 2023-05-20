import React from "react";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";

function MyLayout(props) {
  const isAuth = useSelector((state) => state.authSlice.isAuth);

  return <>{isAuth && <Header />}</>;
}

export default MyLayout;
