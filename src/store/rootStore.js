import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./indexReducers";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
    storeEnhancers(
        applyMiddleware()
    )
);

export default store;