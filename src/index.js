import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/rootStore";

import "./index.css";
import TodoContainer from "./containers/TodoContainer";

ReactDOM.render(
  <Provider store = {store}>
    <TodoContainer />
  </Provider>,
  document.getElementById("root")
);


