// @flow

import * as React from 'react'
import colorPackage from 'color'
import { BaseButton } from 'react-native-gesture-handler'
import { Platform, StyleSheet, TouchableHighlight, ViewStyle } from 'react-native'

import { fontColor } from 'src/styles/colors'

const ANDROID_VERSION_LOLLIPOP = 21
const isAndroid = Platform.OS === 'android'
const rippleSupported = isAndroid && Platform.Version >= ANDROID_VERSION_LOLLIPOP
const Touchable = rippleSupported ? BaseButton : TouchableHighlight

type Props = {
  children: React.Node,
  color?: string,
  disabled?: boolean,
  onPress: T => void,
  style: StyleSheet.NamedStyles<ViewStyle>,
}

export default class Button extends React.Component<Props> {
  render() {
    const { style, color, disabled, onPress, children } = this.props
    const rippleColor: ?string = isAndroid && style?.backgroundColor ? fontColor : color

    const calculatedRippleColor: string = colorPackage(rippleColor || fontColor)
      .alpha(0.2)
      .rgb()
      .string()

    return (
      <Touchable
        activeOpacity={0.4}
        disabled={disabled}
        onPress={onPress}
        rippleColor={calculatedRippleColor}
        style={style}
        underlayColor={colorPackage(calculatedRippleColor)
          .fade(0.5)
          .rgb()
          .string()}
      >
        {children}
      </Touchable>
    )
  }
}
