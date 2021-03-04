import React from 'react';
import { useDispatch } from 'react-redux';
import { JournalRoutesList } from '../../navigators';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Log } from '../../../models';
import { addLogAction } from '../../../redux/actions';
import { FormType, LogForm } from '../../forms/LogForm';

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'AddLog'>;

export const AddLogScreen = () => {
  const navigation = useNavigation<JournalNavigation>();
  const dispatch = useDispatch();

  const addLog = (log: Log) => dispatch(addLogAction(log));

  const submit = (log: Log) => {
    addLog(log);
    navigateBack();
  };

  const navigateBack = () => navigation.goBack();

  return (
    <LogForm type={FormType.NEW} navigateBack={navigateBack} submit={submit} />
  );
};
