// @flow

import * as React from 'react'
import Animated from 'react-native-reanimated'
import colorPackage from 'color'
import { StyleSheet, TextInput, View } from 'react-native'

import { black, darkRed, fontColor, primary, white } from 'src/styles/colors'
import { timingAnimationConfig } from 'src/helpers/animationConfigs'

const { timing, interpolate, Value } = Animated

type Props = {
  label: string,
  error?: string,
}

type State = {
  focused: boolean,
}

type RefObject<T> = {
  current: T,
}

export class Input extends React.PureComponent<Props, State> {
  state = {
    focused: false,
  }

  _focused = new Value(0)
  _error = new Value(0)
  _textInputRef: RefObject<TextInput> = React.createRef()

  componentDidUpdate = () => {
    const newErrorValue = Number(!!this.props.error)
    timing(this._error, timingAnimationConfig(150, newErrorValue)).start()
  }

  _handleFocus = () => {
    timing(this._focused, timingAnimationConfig(150, 1)).start()
    this.setState({ focused: true })
  }

  _handleBlur = () => {
    if (!this._textInputRef.current._lastNativeText) {
      timing(this._focused, timingAnimationConfig(150, 0)).start()
    }
    this.setState({ focused: false })
  }

  focus = () => this._textInputRef.current.focus()

  render() {
    const { label, error, ...restProps } = this.props
    const color: string = error
      ? darkRed
      : this.state.focused
      ? primary
      : colorPackage(fontColor)
          .darken(0.2)
          .rgb()
          .string()

    return (
      <View style={[styles.container, { borderColor: color }]}>
        <Animated.Text
          pointerEvents="none"
          style={[
            styles.label,
            {
              color,
              fontSize: interpolate(this._focused, {
                inputRange: [0, 1],
                outputRange: [16, 17],
              }),
              transform: [
                {
                  translateY: interpolate(this._focused, {
                    inputRange: [0, 1],
                    outputRange: [13, -12],
                  }),
                  translateX: interpolate(this._focused, {
                    inputRange: [0, 1],
                    outputRange: [14, 7],
                  }),
                },
              ],
            },
          ]}
        >
          {label}
        </Animated.Text>

        <Animated.Text
          pointerEvents="none"
          style={[
            styles.error,
            {
              color,
              opacity: interpolate(this._error, {
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: interpolate(this._error, {
                    inputRange: [0, 1],
                    outputRange: [40, 50],
                  }),
                  translateX: interpolate(this._error, {
                    inputRange: [0, 1],
                    outputRange: [10, 7],
                  }),
                },
              ],
            },
          ]}
        >
          {error}
        </Animated.Text>

        <TextInput
          onBlur={this._handleBlur}
          onFocus={this._handleFocus}
          ref={this._textInputRef}
          style={styles.input}
          {...restProps}
        />
      </View>
    )
  }
}

export default Input

const styles: StyleSheet.Styles = StyleSheet.create({
  container: {
    borderColor: black,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth * 2,
    marginBottom: 20,
    marginTop: 10,
    width: '95%',
  },
  error: {
    position: 'absolute',
  },
  input: {
    height: 48,
    paddingHorizontal: 12,
    width: '100%',
    zIndex: 1,
  },
  label: {
    backgroundColor: white,
    position: 'absolute',
  },
})
