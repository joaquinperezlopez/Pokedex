import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    favoriteButton: {
      ...theme.global.headline1,
      color: theme.colors.text,
      fontWeight: 'normal',
    },
    favoriteButtonSmall: {
      fontSize: 26,
    },
    favoriteColor: {
      color: theme.colors.pokemonItem.favorite,
    },
  });
