import LoadingProvider from '@components/providers/LoadingProvider';
import MainNavigator from '@navigation/Main';
import { MainParamList } from '@navigation/Main/main.navigator.types';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { store } from '@store/index';
import * as React from 'react';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { Provider } from 'react-redux';
import { MainTheme } from './src/theme/theme';

if (Platform.OS === 'ios') {
  // this library avoids the keyboard to cover the inputs
  KeyboardManager.setEnable(true);
  KeyboardManager.setToolbarPreviousNextButtonEnable(true);
}

export const navigationRef = createNavigationContainerRef<MainParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MainTheme} ref={navigationRef}>
        <LoadingProvider>
          <MainNavigator navigationRef={navigationRef} />
        </LoadingProvider>
      </NavigationContainer>
    </Provider>
  );
}
