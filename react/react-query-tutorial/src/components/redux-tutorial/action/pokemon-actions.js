import {} from "react-redux";
import {} from "redux";

export function getPokemon(pokemons) {
  return function (dispatch) {
    dispatch({
      type: "GET_POKEMON",
      payload: pokemons,
    });
  };
}
