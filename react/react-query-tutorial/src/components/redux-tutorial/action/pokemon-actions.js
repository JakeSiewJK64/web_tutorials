export function postPokemon(pokemon, state) {
  return function (dispatch) {
    dispatch({
      type: "GET_POKEMON",
      payload: state.push(pokemon),
    });
  };
}
