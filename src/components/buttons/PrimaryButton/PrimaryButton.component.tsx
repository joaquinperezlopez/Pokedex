import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Text, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import styles from './PrimaryButton.styles';

type PrimaryButtonProps = TouchableHighlightProps & {
  label: string;
};

const PrimaryButton = ({ label, ...props }: PrimaryButtonProps) => {
  const themedStyles = useThemedStyles(styles);

  return (
    <TouchableOpacity {...props} style={themedStyles.container}>
      <Text style={themedStyles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
