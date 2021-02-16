import React, { useContext, useState } from 'react';
import { Layout, List, ListItem, Text } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context';

export default () => {
  const themeContext = useContext(ThemeContext);

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => {
    setLightMode(isChecked);
    themeContext.toggleTheme();
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Version 0.0.1 </Text>
      <Toggle checked={lightMode} onChange={onLightModeChange}>
        {lightMode ? 'Light' : 'Dark'} mode
      </Toggle>
    </Layout>
  );
};
