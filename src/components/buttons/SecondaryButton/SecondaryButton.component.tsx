import { useTheme } from '@react-navigation/native';
import globalStyles from '@styles/global';
import React from 'react';
import { Text, TouchableHighlightProps, TouchableOpacity } from 'react-native';
import styles from './SecondaryButton.styles';

type SecondaryButtonProps = TouchableHighlightProps & {
  label: string;
};

const SecondaryButton = ({ label, ...props }: SecondaryButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity {...props} style={[styles.container]}>
      <Text
        style={[
          globalStyles.subTitle1,
          {
            color: theme.colors.text
          }
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
