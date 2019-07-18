// @flow

import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { primary } from 'src/styles/colors'

export default class App extends Component {
  state = {}

  _handleButtonPress = () => {
    this.setState(prevState => ({ error: prevState.error ? '' : 'This is errorMessage' }))
  }

  _handleChangeText = key => value => this.setState({ [key]: value })

  render() {
    const { error, first, second } = this.state

    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <Input label="Text" onChangeText={this._handleChangeText('first')} value={first} />
          <Input
            error={error}
            label="Text with possible error"
            onChangeText={this._handleChangeText('second')}
            value={second}
          />

          <Button color={primary} onPress={this._handleButtonPress} style={styles.button}>
            <Text>{'Make Error'}</Text>
          </Button>

          <Text style={styles.placeholder}>{'Test'}</Text>
          <Text style={styles.placeholder}>{'Test'}</Text>
          <Text style={styles.placeholder}>{'Test'}</Text>
          <Text style={styles.placeholder}>{'Test'}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    borderRadius: 30,
    padding: 15,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    height: 100,
  },
})
