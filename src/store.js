import { IntlReducer as Intl, IntlActions } from "react-redux-multilingual";
import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers/reducer";
let reducers = combineReducers(Object.assign({ reducer }, { Intl }));
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.dispatch(IntlActions.setLocale("ru"));
export default store;
