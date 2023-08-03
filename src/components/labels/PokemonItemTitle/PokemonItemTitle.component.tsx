import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './PokemonItemTitle.styles';

const PokemonItemTitle = ({
  label,
  color,
}: {
  label: string;
  color: string;
}) => {
  const themedStyles = useThemedStyles(styles);
  return (
    <View style={themedStyles.container}>
      <Text style={[themedStyles.text, { color: color }]}>{label}</Text>
    </View>
  );
};

export default PokemonItemTitle;
