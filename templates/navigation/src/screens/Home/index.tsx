import * as React from 'react';

import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '~/components/Button';
import Block from '~/components/Block';
import Typography from '~/components/Typography';
import palette from '~/styles/palette';
import { RootStackParamList } from '~/navigation/index';
import { t } from '~/services/I18n';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Block style={styles.container}>
      <Typography>{t('screens.home.title')}</Typography>

      <Button
        label={t('screens.home.ctaText')}
        onPress={() => navigation.navigate('Settings')}
      />
    </Block>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary.background,
  },
});
