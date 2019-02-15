global.window = {}
global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(),
  },
}

jest.mock('NativeModules', () => ({
  UIManager: {
    RCTView: () => {},
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}))
