import React ,{useState}from 'react';
import { Text, View,StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({
    params,
}) => 
{
    const [text, setText] = useState([]);

return(
    <View style={styles.container}>
        <TextInput style={styles.searchInput} placeholder='Search here ...' onChangeText={(txt)=>{setText(txt)}} />
        <View style={styles.icon}>
        <TouchableHighlight onPress={()=>{Actions.search({text})}}>
        <Icon name="long-arrow-alt-right" size={25} />
        </TouchableHighlight>
        </View>
    </View>
);
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        borderRadius:8,
        justifyContent:'center',
        flexDirection:'row'
    },
    searchInput:{
        width:'95%',
        height:"100%",
        paddingLeft:8,
        fontSize:16
    },
    icon:{
        width:"5%",
        height:"100%",
        alignItems:'center',
        justifyContent:'center'
    }
})
export default SearchBar;
