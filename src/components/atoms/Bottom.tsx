import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;

export default ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={PersonIcon} />
    <BottomNavigationTab icon={BellIcon} />
    <BottomNavigationTab icon={SettingsIcon} />
  </BottomNavigation>
);
