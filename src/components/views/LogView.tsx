import React from 'react';
import { Log } from '../../models';
import { Card, Text } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { JournalRoutesList } from '../navigators';
import { useNavigation } from '@react-navigation/native';

interface Props {
  log: Log;
}

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'Journal'>;

export const LogView = ({ log }: Props) => {
  const navigation = useNavigation<JournalNavigation>();
  const navigateEditLog = () => navigation.navigate('EditLog', { log });
  return (
    <Card status="primary" onPress={navigateEditLog}>
      <Text> {log.category} </Text>
      <Text> {log.negativeThought} </Text>
      <Text> {log.irrationalThoughtPattern} </Text>
      <Text> {log.replacementThought} </Text>
      <Text> {log.mood} </Text>
    </Card>
  );
};
