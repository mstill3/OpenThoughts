
export interface IQuote {
    _id: String;
    tags: String[];
    content: String; 
    author: String;
    length: number;
};

export const blankQuote = (): IQuote => ({
    _id: '',
    tags: [],
    content: '',
    author: '',
    length: 0
});

// export default class Quote {
//     public _id;
//     public tags;
//     public content: String; 
//     public author: String;
//     public length: number;
// }