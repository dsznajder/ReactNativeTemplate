import KeyboardManager from 'react-native-keyboard-manager';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, unstable_enableLogBox } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';

import Main from './src/scenes/Main';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setKeyboardDistanceFromTextField(30);
  KeyboardManager.setPreventShowingBottomBlankSpace(true);
}

if (__DEV__) {
  console.disableYellowBox = true;
  unstable_enableLogBox();
}

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
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
