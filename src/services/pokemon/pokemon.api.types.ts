import {
  NamedAPIResourceList,
  Pokemon,
  PokemonSpecies,
} from '@models/pokemon/pokemon.types';

export type GetPokemonsResponse = NamedAPIResourceList;

export type GetPokemonsParams = {
  limit?: number;
  offset?: number;
};

export type GetPokemonDetailResponse = Pokemon;
export type GetPokemonDetailParams = {
  url: string;
};

export type GetPokemonSpeciesDetailsResponse = PokemonSpecies;
export type GetPokemonSpeciesDetailsParams = {
  url: string;
};
