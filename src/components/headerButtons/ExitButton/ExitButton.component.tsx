import { PokedexTheme } from '@theme/theme';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './ExitButton.styles';

const ExitButton = ({
  onClick,
  theme,
}: {
  onClick: () => void;
  theme: PokedexTheme;
}) => {
  const themedStyles = styles(theme);
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={themedStyles.cross}>{'\u2715'}</Text>
    </TouchableOpacity>
  );
};

export default ExitButton;
