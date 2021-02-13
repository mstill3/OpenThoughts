import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import TextInput from '../atoms/TextInput';

export default () => {
  const [category, setCategory] = useState('');
  const [negativeThought, setNegativeThought] = useState('');
  const [replacementThought, setReplacementThought] = useState('');
  const [labelText, setLabelText] = useState('sds');

  const submit = () =>
    setLabelText(`${category} ${negativeThought} ${replacementThought}`);

  return (
    <Layout style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
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
      <TextInput
        label="goose"
        placeholder="Replacement Thought"
        text={labelText}
        onChangeText={setReplacementThought}
      />
      <Text>{labelText}</Text>
      <Button onPress={submit} accessibilityLabel="Log this thought">
        Submit
      </Button>
    </Layout>
  );
};
