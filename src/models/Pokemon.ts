import { DefaultTheme } from "styled-components/native";

interface PokemonResponse {
  name: string,
  url: string
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResponse[];
}

export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        "front_default": string;
      }
    }
  },
  types: {
    slot: number;
    type: {
      name: keyof DefaultTheme['colors'];
      url: string;
    }
  }[];
}