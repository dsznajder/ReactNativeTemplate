import React from 'react';
import { Text, TextStyle } from 'react-native';

import palette from '~/styles/palette';

type Props = {
  children: ToDo;
  variant?: TypographyVariant;
  type?: TypographyType;
  style?: TextStyle;
};

const types = {
  primary: { color: palette.text.primary },
  secondary: { color: palette.text.secondary },
  tertiary: { color: palette.common.black },
};

export const typography = {
  body: { fontSize: 16 },
  h4: { fontSize: 28, lineHeight: 32 },
  h3: { fontSize: 28, lineHeight: 32, fontWeight: '700' },
  label: { fontSize: 13 },
};

export type TypographyType = keyof typeof types;
export type TypographyVariant = keyof typeof typography;

const Typography = ({
  children,
  type = 'primary',
  variant = 'body',
  style,
}: Props) => {
  return (
    <Text style={[types[type], typography[variant], style]}>{children}</Text>
  );
};

export default React.memo(Typography);
