import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
    pillContainer: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    pillText: {
      ...theme.global.body3,
      textTransform: 'capitalize',
      color: theme.colors.text,
      fontWeight: 'bold',
    },
  });
