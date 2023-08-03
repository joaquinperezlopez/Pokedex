import { EMPTY_STAR, FILLED_STAR } from '@constants/index';
import { PokedexTheme } from '@theme/theme';
import React from 'react';
import { Text, TextStyle, TouchableOpacity } from 'react-native';
import styles from './FavoriteButton.styles';

const FavoriteButton = ({
  isEnabled,
  onClick,
  small,
  theme,
  textStyle,
}: {
  isEnabled: boolean;
  onClick: () => void;
  theme: PokedexTheme;
  textStyle?: TextStyle;
  small?: boolean;
}) => {
  const themedStyles = styles(theme);
  return (
    <TouchableOpacity onPress={onClick}>
      <Text
        style={[
          themedStyles.favoriteButton,
          isEnabled && themedStyles.favoriteColor,
          small && themedStyles.favoriteButtonSmall,
          textStyle,
        ]}>
        {isEnabled ? FILLED_STAR : EMPTY_STAR}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
