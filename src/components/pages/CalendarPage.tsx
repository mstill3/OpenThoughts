import React from 'react';
import { Layout } from '@ui-kitten/components';
import Calender from '../atoms/Calender';
import style from '../../../styles/style';

export default () => (
  <Layout style={style.centeredLayout}>
    <Calender />
  </Layout>
);
