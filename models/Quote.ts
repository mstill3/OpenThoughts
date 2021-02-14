export interface IQuote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  length: number;
};

export const blankQuote = (): IQuote => ({
  _id: '',
  tags: [],
  content: '',
  author: '',
  length: 0,
});
