import React, { useContext, useMemo } from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { ThemeContext } from '../../theme-context';

const JournalIcon = (props) => <Icon {...props} name="home-outline" />;
const CalendarIcon = (props) => <Icon {...props} name="calendar-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;

export default ({ navigation, state }) => {
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
      <BottomNavigationTab icon={JournalIcon} />
      <BottomNavigationTab icon={CalendarIcon} />
      <BottomNavigationTab icon={SettingsIcon} />
    </BottomNavigation>
  );
};
