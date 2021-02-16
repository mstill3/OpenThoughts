import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewThought from './molecules/NewThought';
import { HomeScreen } from './pages/Home';
import { createStackNavigator } from '@react-navigation/stack';

export type RootPagesList = {
  Home: undefined;
  LogThought: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootPagesList>();

const PageNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="LogThought" component={NewThought} />
  </Navigator>
);

export default () => (
  <NavigationContainer independent>
    <PageNavigator />
  </NavigationContainer>
);
