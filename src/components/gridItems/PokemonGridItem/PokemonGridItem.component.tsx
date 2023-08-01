import FavoriteButton from '@components/buttons/FavoriteButton';
import useThemedStyles from '@hooks/useThemeStyles';
import { NamedAPIResource } from '@models/pokemon/pokemon.types';
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
  const themedStyles = useThemedStyles(styles);
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
        <Image
          style={themedStyles.itemImage}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          }}
          resizeMode="cover"
        />
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={themedStyles.itemText}>{`#${pokemonId}  ${item.name}`}</Text>
        <View style={{ flex: 1 }} />
        <FavoriteButton isEnabled={isFavorite} onClick={onPressFavorite} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonGridItem;
