import React, { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import TextInput from '../atoms/TextInput';
import style from '../../../styles/style';
import { RootPagesList } from '../PageNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

interface Props {
  navigation: BottomTabNavigationProp<RootPagesList, 'Home'>;
}

export default ({ navigation }: Props) => {
  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');

  const submit = () => {
    // eslint-disable-next-line no-alert
    alert(`${category} ${negativeThought} ${replacementThought}`);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Layout style={style.centeredLayout}>
      <Button status="info" onPress={navigateBack}>
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
