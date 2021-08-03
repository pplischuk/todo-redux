import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./indexReducers";
import { persistStore } from "redux-persist";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
    storeEnhancers(
        applyMiddleware()
    )
);

export const persistor = persistStore(store);
