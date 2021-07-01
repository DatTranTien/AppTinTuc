import React from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import Subtitle from './horizotal_list/Subtitle';
import Title from './horizotal_list/Title';
// const item1={
//     id: '7',
//     "title": 'This is the title no seven.',
//     "desc":
//       'Desc is the short form of description and this format is the actual same as our real database.',
//     "thumbnail": 'http://lorempixel.com/400/200/',
//     category: 'tech',
//   }
const FlatCard = ({
    style,imageStyle,item
}) =>{
    //   console.log(item)
    //   console.log(JSON.parse(item1))
    // const item1=JSON.parse(item)
    // console.log("thumnail"+item.thumbnail+"======fdagadfgshfghfs======")
const {thumbnail,title,desc}=item;
// console.log(item.desc+item+"==============")
return(
    <View style={[styles.container]} >
        <Image source={{uri:thumbnail}} style={[styles.image]} />
        <View style={styles.contentContainer}>
            <Title >{title}</Title>
            <Subtitle>{title}</Subtitle>
        </View>
    </View>
);}
const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:'center',
       backgroundColor:'white',
       borderRadius:8,
       overflow:'hidden',
       marginBottom:10,
       height:80
    },
    image:{
        // width:'100%',
        flex:0.35,
        height:"100%"
    },
    contentContainer:{
        flex:0.65,
        paddingHorizontal:5
    }
})
export default FlatCard;
