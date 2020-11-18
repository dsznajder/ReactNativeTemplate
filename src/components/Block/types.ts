import { StyleProp, ViewStyle } from 'react-native';

export type ComputedProps = {
  // multiplied by 8
  borderRadius?: number;
  margin?: number;
  marginBottom?: number;
  marginEnd?: number;
  marginHorizontal?: number;
  marginLeft?: number;
  marginRight?: number;
  marginStart?: number;
  marginTop?: number;
  marginVertical?: number;
  padding?: number;
  paddingBottom?: number;
  paddingEnd?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingStart?: number;
  paddingTop?: number;
  paddingVertical?: number;

  flex?: number;
};

export type BlockProps = ComputedProps & {
  children?: ToDo;

  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  justifySpace?: boolean;
  style?: StyleProp<ViewStyle>;
};
