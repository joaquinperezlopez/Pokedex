import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home';
import SignUpScreen from '@screens/Signup';
import React from 'react';
import { MainParamList } from './main.navigator.types';

const MainStack = createNativeStackNavigator<MainParamList>();

export const MainNavigator = () => {
  const theme = useTheme();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.background
        },
        // remove header shadow
        headerShadowVisible: false
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <MainStack.Screen name="SignUp" component={SignUpScreen} />
    </MainStack.Navigator>
  );
};
