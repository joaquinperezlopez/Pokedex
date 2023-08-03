import { PokemonType } from '@models/pokemon/pokemon.types';
import { PokedexTheme } from '@theme/theme';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './PokemonTypePills.styles';

const PokemonTypePills = ({
  types,
  theme,
}: {
  types: PokemonType[];
  theme: PokedexTheme;
}) => {
  const themedStyles = styles(theme);
  return (
    <View style={themedStyles.container}>
      {types.map((type: PokemonType) => {
        const typeName = type.type
          .name as keyof typeof theme.colors.pokemonType;
        const pokemonTypeColor = theme.colors.pokemonType?.[typeName];
        return (
          <View
            key={typeName}
            style={[
              themedStyles.pillContainer,
              {
                backgroundColor: pokemonTypeColor,
              },
            ]}>
            <Text style={themedStyles.pillText}>{typeName}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default PokemonTypePills;
