import React from 'react';
import { Layout, Button } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators/JournalNavigator';
import { Text } from 'react-native-svg';
import { AddIcon } from '../../../assets/icons';

interface Props {
  navigation: StackNavigationProp<JournalRoutesList, 'Main'>;
}

export default ({ navigation }: Props) => {
  const navigateNewThought = () => {
    navigation.navigate('LogThought');
  };

  return (
    <Layout style={style.centeredLayout}>
      <Text> hello world </Text>
      <Button
        status="danger"
        accessoryLeft={AddIcon}
        onPress={navigateNewThought}>
        Log
      </Button>
    </Layout>
  );
};
