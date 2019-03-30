import { timingAnimationConfig } from '../animationConfigs'

describe('timingAnimationConfig', () => {
  describe('when called without attributes', () => {
    test('should return object with easing function', () => {
      const config = timingAnimationConfig()
      expect(config).toEqual(
        expect.objectContaining({
          duration: undefined,
          toValue: undefined,
        }),
      )

      expect(config.easing).toBeTruthy()
    })
  })

  describe('when called with 2 attributes', () => {
    test('should return object with duration, toValue and easing function', () => {
      const config = timingAnimationConfig(100, 5)
      expect(config).toEqual(
        expect.objectContaining({
          duration: 100,
          toValue: 5,
        }),
      )

      expect(config.easing).toBeTruthy()
    })
  })
})
