import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    itemTouchable: {
      padding: 4,
      flex: 1 / 2,
      maxWidth: '50%',
      aspectRatio: 1,
      ...theme.global.shadow,
    },
    itemContainer: {
      ...theme.global.defaultPadding,

      borderRadius: 4,
      flexDirection: 'column',
      gap: 8,
      alignItems: 'stretch',
      flex: 1,
      // add gradient as background from top to bottom with 0.5 opacity
      backgroundColor: theme.colors.pokemonItem.background,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imageRow: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    nameRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    numberText: {
      ...theme.global.body1,
      fontWeight: 'bold',
    },
    itemText: {
      ...theme.global.body1,
      fontWeight: 'bold',
      color: theme.colors.pokemonItem.text,
      textTransform: 'capitalize',
    },
    itemImage: {
      flex: 1,
      resizeMode: 'contain',
      minHeight: '50%',
      aspectRatio: 1,
    },
    favoriteText: {
      color: theme.colors.grayScale.light,
    },
  });
