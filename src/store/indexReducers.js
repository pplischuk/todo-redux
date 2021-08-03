import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const persistConfig = {
	key:"root",
	storage,
	whitelist:["reducers"]
};

const rootReducer = combineReducers({
	reducers
});


export default persistReducer(persistConfig, rootReducer);
