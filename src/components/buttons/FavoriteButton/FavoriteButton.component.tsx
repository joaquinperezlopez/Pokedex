import { EMPTY_STAR, FILLED_STAR } from '@constants/index';
import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './FavoriteButton.styles';

const FavoriteButton = ({
  isEnabled,
  onClick,
}: {
  isEnabled: boolean;
  onClick: () => void;
}) => {
  const themedStyles = useThemedStyles(styles);
  return (
    <TouchableOpacity onPress={onClick}>
      <Text
        style={[
          themedStyles.favoriteButton,
          isEnabled && themedStyles.favoriteColor,
        ]}>
        {isEnabled ? FILLED_STAR : EMPTY_STAR}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
