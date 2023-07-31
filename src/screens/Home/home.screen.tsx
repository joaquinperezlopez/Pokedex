import translate from '@i18n/index';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './home.styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{translate('appName')}</Text>
    </View>
  );
};

export default HomeScreen;
