import React from 'react';
import {
  StyleProp,
  // StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Typography, { TypographyType, TypographyVariant } from './Typography';

type Props = {
  onPress: () => void;
  label: string;
  labelVariant?: TypographyVariant;
  labelType?: TypographyType;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ onPress, label, labelType, labelVariant, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Typography variant={labelVariant} type={labelType}>
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

// const styles = StyleSheet.create({});
