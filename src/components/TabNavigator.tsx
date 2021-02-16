import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from './atoms/Bottom';
// import { HomeScreen } from './pages/Home';
import { DetailsScreen } from './pages/Details';
import Settings from './pages/Settings';
import PageNavigator from './PageNavigator';
// import NewThought from './molecules/NewThought';

export type RootTabsList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootTabsList>();
// screenOptions={{ tabBarVisibilityAnimationConfig: { show:  , hide:  } }}>
const TabNavigator = () => (
  <Navigator tabBar={(props) => <Bottom {...props} />}>
    <Screen name="Home" component={PageNavigator} />
    {/* <Screen name="LogThought" component={NewThought} /> */}
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="Settings" component={Settings} />
  </Navigator>
);

export default () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
