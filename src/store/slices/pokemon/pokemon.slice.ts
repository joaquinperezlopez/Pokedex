import { NamedAPIResource } from '@models/pokemon/pokemon.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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

// selectors
export const selectPokemons = (query: string) => (state: RootState) => {
  const pokemons = state.pokemons.pokemons;
  return pokemons.filter(
    (pokemon: NamedAPIResource) =>
      pokemon.name?.toLowerCase().includes(query.toLowerCase()) ||
      pokemon.url?.split('/')[6].toLowerCase().includes(query.toLowerCase())
  );
};

export const selectFavorites = (state: RootState) => {
  return state.pokemons.favorites;
};

// Action creators are generated for each case reducer function
export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
