import React, { useEffect, useMemo, useState } from 'react';
import * as evo from '../assets/designs/evo';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigator } from './TabNavigator';
import { StatusBar } from 'react-native';
import { initFonts } from '../assets/fonts';
import { useSelector } from 'react-redux';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingScreen } from './components/screens';
import {
  EvaIconsPack,
  MaterialIconsPack,
  FeatherIconsPack,
} from '../assets/icons';
import { selectTheme } from './redux/selectors';
import { Provider as StateProvider } from 'react-redux';
import store from './redux/store';

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
    <ApplicationProvider {...evo} theme={evo[theme]}>
      <IconRegistry
        icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack]}
      />
      {fontsLoaded ? (
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: evo[theme][backColor] }}>
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
