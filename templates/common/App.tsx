import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import Block from '~/components/Block';
import Typography from '~/components/Typography';
import palette from '~/styles/palette';

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.primary.background,
  },
});

const App = () => {
  return (
    <Block style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.common.black}
      />
      <Typography>{`<%- project.name %>`}</Typography>
    </Block>
  );
};

export default App;
