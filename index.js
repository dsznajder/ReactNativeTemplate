import 'react-native-gesture-handler';
// eslint-disable-next-line import/named
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
