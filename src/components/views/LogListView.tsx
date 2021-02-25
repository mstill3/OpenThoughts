import React from 'react';
import { List } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { selectLogs } from '../../redux/selectors';
import { LogView } from './LogView';
import { StyleSheet } from 'react-native';

export const LogListView = () => {
  const logs = useSelector(selectLogs);
  const renderLog = ({ item, index }) => <LogView key={index} log={item} />;

  return (
    <List
      style={style.container}
      contentContainerStyle={style.contentContainer}
      data={logs}
      renderItem={renderLog}
    />
  );
};

const style = StyleSheet.create({
  container: {
    // maxHeight: 320,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
