import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import BlockCard from './app/components/horizotal_list/BlockCard';
// import FeatureNews from './app/components/FeatureNews';
import SmallCard from './app/components/horizotal_list/SmallCard';
import Horizotal from './app/components/horizotal_list/Horizotal';
import BreakingNews from './app/components/component_list/BreakingNews';

// import fakeData from './app/components/fakeData';
import TechNews from './app/components/component_list/TechNews';
// import FlatCard from './app/components/FlatCard';
import PoliticalNews from './app/components/component_list/PoliticalNews';
import EntertaimentNews from './app/components/component_list/EntertaimentNews';
import DetailScreens from './app/components/DetailScreens';
import AppContainer from './AppContainer';
import SearchScreen from './app/components/SearchScreen';






const App = () => {
  return (
    <Router>
      <Scene key="cyan">
      <Scene
          key="AppContainer"
          component={AppContainer}
          title="Tin Tức"
        />
         <Scene
          key="horizontal"
          component={Horizotal}
          title="Horizotal"
        />
        <Scene
          key="detail"
          component={DetailScreens}
          title="Bài chi tiết"
        />
        <Scene
          key="search"
          component={SearchScreen}
          title="Kết quả tìm kiếm"
        />
       
      </Scene>
    </Router>
  );
}

export default App;