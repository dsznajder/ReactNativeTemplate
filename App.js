import { createStackNavigator } from 'react-navigation'

import Main from 'src/scenes/Main'

const Scenes = {
  Main,
}

const config = {}

export default createStackNavigator(Scenes, config)
