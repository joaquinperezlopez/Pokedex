import PrivateNavigator from '@navigation/private';
import PublicNavigator from '@navigation/public';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@screens/public/Splash';
import { useAppDispatch } from '@store/index';
import { AuthStatus, selectAuthStatus } from '@store/slices/auth/auth.slice';
import { loadCredentialsThunk } from '@thunks/auth/auth.thunks';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MainParamList } from './main.navigator.types';

const MainStack = createNativeStackNavigator<MainParamList>();

export const MainNavigator = () => {
  const authStatus = useSelector(selectAuthStatus);
  const dispatch = useAppDispatch();

  console.log('authStatus ', authStatus);

  useEffect(() => {
    dispatch(loadCredentialsThunk());
  }, [dispatch]);

  const renderNavigator = () => {
    switch (authStatus) {
      case AuthStatus.CHECKING:
        return (
          <MainStack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              animation: 'fade',
            }}
          />
        );
      case AuthStatus.LOGGED_IN:
        return (
          <MainStack.Screen
            name="PrivateNavigator"
            component={PrivateNavigator}
            options={{
              animation: 'fade',
            }}
          />
        );
      case AuthStatus.LOGGED_OUT:
        return (
          <MainStack.Screen
            name="PublicNavigator"
            component={PublicNavigator}
            options={{
              animation: 'fade',
            }}
          />
        );
    }
  };

  return (
    <MainStack.Navigator
      initialRouteName="PublicNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      {renderNavigator()}
    </MainStack.Navigator>
  );
};
