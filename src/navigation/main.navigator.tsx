import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home';
import LoginScreen from '@screens/Login';
import SignUpScreen from '@screens/Signup';
import React from 'react';
import { MainParamList } from './main.navigator.types';

const MainStack = createNativeStackNavigator<MainParamList>();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="SignUp" component={SignUpScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
    </MainStack.Navigator>
  );
};
