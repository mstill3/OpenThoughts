import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewThought from '../pages/NewThoughtPage';
import { createStackNavigator } from '@react-navigation/stack';
import JournalPage from '../pages/JournalPage';

export type JournalRoutesList = {
  Main: undefined;
  LogThought: undefined;
};

const { Navigator, Screen } = createStackNavigator<JournalRoutesList>();

export default () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Main" component={JournalPage} />
      <Screen name="LogThought" component={NewThought} />
    </Navigator>
  </NavigationContainer>
);
