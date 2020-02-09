jest.mock('react-native-localize', () => ({
  initialConstants: {},
  getLocales: jest.fn(() => [{ languageCode: 'pl' }]),
}));
