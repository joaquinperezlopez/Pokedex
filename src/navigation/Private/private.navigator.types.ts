import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type PrivateParamList = {
  PokemonList: undefined;
  PokemonDetail: undefined;
};

export type PrivateScreenList = keyof PrivateParamList;

export type PrivateStackNavigationProps<T extends PrivateScreenList> =
  NativeStackScreenProps<PrivateParamList, T>;
