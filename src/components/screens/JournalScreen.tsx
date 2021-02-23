import React from 'react';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators';
import { AddIcon } from '../../../assets/icons';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type JournalNavigator = StackNavigationProp<JournalRoutesList, 'Journal'>;

export const JournalScreen = () => {
  const navigation = useNavigation<JournalNavigator>();
  const navigateNewThought = () => {
    navigation.navigate('LogThought');
  };

  return (
    <View style={{ flex: 1 }}>
      <Divider />
      <Layout style={style.centeredLayout}>
        <Button
          status="danger"
          accessoryLeft={AddIcon}
          onPress={navigateNewThought}>
          Log
        </Button>
      </Layout>
    </View>
  );
};
