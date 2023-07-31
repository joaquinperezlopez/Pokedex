import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Text, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import styles from './SecondaryButton.styles';

type SecondaryButtonProps = TouchableHighlightProps & {
  label: string;
};

const SecondaryButton = ({ label, ...props }: SecondaryButtonProps) => {
  const themedStyles = useThemedStyles(styles);

  return (
    <TouchableOpacity {...props} style={[themedStyles.container]}>
      <Text style={themedStyles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
