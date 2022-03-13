import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { PokemonActionCreator } from "../../action/pokemon-action-creators";
import { Button } from "@mui/material";

export default function Pokemonredux() {
  const dispatch = useDispatch();
  const { postPokemon } = bindActionCreators(PokemonActionCreator, dispatch);
  const pokemons = useSelector((state) => state.pokemon);

  console.log(pokemons);
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        onClick={() =>
          postPokemon(
            {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon/1/",
            },
            pokemons
          )
        }
      >
        Add Pokemon
      </Button>
    </div>
  );
}
