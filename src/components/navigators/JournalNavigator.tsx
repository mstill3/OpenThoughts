import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JournalScreen, NewThoughtScreen } from '../screens';

export type JournalRoutesList = {
  Journal: JSX.Element;
  LogThought: JSX.Element;
};

const { Navigator, Screen } = createStackNavigator<JournalRoutesList>();

export const JournalNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Journal" component={JournalScreen} />
      <Screen name="LogThought" component={NewThoughtScreen} />
    </Navigator>
  </NavigationContainer>
);
