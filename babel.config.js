module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  retainLines: true,
  plugins: [
    'lodash',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.json', '.ts', '.tsx'],
        alias: {
          '~': './src',
          jest: './jest',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    // translations: {
    //   plugins: [
    //     [
    //       'i18next-extract',
    //       {
    //         locales: ['pl'],
    //         i18nextInstanceNames: ['i18next', 'i18n', 'I18n'],
    //         outputPath: 'src/locales/{{locale}}/{{ns}}.json',
    //         discardOldKeys: true,
    //         defaultValue: '__NOT_TRANSLATED__',
    //       },
    //     ],
    //   ],
    // },
  },
};
