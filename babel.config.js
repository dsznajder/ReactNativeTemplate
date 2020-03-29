const plugins = [
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
];

module.exports = function (api) {
  api.cache(true);

  return {
    plugins,
    presets: ['module:metro-react-native-babel-preset'],
    retainLines: true,
  };
};
