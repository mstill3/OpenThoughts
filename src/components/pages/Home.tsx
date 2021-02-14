import React from 'react';
import { SafeAreaView } from 'react-native';
import { Icon, Layout, Button, useTheme } from '@ui-kitten/components';
import NewThought from '../molecules/NewThought';

const AddIcon = (props) => <Icon {...props} name="plus" />;

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button status="danger" accessoryLeft={AddIcon} />
        <NewThought />
        {/* <Button onPress={navigateDetails}>OPEN DETAILS</Button> */}
      </Layout>
    </SafeAreaView>
  );
};
