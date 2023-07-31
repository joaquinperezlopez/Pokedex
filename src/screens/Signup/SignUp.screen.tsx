import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import PokedexTextField from '@components/inputs/PokedexTextField';
import useThemedStyles from '@hooks/useThemeStyles';
import { MainStackNavigationProps } from 'navigation/main.navigator.types';
import React, { useLayoutEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import styles from './SignUp.styles';

const SignUpScreen = ({ navigation }: MainStackNavigationProps<'SignUp'>) => {
  const themedStyles = useThemedStyles(styles);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Sign Up'
    });
  });

  // Path: src/screens/Signup/SignUp.screen.tsx
  const handleSignUp = () => {
    if (password !== passwordConfirmation) {
      Alert.alert('Passwords do not match');
      return;
    }
  };

  return (
    <View style={themedStyles.container}>
      <PokedexTextField
        label="Name"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <PokedexTextField
        label="Surname"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <PokedexTextField
        label="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <PokedexTextField
        label="Password"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <PokedexTextField
        label="Repeat Password"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <View style={themedStyles.footer}>
        <PrimaryButton label="Sign Up" onPress={handleSignUp} />
        <SecondaryButton
          label="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
