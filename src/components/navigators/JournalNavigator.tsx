import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JournalScreen, AddLogScreen, EditLogScreen } from '../screens';
import { Log } from '../../models';

export type JournalRoutesList = {
  Journal: JSX.Element;
  AddLog: JSX.Element;
  EditLog: { log: Log };
};

const { Navigator, Screen } = createStackNavigator<JournalRoutesList>();

export const JournalNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Journal" component={JournalScreen} />
      <Screen name="AddLog" component={AddLogScreen} />
      <Screen name="EditLog" component={EditLogScreen} />
    </Navigator>
  </NavigationContainer>
);
