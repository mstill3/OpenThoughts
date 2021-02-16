import React, { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import TextInput from '../atoms/TextInput';

export default ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');

  const submit = () => {
    // eslint-disable-next-line no-alert
    alert(`${category} ${negativeThought} ${replacementThought}`);
  };

  const navigateBack = () => {
    navigation.navigate('Home');
  };

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
