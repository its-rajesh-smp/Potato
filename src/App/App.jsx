import React, { useEffect } from "react";
import "./App.css";

import MyLayout from "../Layout/MyLayout";
import MyRoutes from "../Routes/MyRoutes";
import { useDispatch } from "react-redux";
import { fetchExistingUser } from "../Store/Actions/authActions";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExistingUser());
  }, []);

  return (
    <div className=" App-div ">
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
