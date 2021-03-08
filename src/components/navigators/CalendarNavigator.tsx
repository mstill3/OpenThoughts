import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DayScreen, EditLogScreen } from '../screens';
import { Log } from '../../models';
import { AgendaScreen } from '../screens/calendar/MyAgenda';

export type CalendarRoutesList = {
  Calendar: JSX.Element;
  Day: { day: number };
  EditLog: { log: Log };
};

const { Navigator, Screen } = createStackNavigator<CalendarRoutesList>();

export const CalendarNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Calendar" component={AgendaScreen} />
      <Screen name="Day" component={DayScreen} />
      <Screen name="EditLog" component={EditLogScreen} />
    </Navigator>
  </NavigationContainer>
);
