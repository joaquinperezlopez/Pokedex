import LoadingProvider from '@components/providers/LoadingProvider';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@store/index';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MainNavigator } from './src/navigation/main.navigator';
import { MainTheme } from './src/theme/theme';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MainTheme}>
        <LoadingProvider>
          <MainNavigator />
        </LoadingProvider>
      </NavigationContainer>
    </Provider>
  );
}
