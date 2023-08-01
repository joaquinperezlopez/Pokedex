import LoadingProvider from '@components/providers/LoadingProvider';
import MainNavigator from '@navigation/main';
import { MainParamList } from '@navigation/main/main.navigator.types';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { persistor, store } from '@store/index';
import * as React from 'react';
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
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
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={MainTheme} ref={navigationRef}>
          <LoadingProvider>
            <MainNavigator navigationRef={navigationRef} />
          </LoadingProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
