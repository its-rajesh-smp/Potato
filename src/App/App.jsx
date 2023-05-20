import React from "react";
import "./App.css";

import MyLayout from "../Layout/MyLayout";
import MyRoutes from "../Routes/MyRoutes";

function App(props) {
  return (
    <div className=" App-div ">
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
