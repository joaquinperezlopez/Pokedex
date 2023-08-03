import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 80,
    },
    image: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
    },
    text: {
      ...theme.global.body2,
    },
    categoryText: {
      ...theme.global.body2,
      color: theme.colors.grayScale.medium,
    },
    column: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    verticalSeparator: {
      height: '100%',
      width: 1,
      backgroundColor: theme.colors.grayScale.light,
    },
  });
