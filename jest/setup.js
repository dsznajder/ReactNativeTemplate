global.window = {};
global.navigator = {};

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  ...require.requireActual('react-native/Libraries/Utilities/Platform'),
  Version: '13',
}));
