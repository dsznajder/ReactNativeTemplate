// @flow

global.window = {}

jest.mock('NativeModules', () => ({
  UIManager: {
    setJSResponder: jest.fn(),
    clearJSResponder: jest.fn(),
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
  KeyboardObserver: {},
}))

jest.mock('NativeEventEmitter')
