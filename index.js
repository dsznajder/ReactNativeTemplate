import { AppRegistry } from 'react-native'

import App from './App'
import { name as appName } from './app.json'

if (__DEV__) {
  /* eslint-disable */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest
  /* eslint-enable */
}

AppRegistry.registerComponent(appName, () => App)
