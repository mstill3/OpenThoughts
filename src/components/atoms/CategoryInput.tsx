import React from 'react';
import {
  Input, Text, Button, Layout
} from '@ui-kitten/components';

const CategoryInput = () => {
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
        placeholder='Category Thought'
        onChangeText={text => onChangeText(text)}
      />
      <Button
          onPress={onPressLearnMore}
          accessibilityLabel="Submit this category thought"
      >
        Submit
      </Button>
    </Layout>
);
}

export default CategoryInput;