import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Layout } from '@ui-kitten/components';
import { TextInput } from '../views';
import style from '../../styles/style';
import { JournalRoutesList } from '../navigators';
import { BackIcon } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { Alert } from 'react-native';
import { buildLog, Log, Mood } from '../../models';
import { addLogAction } from '../../redux/actions';
// import { save } from '../../utils/storage';

type JournalNavigator = StackNavigationProp<JournalRoutesList, 'LogThought'>;

export const NewThoughtScreen = () => {
  const navigation = useNavigation<JournalNavigator>();
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');

  const addLog = (log: Log) => dispatch(addLogAction(log));

  const submit = () => {
    const log = buildLog(
      category,
      Mood.GREAT,
      negativeThought,
      replacementThought,
    );
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
      <Button onPress={submit} accessibilityLabel="Log this thought">
        Submit
      </Button>
    </Layout>
  );
};
