import React from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsRoutesList } from '../navigators/SettingsNavigator';

const BackIcon = (props) => <Icon {...props} name="arrow-back-outline" />;

interface Props {
  navigation: StackNavigationProp<SettingsRoutesList, 'About'>;
}

export default ({ navigation }: Props) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Layout style={style.centeredLayout}>
      <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
        Back
      </Button>
      <Text> Version 0.0.1 </Text>
    </Layout>
  );
};
