import { createStore, combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import LocalisationReducer from '../reducer/localisation';
import AlertReducer from '../reducer/alerts';

const reducers = combineReducers({
    alerts: AlertReducer,
    location: LocalisationReducer,
});

const store = createStore(reducers);

export default store;
export type StoreType = ReturnType<typeof reducers>;
export const useReduxState: TypedUseSelectorHook<StoreType> = useSelector;
