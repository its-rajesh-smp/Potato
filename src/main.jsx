import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store/store";
import { BrowserRouter } from "react-router-dom";
import HeaderContextProvider from "./Context/HeaderCTX";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
