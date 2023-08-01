import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import useThemedStyles from '@hooks/useThemeStyles';
import translate from '@i18n/index';
import { MainStackNavigationProps } from 'navigation/main.navigator.types';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import styles from './Home.styles';

const HomeScreen = ({ navigation }: MainStackNavigationProps<'Home'>) => {
  const themedStyles = useThemedStyles(styles);

  const onPressEmailLogin = () => {
    navigation.navigate('Login');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={[themedStyles.container]}>
      <StatusBar barStyle="light-content" />
      <View style={themedStyles.headerContainer}>
        <Image source={require('@assets/images/pokeball.png')} />
        <Text style={themedStyles.appName}>{translate('appName')}</Text>
      </View>
      <View style={themedStyles.buttonsContainer}>
        <PrimaryButton
          onPress={onPressEmailLogin}
          label={translate('screens.home.emailLogin')}
        />
        <SecondaryButton
          onPress={onSignUpPress}
          label={translate('screens.home.signUp')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
