import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    favoriteButton: {
      ...theme.global.headline,
      color: theme.colors.grayScale.light,
    },
    favoriteColor: {
      color: theme.colors.pokemonItem.favorite,
    },
  });
