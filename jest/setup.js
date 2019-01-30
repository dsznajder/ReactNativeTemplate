global.window = {}
global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(),
  },
}

const animationObject = {
  interpolate: jest.fn(),
  __makeNative: jest.fn(),
  addListener: jest.fn(),
  removeAllListeners: jest.fn(),
  removeListener: jest.fn(),
  setValue: jest.fn(),
  start: jest.fn(),
}

jest.mock('ListView', () => require.requireActual('ListView'))
jest.mock('Animated', () => ({
  Image: require.requireActual('Image'),
  ScrollView: require.requireActual('ScrollView'),
  Text: require.requireActual('Text'),
  View: require.requireActual('View'),
  createAnimatedComponent: () => 'View',
  Value: jest.fn(() => animationObject),
  add: jest.fn(() => animationObject),
  divide: jest.fn(() => animationObject),
  event: jest.fn(() => animationObject),
  interpolate: jest.fn(),
  loop: jest.fn(() => animationObject),
  parallel: jest.fn(() => animationObject),
  timing: jest.fn(() => animationObject),
}))

jest.mock('NativeModules', () => ({
  UIManager: {
    RCTView: () => {},
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}))
