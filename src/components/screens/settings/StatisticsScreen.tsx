import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsRoutesList } from '../../navigators';
import { BackIcon } from '../../../../assets/icons';
import { useNavigation } from '@react-navigation/native';

type SettingsNavigation = StackNavigationProp<SettingsRoutesList, 'Statistics'>;

export const StatisticsScreen = () => {
  const navigation = useNavigation<SettingsNavigation>();
  const navigateBack = () => navigation.goBack();

  return (
    <Layout style={style.flexed}>
      <Button
        style={style.padded}
        status="info"
        accessoryLeft={BackIcon}
        onPress={navigateBack}>
        Back
      </Button>
      <Text style={style.padded}> Total number of logs: </Text>
    </Layout>
  );
};
