import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { MainNavigator } from './src/navigation/main.navigator';
import { MainTheme } from './src/theme/theme';

export default function App() {
  return (
    <NavigationContainer theme={MainTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
