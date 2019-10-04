import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
// @ts-ignore
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);
AppRegistry.registerComponent(appName, () => App);
