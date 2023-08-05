import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type PublicParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: {
    email?: string;
  };
  PokemonList: undefined;
  PokemonDetail: undefined;
};

export type PublicScreenList = keyof PublicParamList;

export type PublicStackNavigationProps<T extends PublicScreenList> =
  NativeStackScreenProps<PublicParamList, T>;
