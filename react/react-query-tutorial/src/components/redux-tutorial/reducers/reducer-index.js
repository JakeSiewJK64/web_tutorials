import { combineReducers } from "redux";
import accountReducer from "./bank-reducer";
import { PokemonReducers } from "./pokemon-reducer";

export const reducers = combineReducers({
  account: accountReducer,
  pokemon: PokemonReducers,
});
