import React from 'react';
import { Layout } from '@ui-kitten/components';
import { CalendarView } from './CalendarView';
import style from '../../../styles/style';

export const CalendarScreen = () => (
  <Layout style={style.flexedMiddle}>
    <CalendarView />
  </Layout>
);
