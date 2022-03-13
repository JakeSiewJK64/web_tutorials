import { applyMiddleware, createStore } from "redux";
import { reducers } from "../reducers/reducer-index";
import thunk from "redux-thunk";

export const BankStore = createStore(reducers, {}, applyMiddleware(thunk));
