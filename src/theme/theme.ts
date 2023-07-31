import { Theme } from '@react-navigation/native';

export type PokedexTheme = Theme & {
  colors: {
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
  colors: {
    primary: '#DC0A2D',
    background: '#fff',
    card: '#fff',
    text: '#fff',
    border: '#fff',
    notification: '#fff',
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
