import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.loading.background,
      justifyContent: 'center',
      alignItems: 'center'
    },
    indicator: {
      color: theme.colors.loading.color
    }
  });
