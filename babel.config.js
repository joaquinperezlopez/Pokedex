module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@models': './src/models',
          '@i18n': './src/i18n',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@assets': './src/assets',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@constants': './src/constants',
          '@thunks': './src/thunks',
        },
      },
    ],
  ],
};
