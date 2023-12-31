import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      height: 80,
      gap: 8,
    },
    error: {
      ...theme.global.body2,
      color: theme.colors.input.error,
      fontWeight: 'bold',
      left: 8,
    },
    input: {
      ...theme.global.subTitle2,
      padding: 8,
      backgroundColor: theme.colors.input.background,
      color: theme.colors.input.text,
      borderRadius: 6,
      marginHorizontal: 8,
    },
  });
