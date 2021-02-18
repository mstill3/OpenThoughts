import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsPage from '../pages/SettingsPage';
import AboutPage from '../pages/AboutPage';

export type SettingsRoutesList = {
  Settings: JSX.Element;
  About: JSX.Element;
};

const { Navigator, Screen } = createStackNavigator<SettingsRoutesList>();

export default () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Settings" component={SettingsPage} />
      <Screen name="About" component={AboutPage} />
    </Navigator>
  </NavigationContainer>
);
