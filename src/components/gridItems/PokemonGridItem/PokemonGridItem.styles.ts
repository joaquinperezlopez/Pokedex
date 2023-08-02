import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    itemTouchable: {
      ...theme.global.defaultPadding,
      flex: 1 / 3,
      backgroundColor: theme.colors.pokemonItem.background,
      borderRadius: 4,
      marginVertical: 4,
    },
    itemContainer: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
    },
    itemText: {
      ...theme.global.body1,
      color: theme.colors.pokemonItem.text,
      textTransform: 'capitalize',
    },
    itemImage: {
      aspectRatio: 1,
      width: '20%',
    },
    itemFavorite: {},
    star: {
      ...theme.global.headline,
      color: theme.colors.grayScale.light,
    },
    favoriteColor: {
      color: theme.colors.pokemonItem.favorite,
    },
  });
