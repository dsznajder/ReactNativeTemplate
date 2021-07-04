import * as React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
<% if (extraOptions.modules.navigation.variant === "stack") { %>
import { createStackNavigator } from '@react-navigation/stack';
<% } %>
<% if (extraOptions.modules.navigation.variant === "nativeStack") { %>
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
<% } %>
<% if (extraOptions.modules.navigation.variant === "bottomBar") { %>
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
<% } %>

import HomeScreen from '~/screens/Home';
import SettingsScreen from '~/screens/Settings';

import palette from '~/styles/palette';
import { RootStackParams } from '~/navigation/types';

<% if (extraOptions.modules.navigation.variant === "bottomBar") { %>
const Tab = createBottomTabNavigator<RootStackParams>();

function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
<% } else { %>
<% if (extraOptions.modules.navigation.variant === "stack") { %>
const Stack = createStackNavigator<RootStackParams>();
<% } %>
<% if (extraOptions.modules.navigation.variant === "nativeStack") { %>
enableScreens();
const Stack = createNativeStackNavigator<RootStackParams>();
<% } %>

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
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
