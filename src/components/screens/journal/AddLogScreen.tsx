import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { JournalRoutesList } from '../../navigators';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { buildLog, Log, Mood } from '../../../models';
import { addLogAction } from '../../../redux/actions';
import { FormType, LogForm } from '../../forms/LogForm';

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'AddLog'>;

export const AddLogScreen = () => {
  const navigation = useNavigation<JournalNavigation>();
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [irrationalThoughtPattern, setIrrationalThoughtPattern] = useState('');
  const [replacementThought, setReplacementThought] = useState('');
  const [mood, setMood] = useState<Mood>(Mood.UNSET);

  const addLog = (log: Log) => dispatch(addLogAction(log));

  const submit = () => {
    const log = buildLog(
      category,
      negativeThought,
      irrationalThoughtPattern,
      replacementThought,
      mood,
    );
    addLog(log);
    navigateBack();
  };

  const navigateBack = () => navigation.goBack();

  return (
    <LogForm
      type={FormType.NEW}
      navigateBack={navigateBack}
      category={category}
      setCategory={setCategory}
      negativeThought={negativeThought}
      setNegativeThought={setNegativeThought}
      irrationalThoughtPattern={irrationalThoughtPattern}
      setIrrationalThoughtPattern={setIrrationalThoughtPattern}
      replacementThought={replacementThought}
      setReplacementThought={setReplacementThought}
      mood={mood}
      setMood={setMood}
      submit={submit}
    />
  );
};
