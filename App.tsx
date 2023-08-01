import LoadingProvider from '@components/providers/LoadingProvider';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@store/index';
import * as React from 'react';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { Provider } from 'react-redux';
import { MainNavigator } from './src/navigation/main.navigator';
import { MainTheme } from './src/theme/theme';

if (Platform.OS === 'ios') {
  // this library avoids the keyboard to cover the inputs
  KeyboardManager.setEnable(true);
  KeyboardManager.setToolbarPreviousNextButtonEnable(true);
}

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
