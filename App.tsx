import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useScreens } from 'react-native-screens';

import Main from './src/scenes/Main';
import RNDefault from './src/scenes/RNDefault';

// eslint-disable-next-line react-hooks/rules-of-hooks
useScreens();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => (
  <NavigationNativeContainer>
    <Tab.Navigator>
      <Tab.Screen name="Main">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen name="Default">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Default" component={RNDefault} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationNativeContainer>
);

export default App;
