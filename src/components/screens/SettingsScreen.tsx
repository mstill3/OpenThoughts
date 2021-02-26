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
import { ConfirmAlert } from '../views/ConfirmAlert';

type SettingsNavigation = StackNavigationProp<SettingsRoutesList, 'Settings'>;

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const clearData = () => {
    ConfirmAlert('Are you sure?', 'This will remove all logs', () =>
      dispatch(clearLogsAction()),
    );
  };

  const navigation = useNavigation<SettingsNavigation>();
  const navigateAbout = () => navigation.navigate('About');

  const themeContext = useContext(ThemeContext);

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => {
    setLightMode(isChecked);
    themeContext.toggleTheme();
  };

  return (
    <Layout style={style.centeredLayout}>
      <Text style={style.padded}> Version 0.0.1 </Text>
      <Toggle
        style={style.padded}
        checked={lightMode}
        onChange={onLightModeChange}>
        {lightMode ? 'Light mode' : 'Dark mode'}
      </Toggle>
      <Button
        style={style.padded}
        status="info"
        accessoryLeft={AboutIcon}
        onPress={navigateAbout}>
        About
      </Button>
      <Button
        style={style.padded}
        status="danger"
        accessoryLeft={TrashIcon}
        onPress={clearData}>
        Clear Data
      </Button>
    </Layout>
  );
};
