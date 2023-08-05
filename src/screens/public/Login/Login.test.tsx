import { describe, expect, jest, test } from '@jest/globals';
import { PublicStackNavigationProps } from '@navigation/public/public.navigator.types';
import { act, fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '@utils/test-utils/test-utils';
import React from 'react';
import LoginScreen from './Login.screen';

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
    key: 'Login',
    name: 'Login',
    params: {
      email: '',
    },
  },
} as unknown as PublicStackNavigationProps<'Login'>;

describe('LoginScreen test suite', () => {
  test('renders correctly', () => {
    // Render the LoginScreen component with the mock route
    const { toJSON } = renderWithProviders(
      <LoginScreen {...mockNavigationProps} />
    );

    // Perform any assertions you need on the rendered tree
    expect(toJSON()).toMatchSnapshot();
  });

  test('sign in button is disabled when needed', async () => {
    renderWithProviders(<LoginScreen {...mockNavigationProps} />);

    const emailInput = await screen.findByPlaceholderText(
      'screens.signUp.email'
    );
    const passwordInput = await screen.findByPlaceholderText(
      'screens.signUp.password'
    );
    const signInButton = await screen.findByTestId(
      'primaryButton' + 'screens.login.signIn'
    );

    await act(async () => {
      fireEvent.changeText(emailInput, 'notvalidemail');

      // write a valid password
      fireEvent.changeText(passwordInput, 'validPassword');
    });

    expect(signInButton.props.accessibilityState.disabled).toBeTruthy();

    await act(async () => {
      fireEvent(emailInput, 'changeText', 'test@test.com');
    });

    expect(signInButton.props.accessibilityState.disabled).toBeFalsy();
  });
});
