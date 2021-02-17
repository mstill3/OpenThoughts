import React, { useEffect, useMemo, useState } from 'react';
import * as eva from '@eva-design/eva';
// import * as material from '@eva-design/material';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './components/TabNavigator';
import { AppTheme, ThemeContext } from './theme/theme-context';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';

export default () => {
  const [theme, setTheme] = useState<AppTheme>(AppTheme.dark);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const toggleTheme = () => setTheme(theme === AppTheme.light ? AppTheme.dark : AppTheme.light);
  const backColor = useMemo(
    () => (theme === 'dark' ? 'color-basic-900' : 'color-basic-100'),
    [theme],
  );

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'ArchitectsDaughter-Regular': require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  return (
    fontsLoaded && (
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
    )
  );
};
