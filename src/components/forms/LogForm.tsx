import React from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { TextInput, MoodOptionsView } from '../views';
import style from '../../styles/style';
import { BackIcon, TrashIcon } from '../../../assets/icons';
import { Mood } from '../../models';

export enum FormType {
  NEW = 'NEW',
  EXISTING = 'EXISTING',
}

interface Props {
  type: FormType;
  navigateBack: () => void;
  category: string;
  setCategory: (category: string) => void;
  negativeThought: string;
  setNegativeThought: (negativeThought: string) => void;
  irrationalThoughtPattern: string;
  setIrrationalThoughtPattern: (irrationalThoughtPattern: string) => void;
  replacementThought: string;
  setReplacementThought: (replacementThought: string) => void;
  mood: Mood;
  setMood: (mood: Mood) => void;
  remove?: () => void;
  submit: () => void;
}

export const LogForm = ({
  type,
  navigateBack,
  category,
  setCategory,
  negativeThought,
  setNegativeThought,
  irrationalThoughtPattern,
  setIrrationalThoughtPattern,
  replacementThought,
  setReplacementThought,
  mood,
  setMood,
  remove,
  submit,
}: Props) => (
  <Layout style={style.centeredLayout}>
    <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
      Back
    </Button>
    {type === FormType.EXISTING && (
      <Button status="danger" accessoryLeft={TrashIcon} onPress={remove}>
        Delete
      </Button>
    )}

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
      label="Irrational Thought Pattern"
      placeholder="Irrational Thought Pattern"
      text={irrationalThoughtPattern}
      onChangeText={setIrrationalThoughtPattern}
    />
    <TextInput
      label="Replacement Thought"
      placeholder="Replacement Thought"
      text={replacementThought}
      onChangeText={setReplacementThought}
    />
    <MoodOptionsView mood={mood} setMood={setMood} />
    <Button onPress={submit} accessibilityLabel="Log this thought">
      {type === FormType.NEW ? 'Submit' : 'Submit Changes'}
    </Button>
  </Layout>
);
