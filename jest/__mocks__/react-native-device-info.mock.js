jest.mock('react-native-device-info', () => ({
  getModel: jest.fn(),
  getVersion: () => '1.0.0',
  hasNotch: () => false,
  getBuildNumber: () => '100',
  getBrand: () => 'Apple',
}));
