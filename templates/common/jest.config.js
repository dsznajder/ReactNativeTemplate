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
    'node_modules/(?!(jest-)?react-native|@react-navigation|@react-native-community|react-native-flipper|redux-flipper|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|unimodules|@react-native-masked-view)',
  ],
  testPathIgnorePatterns: ['e2e', 'node_modules'],
  moduleNameMapper: {
    '\\.(png)$': '<rootDir>/jest/__mocks__/assetsMock.js',
  },
};
