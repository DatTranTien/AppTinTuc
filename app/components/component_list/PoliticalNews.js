import React from 'react';
import { Text, View } from 'react-native';
import VerticalList from '../VerticalList';

const PoliticalNews = ({
    data,
}) => (
    <VerticalList title="Political News" data={data} />
);

export default PoliticalNews;
