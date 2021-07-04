import { get } from 'lodash';

import {
  ExtraOptions,
  Integrations,
  Modules,
  Options,
  PackagesType,
} from './types';

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
        'react-native-screens',
        'react-native-safe-area-context',
      ],
    },
    reanimated: { main: ['react-native-reanimated', 'react-native-redash'] },
    screens: { main: ['react-native-screens'] },
  },
  extraOptions: {
    modules: {
      navigation: {
        variant: {
          bottomBar: {
            main: ['@react-navigation/stack', '@react-navigation/bottom-tabs'],
          },
          stack: {
            main: ['@react-navigation/stack'],
          },
          nativeStack: {
            main: [],
          },
        },
      },
    },
  },
} as {
  integrations: {
    [key in Integrations]: PackagesType;
  };
  modules: { [key in Modules]: PackagesType };
  extraOptions: ExtraOptions;
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

  Object.entries(options.modules).forEach(
    ([key, value]: [Modules, boolean]) => {
      if (value) addPackages(PACKAGES.modules[key]);
    },
  );

  Object.entries(options.extraOptions).forEach(([optionKey, optionNames]) =>
    Object.entries(optionNames).forEach(([optionName, optionValue]) =>
      Object.entries(optionValue).forEach(([extraOptionKey, value]) => {
        const packagesForExtraOption = get(PACKAGES.extraOptions, [
          optionKey,
          optionName,
          extraOptionKey,
          value,
        ]);

        if (packagesForExtraOption) {
          addPackages(packagesForExtraOption);
        }
      }),
    ),
  );

  return [packages, devPackages];
};

export default getPackagesToInstall;
