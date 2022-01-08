import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import stote from "./Redux/stote";
import "bootswatch/dist/zephyr/bootstrap.min.css"

ReactDOM.render(
  <Provider store={stote}>
    <App />
  </Provider>,
  document.getElementById("root")
);
