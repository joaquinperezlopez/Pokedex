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
    },
    input: {
      ...theme.global.subTitle3,
      ...theme.global.defaultPadding,
      backgroundColor: theme.colors.input.background,
      color: theme.colors.input.text,
      borderRadius: 6,
      marginHorizontal: 8,
    },
  });
