import React from "react";
import "./App.css";
import Header from "../Components/Header/Header";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";

function App(props) {
  return (
    <div className=" App-div ">
      <Header />
      {/* <HomePage /> */}
      <CartPage />
    </div>
  );
}

export default App;
