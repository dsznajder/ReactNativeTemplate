import { Easing } from 'react-native-reanimated'

export const timingAnimationConfig = (duration, toValue) => ({
  duration,
  toValue,
  easing: Easing.inOut(Easing.ease),
})
