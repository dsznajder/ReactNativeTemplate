// eslint-disable-next-line import/named
import { NativeModules } from 'react-native';

NativeModules.ReanimatedModule = {
  attachEvent: jest.fn(),
  detachEvent: jest.fn(),
  configureProps: jest.fn(),
  createNode: jest.fn(),
  connectNodes: jest.fn(),
  configureNativeProps: jest.fn(),
  disconnectNodes: jest.fn(),
  dropNode: jest.fn(),
  getValue: jest.fn(),
  createAnimatedComponent: (Component) => Component,
  animateNextTransition: jest.fn(),
};

jest.mock('react-native-reanimated/src/ReanimatedEventEmitter', () => ({
  addListener: () => {},
  removeAllListeners: () => {},
}));
jest.mock('react-native-reanimated/src/core/AnimatedProps');
