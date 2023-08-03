import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    favoriteButton: {
      ...theme.global.headline,
      color: theme.colors.grayScale.light,
    },
    favoriteButtonSmall: {
      fontSize: 26,
    },
    favoriteColor: {
      color: theme.colors.pokemonItem.favorite,
    },
  });
