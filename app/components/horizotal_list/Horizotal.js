import React from 'react';
import { FlatList, Text, View,TouchableHighlight } from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';
import { Actions } from 'react-native-router-flux';

const Horizotal = ({
    title,data,navigation
}) => {
  return <View>
  <Title size={20}>{title}</Title>
   <FlatList data={data} keyExtractor={item=> item.id} horizontal={true}
    showsHorizontalScrollIndicator={false} 
    renderItem={({item})=> 
    <TouchableHighlight  onPress={() =>
      Actions.detail({item})
    } >
    <SmallCard item={item}/>
    </TouchableHighlight> }
    />
    
     </View>
};

export default Horizotal;
