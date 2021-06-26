import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';
import SettingsScreen from '~/screens/Settings';

import palette from '~/styles/palette';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const screenOptions = {
  headerShown: false,
};

<% if (modules.navigation) { %>
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
<% } else { %>
// Configure bottom tab navigator
  
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
<% } %>

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.common.black}
      />

      <RootNavigator />
    </NavigationContainer>
  );
}
