import React from 'react';
import { Layout, Button, Divider } from '@ui-kitten/components';
import style from '../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-svg';
import { View } from 'react-native';
import { BackIcon } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { CalendarRoutesList } from '../navigators';

type CalendarNavigator = StackNavigationProp<CalendarRoutesList, 'Day'>;

export const DayScreen = () => {
  const navigation = useNavigation<CalendarNavigator>();
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Divider />
      <Layout style={style.centeredLayout}>
        <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
          Back
        </Button>
        <Text> Notes on this Day </Text>
      </Layout>
    </View>
  );
};
