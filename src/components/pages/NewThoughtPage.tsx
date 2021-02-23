import React, { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import TextInput from '../atoms/TextInput';
import style from '../../styles/style';
import { JournalRoutesList } from '../navigators/JournalNavigator';
import { BackIcon } from '../../../assets/icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';

type JournalNavigator = StackNavigationProp<JournalRoutesList, 'LogThought'>;

export default () => {
  const navigation = useNavigation<JournalNavigator>();
  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');

  const submit = () => {
    AsyncStorage.getItem('a').then((re) => {
      Alert.alert(re);
    });
    AsyncStorage.setItem('a', category);
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
