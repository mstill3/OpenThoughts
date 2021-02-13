import React from 'react';
import {
  Input, Text, Button, Layout
} from '@ui-kitten/components';

const ReplacementThoughtInput = () => {
  const [value, onChangeText] = React.useState('');
  const onPressLearnMore = () => {
    alert(value);
    onChangeText('');
  };

  return (
    <Layout
      style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Input
        value={value}
        placeholder='Replacement Thought'
        onChangeText={text => onChangeText(text)}
      />
      <Button
          onPress={onPressLearnMore}
          accessibilityLabel="Submit this replacement thought"
      >
        Submit
      </Button>
    </Layout>
);
}

export default ReplacementThoughtInput;