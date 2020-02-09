import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import Main from './src/scenes/Main';
import RNDefault from './src/scenes/RNDefault';

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Main">
        {() => (
          <Stack.Navigator>
            <Stack.Screen component={Main} name="Main" />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen name="Default">
        {() => (
          <Stack.Navigator>
            <Stack.Screen component={RNDefault} name="Default" />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
