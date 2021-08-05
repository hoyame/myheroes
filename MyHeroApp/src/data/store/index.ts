import { createStore, combineReducers, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import AsyncStorage from "@react-native-community/async-storage";

import LocalisationReducer from "../reducer/localisation";
import AlertReducer from "../reducer/alerts";
import UserReducer from "../reducer/user";

const reducers = combineReducers({
	alerts: AlertReducer,
	location: LocalisationReducer,
	user: UserReducer,
});

const persistConfig = {
	// configuration object for redux-persist
	key: "root",
	storage: AsyncStorage, // define which storage to use
	whitelist: ["user"], // only navigation will be persisted
	blacklist: ["location, alerts"],
};

const persistedReducer = persistReducer(persistConfig, reducers); // create a persisted reducer

const store = createStore(
	persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
	applyMiddleware() // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

//const store = createStore(reducers);
export { store, persistor };

//export default store;
export type StoreType = ReturnType<typeof reducers>;
export const useReduxState: TypedUseSelectorHook<StoreType> = useSelector;
