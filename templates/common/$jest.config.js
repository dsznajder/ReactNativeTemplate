module.exports = {
  preset: 'jest-expo',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/assets/'],
  setupFiles: [
    '<rootDir>/jest/setup.js',
    <% if (modules.gestureHandler) { %>
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    <% } %>
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native-mapbox-gl|@react-native-community|react-native-flipper|redux-flipper|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|unimodules|@invertase/react-native-apple-authentication|@versum/moment-api-helpers/types|@react-native-masked-view)',
  ],
  testPathIgnorePatterns: ['e2e', 'node_modules'],
  moduleNameMapper: {
    '\\.(png)$': '<rootDir>/jest/__mocks__/assetsMock.js',
  },
};
