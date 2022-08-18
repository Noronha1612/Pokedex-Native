import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Pokemon, PokemonListResponse } from "../models/Pokemon";
import { useAsyncStorage } from "./useAsyncStorage";

interface PokemonContextProps {
  currentlyFetched: Pokemon[];
  isFetching: boolean;
  fetchNextPage: () => void;
}

const PokemonContext = createContext({} as PokemonContextProps);

const fetchPokemons = async (offset = 0) => {
  const fetchResponse = await axios.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)

  const pokemonsData = await Promise.all(fetchResponse.data.results.map(async (pokeResponse) => {
    const pokemonRes = await axios.get<Pokemon>(pokeResponse.url)

    return pokemonRes.data;
  }));

  return pokemonsData;
}

export const PokemonProvider: React.FC = ({ children }) => {
  const {pokemonList, persistPokemons, clearPokemonList} = useAsyncStorage();

  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonList);
  const [isFetching, setIsFetching] = useState(false);

  const fetchNextPage = useCallback(() => {
    setIsFetching(true);

    fetchPokemons(pokemons.length)
      .then(response => persistPokemons(response))
      .finally(() => setIsFetching(false))
  }, [fetchPokemons, pokemons]);

  useEffect(() => {
    setPokemons(pokemonList)
  }, [pokemonList]);

  useEffect(() => {
    if (!pokemons.length) {
      fetchNextPage()
    }
  }, [pokemons, fetchNextPage]);

  return (
    <PokemonContext.Provider value={{
      currentlyFetched: pokemons,
      isFetching,
      fetchNextPage
    }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
