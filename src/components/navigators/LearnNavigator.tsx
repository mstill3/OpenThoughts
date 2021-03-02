import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LearnScreen, LearnDetailScreen } from '../screens';
import { Article } from '../../models';

export type LearnRoutesList = {
  Learn: JSX.Element;
  LearnDetails: { article: Article };
};

const { Navigator, Screen } = createStackNavigator<LearnRoutesList>();

export const LearnNavigator = () => (
  <NavigationContainer independent>
    <Navigator headerMode="none">
      <Screen name="Learn" component={LearnScreen} />
      <Screen name="LearnDetails" component={LearnDetailScreen} />
    </Navigator>
  </NavigationContainer>
);
