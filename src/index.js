import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";

import "./index.css";
import TodoContainer from "./containers/TodoContainer";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store = {store}>
    <TodoContainer />
  </Provider>,
  document.getElementById("root")
);


