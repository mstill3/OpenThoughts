import React, { useEffect, useMemo, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigator } from './src/components/navigators';
import { StatusBar } from 'react-native';
import { initFonts } from './assets/fonts';
import { useSelector } from 'react-redux';
import { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingScreen } from './src/components/screens';
import {
  EvaIconsPack,
  MaterialIconsPack,
  FeatherIconsPack,
} from './assets/icons';
import { selectTheme } from './src/redux/selectors';
import { Provider as StateProvider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const theme = useSelector(selectTheme);
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
      <IconRegistry
        icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack]}
      />
      {fontsLoaded ? (
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: eva[theme][backColor] }}>
            <StatusBar
              barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <TabNavigator />
          </SafeAreaView>
        </PersistGate>
      ) : (
        <LoadingScreen />
      )}
    </ApplicationProvider>
  );
};

export default () => (
  <SafeAreaProvider>
    <StateProvider store={store}>
      <App />
    </StateProvider>
  </SafeAreaProvider>
);
