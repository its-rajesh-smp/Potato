import React, { useEffect, useState } from "react";
import "./App.css";

import MyLayout from "../Layout/MyLayout";
import MyRoutes from "../Routes/MyRoutes";
import { useDispatch } from "react-redux";
import { fetchExistingUser } from "../Store/Actions/authActions";
import LoadingPage from "../Pages/Loading Page/LoadingPage";
import { fetchStoreProduct } from "../Store/Actions/productActions";

function App(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch User
  useEffect(() => {
    dispatch(fetchExistingUser(setLoading));
    dispatch(fetchStoreProduct());
  }, []);

  // Set Loading
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className=" App-div ">
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
