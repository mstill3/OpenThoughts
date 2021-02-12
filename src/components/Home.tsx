import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, useTheme } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme['color-primary-default'] }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};
