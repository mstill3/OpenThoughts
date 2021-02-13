import React from 'react';
import {
  Input, Text, Button, Layout
} from '@ui-kitten/components';
import ReplacementThoughtInput from '../atoms/ReplacementThoughtInput';
import NegativeThoughtInput from '../atoms/NegativeThoughtInput';
import CategoryInput from '../atoms/CategoryInput';

export default () => {
  const [value, onChangeText] = React.useState('');
  const onPressLearnMore = () => {
    alert(value);
    onChangeText('');
  };

  return (
      <Layout
        style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            <CategoryInput />
            <NegativeThoughtInput />
            <ReplacementThoughtInput />
            <Button
              onPress={onPressLearnMore}
              accessibilityLabel="Log this thought"
            >
              Log
            </Button>
      </Layout>
  );
}
