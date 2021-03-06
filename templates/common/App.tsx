import React from 'react';

<% if (integrations.graphql) { %>
import { ApolloProvider } from '@apollo/client';
import GraphQLClient from '~/services/GraphQL';
<% } %>
<% if (integrations.redux) { %>
import { Provider } from 'react-redux';
import store from '~/store/index';
<% } %>

<% if (modules.navigation) { %>
import Navigation from '~/navigation'
<% } else { %>
import { StatusBar, StyleSheet } from 'react-native';

import Block from '~/components/Block';
import Typography from '~/components/Typography';
import palette from '~/styles/palette';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.primary.background,
  },
});
<% } %>

const App = () => {
  return (
    <% if (integrations.graphql) { %>
      <ApolloProvider client={GraphQLClient}>
    <% } %>
    <% if (integrations.redux) { %>
      <Provider store={store}>
    <% } %>
      <% if (modules.navigation) { %>
        <Navigation />
      <% } else { %>
        <Block flex={1} alignCenter justifyCenter style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={palette.common.black}
          />

          <Typography>{`<%- project.name %>`}</Typography>
        </Block>
      <% } %>
    <% if (integrations.redux) { %>
      </Provider>
    <% } %>
    <% if (integrations.graphql) { %>
      </ApolloProvider>
    <% } %>
  );
};

export default App;
