import { i18n } from '@i18n/index';
import { describe, expect, jest, test } from '@jest/globals';
import { PublicStackNavigationProps } from '@navigation/public/public.navigator.types';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from './Home.screen';

const mockNavigationProps = {
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    setParams: jest.fn(),
    dispatch: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: jest.fn(),
    isFocused: jest.fn(),
    dangerouslyGetParent: jest.fn(),
    dangerouslyGetState: jest.fn(),
  },
  route: {
    key: 'Home',
    name: 'Home',
    params: {},
  },
} as unknown as PublicStackNavigationProps<'Home'>;

describe('HomeScreen', () => {
  test('renders without crashing', () => {
    const { toJSON } = render(<HomeScreen {...mockNavigationProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('calls onPressEmailLogin when PrimaryButton is pressed', () => {
    const { getByText } = render(<HomeScreen {...mockNavigationProps} />);
    const emailLoginButton = getByText('screens.home.emailLogin');
    fireEvent.press(emailLoginButton);
    expect(mockNavigationProps.navigation.navigate).toHaveBeenCalledWith(
      'Login',
      {
        email: '',
      }
    );
  });

  test('calls onSignUpPress when SecondaryButton is pressed', () => {
    const { getByText } = render(<HomeScreen {...mockNavigationProps} />);
    const signUpButton = getByText('screens.home.signUp');
    fireEvent.press(signUpButton);
    expect(mockNavigationProps.navigation.navigate).toHaveBeenCalledWith(
      'SignUp'
    );
  });

  test('calls onSelectSpanish when Spanish flag is pressed', () => {
    const { getByText } = render(<HomeScreen {...mockNavigationProps} />);
    const spanishFlag = getByText('🇪🇸'); // Replace this with the actual Spanish flag text
    fireEvent.press(spanishFlag);
    // Add expectations for the changes that should occur after pressing the Spanish flag
    expect(i18n.locale).toBe('es');
  });

  test('calls onSelectEnglish when English flag is pressed', () => {
    const { getByText } = render(<HomeScreen {...mockNavigationProps} />);
    const englishFlag = getByText('🇬🇧'); // Replace this with the actual English flag text
    fireEvent.press(englishFlag);
    expect(i18n.locale).toBe('en');
  });
});
