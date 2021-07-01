import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Horizotal from '../horizotal_list/Horizotal';

const TechNews = ({
    data,
}) => {
    return (
    <Horizotal title='Tech News' data={data} />
);}

export default TechNews;
