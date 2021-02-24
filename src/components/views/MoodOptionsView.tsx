import React from 'react';
import { Text, Button, ButtonGroup, Layout } from '@ui-kitten/components';
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
  const getStatus = () => {
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
  };

  return (
    <View>
      <Layout style={styles.container} level="1">
        <ButtonGroup style={styles.buttonGroup} status={getStatus()}>
          {/* <AwfulIcon /> */}
          <Button
            accessoryLeft={AwfulIcon}
            onPress={() => setMood(Mood.AWFUL)}
          />
          <Button accessoryLeft={BadIcon} onPress={() => setMood(Mood.BAD)} />
          <Button accessoryLeft={OkayIcon} onPress={() => setMood(Mood.OKAY)} />
          <Button accessoryLeft={GoodIcon} onPress={() => setMood(Mood.GOOD)} />
          <Button
            accessoryLeft={GreatIcon}
            onPress={() => setMood(Mood.GREAT)}
          />
        </ButtonGroup>
      </Layout>
      <Text> {mood} </Text>
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
