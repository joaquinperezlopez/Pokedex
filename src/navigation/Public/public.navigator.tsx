import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/public/Home';
import LoginScreen from '@screens/public/Login';
import SignUpScreen from '@screens/public/Signup';
import React from 'react';
import { PublicParamList } from './public.navigator.types';

const PublicStack = createNativeStackNavigator<PublicParamList>();

export const PublicNavigator = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <PublicStack.Screen name="Home" component={HomeScreen} />
      <PublicStack.Screen name="SignUp" component={SignUpScreen} />
      <PublicStack.Screen name="Login" component={LoginScreen} />
    </PublicStack.Navigator>
  );
};
