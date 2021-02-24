import React from 'react';
import { Layout, Spinner } from '@ui-kitten/components';
import style from '../../styles/style';

export const LoadingScreen = () => (
  <Layout style={style.centeredLayout}>
    <Spinner size="giant" />
  </Layout>
);
