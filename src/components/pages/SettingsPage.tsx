import React, { useContext, useState } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context';
import style from '../../../styles/style';

export default () => {
  const themeContext = useContext(ThemeContext);

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => {
    setLightMode(isChecked);
    themeContext.toggleTheme();
  };

  return (
    <Layout style={style.centeredLayout}>
      <Text> Version 0.0.1 </Text>
      <Toggle checked={lightMode} onChange={onLightModeChange}>
        {lightMode ? 'Light' : 'Dark'} mode
      </Toggle>
    </Layout>
  );
};
