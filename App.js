import { createAppContainer, createStackNavigator } from 'react-navigation'
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens'

import Main from 'src/scenes/Main'
useScreens()

const Scenes = {
  Main,
}

const config = {}

const Navigator = createStackNavigator(Scenes, config)

export default createAppContainer(Navigator)
