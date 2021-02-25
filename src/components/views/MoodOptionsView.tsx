import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import {
  AwfulIcon,
  BadIcon,
  GoodIcon,
  GreatIcon,
  OkayIcon,
} from '../../../assets/icons';
import { StyleSheet, View } from 'react-native';
import { Mood } from '../../models';

interface Props {
  mood: Mood;
  setMood: (mood: Mood) => void;
}

export const MoodOptionsView = ({ mood, setMood }: Props) => {
  const getStatus = (moodButton: Mood) => {
    if (mood === moodButton) {
      if (mood === Mood.AWFUL) {
        return 'danger';
      } else if (mood === Mood.BAD) {
        return 'warning';
      } else if (mood === Mood.OKAY) {
        return 'success';
      } else if (mood === Mood.GOOD) {
        return 'info';
      } else if (mood === Mood.GREAT) {
        return 'primary';
      } else {
        return 'basic';
      }
    } else {
      return 'basic';
    }
  };

  return (
    <View>
      <Layout style={styles.container} level="1">
        <Button
          accessoryLeft={AwfulIcon}
          onPress={() => setMood(Mood.AWFUL)}
          size="giant"
          status={getStatus(Mood.AWFUL)}
          appearance="ghost"
        />
        <Button
          accessoryLeft={BadIcon}
          onPress={() => setMood(Mood.BAD)}
          size="giant"
          status={getStatus(Mood.BAD)}
          appearance="ghost"
        />
        <Button
          accessoryLeft={OkayIcon}
          onPress={() => setMood(Mood.OKAY)}
          size="giant"
          status={getStatus(Mood.OKAY)}
          appearance="ghost"
        />
        <Button
          accessoryLeft={GoodIcon}
          onPress={() => setMood(Mood.GOOD)}
          size="giant"
          status={getStatus(Mood.GOOD)}
          appearance="ghost"
        />
        <Button
          accessoryLeft={GreatIcon}
          onPress={() => setMood(Mood.GREAT)}
          size="giant"
          status={getStatus(Mood.GREAT)}
          appearance="ghost"
        />
      </Layout>
      {/* <Text> {mood} </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonGroup: {
    margin: 2,
  },
});
