import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainParamList = {
  PublicNavigator: undefined;
  PrivateNavigator: undefined;
};

export type MainScreenList = keyof MainParamList;

export type MainStackNavigationProps<T extends MainScreenList> =
  NativeStackScreenProps<MainParamList, T>;
