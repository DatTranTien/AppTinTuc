import React from 'react';
import { Text, View,Dimensions,StyleSheet, TouchableHighlight } from 'react-native';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window')
const SmallCard
 = ({
    item,
}) => (

    <BlockCard style={StyleSheet.container} item={item} imageStyle={styles.image} />
);
const styles = StyleSheet.create({
    container:{
        width: width/2,
        marginRight:15,
        height:200
    },
     image:{
        height:100
    }
})
export default SmallCard
;
