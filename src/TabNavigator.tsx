import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bottom } from './components/views';
import {
  CalendarNavigator,
  LearnNavigator,
  SettingsNavigator,
  JournalNavigator,
} from './components/navigators';

export type RootTabsList = {
  Journal: JSX.Element;
  Calendar: JSX.Element;
  Learn: JSX.Element;
  Settings: JSX.Element;
};

const { Navigator, Screen } = createBottomTabNavigator<RootTabsList>();

export const TabNavigator = () => (
  <NavigationContainer>
    <Navigator tabBar={(props) => <Bottom {...props} />}>
      <Screen name="Journal" component={JournalNavigator} />
      <Screen name="Calendar" component={CalendarNavigator} />
      <Screen name="Learn" component={LearnNavigator} />
      <Screen name="Settings" component={SettingsNavigator} />
    </Navigator>
  </NavigationContainer>
);
