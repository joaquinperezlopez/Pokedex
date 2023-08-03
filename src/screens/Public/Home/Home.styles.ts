import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    appName: {
      ...theme.global.headline1,
      color: theme.colors.text,
    },
    headerContainer: {
      gap: 16,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    buttonsContainer: {
      gap: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      width: '80%',
    },
  });
