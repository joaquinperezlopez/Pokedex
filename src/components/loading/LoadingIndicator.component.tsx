import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './LoadingIndicator.styles';

const LoadingIndicator = ({ show }: { show: boolean }) => {
  const themedStyles = useThemedStyles(styles);

  if (!show) return null;

  return (
    <View style={themedStyles.container}>
      <ActivityIndicator
        size="large"
        color={themedStyles.colors.loading.color}
      />
    </View>
  );
};

export default LoadingIndicator;
