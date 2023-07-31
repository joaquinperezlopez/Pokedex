import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      height: 56,
      gap: 10
    },
    label: {
      ...theme.global.subTitle1,
      color: theme.colors.input.label
    },
    input: {
      ...theme.global.subTitle1,
      ...theme.global.defaultPadding,
      backgroundColor: theme.colors.input.background,
      color: theme.colors.input.text,
      borderRadius: 4
    }
  });
