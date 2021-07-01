import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Horizotal from '../horizotal_list/Horizotal';

const BreakingNews = ({
    data, navigation
}) => {
    
    return (
    <Horizotal  navi={navigation} title='Breaking News' data={data} />
);}

export default BreakingNews;
