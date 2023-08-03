import { HEIGHT_UNIT, WEIGHT_UNIT } from '@constants/index';
import useThemedStyles from '@hooks/useThemeStyles';
import { MoveElement } from '@models/pokemon/pokemon.types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './AboutPokemon.styles';

const AboutPokemon = ({
  weight,
  height,
  moves,
}: {
  weight: number | undefined;
  height: number | undefined;
  moves: MoveElement[];
}) => {
  const themedStyles = useThemedStyles(styles);
  return (
    <View style={themedStyles.container}>
      {weight && (
        <View style={themedStyles.column}>
          <View style={themedStyles.row}>
            <Image
              source={require('@assets/images/weight.png')}
              style={themedStyles.image}
            />
            <Text style={themedStyles.text}>
              {weight} {WEIGHT_UNIT}
            </Text>
          </View>
          <View style={themedStyles.row}>
            <Text style={themedStyles.categoryText}>{'Weight'}</Text>
          </View>
        </View>
      )}
      <View style={themedStyles.verticalSeparator} />
      {height && (
        <View style={themedStyles.column}>
          <View style={themedStyles.row}>
            <Image
              source={require('@assets/images/height.png')}
              style={themedStyles.image}
            />
            <Text style={themedStyles.text}>
              {height} {HEIGHT_UNIT}
            </Text>
          </View>
          <View style={themedStyles.row}>
            <Text style={themedStyles.categoryText}>{'Height'}</Text>
          </View>
        </View>
      )}
      <View style={themedStyles.verticalSeparator} />
      {moves.length > 0 && (
        <View style={themedStyles.column}>
          <View style={themedStyles.row}>
            <Text style={themedStyles.text}>{moves[0]?.move.name}</Text>
          </View>
          <View style={themedStyles.row}>
            {moves?.[1] && (
              <Text style={themedStyles.text}>{moves[1]?.move.name}</Text>
            )}
          </View>
          <View style={themedStyles.row}>
            <Text style={themedStyles.categoryText}>{'Moves'}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default AboutPokemon;
