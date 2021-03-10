import { ApolloProvider } from '@apollo/client';
import { NavigationContainer, Theme } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import GraphQLClient from '~/services/GraphQL';
import palette from '~/styles/palette';

// import AppNavigator from './src/AppNavigator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.primary.background,
  },
});

const theme: Theme = {
  dark: false,
  colors: {
    background: palette.primary.background,
    card: palette.primary.background,
    text: palette.text.primary,
    border: palette.common.blueGrey,
    notification: palette.common.error,
    primary: palette.text.primary,
  },
};

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ApolloProvider client={GraphQLClient}>
        {/* <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}> */}
        <NavigationContainer
          // onStateChange={trackScreen}
          theme={theme}
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor={palette.common.black}
          />
          {/* <AppNavigator /> */}
        </NavigationContainer>
        {/* </PersistGate>
         </Provider> */}
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
