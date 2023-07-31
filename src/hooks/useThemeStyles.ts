import { useTheme } from '@react-navigation/native';
import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

// This hook is used to get the theme from the context and apply it to the styles
// I had to use generics to keep intellisense on the styles, because those are dynamic
const useThemedStyles = <T extends ReturnType<typeof StyleSheet.create>>(
  styles: (theme: PokedexTheme) => T
) => {
  const theme = useTheme();
  return {
    global: theme.global,
    ...styles(theme)
  };
};

export default useThemedStyles;
