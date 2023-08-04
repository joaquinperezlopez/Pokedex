import { jest } from '@jest/globals';
import { MainTheme } from '@theme/theme';

global.window = {};
global.window = global;

// https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has
jest.useFakeTimers();

// Create a custom implementation for useTheme
export const useTheme = () => {
  return MainTheme;
};

// Mock the useTheme hook
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useTheme,
  };
});

// mocking @i18n/index, default import and all exports
jest.mock('@i18n/index', () => ({
  __esModule: true,
  default: t => t,
  i18n: {
    t: t => t,
    locale: 'en',
  },
}));

// following library docs
jest.doMock('@react-native-async-storage/async-storage', () => {
  const AsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock');
  return AsyncStorage;
});

// following library docs
jest.mock('react-native-keyboard-manager', () =>
  require('react-native-keyboard-manager/jest/mock')
);
