import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import PokedexTextField from '@components/inputs/PokedexTextField';
import TitleHeader from '@components/labels/TitleHeader';
import Footer from '@components/layout/footer';
import { MIN_FIELD_LENGTH, MIN_PASSWORD_LENGTH } from '@constants/index';
import useGenericLoading from '@hooks/useLoading';
import useThemedStyles from '@hooks/useThemeStyles';
import translate from '@i18n/index';
import { isSignUpError } from '@models/error.types';
import { User } from '@models/user.types';
import { PublicStackNavigationProps } from '@navigation/Public/public.navigator.types';
import { useSignUpMutation } from '@services/auth/auth.api';
import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './SignUp.styles';

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const SignUpScreen = ({ navigation }: PublicStackNavigationProps<'SignUp'>) => {
  const themedStyles = useThemedStyles(styles);
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [signUp, { isLoading }] = useSignUpMutation();
  const formMethods = useForm<Inputs>({
    defaultValues: {
      ...user,
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        name: data.name,
        surname: data.surname,
      }).unwrap();
      navigation.navigate('Login', {
        email: data.email,
      });
    } catch (error) {
      console.log('Error on Sign Up', JSON.stringify(error, null, 2));
      if (isSignUpError(error)) {
        Alert.alert(error.data.message);
      }
    }
  };

  useGenericLoading(isLoading);

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

  const onClickSignIn = () => {
    navigation.navigate('Login', {
      email: '',
    });
  };

  return (
    <SafeAreaView style={themedStyles.container}>
      <TitleHeader label={translate('screens.signUp.title')} />
      <ScrollView>
        <FormProvider {...formMethods}>
          <PokedexTextField
            fieldName="name"
            placeholder={translate('screens.signUp.name')}
            onChangeText={onChangeName}
            value={user.name}
            rules={{
              required: translate('validation.required'),
              minLength: {
                value: MIN_FIELD_LENGTH,
                message: translate('validation.minLength', {
                  count: MIN_FIELD_LENGTH,
                }),
              },
            }}
          />
          <PokedexTextField
            fieldName="surname"
            placeholder={translate('screens.signUp.surname')}
            onChangeText={onChangeSurname}
            value={user.surname}
            rules={{
              required: translate('validation.required'),
              minLength: {
                value: MIN_FIELD_LENGTH,
                message: translate('validation.minLength', {
                  count: MIN_FIELD_LENGTH,
                }),
              },
            }}
          />
          <PokedexTextField
            fieldName="email"
            placeholder={translate('screens.signUp.email')}
            onChangeText={onChangeEmail}
            value={user.email}
            rules={{
              required: translate('validation.required'),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
          />
          <PokedexTextField
            fieldName="password"
            placeholder={translate('screens.signUp.password')}
            onChangeText={onChangePassword}
            secureTextEntry
            value={password}
            rules={{
              required: translate('validation.required'),
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: translate('validation.minLength', {
                  count: MIN_PASSWORD_LENGTH,
                }),
              },
              // we can include here more validations like:
              // we'll leave it commented for simplicity
              // pattern: {
              //   value: /\d+/,
              //   message: 'The password must contain at least one number'
              // }
            }}
          />
          <PokedexTextField
            fieldName="passwordConfirmation"
            placeholder={translate('screens.signUp.confirmPassword')}
            onChangeText={onChangePasswordConfirmation}
            secureTextEntry
            value={passwordConfirmation}
            rules={{
              required: translate('validation.required'),
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message: translate('validation.minLength', {
                  count: MIN_PASSWORD_LENGTH,
                }),
              },
              validate: value =>
                value === password || translate('validation.matchPassword'),
            }}
          />
        </FormProvider>
      </ScrollView>
      <Footer>
        <PrimaryButton
          label={translate('screens.home.signUp')}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
        <SecondaryButton
          label={translate('screens.signUp.alreadyHaveAccount')}
          onPress={onClickSignIn}
        />
      </Footer>
    </SafeAreaView>
  );
};

export default SignUpScreen;
