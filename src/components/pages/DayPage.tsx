import React from 'react';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators/JournalNavigator';
import { Text } from 'react-native-svg';
import { View } from 'react-native';
import { BackIcon } from 'assets/icons';

interface Props {
  navigation: StackNavigationProp<JournalRoutesList, 'Journal'>;
}

export default ({ navigation }: Props) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Divider />
      <Layout style={style.centeredLayout}>
        <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
          Back
        </Button>
        <Text> Notes on this Day </Text>
      </Layout>
    </View>
  );
};
