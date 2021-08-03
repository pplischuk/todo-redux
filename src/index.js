import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/rootStore";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import TodoContainer from "./containers/TodoContainer";

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate persistor = {persistor}>
      <TodoContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


