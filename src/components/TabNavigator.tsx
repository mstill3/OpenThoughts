import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from './atoms/Bottom';
// import { HomeScreen } from './pages/Home';
import PageNavigator from './PageNavigator';
import CalendarPage from './pages/CalendarPage';
import LearnPage from './pages/LearnPage';
import SettingsPage from './pages/SettingsPage';
// import NewThought from './molecules/NewThought';

export type RootTabsList = {
  Journal: undefined;
  Calendar: undefined;
  Learn: undefined;
  Settings: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootTabsList>();
// screenOptions={{ tabBarVisibilityAnimationConfig: { show:  , hide:  } }}>
const TabNavigator = () => (
  <Navigator tabBar={(props) => <Bottom {...props} />}>
    <Screen name="Journal" component={PageNavigator} />
    <Screen name="Calendar" component={CalendarPage} />
    <Screen name="Learn" component={LearnPage} />
    <Screen name="Settings" component={SettingsPage} />
  </Navigator>
);

export default () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
