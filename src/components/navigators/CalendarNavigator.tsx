import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarPage from '../pages/CalendarPage';
import DayPage from '../pages/DayPage';

export type CalendarRoutesList = {
  Calendar: JSX.Element;
  Day: JSX.Element;
};

const { Navigator, Screen } = createStackNavigator<CalendarRoutesList>();

export default () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Calendar" component={CalendarPage} />
      <Screen name="Day" component={DayPage} />
    </Navigator>
  </NavigationContainer>
);
