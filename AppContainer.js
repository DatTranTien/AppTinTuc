import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from './app/components/header/SearchBar';
import Screen from './app/components/Screen';
import BreakingNews from './app/components/component_list/BreakingNews';

import fakeData from './app/components/fakeData';
import TechNews from './app/components/component_list/TechNews';
import PoliticalNews from './app/components/component_list/PoliticalNews';
import EntertaimentNews from './app/components/component_list/EntertaimentNews';
 import getAllBreakingNews from  './app/api/API'
 import getAllTechNews from  './app/api/API'
 import getAllPoliticalNews from  './app/api/API'
 import getAllEntertaimentNews from  './app/api/API'

export default function AppContainer(props) {
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  loadDataBreaking=()=>{
  
       fetch('http://localhost:3000/getAllBreakingNews')
        .then((response) => response.json())
        .then((json) => {
          setBreakingNews(json)
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
 
  }

  loadDataTech=()=>{
  
    fetch('http://localhost:3000/getAllTechNews')
     .then((response) => response.json())
     .then((json) => {
       setTechNews(json)
       return json;
     })
     .catch((error) => {
       console.error(error);
     });

}

loadDataEntertaiment=()=>{
  
  fetch('http://localhost:3000/getAllEntertaimentNews')
   .then((response) => response.json())
   .then((json) => {
     setEntertainmentNews(json)
     return json;
   })
   .catch((error) => {
     console.error(error);
   });

}

loadDataPolitical=()=>{
  
  fetch('http://localhost:3000/getAllPoliticalNews')
   .then((response) => response.json())
   .then((json) => {
     setPoliticalNews(json)
     return json;
   })
   .catch((error) => {
     console.error(error);
   });

}

  useEffect(() => {
    loadDataBreaking()
    loadDataTech()
    loadDataEntertaiment()
    loadDataPolitical()
  }, []);

  return ( 
  <ScrollView>
    <View style={{marginTop:25}}>
      <SearchBar/>

      
      <BreakingNews data={breakingNews} />
      <TechNews data={techNews} />
      <PoliticalNews data={politicalNews} />
      <EntertaimentNews data={entertainmentNews} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

