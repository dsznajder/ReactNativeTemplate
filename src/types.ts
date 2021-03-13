export enum Integrations {
  GraphQL = 'graphql',
  Unimodules = 'unimodules',
  Fastlane = 'fastlane',
}

export enum Modules {
  Screens = 'screens',
  Reanimated = 'reanimated',
  Config = 'config',
  GestureHandler = 'gestureHandler',
  Navigation = 'navigation',
  KeyboardManager = 'keyboardManager',
}

export enum ArgName {
  Integrations = 'integrations',
  Modules = 'modules',
}

export type Answers = {
  integrations: Array<Integrations>;
  modules: Array<Modules>;
};

export type Options = {
  integrations: { [key in Integrations]: boolean };
  modules: { [key in Modules]: boolean };
};
