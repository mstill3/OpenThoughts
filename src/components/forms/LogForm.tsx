import React, { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { TextInput, MoodOptionsView } from '../views';
import style from '../../styles/style';
import { BackIcon, TrashIcon } from '../../../assets/icons';
import { buildNewLog, buildExistingLog, Log, Mood } from '../../models';

export enum FormType {
  NEW = 'NEW',
  EXISTING = 'EXISTING',
}

interface Props {
  type: FormType;
  navigateBack: () => void;
  remove?: (log: Log) => void;
  initialValues?: Log;
  submit: (log: Log) => void;
}

export const LogForm = ({
  type,
  navigateBack,
  remove,
  initialValues,
  submit,
}: Props) => {
  const [category, setCategory] = useState(
    initialValues ? initialValues.category : '',
  );
  const [negativeThought, setNegativeThought] = useState(
    initialValues ? initialValues.negativeThought : '',
  );
  const [irrationalThoughtPattern, setIrrationalThoughtPattern] = useState(
    initialValues ? initialValues.irrationalThoughtPattern : '',
  );
  const [replacementThought, setReplacementThought] = useState(
    initialValues ? initialValues.replacementThought : '',
  );
  const [mood, setMood] = useState<Mood>(
    initialValues ? initialValues.mood : Mood.UNSET,
  );

  const createLog = () =>
    type === FormType.NEW
      ? buildNewLog(
          category,
          negativeThought,
          irrationalThoughtPattern,
          replacementThought,
          mood,
        )
      : buildExistingLog(
          initialValues.id,
          initialValues.createdAt,
          category,
          negativeThought,
          irrationalThoughtPattern,
          replacementThought,
          mood,
        );

  const submitFn = () => submit(createLog());
  const removeFn = () => remove(initialValues);

  return (
    <Layout style={style.centeredLayout}>
      <Button status="info" accessoryLeft={BackIcon} onPress={navigateBack}>
        Back
      </Button>
      {type === FormType.EXISTING && (
        <Button status="danger" accessoryLeft={TrashIcon} onPress={removeFn}>
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
      <Button onPress={submitFn} accessibilityLabel="Log this thought">
        {type === FormType.NEW ? 'Submit' : 'Submit Changes'}
      </Button>
    </Layout>
  );
};
