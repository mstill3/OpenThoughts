import React, { useMemo } from 'react';
import { Layout, Button, Divider, Text } from '@ui-kitten/components';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { BackIcon } from '../../../../assets/icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CalendarRoutesList } from '../../navigators';
import { LogListView } from '../../views';

type CalendarNavigation = StackNavigationProp<CalendarRoutesList, 'Day'>;

export const DayScreen = () => {
  const routes = useRoute<RouteProp<CalendarRoutesList, 'Day'>>();
  const { day } = routes.params;
  const navigation = useNavigation<CalendarNavigation>();
  const navigateBack = () => navigation.goBack();

  const date = useMemo(() => new Date(day), [day]);

  return (
    <Layout style={style.flexedPad}>
      <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
        Back
      </Button>
      <Text category="h6" style={style.centeredText}>
        {date.getMonth()} / {date.getDate()} / {date.getFullYear()}
      </Text>
      <Divider />
      {/* <Layout style={style.centeredLayout}> */}
      {/* <Button status="info">{day.getDate()}</Button> */}
      <LogListView date={date} />
      {/* </Layout> */}
    </Layout>
  );
};
