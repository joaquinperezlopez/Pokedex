import FavoriteButton from '@components/buttons/FavoriteButton';
import PokemonGridItem from '@components/gridItems/PokemonGridItem';
import useGenericLoading from '@hooks/useLoading';
import useThemedStyles from '@hooks/useThemeStyles';
import { NamedAPIResource } from '@models/pokemon/pokemon.types';
import { PrivateStackNavigationProps } from '@navigation/Private/private.navigator.types';
import { useGetPokemonsQuery } from '@services/pokemon/pokemon.api';
import { useAppDispatch } from '@store/index';
import { logout } from '@store/slices/auth/auth.slice';
import {
  selectFavorites,
  selectPokemons,
  toggleFavorite,
} from '@store/slices/pokemon/pokemon.slice';
import React, { useCallback, useLayoutEffect } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './PokemonList.styles';

const PokemonListScreen = ({
  navigation,
}: PrivateStackNavigationProps<'PokemonList'>) => {
  const [onlyFavorites, setOnlyFavorites] = React.useState(false);
  const themedStyles = useThemedStyles(styles);
  const [query, setQuery] = React.useState('');
  const pokemons = useSelector(selectPokemons(query));
  const favorites = useSelector(selectFavorites);
  const { isLoading } = useGetPokemonsQuery({ offset: 0, limit: 3000 });
  const dispatch = useAppDispatch();

  useGenericLoading(isLoading);

  const onExit = useCallback(() => {
    Alert.alert('Exit', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => dispatch(logout()),
      },
    ]);
  }, [dispatch]);

  useLayoutEffect(() => {
    // set exit button on top left
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={onExit}>
          <Text
            style={{
              fontSize: 20,
              color: themedStyles.colors.text,
              fontWeight: 'bold',
            }}>
            {'\u2715'}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, onExit, themedStyles.colors.text]);

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
    setQuery(text);
  };

  const toggleFavorites = () => {
    setOnlyFavorites(!onlyFavorites);
  };

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.subHeader}>
        <TextInput
          style={themedStyles.input}
          onChangeText={onSearchTextChanged}
          placeholder="Search by name or number..."
        />
        <FavoriteButton isEnabled={onlyFavorites} onClick={toggleFavorites} />
      </View>
      <FlatList
        contentContainerStyle={themedStyles.flatList}
        data={onlyFavorites ? favorites : pokemons}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
};

export default PokemonListScreen;
