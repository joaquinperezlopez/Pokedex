import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import { MainParamList } from './main.navigator.types';

const MainStack = createNativeStackNavigator<MainParamList>();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
