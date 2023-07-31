import { StyleSheet } from 'react-native';
import { PokedexTheme } from './../../../theme/theme';

const styles = (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      borderWidth: 1,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.grayScale.light
    },
    text: {
      ...theme.global.subTitle1,
      color: theme.colors.primary
    }
  });

export default styles;
