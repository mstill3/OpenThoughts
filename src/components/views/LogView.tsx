import React from 'react';
import { Log } from '../../models';
import { Text } from '@ui-kitten/components';
import { View } from 'react-native';

interface Props {
  log: Log;
}

export const LogView = ({ log }: Props) => {
  return (
    <View>
      <Text> {log.getCategory()} </Text>
      <Text> {log.getNegativeThought()} </Text>
      <Text> {log.getReplacementThought()} </Text>
    </View>
  );
};
