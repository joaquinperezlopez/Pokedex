import { useTheme } from '@react-navigation/native';
import globalStyles from '@styles/global';
import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps
} from 'react-native';
import styles from './SecondaryButton.styles';

type SecondaryButtonProps = TouchableHighlightProps & {
  label: string;
};

const SecondaryButton = ({ label, ...props }: SecondaryButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableHighlight {...props} style={[styles.container]}>
      <Text
        style={[
          globalStyles.subTitle1,
          {
            color: theme.colors.text
          }
        ]}>
        {label}
      </Text>
    </TouchableHighlight>
  );
};

export default SecondaryButton;
