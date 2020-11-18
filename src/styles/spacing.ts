import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const spacing = {
  deviceHeight: height,
  deviceWidth: width,

  unit: 8,
};

export default spacing;
