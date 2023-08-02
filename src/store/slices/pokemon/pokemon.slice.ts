import { NamedAPIResource } from '@models/pokemon/pokemon.types';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import pokemonApi from '@services/pokemon';
import { RootState } from '@store/index';

export interface PokemonState {
  pokemons: NamedAPIResource[];
  favorites: NamedAPIResource[];
}

const initialState: PokemonState = {
  pokemons: [],
  favorites: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemonReducer',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<NamedAPIResource>) => {
      const pokemon = action.payload;
      const pokemonIndex = state.favorites.findIndex(
        (favorite: NamedAPIResource) => favorite.name === pokemon.name
      );
      if (pokemonIndex === -1) {
        state.favorites.push(pokemon);
      } else {
        state.favorites.splice(pokemonIndex, 1);
      }
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      pokemonApi.endpoints.getPokemons.matchFulfilled,
      (state, action) => {
        state.pokemons = action.payload.results;
      }
    );
    builder.addMatcher(
      pokemonApi.endpoints.getPokemons.matchRejected,
      state => {
        state.pokemons = [];
      }
    );
  },
});

const filterPokemons = (pokemons: NamedAPIResource[], query: string) => {
  return pokemons.filter(
    (pokemon: NamedAPIResource) =>
      pokemon.name?.toLowerCase().includes(query.toLowerCase()) ||
      pokemon.url?.split('/')[6].toLowerCase().startsWith(query.toLowerCase())
  );
};

// https://redux.js.org/usage/deriving-data-selectors#passing-input-parameters
const selectQuery = (
  _: RootState,
  query: {
    queryString: string;
    onlyFavorites: boolean;
  }
) => query;

export const selectPokemons = createSelector(
  (state: RootState) => state.pokemons,
  selectQuery,
  (pokemonState, query) => {
    if (query.onlyFavorites) {
      return filterPokemons(pokemonState.favorites, query.queryString);
    }
    return filterPokemons(pokemonState.pokemons, query.queryString);
  }
);

export const selectFavorites = createSelector(
  (state: RootState) => state.pokemons.favorites,
  favorites => favorites
);

// Action creators are generated for each case reducer function
export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
