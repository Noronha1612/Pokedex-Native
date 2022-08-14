import axios from "axios";
import { createContext, useContext } from "react";
import { useInfiniteQuery } from "react-query";
import { Pokemon, PokemonListResponse } from "../models/Pokemon";

interface PokemonContextProps {
  currentlyFetched: Pokemon[];
  isFetching: boolean;
  fetchNextPage: () => void;
}

const PokemonContext = createContext({} as PokemonContextProps);

const fetchPokemons = async ({ pageParam = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0' }) => {
  const fetchResponse = await axios.get<PokemonListResponse>(pageParam)

  const pokemonsData = await Promise.all(fetchResponse.data.results.map(async (pokeResponse) => {
    const pokemonRes = await axios.get<Pokemon>(pokeResponse.url)

    return pokemonRes.data;
  }));

  return { pokemons: pokemonsData, ...fetchResponse.data};
}

export const PokemonProvider: React.FC = ({ children }) => {
  const { data, isFetching, fetchNextPage } = useInfiniteQuery('pokemons', fetchPokemons, {
    getNextPageParam: (lastPage) => lastPage.next,
  })

  const currentlyFetched = data?.pages.reduce<Pokemon[]>((pokemonList, response) => {
    return [...pokemonList, ...response.pokemons]
  }, []) ?? []

  return (
    <PokemonContext.Provider value={{
      currentlyFetched,
      isFetching,
      fetchNextPage
    }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
