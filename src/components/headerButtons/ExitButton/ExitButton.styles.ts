import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    cross: {
      fontSize: 20,
      color: theme.colors.text,
      fontWeight: 'bold',
      marginRight: 10,
    },
  });
