import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsRoutesList } from '../../navigators';
import { BackIcon } from '../../../../assets/icons';
import { useNavigation } from '@react-navigation/native';

type SettingsNavigation = StackNavigationProp<SettingsRoutesList, 'About'>;

export const AboutScreen = () => {
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
      <Layout>
        <Text style={style.veryPadded}>
          I wanted to create an app to help people cope with negative thoughts.
          I want to keep this passion project open source, completely free, and
          the data only saved locally - Matt Stillwell
        </Text>
        <Text style={style.verySidePadded}>
          If you like what I am doing feel free to contribute at
          https://github.com/mstill3/OpenThoughts
        </Text>
      </Layout>
    </Layout>
  );
};
