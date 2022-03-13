import React, { createContext, useEffect, useState } from "react";
import Pokemonpage2 from "./pokemon-page2";

export const PokemonContextProvider = createContext({});

export default function PokemonContext() {
  const [pokemon, setPokemon] = useState({});

  const pokemonApi = async () => {
    const pokemons = await (
      await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5")
    ).json();
    setPokemon(await pokemons);
  };

  useEffect(() => {
    pokemonApi();
  }, []);

  return (
    <div>
      <PokemonContextProvider.Provider value={pokemon}>
        <Pokemonpage2 />
      </PokemonContextProvider.Provider>
    </div>
  );
}
