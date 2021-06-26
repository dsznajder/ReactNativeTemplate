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

type Props = StackScreenProps<RootStackParamList, 'Settings'>;

export default function SettingsScreen(props: Props) {
  const { navigation } = props;

  return (
    <Block style={styles.container}>
      <Typography>{`Settings Screen`}</Typography>

      <Button
        label="Go back to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </Block>
  );
}
