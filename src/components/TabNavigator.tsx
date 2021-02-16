import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from './atoms/Bottom';
// import { HomeScreen } from './pages/Home';
import { CardAccessoriesShowcase } from './molecules/Cards';
import SettingsNavigator from './navigators/SettingsNavigator';
import JournalNavigator from './navigators/JournalNavigator';
import CalendarPage from './pages/CalendarPage';
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
    <Screen name="Journal" component={JournalNavigator} />
    <Screen name="Calendar" component={CalendarPage} />
    <Screen name="Learn" component={CardAccessoriesShowcase} />
    <Screen name="Settings" component={SettingsNavigator} />
  </Navigator>
);

export default () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
