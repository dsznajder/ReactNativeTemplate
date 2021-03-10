export enum Integrations {
  GraphQL = 'graphql',
  Unimodules = 'unimodules',
  Fastlane = 'fastlane',
}

export enum Modules {
  Screens = 'react-native-screens',
  Reanimated = 'react-native-reanimated',
}

export enum ArgName {
  Integrations = 'integrations',
  Modules = 'modules',
}

export type Answers = {
  integrations: Array<Integrations>;
  modules: Array<Modules>;
};
