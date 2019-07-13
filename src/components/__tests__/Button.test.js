import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'

import Button from '../Button'

describe('<Button />', () => {
  const defaultProps = {
    onPress: jest.fn(),
  }

  test('render', () => {
    const wrapper = renderer.create(
      <Button {...defaultProps}>
        <Text>{'Button'}</Text>
      </Button>,
    )

    expect(wrapper).toMatchSnapshot()
  })
})
