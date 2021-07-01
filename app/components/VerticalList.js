import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Subtitle from './horizotal_list/Subtitle';
import Title from './horizotal_list/Title';
import FlatCard from './FlatCard';

const VerticalList = ({
    title,data
}) => (
    <View>
        <Title>{title}</Title>
        <View>
            {data.map(item=>(
                <FlatCard item={item} key={item.id} />
            ))}
        </View>
    </View>
);
const styles = StyleSheet.create({
    container:{
        marginVertical:15
    }
})
export default VerticalList;
