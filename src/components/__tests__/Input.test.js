import React from 'react'
import renderer from 'react-test-renderer'

import Input from '../Input'

describe('<Input />', () => {
  const defaultProps = {
    label: 'Input label',
  }

  const wrapper = renderer.create(<Input {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
