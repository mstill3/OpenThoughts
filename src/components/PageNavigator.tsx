import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewThought from './molecules/NewThought';
import { createStackNavigator } from '@react-navigation/stack';
import JournalPage from './pages/JournalPage';

export type RootPagesList = {
  Home: undefined;
  LogThought: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootPagesList>();

const PageNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={JournalPage} />
    <Screen name="LogThought" component={NewThought} />
  </Navigator>
);

export default () => (
  <NavigationContainer independent>
    <PageNavigator />
  </NavigationContainer>
);
