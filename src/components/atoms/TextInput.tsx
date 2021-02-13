import React from 'react';
import { Input, Layout } from '@ui-kitten/components';

interface Props {
  label?: string;
  placeholder?: string;
  text: string;
  onChangeText: (text: string) => void;
}

export default ({ text, onChangeText, placeholder, label }: Props) => {
  return (
    <Layout
      style={{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
      }}>
      <Input
        label={label}
        value={text}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
      />
    </Layout>
  );
};
