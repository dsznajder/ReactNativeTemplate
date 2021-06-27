import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParams = {
  Home?: undefined;
  Screen?: undefined;
};

type RootStackKeys = keyof RootStackParams;

export type RootNavigationProp<S extends RootStackKeys> = StackNavigationProp<
  RootStackParams,
  S
>;

export type RootRouteProp<S extends RootStackKeys> = RouteProp<
  RootStackParams,
  S
>;

export type RootScreenProps<S extends RootStackKeys> = {
  route: RootRouteProp<S>;
  navigation: RootNavigationProp<S>;
};
