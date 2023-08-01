import { POKEMON_PAGE_SIZE } from '@constants/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { GetPokemonsParams, GetPokemonsResponse } from './pokemon.api.types';

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.POKEMON_API_BASE_URL + Config.POKEMON_API_VERSION,
  }),
  endpoints: builder => ({
    getPokemons: builder.query<GetPokemonsResponse, GetPokemonsParams>({
      query: ({ limit = POKEMON_PAGE_SIZE, offset = 0 }) =>
        `/pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;

export default pokemonApi;
