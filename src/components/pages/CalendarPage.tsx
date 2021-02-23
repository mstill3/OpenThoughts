import React from 'react';
import { Layout } from '@ui-kitten/components';
import Calendar from '../atoms/MyCalendar';
import style from '../../styles/style';

export default () => (
  <Layout style={style.centeredLayout}>
    <Calendar />
  </Layout>
);
