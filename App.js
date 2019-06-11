import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens'

import Main from 'src/scenes/Main'
import RNDefault from 'src/scenes/RNDefault'
useScreens()

const Scenes = {
  RNDefault,
  Main,
}

const config = {}

const Navigator = createBottomTabNavigator(Scenes, config)

export default createAppContainer(Navigator)
