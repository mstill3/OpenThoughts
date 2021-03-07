import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { MoodColors } from '../../../styles/_colors';
import { diagnosis } from '../../../utils/mood';
import { StackNavigationProp } from '@react-navigation/stack';
import { CalendarRoutesList } from '../../navigators';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectLogsInMonth } from '../../../redux/selectors';
import { Calendar, DateObject } from 'react-native-calendars';
import { AgendaScreen } from './MyAdgenda';
import style from '../../../styles/style';
// import { useSelector } from 'react-redux';
// import { selectLogsBetween } from '../../../redux/selectors';

const daysDict = {
  1: 95,
  2: 85,
  3: 75,
  4: 65,
  5: 40,
};

const getColoredCircle = (date: Date) =>
  styles[diagnosis(daysDict[date.getDate()]) + 'Circle'];

const DayCell = (navigateToDayScreen) => ({ date }, style) => {
  return (
    <View
      style={[styles.dayContainer, style.container]}
      onTouchStart={() => navigateToDayScreen(date)}>
      <Text style={style.text}>{`${date.getDate()}`}</Text>
      {/* <Text> {date.UTC()} </Text> */}
      <View style={getColoredCircle(date)} />
    </View>
  );
};

type CalendarNavigation = StackNavigationProp<CalendarRoutesList, 'Calendar'>;

export const CalendarView = () => {
  const navigation = useNavigation<CalendarNavigation>();
  const navigateToDayScreen = (day: Date) =>
    navigation.navigate('Day', { day: day.getTime() });

  const [date, setDate] = useState<DateObject>();
  // const monthlyLogs = useSelector(selectLogsInMonth(date));

  return (
    <Layout style={style.flexedMiddle}>
      <AgendaScreen />
    </Layout>
  );
};

const circleStyle = {
  width: 15,
  height: 15,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  value: {
    fontSize: 12,
    fontWeight: '400',
  },
  circle: circleStyle,
  greatCircle: {
    ...circleStyle,
    backgroundColor: MoodColors.great,
  },
  goodCircle: {
    ...circleStyle,
    backgroundColor: MoodColors.good,
  },
  okayCircle: {
    ...circleStyle,
    backgroundColor: MoodColors.okay,
  },
  badCircle: {
    ...circleStyle,
    backgroundColor: MoodColors.bad,
  },
  awfulCircle: {
    ...circleStyle,
    backgroundColor: MoodColors.awful,
  },
  // noneCircle: {
  //   ...circleStyle,
  //   backgroundColor: MoodColors.none,
  // },
});
