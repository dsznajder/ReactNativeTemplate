import { Integrations, Modules, Options } from './types';

type PackagesType = { main: Array<string>; dev?: Array<string> };

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
    sentry: { main: ['@sentry/react-native'] },
    redux: {
      main: ['@reduxjs/toolkit', 'react-redux', 'redux'],
      dev: ['@types/react-redux', 'redux-flipper'],
    },
  },
  modules: {
    vectorIcons: { main: ['react-native-vector-icons'] },
    svg: { main: ['react-native-svg'] },
    config: { main: ['react-native-config'] },
    gestureHandler: { main: ['react-native-gesture-handler'] },
    keyboardManager: { main: ['react-native-keyboard-manager'] },
    navigation: {
      main: [
        '@react-native-community/masked-view',
        '@react-navigation/native',
        '@react-navigation/stack',
        'react-native-screens',
        'react-native-safe-area-context',
      ],
    },
    reanimated: { main: ['react-native-reanimated', 'react-native-redash'] },
    screens: { main: ['react-native-screens'] },
  },
} as {
  integrations: {
    [key in Integrations]: PackagesType;
  };
  modules: { [key in Modules]: PackagesType };
};

const getPackagesToInstall = (options: Options) => {
  let packages: Array<string> = [];
  let devPackages: Array<string> = [];

  const addPackages = ({ main, dev }: PackagesType) => {
    packages = packages.concat(main);
    devPackages = devPackages.concat(dev || []);
  };

  Object.entries(options.integrations).forEach(
    ([key, value]: [Integrations, boolean]) => {
      if (value) addPackages(PACKAGES.integrations[key]);
    },
  );

  if (options.modules.navigation) {
    options.modules.gestureHandler = true;
  }

  Object.entries(options.modules).forEach(
    ([key, value]: [Modules, boolean]) => {
      if (value) addPackages(PACKAGES.modules[key]);
    },
  );

  return [packages, devPackages];
};

export default getPackagesToInstall;
