import { Easing } from 'react-native-reanimated'

type TimingAnimationConfig = {
  duration: number,
  toValue: number,
  easing: Function,
}

export const timingAnimationConfig = (
  duration: number,
  toValue: number,
): TimingAnimationConfig => ({
  duration,
  toValue,
  easing: Easing.inOut(Easing.ease),
})
