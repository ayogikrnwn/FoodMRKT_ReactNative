import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';
import {TabBar} from 'react-native-tab-view';
import {DUMffour, DUMfone, DUMfthree, DUMftwo} from '../../../assets';
import ItemListFood from '../ItemListFood';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#020202', height: 3}}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={DUMfone}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMftwo}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMfthree}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMffour}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={DUMffour}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMftwo}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMfone}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recomended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood
        image={DUMfthree}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMftwo}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMfone}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        image={DUMffour}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recomended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
