import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bottom } from '../views';
import { SettingsNavigator } from './SettingsNavigator';
import { JournalNavigator } from './JournalNavigator';
import { CalendarScreen, LearnScreen } from '../screens';

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
      <Screen name="Calendar" component={CalendarScreen} />
      <Screen name="Learn" component={LearnScreen} />
      <Screen name="Settings" component={SettingsNavigator} />
    </Navigator>
  </NavigationContainer>
);
