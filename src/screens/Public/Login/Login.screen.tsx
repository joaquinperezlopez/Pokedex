import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import PokedexTextField from '@components/inputs/PokedexTextField';
import TitleHeader from '@components/labels/TitleHeader';
import Footer from '@components/layout/footer';
import { MIN_PASSWORD_LENGTH } from '@constants/index';
import useGenericLoading from '@hooks/useLoading';
import useThemedStyles from '@hooks/useThemeStyles';
import translate from '@i18n/index';
import { isSignUpError } from '@models/errors/error.types';
import { PublicStackNavigationProps } from '@navigation/public/public.navigator.types';
import { useLoginMutation } from '@services/auth/auth.api';
import { useAppDispatch } from '@store/index';
import { saveCredentialsThunk } from '@thunks/auth/auth.thunks';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Alert, ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Login.styles';

type Inputs = {
  email: string;
  password: string;
};

const LoginScreen = ({
  navigation,
  route,
}: PublicStackNavigationProps<'Login'>) => {
  const { email: routeMail } = route?.params ?? {};
  const themedStyles = useThemedStyles(styles);
  const [loginData, setLoginData] = React.useState({
    email: routeMail ?? '',
    password: '',
    rememberMe: true,
  });
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const formMethods = useForm<Inputs>({
    defaultValues: {
      email: routeMail ?? '',
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

  const onRememberMeClicked = (rememberMe: boolean) => {
    setLoginData({ ...loginData, rememberMe });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const response = await login(data).unwrap();
      if (loginData.rememberMe) {
        await dispatch(
          saveCredentialsThunk({ credentials: response, email: data.email })
        );
      }
    } catch (error) {
      console.log('error on login ', JSON.stringify(error, null, 2));
      if (isSignUpError(error)) {
        Alert.alert(error.data.message);
      }
    }
  };

  return (
    <SafeAreaView style={themedStyles.container}>
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
        <View style={themedStyles.rememberMeContainer}>
          <Switch
            onValueChange={onRememberMeClicked}
            value={loginData.rememberMe}
            thumbColor={themedStyles.colors.primary}
            ios_backgroundColor={themedStyles.colors.background}
          />
          <Text style={themedStyles.rememberMeText}>
            {translate('screens.login.rememberMe')}
          </Text>
        </View>
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
    </SafeAreaView>
  );
};

export default LoginScreen;
