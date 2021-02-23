import React, { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import TextInput from '../atoms/TextInput';
import style from '../../styles/style';
import { JournalRoutesList } from '../navigators/JournalNavigator';
import { BackIcon } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';
import Log from '../../data/models/Log';
import { Mood } from '../../data/models/Mood';
import { load, save } from '../../utils/storage';

type JournalNavigator = StackNavigationProp<JournalRoutesList, 'LogThought'>;

export default () => {
  const navigation = useNavigation<JournalNavigator>();
  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');

  const submit = async () => {
    const log = new Log(
      category,
      Mood.GREAT,
      negativeThought,
      replacementThought,
    );

    await save('log', log);

    Alert.alert(a.getNegativeThought());

    // load('logg')
    //   .then((logStr) => {
    //     Alert.alert(logStr);
    //     // const l: Log = JSON.parse(logStr);
    //     // Alert.alert(l.getNegativeThought());
    //   })
    //   .catch((e) => {
    //     Alert.alert(e);
    //   });

    // AsyncStorage.setItem('log', JSON.stringify(log));
    // AsyncStorage.getItem('log')
    // alert(`${category} ${negativeThought} ${replacementThought}`);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

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
