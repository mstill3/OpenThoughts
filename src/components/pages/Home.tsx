import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, useTheme } from '@ui-kitten/components';
import Bottom from '../atoms/Bottom';
import NewThought from '../molecules/NewThought';

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NewThought />
        {/* <Button onPress={navigateDetails}>OPEN DETAILS</Button> */}
      </Layout>
    </SafeAreaView>
  );
};
