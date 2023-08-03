import FavoriteButton from '@components/buttons/FavoriteButton';
import PokemonItemTitle from '@components/labels/PokemonItemTitle';
import PokemonTypePills from '@components/labels/PokemonTypePills';
import AboutPokemon from '@components/layout/aboutPokemon';
import PokemonStats from '@components/layout/pokemonStats';
import { PrivateStackNavigationProps } from '@navigation/Private/private.navigator.types';
import { useTheme } from '@react-navigation/native';

import useGenericLoading from '@hooks/useLoading';
import {
  useGetPokemonDetailQuery,
  useGetPokemonSpeciesDetailQuery,
} from '@services/pokemon/pokemon.api';
import { RootState, useAppDispatch } from '@store/index';
import {
  selectIsFavorite,
  toggleFavorite,
} from '@store/slices/pokemon/pokemon.slice';
import { sanitizeFlavorDescription } from '@utils/functions';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './PokemonDetail.styles';

const PokemonDetailScreen = ({
  navigation,
  route,
}: PrivateStackNavigationProps<'PokemonDetail'>) => {
  const theme = useTheme();
  const themedStyles = styles(theme);
  const { pokemon } = route.params;
  const { data: pokemonData, isLoading: isLoadingPokemonDetail } =
    useGetPokemonDetailQuery({
      url: pokemon.url,
    });
  const { data: pokemonSpeciesDetail, isLoading: isLoadingPokemonSpecies } =
    useGetPokemonSpeciesDetailQuery(
      { url: pokemonData?.species.url ?? '' },
      {
        skip: pokemonData?.species.url === undefined,
      }
    );
  const isFavorite = useSelector((state: RootState) =>
    selectIsFavorite(state, pokemonData?.name ?? '')
  );
  const dispatch = useAppDispatch();

  useGenericLoading(isLoadingPokemonDetail || isLoadingPokemonSpecies);

  const pokemonType = (pokemonData?.types[0].type.name ??
    'normal') as keyof typeof theme.colors.pokemonType;
  const pokemonTypeColor = theme.colors.pokemonType?.[pokemonType];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: pokemonTypeColor,
      },
      headerTintColor: theme.colors.text,
      headerRight: () =>
        FavoriteButton({
          isEnabled: isFavorite,
          onClick: () => {
            dispatch(toggleFavorite(pokemon));
          },
          small: true,
          theme,
        }),
      // capitalize first letter
      title: `#${pokemonData?.id} ${pokemon.name
        .charAt(0)
        .toUpperCase()}${pokemon.name.slice(1)}`,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [
    dispatch,
    isFavorite,
    navigation,
    pokemon,
    pokemon.name,
    pokemonData?.id,
    pokemonTypeColor,
    theme,
    theme.colors.text,
  ]);

  // console.log the pokemon description text
  const pokemonDescription = sanitizeFlavorDescription(
    pokemonSpeciesDetail?.flavor_text_entries.find(
      entry => entry.language.name === 'en'
    )?.flavor_text
  );

  console.log(
    'originalDescription',
    pokemonSpeciesDetail?.flavor_text_entries.find(
      entry => entry.language.name === 'en'
    ),
    'pokemonDescription',
    pokemonDescription
  );

  const pokemonImageUrl =
    pokemonData?.sprites.other['official-artwork'].front_default;

  return (
    <View
      style={[
        themedStyles.container,
        {
          backgroundColor: pokemonTypeColor,
        },
      ]}>
      <View style={themedStyles.topSpacer} />
      <View style={themedStyles.cardContainer}>
        <View style={themedStyles.pokemonHeaderContainer}>
          <View style={themedStyles.imageContainer}>
            {pokemonImageUrl && (
              <Image
                style={themedStyles.pokemonImage}
                source={{ uri: pokemonImageUrl }}
              />
            )}
          </View>
        </View>
        <View style={themedStyles.pokemonInfoContainer}>
          <ScrollView>
            <PokemonTypePills types={pokemonData?.types ?? []} theme={theme} />
            <PokemonItemTitle label="About" color={pokemonTypeColor} />
            <AboutPokemon
              height={pokemonData?.height}
              weight={pokemonData?.weight}
              moves={pokemonData?.moves ?? []}
            />
            <View style={themedStyles.pokemonDescriptionContainer}>
              <Text style={themedStyles.pokemonDescriptionText}>
                {pokemonDescription}
              </Text>
            </View>
            <PokemonItemTitle label="Base Stats" color={pokemonTypeColor} />
            <PokemonStats
              stats={pokemonData?.stats ?? []}
              typeColor={pokemonTypeColor}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PokemonDetailScreen;
