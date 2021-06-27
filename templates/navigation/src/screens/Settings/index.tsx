import * as React from 'react';

import { StyleSheet } from 'react-native';

import Button from '~/components/Button';
import Block from '~/components/Block';
import Typography from '~/components/Typography';
import palette from '~/styles/palette';
import { t } from '~/services/I18n';
import { RootStackParams } from '~/navigation/types';

type Props = RootStackParams<'Settings'>;

const SettingsScreen = ({ navigation }: Props) => {
  return (
    <Block style={styles.container}>
      <Typography>{t('screens.settings.title')}</Typography>

      <Button
        label={t('screens.settings.ctaText')}
        onPress={() => navigation.navigate('Home')}
      />
    </Block>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary.background,
  },
});
