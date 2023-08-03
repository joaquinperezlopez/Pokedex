import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

const VERTICAL_GAP = 4;

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      paddingHorizontal: 18,
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
    },
    leftColumn: {
      flex: 1,
      gap: VERTICAL_GAP,
      alignItems: 'flex-end',
    },
    verticalSeparator: {
      width: 1,
      height: '100%',
      backgroundColor: theme.colors.grayScale.light,
    },
    rightColumn: {
      flex: 7,
      gap: VERTICAL_GAP,
    },
    statRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: VERTICAL_GAP,
    },
    statBar: {
      flex: 1,
      height: 5,
      borderRadius: 8,
    },
    statBarFiller: {
      height: 5,
      opacity: 1,
    },
    statNameText: {
      fontWeight: 'bold',
    },
    statValueText: {
      width: 30,
    },
  });
