import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';

import spacing from '~/styles/spacing';

import { BlockProps, ComputedProps } from './types';

const flexProps = ['flex'] as const;

const Block = ({
  children,
  row,
  justifyCenter,
  alignCenter,
  justifySpace,
  style,
  ...restProps
}: BlockProps) => {
  const styles = useMemo(() => {
    const styleKeys = Object.keys(restProps) as Array<ComputedProps>;

    const computedStyles = styleKeys.reduce((acc, key) => {
      // @ts-expect-error
      const value = restProps[key] as number;

      if (!flexProps.includes(key as 'flex')) {
        // @ts-expect-error
        acc[key] = value * spacing.unit;
      } else {
        // @ts-expect-error
        acc[key] = value;
      }

      return acc;
    }, {} as ViewStyle);

    return {
      ...computedStyles,
      ...(alignCenter && { alignItems: 'center' }),
      ...(justifySpace && { justifyContent: 'space-between' }),
      ...(justifyCenter && { justifyContent: 'center' }),
      ...(row && { flexDirection: 'row' }),
    };
  }, [alignCenter, justifyCenter, justifySpace, restProps, row]);

  return (
    <View
      // @ts-expect-error
      style={[styles, style]}
    >
      {children}
    </View>
  );
};

export default React.memo(Block);
