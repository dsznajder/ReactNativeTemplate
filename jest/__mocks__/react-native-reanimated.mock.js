import { NativeModules } from 'react-native'

NativeModules.ReanimatedModule = {
  configureProps: jest.fn(),
  createNode: jest.fn(),
  connectNodes: jest.fn(),
  configureNativeProps: jest.fn(),
  disconnectNodes: jest.fn(),
}

jest.mock('react-native-reanimated/src/ReanimatedEventEmitter')
jest.mock('react-native-reanimated/src/core/AnimatedProps')
jest.mock('react-native-reanimated/src/derived/evaluateOnce')
