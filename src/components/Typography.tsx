import React from 'react';
import { Text, TextProps } from 'react-native';

type TypographyChild = string | number | boolean | undefined | null;

type Props = TextProps & {
  children: Array<TypographyChild> | TypographyChild;
};

const Typography = ({ children, ...textProps }: Props) => {
  return (
    <Text
      accessibilityLabel={`${children}`}
      accessibilityRole="text"
      accessible
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default Typography;
