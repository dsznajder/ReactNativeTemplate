module.exports = {
  plugins: [
    'lodash',
    [
      'module-resolver',
      {
        extensions: ['.json', '.ts', '.tsx'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
  retainLines: true,
};
