import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './TitleHeader.styles';

const TitleHeader = ({ label }: { label: string }) => {
  const themedStyles = useThemedStyles(styles);
  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

export default TitleHeader;
