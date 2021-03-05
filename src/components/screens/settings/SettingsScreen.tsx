import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsRoutesList } from '../../navigators';
import { AboutIcon, TrashIcon } from '../../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { clearLogsAction, setThemeAction } from '../../../redux/actions';
import { ConfirmAlert } from '../../views';
import { selectTheme } from '../../../redux/selectors';

type SettingsNavigation = StackNavigationProp<SettingsRoutesList, 'Settings'>;

export const SettingsScreen = () => {
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();
  const clearData = () => {
    ConfirmAlert('Are you sure?', 'This will remove all logs', () =>
      dispatch(clearLogsAction()),
    );
  };

  const navigation = useNavigation<SettingsNavigation>();
  const navigateAbout = () => navigation.navigate('About');

  const onLightModeChange = (isChecked: boolean) =>
    dispatch(setThemeAction(isChecked ? 'light' : 'dark'));

  return (
    <Layout style={style.flexed}>
      <Text style={style.padded}> Version 0.0.1 </Text>
      <Toggle
        style={style.padded}
        checked={theme === 'light'}
        onChange={onLightModeChange}>
        {theme === 'light' ? 'Light mode' : 'Dark mode'}
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
