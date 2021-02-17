import React from 'react';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators/JournalNavigator';
import { Text } from 'react-native-svg';
import { AddIcon } from '../../../assets/icons';
import { SafeAreaView, View } from 'react-native';
import { Toolbar } from '../atoms/Toolbar';

interface Props {
  navigation: StackNavigationProp<JournalRoutesList, 'Main'>;
}

export default ({ navigation }: Props) => {
  const navigateNewThought = () => {
    navigation.navigate('LogThought');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Toolbar title="Material App" onBackPress={() => navigation.goBack()} /> */}
      <Divider />
      <Layout style={style.centeredLayout}>
        <Text> hello world </Text>
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
