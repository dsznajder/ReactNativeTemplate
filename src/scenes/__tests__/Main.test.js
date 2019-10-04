import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../Main';

describe('<Main />', () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Main {...defaultProps} />);

  test('render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
