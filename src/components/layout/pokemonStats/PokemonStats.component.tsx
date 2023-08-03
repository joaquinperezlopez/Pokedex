import useThemedStyles from '@hooks/useThemeStyles';
import { StatElement } from '@models/pokemon/pokemon.types';
import { convertNumberToNChars } from '@utils/functions';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './PokemonStats.styles';

const StatsMapping = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SATK',
  'special-defense': 'SDEF',
  speed: 'SPD',
};

const PokemonStats = ({
  stats,
  typeColor,
}: {
  stats: StatElement[];
  typeColor: string;
}) => {
  const themedStyles = useThemedStyles(styles);
  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.leftColumn}>
        {stats.map(stat => {
          return (
            <View style={themedStyles.statRow} key={stat.stat.name}>
              <Text
                style={[
                  themedStyles.statNameText,
                  {
                    color: typeColor,
                  },
                ]}>
                {StatsMapping[stat.stat.name as keyof typeof StatsMapping]}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={themedStyles.verticalSeparator} />
      <View style={themedStyles.rightColumn}>
        {stats.map(stat => {
          return (
            <View style={themedStyles.statRow} key={stat.stat.name}>
              <Text style={themedStyles.statValueText}>
                {convertNumberToNChars(stat.base_stat, 3)}
              </Text>
              <View
                style={[
                  themedStyles.statBar,
                  {
                    // this is going to make the color lighter
                    backgroundColor: `${typeColor}33`,
                  },
                ]}>
                <View
                  style={[
                    themedStyles.statBarFiller,
                    { width: `${Math.min(stat.base_stat, 100)}%` },
                    { backgroundColor: typeColor },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PokemonStats;
