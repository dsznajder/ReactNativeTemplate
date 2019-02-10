import PropTypes from 'prop-types'
import React from 'react'
import colorPackage from 'color'
import { BaseButton } from 'react-native-gesture-handler'
import { Platform, TouchableHighlight } from 'react-native'

import { fontColor } from 'src/styles/colors'

const ANDROID_VERSION_LOLLIPOP = 21
const isAndroid = Platform.OS === 'android'
const rippleSupported = isAndroid && Platform.Version >= ANDROID_VERSION_LOLLIPOP
const Touchable = rippleSupported ? BaseButton : TouchableHighlight

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any,
  }

  render() {
    const { style, color, disabled, onPress, children } = this.props
    const rippleColor = style && 'backgroundColor' in style && isAndroid ? fontColor : color

    const calculatedRippleColor = colorPackage(rippleColor || fontColor)
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
