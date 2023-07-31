import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import PokedexTextField from '@components/inputs/PokedexTextField';
import useGenericLoading from '@hooks/useLoading';
import useThemedStyles from '@hooks/useThemeStyles';
import { User } from '@models/user.types';
import { useSignUpMutation } from '@services/auth/auth.api';
import { MainStackNavigationProps } from 'navigation/main.navigator.types';
import React, { useLayoutEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import styles from './SignUp.styles';

const SignUpScreen = ({ navigation }: MainStackNavigationProps<'SignUp'>) => {
  const themedStyles = useThemedStyles(styles);
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    email: ''
  });
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [signUp, { isLoading }] = useSignUpMutation();

  useGenericLoading(isLoading);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Sign Up'
    });
  });

  const handleSignUp = () => {
    if (password !== passwordConfirmation) {
      Alert.alert('Passwords do not match');
      return;
    }
    signUp({
      email: user.email,
      password,
      name: user.name,
      surname: user.surname
    })
      .unwrap()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log('Error on Sign Up', JSON.stringify(err, null, 2));
        Alert.alert(err.message);
      });
  };

  const onChangeName = (name: string) => {
    setUser({ ...user, name });
  };

  const onChangeSurname = (surname: string) => {
    setUser({ ...user, surname });
  };

  const onChangeEmail = (email: string) => {
    setUser({ ...user, email });
  };

  const onChangePassword = (newPass: string) => {
    setPassword(newPass);
  };

  const onChangePasswordConfirmation = (newPassConfirmation: string) => {
    setPasswordConfirmation(newPassConfirmation);
  };

  return (
    <View style={themedStyles.container}>
      <ScrollView>
        <PokedexTextField
          label="Name"
          onChangeText={onChangeName}
          value={user.name}
        />
        <PokedexTextField
          label="Surname"
          onChangeText={onChangeSurname}
          value={user.surname}
        />
        <PokedexTextField
          label="Email"
          onChangeText={onChangeEmail}
          value={user.email}
        />
        <PokedexTextField
          label="Password"
          onChangeText={onChangePassword}
          secureTextEntry
          value={password}
        />
        <PokedexTextField
          label="Repeat Password"
          onChangeText={onChangePasswordConfirmation}
          secureTextEntry
          value={passwordConfirmation}
        />
      </ScrollView>
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
