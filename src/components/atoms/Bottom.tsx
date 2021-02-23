import React, { useContext, useMemo } from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { ThemeContext } from '../../theme/theme-context';
import {
  BulbIcon,
  CalendarIcon,
  JournalIcon,
  SettingsIcon,
} from '../../../assets/icons';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

export default ({ navigation, state }: BottomTabBarProps<BottomTabBarOptions>) => {
  const { theme } = useContext(ThemeContext);
  const backColor = useMemo(
    () => (theme === 'dark' ? 'color-basic-900' : 'color-basic-300'),
    [theme],
  );

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      style={{ backgroundColor: eva[theme][backColor] }}>
      <BottomNavigationTab icon={JournalIcon} title="Journal" />
      <BottomNavigationTab icon={CalendarIcon} title="Calendar" />
      <BottomNavigationTab icon={BulbIcon} title="Learn" />
      <BottomNavigationTab icon={SettingsIcon} title="Settings" />
    </BottomNavigation>
  );
};
