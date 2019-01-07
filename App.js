import { createAppContainer, createStackNavigator } from 'react-navigation'
import { useScreens } from 'react-native-screens'

import Main from 'src/scenes/Main'
useScreens()

const Scenes = {
  Main,
}

const config = {}

const Navigator = createStackNavigator(Scenes, config)

export default createAppContainer(Navigator)
