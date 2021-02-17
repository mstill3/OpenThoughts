import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Calender from '../atoms/Calender';
import style from '../../../styles/style';

export default () => (
  <Layout style={style.centeredLayout}>
    <Text> hello world </Text>
    <Calender />
  </Layout>
);
