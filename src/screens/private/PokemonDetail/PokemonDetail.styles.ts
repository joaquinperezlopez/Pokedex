import { PokedexTheme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export default (theme: PokedexTheme) =>
  StyleSheet.create({
    container: {
      ...theme.global.defaultPadding,
      flex: 1,
    },
    topSpacer: {
      flex: 1,
    },
    cardContainer: {
      flex: 5,
      alignItems: 'stretch',
      backgroundColor: theme.colors.card,
      borderRadius: 6,
      ...theme.global.shadow,
    },
    pokemonHeaderContainer: {
      flex: 1,
      alignItems: 'center',
    },
    imageContainer: {
      minHeight: '35%',
      aspectRatio: 1,
      alignItems: 'center',
      top: '-180%',
    },
    pokemonImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    pokemonInfoContainer: {
      flex: 7,
    },
    pokemonInfoRow: {
      flex: 1,
    },
    pokemonDescriptionContainer: {
      ...theme.global.defaultPadding,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pokemonDescriptionText: {
      ...theme.global.body2,
      paddingHorizontal: 16,
    },
  });
