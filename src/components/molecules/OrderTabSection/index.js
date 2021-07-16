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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 10}}>
      <ItemListFood
        rating={3}
        image={DUMfone}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items="3"
        price="2.000.000"
        name="Kari Sleman"
      />
      <ItemListFood
        rating={3}
        image={DUMftwo}
        type="in-progress"
        items="3"
        price="2.000.000"
        name="Kari Sleman"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        rating={3}
        image={DUMfthree}
        type="in-progress"
        items="3"
        price="2.000.000"
        name="Kari Sleman"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        rating={3}
        image={DUMffour}
        type="in-progress"
        items="3"
        price="2.000.000"
        name="Kari Sleman"
        onPress={() => navigation.navigate('OrderDetail')}
      />
    </View>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 10}}>
      <ItemListFood
        rating={3}
        image={DUMffour}
        type="past-orders"
        onPress={() => navigation.navigate('OrderDetail')}
        items="3"
        price="2.000.000"
        name="Kari Sleman"
        date="Jun 12, 14:00"
      />
      <ItemListFood
        rating={3}
        image={DUMftwo}
        type="past-orders"
        onPress={() => navigation.navigate('OrderDetail')}
        items="3"
        price="2.000.000"
        name="Kari Sleman"
        date="Mei 2, 09:00"
        status="Cancelled"
      />
      <ItemListFood
        rating={3}
        image={DUMfone}
        type="past-orders"
        onPress={() => navigation.navigate('OrderDetail')}
        items="3"
        price="2.000.000"
        name="Kari Sleman"
      />
    </View>
  );
};



const renderScene = SceneMap({
  1: InProgress,
  2: PastOrder,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
    
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

export default OrderTabSection;

const styles = StyleSheet.create({});
