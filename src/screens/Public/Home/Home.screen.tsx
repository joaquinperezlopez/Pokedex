import PrimaryButton from '@components/buttons/PrimaryButton';
import SecondaryButton from '@components/buttons/SecondaryButton';
import Footer from '@components/layout/footer';
import { SPAIN_FLAG, UK_FLAG } from '@constants/index';
import useThemedStyles from '@hooks/useThemeStyles';
import translate, { i18n } from '@i18n/index';
import { PublicStackNavigationProps } from '@navigation/public/public.navigator.types';
import React, { ReactElement } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.styles';

const HomeScreen = ({
  navigation,
}: PublicStackNavigationProps<'Home'>): ReactElement => {
  const themedStyles = useThemedStyles(styles);
  const [triggerRender, setTriggerRender] = React.useState(false);

  const onPressEmailLogin = () => {
    navigation.navigate('Login', {
      email: '',
    });
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const onSelectSpanish = () => {
    i18n.locale = 'es';
    // this is a hack to force the component to re-render
    setTriggerRender(!triggerRender);
  };

  const onSelectEnglish = () => {
    i18n.locale = 'en';
    // this is a hack to force the component to re-render
    setTriggerRender(!triggerRender);
  };

  return (
    <SafeAreaView style={[themedStyles.container]}>
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
      <Footer>
        <View style={themedStyles.flagsContainer}>
          <TouchableOpacity onPress={onSelectSpanish}>
            <Text style={themedStyles.global.headline1}>{SPAIN_FLAG}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSelectEnglish}>
            <Text style={themedStyles.global.headline1}>{UK_FLAG}</Text>
          </TouchableOpacity>
        </View>
      </Footer>
    </SafeAreaView>
  );
};

export default HomeScreen;
