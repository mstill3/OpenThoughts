import React from 'react';
import { Input, Layout } from '@ui-kitten/components';
import style from '../../styles/style';

interface Props {
  label?: string;
  placeholder?: string;
  text: string;
  onChangeText: (text: string) => void;
}

export const TextInput = ({
  text,
  onChangeText,
  placeholder,
  label,
}: Props) => {
  return (
    <Layout style={style.textInput}>
      <Input
        label={label}
        value={text}
        placeholder={placeholder}
        onChangeText={(newText) => onChangeText(newText)}
      />
    </Layout>
  );
};
