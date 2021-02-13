import React from 'react';
import {
  Input, Text, Button, Layout
} from '@ui-kitten/components';
import TextInput from '../atoms/TextInput';

export default () => {
  const [category, setCategory] = React.useState('');
  const [negativeThought, setNegativeThought] = React.useState('');
  const [replacementThought, setReplacementThought] = React.useState('');

  const submit = () => {
    // alert(`${category} ${negativeThought} . ${replacementThought}`);
  };

  return (
      <Layout
        style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
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
          <Button
            onPress={submit}
            accessibilityLabel="Log this thought"
          >
            Submit
          </Button>
      </Layout>
  );
}
