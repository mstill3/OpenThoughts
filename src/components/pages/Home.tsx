import React from 'react';
import { Icon, Layout, Button } from '@ui-kitten/components';

const AddIcon = (props) => <Icon {...props} name="plus" />;

export const HomeScreen = ({ navigation }) => {
  const navigateNewThought = () => {
    navigation.navigate('LogThought');
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        status="danger"
        accessoryLeft={AddIcon}
        onPress={navigateNewThought}
      />
      {/* <Button onPress={navigateDetails}>OPEN DETAILS</Button> */}
    </Layout>
  );
};
