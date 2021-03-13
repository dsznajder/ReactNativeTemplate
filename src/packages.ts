import { Options } from './types';

const PACKAGES = {
  integrations: {
    graphql: {
      main: ['@apollo/client', 'graphql'],
      dev: [
        '@graphql-codegen/cli',
        '@graphql-codegen/introspection',
        '@graphql-codegen/near-operation-file-preset',
        '@graphql-codegen/typescript',
        '@graphql-codegen/typescript-operations',
        'eslint-plugin-graphql',
        'unfetch',
      ],
    },
    unimodules: { main: ['react-native-unimodules'] },
    fastlane: { main: [] },
    redux: {
      main: ['@reduxjs/toolkit', 'react-redux', 'redux'],
      dev: ['@types/react-redux', 'redux-flipper'],
    },
  },
  modules: {
    config: { main: ['react-native-config'] },
    gestureHandler: { main: ['react-native-gesture-handler'] },
    keyboardManager: { main: ['react-native-keyboard-manager'] },
    navigation: {
      main: [
        '@react-native-community/masked-view',
        '@react-navigation/native',
        'react-native-safe-area-context',
      ],
    },
    reanimated: { main: ['react-native-reanimated', 'react-native-redash'] },
    screens: { main: ['react-native-screens'] },
  },
} as const;

const getPackagesToInstall = (options: Options) => {
  let packages = [];
  let devPackages = [];

  const addPackages = ({ main, dev }) => {
    packages = packages.concat(main);
    devPackages = devPackages.concat(dev || []);
  };

  Object.entries(options.integrations).forEach(([key, value]) => {
    if (value) addPackages(PACKAGES.integrations[key]);
  });

  Object.entries(options.modules).forEach(([key, value]) => {
    if (value) addPackages(PACKAGES.modules[key]);
  });

  return [packages, devPackages];
};

export default getPackagesToInstall;
