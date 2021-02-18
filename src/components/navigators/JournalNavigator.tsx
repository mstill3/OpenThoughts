import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewThought from '../pages/NewThoughtPage';
import { createStackNavigator } from '@react-navigation/stack';
import JournalPage from '../pages/JournalPage';

export type JournalRoutesList = {
  Journal: JSX.Element;
  LogThought: JSX.Element;
};

const { Navigator, Screen } = createStackNavigator<JournalRoutesList>();

export default () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Journal" component={JournalPage} />
      <Screen name="LogThought" component={NewThought} />
    </Navigator>
  </NavigationContainer>
);
