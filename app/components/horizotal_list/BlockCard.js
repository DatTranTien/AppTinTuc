import React from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

const BlockCard = ({
    style,imageStyle,item
}) =>{
  

const {thumbnail,title,desc}=item;
// console.log(item.desc+item+"==============")
return(
    <View style={[styles.container,style]} >
        <Image source={{uri:thumbnail}} style={[styles.image, imageStyle]} />
        <View style={styles.contentContainer}>
            <Title >{title}</Title>
            <Subtitle>{title}</Subtitle>
        </View>
    </View>
);}
const styles = StyleSheet.create({
    container:{
        // width:'100%',
        height:200,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'#fff'
    },
    image:{
        // width:'100%',
        height:200
    },
    contentContainer:{
        paddingHorizontal:5
    }
})
export default BlockCard;
