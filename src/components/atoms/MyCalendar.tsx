import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, Text } from '@ui-kitten/components';
import {
  none_color,
  awful_color,
  bad_color,
  good_color,
  great_color,
  okay_color,
} from '../../styles/_colors';
import { diagnosis } from '../../utils/mood';

const daysDict = {
  1: 95,
  2: 85,
  3: 75,
  4: 65,
  5: 40,
};

const getColoredCircle = (date: Date) =>
  styles[diagnosis(daysDict[date.getDate()]) + 'Circle'];

const DayCell = ({ date }, style) => (
  <View style={[styles.dayContainer, style.container]}>
    <Text style={style.text}>{`${date.getDate()}`}</Text>
    {/* <Text> {date.UTC()} </Text> */}
    <View style={getColoredCircle(date)} />
  </View>
);

export default () => {
  const [date, setDate] = useState(null);

  return (
    <Calendar
      date={date}
      onSelect={(nextDate) => setDate(nextDate)}
      renderDay={DayCell}
    />
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
    backgroundColor: great_color,
  },
  goodCircle: {
    ...circleStyle,
    backgroundColor: good_color,
  },
  okayCircle: {
    ...circleStyle,
    backgroundColor: okay_color,
  },
  badCircle: {
    ...circleStyle,
    backgroundColor: bad_color,
  },
  awfulCircle: {
    ...circleStyle,
    backgroundColor: awful_color,
  },
  noneCircle: {
    ...circleStyle,
    backgroundColor: none_color,
  },
});
