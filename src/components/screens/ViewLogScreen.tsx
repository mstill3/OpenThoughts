import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Layout } from '@ui-kitten/components';
import { TextInput } from '../views';
import style from '../../styles/style';
import { JournalRoutesList } from '../navigators';
import { BackIcon } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { buildLog, Log, Mood } from '../../models';
import { addLogAction } from '../../redux/actions';
import { MoodOptionsView } from '../views/MoodOptionsView';

type JournalNavigation = StackNavigationProp<JournalRoutesList, 'ViewLog'>;

export const ViewLogScreen = () => {
  const navigation = useNavigation<JournalNavigation>();
  const dispatch = useDispatch();

  const [mood, setMood] = useState<Mood>(Mood.UNSET);
  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');

  const addLog = (log: Log) => dispatch(addLogAction(log));

  const submit = () => {
    const log = buildLog(category, mood, negativeThought, replacementThought);
    addLog(log);
    navigateBack();
  };

  const navigateBack = () => navigation.goBack();

  return (
    <Layout style={style.centeredLayout}>
      <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
        Back
      </Button>
      <TextInput
        label="Category"
        placeholder="Category"
        text={category}
        onChangeText={setCategory}
      />
      <TextInput
        label="Negative Thought"
        placeholder="Negative Thought"
        text={negativeThought}
        onChangeText={setNegativeThought}
      />
      <TextInput
        label="Replacement Thought"
        placeholder="Replacement Thought"
        text={replacementThought}
        onChangeText={setReplacementThought}
      />
      <MoodOptionsView mood={mood} setMood={setMood} />
      <Button onPress={submit} accessibilityLabel="Log this thought">
        Submit
      </Button>
    </Layout>
  );
};
