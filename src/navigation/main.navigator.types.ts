import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  PokemonList: undefined;
  PokemonDetail: undefined;
};

export type MainScreenList = keyof MainParamList;

export type MainStackNavigationProps<T extends MainScreenList> =
  NativeStackScreenProps<MainParamList, T>;
