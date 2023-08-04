import AsyncStorage from '@react-native-async-storage/async-storage';
import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import authApi from '@services/auth/auth.api';
import pokemonApi from '@services/pokemon/pokemon.api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistCombineReducers,
  persistStore,
} from 'redux-persist';
import authReducer from './slices/auth/auth.slice';
import pokemonReducer from './slices/pokemon';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['pokemons'],
  blacklist: ['auth'],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  pokemons: pokemonReducer,
  [authApi.reducerPath]: authApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
      const defaultMiddleware = getDefaultMiddleware({
        // following docs
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
      return defaultMiddleware.concat([
        authApi.middleware,
        pokemonApi.middleware,
      ]);
    },
    preloadedState,
  });

const store = setupStore();
const persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { persistor, store };
