import React, { useContext, useMemo } from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { ThemeContext } from '../../theme-context';

const JournalIcon = (props) => <Icon {...props} name="book-open-outline" />;
const CalendarIcon = (props) => <Icon {...props} name="calendar-outline" />;
const BulbIcon = (props) => <Icon {...props} name="bulb-outline" />;
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
      <BottomNavigationTab icon={JournalIcon} title="Journal" />
      <BottomNavigationTab icon={CalendarIcon} title="Calendar" />
      <BottomNavigationTab icon={BulbIcon} title="Learn" />
      <BottomNavigationTab icon={SettingsIcon} title="Settings" />
    </BottomNavigation>
  );
};
