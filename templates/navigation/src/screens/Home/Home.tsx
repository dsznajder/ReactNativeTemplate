import * as React from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '~/components/Button';
import Block from '~/components/Block';
import Typography from '~/components/Typography';

import palette from '~/styles/palette';
import { RootStackParamList } from '~/navigation/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary.background,
  },
});

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen(props: Props) {
  const { navigation } = props;

  return (
    <Block style={styles.container}>
      <Typography>{`DummyProject - Home Page`}</Typography>

      <Button
        label="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </Block>
  );
}
