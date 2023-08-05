import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      flex: 1,
    },
    rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 8,
      gap: 12,
    },
    rememberMeText: {
      ...theme.global.subTitle3,
      color: theme.colors.text,
    },
  });
