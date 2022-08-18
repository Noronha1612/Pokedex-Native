import { createContext, useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pokemon } from "../models/Pokemon";

interface AsyncStorageContextProps {
  pokemonList: Pokemon[];
  persistPokemons: (pokemons: Pokemon[]) => Promise<void>;
  clearPokemonList: () => Promise<void>
}

const ASYNC_STORAGE_POKEMON_LIST_KEY = '@pokedexnative/pokemon-list'

const AsyncStorageContext = createContext({} as AsyncStorageContextProps);

export const AsyncStorageProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(ASYNC_STORAGE_POKEMON_LIST_KEY)
      .then((pokeListStringfied) => JSON.parse(pokeListStringfied ?? '[]'))
      .then((pokeList: Pokemon[]) => setPokemons(pokeList));
  }, []);

  const persistPokemons = useCallback(async (pokemonsBeingInserted: Pokemon[]) => {
    const newPokemonData = [
      ...pokemons,
      ...pokemonsBeingInserted
        .filter(pokemon => !pokemons.some(alreadyInserted => alreadyInserted.id === pokemon.id))
    ]

    setPokemons(newPokemonData);

    await AsyncStorage.setItem(ASYNC_STORAGE_POKEMON_LIST_KEY, JSON.stringify(newPokemonData));
  }, [pokemons, AsyncStorage, ASYNC_STORAGE_POKEMON_LIST_KEY]);

  const clearPokemonList = async () => {
    await AsyncStorage.removeItem(ASYNC_STORAGE_POKEMON_LIST_KEY)
  }

  return (
    <AsyncStorageContext.Provider value={{
      pokemonList: pokemons,
      persistPokemons,
      clearPokemonList
    }}>
      {children}
    </AsyncStorageContext.Provider>
  );
}

export const useAsyncStorage = () => useContext(AsyncStorageContext);