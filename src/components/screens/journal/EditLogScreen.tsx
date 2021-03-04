import React from 'react';
import { useDispatch } from 'react-redux';
import { JournalRoutesList } from '../../navigators';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Log } from '../../../models';
import { editLogAction, removeLogAction } from '../../../redux/actions';
import { FormType, LogForm } from '../../forms/LogForm';

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'EditLog'>;

export const EditLogScreen = () => {
  const navigation = useNavigation<JournalNavigation>();
  const dispatch = useDispatch();

  const routes = useRoute<RouteProp<JournalRoutesList, 'EditLog'>>();
  const { log } = routes.params;

  const editLog = (l: Log) => dispatch(editLogAction(l));
  const removeLog = (l: Log) => dispatch(removeLogAction(l));

  const submit = (l: Log) => {
    editLog(l);
    navigateBack();
  };

  const remove = (l: Log) => {
    removeLog(l);
    navigateBack();
  };

  const navigateBack = () => navigation.goBack();

  return (
    <LogForm
      type={FormType.EXISTING}
      navigateBack={navigateBack}
      initialValues={log}
      submit={submit}
      remove={remove}
    />
  );
};
