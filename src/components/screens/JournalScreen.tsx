import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators';
import { AddIcon } from '../../../assets/icons';
import { LogListView } from '../views';

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'Journal'>;

export const JournalScreen = () => {
  const navigation = useNavigation<JournalNavigation>();
  const navigateAddLog = () => navigation.navigate('AddLog');

  return (
    <View style={style.flexed}>
      <Divider />
      <Layout style={style.flexed}>
        <Button status="info" accessoryLeft={AddIcon} onPress={navigateAddLog}>
          Log
        </Button>
        <LogListView />
      </Layout>
    </View>
  );
};
