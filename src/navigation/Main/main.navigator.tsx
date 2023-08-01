import PrivateNavigator from '@navigation/private';
import PublicNavigator from '@navigation/public';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectIsLoggedIn } from '@store/slices/auth/auth.slice';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MainParamList } from './main.navigator.types';

const MainStack = createNativeStackNavigator<MainParamList>();

export const MainNavigator = ({
  navigationRef,
}: {
  navigationRef: NavigationContainerRefWithCurrent<MainParamList>;
}) => {
  const isLogged = useSelector(selectIsLoggedIn);

  console.log('isLogged ', isLogged);

  useEffect(() => {
    if (isLogged) {
      navigationRef.reset({
        index: 0,
        routes: [{ name: 'PrivateNavigator' }],
      });
    } else {
      navigationRef.reset({
        index: 0,
        routes: [{ name: 'PublicNavigator' }],
      });
    }
  }, [isLogged, navigationRef]);

  return (
    <MainStack.Navigator
      initialRouteName="PublicNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="PublicNavigator" component={PublicNavigator} />
      <MainStack.Screen name="PrivateNavigator" component={PrivateNavigator} />
    </MainStack.Navigator>
  );
};
