import React, { useContext } from "react";
import { PokemonContextProvider } from "./pokemon-context";

export default function Pokemondropdown() {
  const pokemon = useContext(PokemonContextProvider);

  if (pokemon.results) {
    return (
      <div>
        <ul>
          {pokemon.results.map((p) => {
            return <li key={p.name}>{p.name}</li>;
          })}
        </ul>
      </div>
    );
  }
  return <div>loading...</div>
}
