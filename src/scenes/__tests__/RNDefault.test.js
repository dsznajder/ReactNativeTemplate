import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import RNDefault from '../RNDefault';

describe('<RNDefault />', () => {
  const defaultProps = {};
  const wrapper = renderer.create(<RNDefault {...defaultProps} />);

  test('render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
