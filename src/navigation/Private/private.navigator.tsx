import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from '@screens/private/PokemonDetail';
import PokemonListScreen from '@screens/private/PokemonList';
import React from 'react';
import { PrivateParamList } from './private.navigator.types';

const PrivateStack = createNativeStackNavigator<PrivateParamList>();

export const PrivateNavigator = () => {
  const theme = useTheme();
  return (
    <PrivateStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <PrivateStack.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={{
          title: 'Pokedex',
        }}
      />
      <PrivateStack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
      />
    </PrivateStack.Navigator>
  );
};
