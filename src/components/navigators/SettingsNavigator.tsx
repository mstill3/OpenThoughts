import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen, AboutScreen, StatisticsScreen } from '../screens';

export type SettingsRoutesList = {
  Settings: JSX.Element;
  About: JSX.Element;
  Statistics: JSX.Element;
};

const { Navigator, Screen } = createStackNavigator<SettingsRoutesList>();

export const SettingsNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="About" component={AboutScreen} />
      <Screen name="Statistics" component={StatisticsScreen} />
    </Navigator>
  </NavigationContainer>
);
