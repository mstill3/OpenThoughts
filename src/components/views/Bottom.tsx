import React, { useMemo } from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import * as evo from '../../../assets/designs/evo';
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
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';

type BottomNavigator = BottomTabBarProps<BottomTabBarOptions>;

export const Bottom = ({ navigation, state }: BottomNavigator) => {
  const theme = useSelector(selectTheme);
  const backColor = useMemo(
    () => (theme === 'dark' ? 'color-basic-900' : 'color-basic-300'),
    [theme],
  );

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      style={{ backgroundColor: evo[theme][backColor] }}>
      <BottomNavigationTab icon={JournalIcon} title="Journal" />
      <BottomNavigationTab icon={CalendarIcon} title="Calendar" />
      <BottomNavigationTab icon={BulbIcon} title="Learn" />
      <BottomNavigationTab icon={SettingsIcon} title="Settings" />
    </BottomNavigation>
  );
};
