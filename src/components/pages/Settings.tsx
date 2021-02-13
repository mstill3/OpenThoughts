import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, useTheme } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context';

export default ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => {
    setLightMode(isChecked);
    themeContext.toggleTheme()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Toggle 
          checked={lightMode} 
          onChange={onLightModeChange}
        >
          {lightMode ? 'Light' : 'Dark'} mode
        </Toggle>
      </Layout>
    </SafeAreaView>
  );
};
