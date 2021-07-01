import React, { Component } from 'react';
import { View, Text ,TouchableHighlight, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import SmallCard from './horizotal_list/SmallCard'

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        getText: this.props.text,
        data:[]
    };
  }
  async componentDidMount(){
      const getdata = await fetch(`http://localhost:3000/searchValue/${this.state.getText}`)
          .then((response) => response.json())
          .then((json) => {
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
     this.setState({
         data:getdata
     })
      console.log(this.state.data,"=======")
  }

  render() {
    return (
      <ScrollView>
        <FlatList data={this.state.data} keyExtractor={item=> item.id}
    renderItem={({item})=> 
    <TouchableHighlight  onPress={() =>
        Actions.detail({item})
      } >
    <SmallCard item={item}/>
    </TouchableHighlight>
   }
    />
        <TouchableHighlight style={{alignItems:"center",marginBottom:50}} onPress={()=>{ Actions.pop();}}>
             <Text style={{fontWeight:"700",fontSize:25}}>Back</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

export default SearchScreen;
