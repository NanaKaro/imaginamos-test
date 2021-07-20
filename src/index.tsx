import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import "./styles/index.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);
