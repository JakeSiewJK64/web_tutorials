import { SAMPLE_POKEMONS } from "../sample-data/sample-pokemons";

export function PokemonReducers(state = SAMPLE_POKEMONS, action) {
  switch (action.type) {
    case "GET_POKEMON":
      return state;
    case "POST_POKEMON":
      return state.push(action.payload);
    default:
      return state;
  }
}
