import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import PokedexTextField from '@components/inputs/PokedexTextField';
import TitleHeader from '@components/labels/TitleHeader';
import Footer from '@components/layout/footer';
import { MIN_PASSWORD_LENGTH } from '@constants/constants';
import useGenericLoading from '@hooks/useLoading';
import useThemedStyles from '@hooks/useThemeStyles';
import translate from '@i18n/index';
import { useLoginMutation } from '@services/auth/auth.api';
import { MainStackNavigationProps } from 'navigation/main.navigator.types';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import styles from './Login.styles';

type Inputs = {
  email: string;
  password: string;
};

const LoginScreen = ({ navigation }: MainStackNavigationProps<'Login'>) => {
  const themedStyles = useThemedStyles(styles);
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });
  const [login, { isLoading }] = useLoginMutation();
  const formMethods = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    formState: { isValid },
    handleSubmit,
  } = formMethods;

  useGenericLoading(isLoading);

  const onChangeEmail = (email: string) => {
    setLoginData({ ...loginData, email });
  };

  const onChangePassword = (password: string) => {
    setLoginData({ ...loginData, password });
  };

  const onGoToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onSubmit = () => {
    login(loginData)
      .unwrap()
      .then(response => {
        console.log('response on login ', JSON.stringify(response, null, 2));
      })
      .catch(error => {
        console.log('error on login ', JSON.stringify(error, null, 2));
      });
  };

  return (
    <View style={themedStyles.container}>
      <TitleHeader label={translate('screens.login.title')} />
      <ScrollView>
        <FormProvider {...formMethods}>
          <PokedexTextField
            fieldName="email"
            placeholder={translate('screens.signUp.email')}
            onChangeText={onChangeEmail}
            value={loginData.email}
            rules={{
              required: translate('validation.required'),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: translate('validation.email'),
              },
            }}
          />
          <PokedexTextField
            fieldName="password"
            placeholder={translate('screens.signUp.password')}
            onChangeText={onChangePassword}
            secureTextEntry
            value={loginData.password}
            rules={{
              required: translate('validation.required'),
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: translate('validation.minLength', {
                  length: MIN_PASSWORD_LENGTH,
                }),
              },
            }}
          />
        </FormProvider>
      </ScrollView>
      <Footer>
        <PrimaryButton
          label={translate('screens.login.signIn')}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
        <SecondaryButton
          label={translate('screens.login.noAccount')}
          onPress={onGoToSignUp}
        />
      </Footer>
    </View>
  );
};

export default LoginScreen;
