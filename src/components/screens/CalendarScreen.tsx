import React from 'react';
import { Layout } from '@ui-kitten/components';
import { MyCalendar } from '../views';
import style from '../../styles/style';

export const CalendarScreen = () => (
  <Layout style={style.centeredLayout}>
    <MyCalendar />
  </Layout>
);
