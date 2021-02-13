import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default () => (
  <SafeAreaView
  style={{ flex: 1, backgroundColor: 'black' }}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator />
    </ApplicationProvider>
  </SafeAreaView>
);
