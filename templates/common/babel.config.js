module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  retainLines: true,
  plugins: [
    'lodash',
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
  <% if (modules.reanimated) { %>
    'react-native-reanimated/plugin',
  <% } %>
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    translations: {
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['en'],
            i18nextInstanceNames: ['i18next', 'i18n', 'I18n'],
            outputPath: 'src/locales/{{locale}}/{{ns}}.json',
            discardOldKeys: true,
            defaultValue: '__NOT_TRANSLATED__',
          },
        ],
      ],
    },
  },
};
