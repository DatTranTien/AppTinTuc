import React from 'react';
import { Text, View } from 'react-native';
import VerticalList from '../VerticalList';

const EntertaimentNews = ({
    data,
}) => (
    <VerticalList title='Entertaiment News' data={data} />
);

export default EntertaimentNews;
