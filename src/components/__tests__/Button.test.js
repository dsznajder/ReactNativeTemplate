import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'

import Button from '../Button'

describe('<Button />', () => {
  const defaultProps = {
    onPress: jest.fn(),
  }
  const wrapper = renderer.create(
    <Button {...defaultProps}>
      <Text>Button</Text>
    </Button>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
