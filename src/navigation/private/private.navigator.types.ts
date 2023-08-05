import { NamedAPIResource } from '@models/pokemon/pokemon.types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type PrivateParamList = {
  PokemonList: undefined;
  PokemonDetail: {
    pokemon: NamedAPIResource;
  };
};

export type PrivateScreenList = keyof PrivateParamList;

export type PrivateStackNavigationProps<T extends PrivateScreenList> =
  NativeStackScreenProps<PrivateParamList, T>;
