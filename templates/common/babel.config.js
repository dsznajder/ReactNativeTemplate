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
  },
};
