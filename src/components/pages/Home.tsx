import React from 'react';
import { Icon, Layout, Button } from '@ui-kitten/components';
import style from '../../../styles/style';

const AddIcon = (props) => <Icon {...props} name="plus" />;

export const HomeScreen = ({ navigation }) => {
  const navigateNewThought = () => {
    navigation.navigate('LogThought');
  };

  return (
    <Layout style={style.centeredLayout}>
      <Button
        status="danger"
        accessoryLeft={AddIcon}
        onPress={navigateNewThought}
      />
    </Layout>
  );
};
