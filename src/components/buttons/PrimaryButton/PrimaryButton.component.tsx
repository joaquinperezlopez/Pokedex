import { useTheme } from '@react-navigation/native';
import globalStyles from '@styles/global';
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
  const theme = useTheme();

  return (
    <TouchableHighlight
      {...props}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.grayScale.light
        }
      ]}>
      <Text
        style={[
          globalStyles.subTitle1,
          {
            color: theme.colors.grayScale.medium
          }
        ]}>
        {label}
      </Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
