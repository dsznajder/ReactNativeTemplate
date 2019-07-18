// @flow

import { Easing } from 'react-native-reanimated'

type TimingAnimationConfig = {
  duration: number,
  easing: Easing,
  toValue: number,
}

export const timingAnimationConfig = (
  duration: number,
  toValue: number,
): TimingAnimationConfig => ({
  duration,
  toValue,
  easing: Easing.inOut(Easing.ease),
})
