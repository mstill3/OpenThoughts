import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';

export type SettingsRoutesList = {
  Main: undefined;
  About: undefined;
};

const { Navigator, Screen } = createStackNavigator<SettingsRoutesList>();

const PageNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Main" component={SettingsPage} />
    <Screen name="About" component={AboutPage} />
  </Navigator>
);

export default () => (
  <NavigationContainer independent>
    <PageNavigator />
  </NavigationContainer>
);
