import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      gap: 8,
    },
    input: {
      ...theme.global.subTitle1,
      ...theme.global.defaultPadding,
      flex: 1,
      backgroundColor: theme.colors.input.background,
      color: theme.colors.input.text,
      borderRadius: 6,
      marginRight: 6,
    },
    subHeader: {
      marginBottom: 6,
      paddingLeft: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flatList: {
      paddingBottom: 41,
    },
  });
