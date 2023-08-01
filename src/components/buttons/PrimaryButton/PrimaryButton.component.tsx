import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps
} from 'react-native';
import styles from './PrimaryButton.styles';

type PrimaryButtonProps = TouchableHighlightProps & {
  label: string;
};

const PrimaryButton = ({ label, ...props }: PrimaryButtonProps) => {
  const themedStyles = useThemedStyles(styles);

  return (
    <TouchableHighlight
      {...props}
      style={[themedStyles.container, props.disabled && themedStyles.disabled]}>
      <Text style={themedStyles.text}>{label}</Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
