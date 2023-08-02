import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Image, View } from 'react-native';
import styles from './Splash.styles';

const SplashScreen = () => {
  const themedStyles = useThemedStyles(styles);
  return (
    <View style={themedStyles.container}>
      <Image
        style={themedStyles.logo}
        source={require('@assets/images/pokeball.png')}
      />
    </View>
  );
};

export default SplashScreen;
