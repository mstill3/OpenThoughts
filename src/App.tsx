import React, { useEffect, useMemo, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigator } from './components/navigators';
import { AppTheme, ThemeContext } from './theme/theme-context';
import { StatusBar } from 'react-native';
import { initFonts } from '../assets/fonts';
import { Provider as StateProvider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingScreen } from './components/screens';

export default () => {
  const [theme, setTheme] = useState<AppTheme>(AppTheme.dark);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const toggleTheme = () =>
    setTheme(theme === AppTheme.light ? AppTheme.dark : AppTheme.light);
  const backColor = useMemo(
    () => (theme === 'dark' ? 'color-basic-900' : 'color-basic-300'),
    [theme],
  );

  useEffect(() => {
    const loadFonts = async () => {
      await initFonts();
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  return (
    <ApplicationProvider {...eva} theme={eva[theme]}>
      {fontsLoaded ? (
        <StateProvider store={store}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <SafeAreaView
              style={{ flex: 1, backgroundColor: eva[theme][backColor] }}>
              <StatusBar
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
              />
              <IconRegistry icons={EvaIconsPack} />
              <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <TabNavigator />
              </ThemeContext.Provider>
            </SafeAreaView>
          </PersistGate>
        </StateProvider>
      ) : (
        <LoadingScreen />
      )}
    </ApplicationProvider>
  );
};
