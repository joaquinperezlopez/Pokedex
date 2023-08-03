import FavoriteButton from '@components/buttons/FavoriteButton';
import { NamedAPIResource } from '@models/pokemon/pokemon.types';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './PokemonGridItem.styles';

const PokemonGridItem = ({
  item,
  isFavorite = true,
  onToggleFavorite,
  onClick,
}: {
  item: NamedAPIResource;
  isFavorite: boolean;
  onToggleFavorite: (item: NamedAPIResource) => void;
  onClick: (item: NamedAPIResource) => void;
}) => {
  const theme = useTheme();
  const themedStyles = styles(theme);
  const pokemonId = item.url.split('/')[6];

  const onPressFavorite = () => {
    onToggleFavorite(item);
  };

  const onPress = () => {
    onClick(item);
  };

  return (
    <TouchableOpacity
      style={themedStyles.itemTouchable}
      key={item.name}
      onPress={onPress}>
      <View style={themedStyles.itemContainer}>
        <View style={themedStyles.headerRow}>
          <FavoriteButton
            isEnabled={isFavorite}
            onClick={onPressFavorite}
            theme={theme}
            small
            textStyle={!isFavorite ? themedStyles.favoriteText : undefined}
          />
          <Text style={themedStyles.numberText}>#{pokemonId}</Text>
        </View>
        <View style={themedStyles.imageRow}>
          <Image
            style={themedStyles.itemImage}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
            }}
          />
        </View>
        <View style={themedStyles.nameRow}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={themedStyles.itemText}>
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonGridItem;
