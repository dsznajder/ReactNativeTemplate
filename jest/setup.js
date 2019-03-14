global.window = {}
global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(),
  },
}

jest.mock('NativeModules', () => ({
  UIManager: {
    setJSResponder: jest.fn(),
    clearJSResponder: jest.fn(),
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}))
