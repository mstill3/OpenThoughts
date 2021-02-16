import React from 'react';
import { Icon, Layout, Button } from '@ui-kitten/components';
import style from '../../../styles/style';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootPagesList } from '../PageNavigator';

const AddIcon = (props) => <Icon {...props} name="plus" />;

interface Props {
  navigation: BottomTabNavigationProp<RootPagesList, 'Home'>;
}

export const HomeScreen = ({ navigation }: Props) => {
  const navigateNewThought = () => {
    navigation.navigate('LogThought');
  };

  return (
    <Layout style={style.centeredLayout}>
      <Button
        status="danger"
        accessoryLeft={AddIcon}
        onPress={navigateNewThought}>
        Log
      </Button>
    </Layout>
  );
};
