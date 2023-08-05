import FavoriteButton from '@components/buttons/FavoriteButton';
import PokemonGridItem from '@components/gridItems/PokemonGridItem';
import ExitButton from '@components/headerButtons/ExitButton';
import useGenericLoading from '@hooks/useLoading';
import translate from '@i18n/index';
import { NamedAPIResource } from '@models/pokemon/pokemon.types';
import { PrivateStackNavigationProps } from '@navigation/Private/private.navigator.types';
import { useTheme } from '@react-navigation/native';
import { useGetPokemonsQuery } from '@services/pokemon/pokemon.api';
import { RootState, useAppDispatch } from '@store/index';
import { logout } from '@store/slices/auth/auth.slice';
import {
  selectFavorites,
  selectPokemons,
  toggleFavorite,
} from '@store/slices/pokemon/pokemon.slice';
import { cleanCredentialsThunk } from '@thunks/auth/auth.thunks';
import React, { useCallback, useLayoutEffect } from 'react';
import { Alert, FlatList, StatusBar, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './PokemonList.styles';

const PokemonListScreen = ({
  navigation,
}: PrivateStackNavigationProps<'PokemonList'>) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const themedStyles = styles(theme);
  const [query, setQuery] = React.useState({
    queryString: '',
    onlyFavorites: false,
  });
  const pokemons = useSelector((state: RootState) =>
    selectPokemons(state, query)
  );
  const favorites = useSelector(selectFavorites);
  // we need to fetch all the pokemons to be able to filter them locally
  // the API doesn't support filtering by name or id
  const { isLoading } = useGetPokemonsQuery({ offset: 0, limit: 3000 });

  useGenericLoading(isLoading);

  const onExit = useCallback(() => {
    Alert.alert(
      translate('generic.exit'),
      translate('generic.logoutQuestion'),
      [
        {
          text: translate('generic.cancel'),
          style: 'cancel',
        },
        {
          text: translate('generic.yes'),
          onPress: () => {
            dispatch(cleanCredentialsThunk());
            dispatch(logout());
          },
        },
      ]
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => ExitButton({ onClick: onExit, theme: theme }),
    });
  }, [navigation, onExit, theme]);

  const renderItem = ({ item }: { item: NamedAPIResource }) => {
    return (
      <PokemonGridItem
        item={item}
        isFavorite={favorites.some(fav => fav.name === item.name)}
        onToggleFavorite={onToggleFavorite}
        onClick={onPressItem}
      />
    );
  };

  const onPressItem = (item: NamedAPIResource) => {
    navigation.navigate('PokemonDetail', { pokemon: item });
  };

  const onToggleFavorite = (item: NamedAPIResource) => {
    dispatch(toggleFavorite(item));
  };

  const onSearchTextChanged = (text: string) => {
    setQuery({
      queryString: text,
      onlyFavorites: query.onlyFavorites,
    });
  };

  const toggleFavorites = () => {
    setQuery({
      queryString: '',
      onlyFavorites: !query.onlyFavorites,
    });
  };

  return (
    <View style={themedStyles.container}>
      <StatusBar barStyle="light-content" />
      <View style={themedStyles.subHeader}>
        <TextInput
          style={themedStyles.input}
          value={query.queryString}
          onChangeText={onSearchTextChanged}
          placeholder={translate('screens.pokemonList.searchBy')}
        />
        <FavoriteButton
          isEnabled={query.onlyFavorites}
          onClick={toggleFavorites}
          theme={theme}
        />
      </View>
      <FlatList
        contentContainerStyle={themedStyles.flatList}
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PokemonListScreen;
