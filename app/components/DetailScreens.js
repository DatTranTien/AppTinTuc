import React, { Component } from 'react';
import { View, Text, Image, Dimensions,ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class DetailScreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item : this.props.item
    };
  }
  componentDidMount(){
    console.log("adssdfsdf",this.state.item,this.state.item.title)
  }

  render() {
    return (
      <ScrollView> 
      <View style={{width:windowWidth,alignItems:'center',marginBottom:20}}>
      
       <View style={{}}>
           <Text style={{fontSize:35,fontWeight:"700"}}>
               {this.state.item.title}
           </Text>
       </View>
       <Image source={{uri:this.state.item.thumbnail}} style={{width:windowWidth/1.2,height:windowHeight/5}} />
      
        <View style={{margin:10}}>
            <Text>
                {this.state.item.desc}
            </Text>
        </View>

        <TouchableHighlight style={{marginTop:15,alignItems:"center",marginBottom:50}} onPress={()=>{ Actions.pop();}}>
             <Text style={{fontWeight:"700",fontSize:25}}>Back</Text>
        </TouchableHighlight>
       <View style={{height:50}}>

       </View>
      </View>
      </ScrollView>
    );
  }
}

export default DetailScreens;
