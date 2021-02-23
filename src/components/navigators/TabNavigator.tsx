import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from '../atoms/Bottom';
import { CardAccessoriesShowcase } from '../molecules/Cards';
import SettingsNavigator from './SettingsNavigator';
import JournalNavigator from './JournalNavigator';
import CalendarPage from '../pages/CalendarPage';

export type RootTabsList = {
  Journal: JSX.Element;
  Calendar: JSX.Element;
  Learn: JSX.Element;
  Settings: JSX.Element;
};

const { Navigator, Screen } = createBottomTabNavigator<RootTabsList>();

export default () => (
  <NavigationContainer>
    <Navigator tabBar={(props) => <Bottom {...props} />}>
      <Screen name="Journal" component={JournalNavigator} />
      <Screen name="Calendar" component={CalendarPage} />
      <Screen name="Learn" component={CardAccessoriesShowcase} />
      <Screen name="Settings" component={SettingsNavigator} />
    </Navigator>
  </NavigationContainer>
);
