import 'react-native-get-random-values';
import { Mood } from './Mood';
import { v4 as uuid } from 'uuid';

export interface Log {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  negativeThought: string;
  irrationalThoughtPattern: string;
  replacementThought: string;
  mood: Mood;
}

export const buildNewLog = (
  category: string,
  negativeThought: string,
  irrationalThoughtPattern: string,
  replacementThought: string,
  mood: Mood,
): Log => ({
  id: uuid(),
  createdAt: new Date(),
  updatedAt: new Date(),
  category: category,
  negativeThought: negativeThought,
  irrationalThoughtPattern: irrationalThoughtPattern,
  replacementThought: replacementThought,
  mood: mood,
});

export const buildExistingLog = (
  id: string,
  createdAt: Date,
  category: string,
  negativeThought: string,
  irrationalThoughtPattern: string,
  replacementThought: string,
  mood: Mood,
): Log => ({
  id: id,
  createdAt: createdAt,
  updatedAt: new Date(),
  category: category,
  negativeThought: negativeThought,
  irrationalThoughtPattern: irrationalThoughtPattern,
  replacementThought: replacementThought,
  mood: mood,
});
