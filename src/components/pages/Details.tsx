import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Calender from '../atoms/Calender';

export const DetailsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">DETAILS</Text>
    <Calender />
  </Layout>
);
