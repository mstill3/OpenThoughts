import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { AppNavigator } from './components/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './components/Navigation';
import { ThemeContext } from './theme-context';
import { StatusBar } from 'react-native';

export default () => {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme === 'dark' ? 'black' : 'white',
      }}>
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
