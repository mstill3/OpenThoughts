import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import NewThought from '../molecules/NewThought';
import { Text } from 'react-native-svg';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NewThought />
        <Text> hi </Text>
      </Layout>
    </SafeAreaView>
  );
};
