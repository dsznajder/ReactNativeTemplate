import { NativeModules } from 'react-native';

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  Directions: {},
  State: {},
  directEventTypes: {},
};
