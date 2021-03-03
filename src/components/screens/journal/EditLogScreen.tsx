import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { JournalRoutesList } from '../../navigators';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { buildLog, Log, Mood } from '../../../models';
import { editLogAction } from '../../../redux/actions';
import { FormType, LogForm } from '../../forms/LogForm';

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'EditLog'>;

export const EditLogScreen = () => {
  const navigation = useNavigation<JournalNavigation>();
  const dispatch = useDispatch();

  const routes = useRoute<RouteProp<JournalRoutesList, 'EditLog'>>();
  const { log } = routes.params;

  const [category, setCategory] = useState(log.category);
  const [negativeThought, setNegativeThought] = useState(log.negativeThought);
  const [irrationalThoughtPattern, setIrrationalThoughtPattern] = useState(
    log.irrationalThoughtPattern,
  );
  const [replacementThought, setReplacementThought] = useState(
    log.replacementThought,
  );
  const [mood, setMood] = useState<Mood>(log.mood);

  const editLog = (log: Log) => dispatch(editLogAction(log));

  const submit = () => {
    const log = buildLog(
      category,
      negativeThought,
      irrationalThoughtPattern,
      replacementThought,
      mood,
    );
    editLog(log);
    navigateBack();
  };

  const navigateBack = () => navigation.goBack();

  return (
    <LogForm
      type={FormType.EXISTING}
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
