import { Mood } from './Mood';

export interface Log {
  createdAt: Date;
  updatedAt: Date;
  category: string;
  negativeThought: string;
  irrationalThoughtPattern: string;
  replacementThought: string;
  mood: Mood;
}

export const buildLog = (
  category: string,
  negativeThought: string,
  irrationalThoughtPattern: string,
  replacementThought: string,
  mood: Mood,
): Log => ({
  createdAt: new Date(),
  updatedAt: new Date(),
  category: category,
  negativeThought: negativeThought,
  irrationalThoughtPattern: irrationalThoughtPattern,
  replacementThought: replacementThought,
  mood: mood,
});
