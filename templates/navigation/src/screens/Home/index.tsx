import * as React from 'react';

import { StyleSheet } from 'react-native';

import Button from '~/components/Button';
import Block from '~/components/Block';
import Typography from '~/components/Typography';
import palette from '~/styles/palette';
import { t } from '~/services/I18n';
import { RootStackParams } from '~/navigation/types';

type Props = RootStackParams<'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Block flex={1} alignCenter justifyCenter style={styles.container}>
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
    backgroundColor: palette.primary.background,
  },
});
