import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarScreen, DayScreen } from '../screens';

export type CalendarRoutesList = {
  Calendar: JSX.Element;
  Day: { day: Date };
};

const { Navigator, Screen } = createStackNavigator<CalendarRoutesList>();

export const CalendarNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Calendar" component={CalendarScreen} />
      <Screen name="Day" component={DayScreen} />
    </Navigator>
  </NavigationContainer>
);
