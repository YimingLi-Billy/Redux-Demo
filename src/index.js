import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRedux from "./AppRedux";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRedux />
    </Provider>
  </React.StrictMode>
);
