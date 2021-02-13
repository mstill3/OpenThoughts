import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Divider,
  Layout,
  Text,
} from '@ui-kitten/components';
import Calender from '../atoms/Calender';

export const DetailsScreen = () => (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">DETAILS</Text>
        <Calender />
      </Layout>
    </SafeAreaView>
);
