import { EMPTY_STAR, FILLED_STAR } from '@constants/index';
import { PokedexTheme } from '@theme/theme';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './FavoriteButton.styles';

const FavoriteButton = ({
  isEnabled,
  onClick,
  small,
  theme,
}: {
  isEnabled: boolean;
  onClick: () => void;
  theme: PokedexTheme;
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
        ]}>
        {isEnabled ? FILLED_STAR : EMPTY_STAR}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
