import React from 'react';
import { Log } from '../../models';
import { Card, Text } from '@ui-kitten/components';

interface Props {
  log: Log;
}

export const LogView = ({ log }: Props) => {
  return (
    <Card>
      <Text> {log.category} </Text>
      <Text> {log.negativeThought} </Text>
      <Text> {log.replacementThought} </Text>
      <Text> {log.mood} </Text>
    </Card>
  );
};
