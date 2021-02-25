import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JournalScreen, AddLogScreen, ViewLogScreen } from '../screens';

export type JournalRoutesList = {
  Journal: JSX.Element;
  AddLog: JSX.Element;
  ViewLog: JSX.Element;
};

const { Navigator, Screen } = createStackNavigator<JournalRoutesList>();

export const JournalNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Journal" component={JournalScreen} />
      <Screen name="AddLog" component={AddLogScreen} />
      <Screen name="ViewLog" component={ViewLogScreen} />
    </Navigator>
  </NavigationContainer>
);
