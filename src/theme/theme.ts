import { Theme } from '@react-navigation/native';
import globalStyles from '@styles/global';

export type PokedexTheme = Theme & {
  global: typeof globalStyles;
  colors: {
    loading: {
      background: string;
      color: string;
    };
    input: {
      background: string;
      text: string;
      label: string;
      error: string;
    };
    pokemonItem: {
      background: string;
      text: string;
      favorite: string;
    };
    pokemonType: {
      bug: string;
      dark: string;
      dragon: string;
      electric: string;
      fairy: string;
      fighting: string;
      fire: string;
      flying: string;
      ghost: string;
      grass: string;
      ground: string;
      ice: string;
      normal: string;
      poison: string;
      psychic: string;
      rock: string;
      steel: string;
      water: string;
    };
    grayScale: {
      dark: string;
      medium: string;
      light: string;
    };
  };
};

export const MainTheme: PokedexTheme = {
  dark: false,
  global: globalStyles,
  colors: {
    background: '#DC0A2D',
    primary: '#fff',
    card: '#fff',
    text: '#fff',
    border: '#fff',
    notification: '#fff',
    loading: {
      background: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
    },
    input: {
      background: '#fff',
      text: '#000',
      label: '#fff',
      error: '#fff',
    },
    pokemonItem: {
      background: '#fff',
      text: '#000',
      favorite: '#ffff00',
    },
    pokemonType: {
      bug: '#A7B723',
      dark: '#75574C',
      dragon: '#7037FF',
      electric: '#F9CF30',
      fairy: '#E69EAC',
      fighting: '#C12239',
      fire: '#F57D31',
      flying: '#A891EC',
      ghost: '#70559B',
      normal: '#AAA67F',
      grass: '#74CB48',
      ground: '#DEC16B',
      ice: '#9AD6DF',
      poison: '#A43E9E',
      psychic: '#FB5584',
      rock: '#B69E31',
      steel: '#B7B9D0',
      water: '#6493EB',
    },
    grayScale: {
      dark: '#212121',
      medium: '#666666',
      light: '#E0E0E0',
    },
  },
};

// This overrides the default theme type from @react-navigation/native so we can have intelisense on our theme
declare module '@react-navigation/native' {
  export function useTheme(): PokedexTheme;
}
