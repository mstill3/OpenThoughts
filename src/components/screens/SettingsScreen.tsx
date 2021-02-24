import React, { useContext, useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';
import { ThemeContext } from '../../theme/theme-context';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsRoutesList } from '../navigators';
import { AboutIcon, TrashIcon } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearLogsAction } from '../../redux/actions';

type SettingsNavigator = StackNavigationProp<SettingsRoutesList, 'Settings'>;

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const clearData = () => dispatch(clearLogsAction());

  const navigation = useNavigation<SettingsNavigator>();
  const navigateAbout = () => navigation.navigate('About');

  const themeContext = useContext(ThemeContext);

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => {
    setLightMode(isChecked);
    themeContext.toggleTheme();
  };

  return (
    <Layout style={style.centeredLayout}>
      <Text> Version 0.0.1 </Text>
      <Button status="info" accessoryLeft={AboutIcon} onPress={navigateAbout}>
        About
      </Button>
      <Toggle checked={lightMode} onChange={onLightModeChange}>
        {lightMode ? 'Light mode' : 'Dark mode'}
      </Toggle>
      <Button status="danger" accessoryLeft={TrashIcon} onPress={clearData}>
        Clear Data
      </Button>
    </Layout>
  );
};
