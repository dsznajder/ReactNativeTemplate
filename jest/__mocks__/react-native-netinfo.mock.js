jest.mock('@react-native-community/netinfo', () => ({
  fetch: jest.fn(() => ({ then: jest.fn() })),
}));
