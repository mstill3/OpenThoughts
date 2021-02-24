import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators';
import { AddIcon } from '../../../assets/icons';
import { selectLogs } from '../../redux/selectors';
import { LogView } from '../views';

type JournalNavigator = StackNavigationProp<JournalRoutesList, 'Journal'>;

export const JournalScreen = () => {
  const navigation = useNavigation<JournalNavigator>();
  const navigateNewThought = () => navigation.navigate('LogThought');
  const logs = useSelector(selectLogs);

  return (
    <View style={style.flexed}>
      <Divider />
      <Layout style={style.centeredLayout}>
        <Button
          status="danger"
          accessoryLeft={AddIcon}
          onPress={navigateNewThought}>
          Log
        </Button>
        {logs.map((log) => (
          <LogView key={log.getId()} log={log} />
        ))}
      </Layout>
    </View>
  );
};
