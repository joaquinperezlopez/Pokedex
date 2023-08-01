import { NamedAPIResourceList } from '@models/pokemon/pokemon.types';

export type GetPokemonsResponse = NamedAPIResourceList;

export type GetPokemonsParams = {
  limit?: number;
  offset?: number;
};
