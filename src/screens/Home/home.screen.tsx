import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import translate from '@i18n/index';
import { useTheme } from '@react-navigation/native';
import globalStyles from '@styles/global';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import styles from './home.styles';

const HomeScreen = () => {
  const theme = useTheme();

  const onPressGoogleButton = () => {
    console.log('Google button pressed');
  };

  const onPressFacebookButton = () => {
    console.log('Facebook button pressed');
  };

  const onSignUpPress = () => {
    console.log('Sign up button pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Image source={require('@assets/images/pokeball.png')} />
        <Text
          style={[
            globalStyles.headline,
            {
              color: theme.colors.text
            }
          ]}>
          {translate('appName')}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton
          onPress={onPressFacebookButton}
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
