import React from 'react';
import { Input, Layout } from '@ui-kitten/components';
import style from '../../styles/style';

interface Props {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  text: string;
  onChangeText: (text: string) => void;
}

export const TextInput = ({
  disabled,
  text,
  onChangeText,
  placeholder,
  label,
}: Props) => {
  return (
    <Layout style={style.textInput}>
      <Input
        disabled={disabled}
        label={label}
        value={text}
        placeholder={placeholder}
        onChangeText={(newText) => onChangeText(newText)}
      />
    </Layout>
  );
};
