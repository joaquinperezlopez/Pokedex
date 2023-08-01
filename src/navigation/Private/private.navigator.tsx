import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from '@screens/Private/PokemonDetail';
import PokemonListScreen from '@screens/Private/PokemonList';
import React from 'react';
import { PrivateParamList } from './private.navigator.types';

const PrivateStack = createNativeStackNavigator<PrivateParamList>();

export const PrivateNavigator = () => {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name="PokemonList" component={PokemonListScreen} />
      <PrivateStack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
      />
    </PrivateStack.Navigator>
  );
};
