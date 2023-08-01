import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      flex: 1,
      backgroundColor: theme.colors.background
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      ...theme.global.headline,
      color: theme.colors.text
    },
    inputText: {
      ...theme.global.subTitle1
    },
    footer: {
      justifyContent: 'flex-end',
      gap: 8,
      flex: 1,
      paddingBottom: 20
    }
  });
