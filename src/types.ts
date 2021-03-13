export enum Integrations {
  GraphQL = 'graphql',
  Unimodules = 'unimodules',
  Fastlane = 'fastlane',
  Redux = 'redux',
  Sentry = 'sentry',
}

export enum Modules {
  Screens = 'screens',
  Reanimated = 'reanimated',
  Config = 'config',
  GestureHandler = 'gestureHandler',
  Navigation = 'navigation',
  KeyboardManager = 'keyboardManager',
  VectorIcons = 'vectorIcons',
  Svg = 'svg',
}

export enum ArgName {
  Integrations = 'integrations',
  Modules = 'modules',
}

export type Answers = {
  integrations: Array<Integrations>;
  modules: Array<Modules>;
};

export type Options<T = string> = {
  project?: {
    name: T;
    package: T;
  };
  integrations: { [key in Integrations]: boolean };
  modules: { [key in Modules]: boolean };
};
