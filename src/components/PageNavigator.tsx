import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewThought from './molecules/NewThought';
import { HomeScreen } from './pages/Home';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const PageNavigator = () => (
  <Navigator screenOptions={{ header: undefined }}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="LogThought" component={NewThought} />
  </Navigator>
);

export default () => (
  <NavigationContainer independent>
    <PageNavigator />
  </NavigationContainer>
);
