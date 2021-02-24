import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { Mood } from './Mood';

export interface Log {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  mood: Mood;
  category: string;
  negativeThought: string;
  replacementThought: string;
}

export const buildLog = (
  category: string,
  mood: Mood,
  negativeThought: string,
  replacementThought: string,
): Log => ({
  id: uuid(),
  createdAt: new Date(),
  updatedAt: new Date(),
  mood: mood,
  category: category,
  negativeThought: negativeThought,
  replacementThought: replacementThought,
});
