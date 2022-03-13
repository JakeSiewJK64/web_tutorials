import { combineReducers } from "redux";
import accountReducer from "./bank-reducer";

export const reducers = combineReducers({
  account: accountReducer,
});