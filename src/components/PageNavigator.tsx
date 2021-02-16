import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewThought from './molecules/NewThought';
import { HomeScreen } from './pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { TopNavigation } from '@ui-kitten/components';

const { Navigator, Screen } = createStackNavigator();

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
