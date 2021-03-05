import React from 'react';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-svg';
import { View } from 'react-native';
import { BackIcon } from '../../../../assets/icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CalendarRoutesList } from '../../navigators';

type CalendarNavigation = StackNavigationProp<CalendarRoutesList, 'Day'>;

export const DayScreen = () => {
  const routes = useRoute<RouteProp<CalendarRoutesList, 'Day'>>();
  const { day } = routes.params;
  const navigation = useNavigation<CalendarNavigation>();
  const navigateBack = () => navigation.goBack();

  return (
    <View style={style.flexed}>
      <Divider />
      <Layout style={style.centeredLayout}>
        <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
          Back
        </Button>
        <Text> Notes on this Day yoooo </Text>
        <Button status="info">{day.getDate()}</Button>
      </Layout>
    </View>
  );
};
