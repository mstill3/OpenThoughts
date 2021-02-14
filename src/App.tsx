import React, { useMemo, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { AppNavigator } from './components/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './components/Navigation';
import { ThemeContext } from './theme-context';
import { StatusBar } from 'react-native';

export default () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const backColor = useMemo(
    () =>
      theme === 'dark' ? 'color-basic-700' : 'color-basic-transparent-200',
    [theme],
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: eva[theme][backColor] }}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};
