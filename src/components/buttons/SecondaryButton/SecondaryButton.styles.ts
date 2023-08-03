import { StyleSheet } from 'react-native';
import { PokedexTheme } from './../../../theme/theme';

const styles = (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...theme.global.subTitle1,
      color: theme.colors.text,
    },
  });

export default styles;
