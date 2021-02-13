import React from 'react';
import { View } from 'react-native';
import { IQuote } from '../../../models/Quote';


interface Props {
    data: IQuote;
}

const Quote = ({data}: Props) => (
    <View style={{ backgroundColor: '#ffffffd9', padding: 15, borderRadius: 10 }}>
        <h1 id="jiji"> {data.content} </h1>
        <h4> {data.author} </h4>
    </View>
);

export default Quote;