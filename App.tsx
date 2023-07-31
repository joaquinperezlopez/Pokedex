import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { MainNavigator } from './src/navigation/main.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
