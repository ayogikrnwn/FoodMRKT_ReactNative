import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DUMfone, ICStar, ICStarOff} from '../../../assets';
import Rating from '../Rating';


const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.foodcont}>
        <Text style={styles.title}>Cherry Healthy</Text>
        <Rating />
        </View>
       
      </View>
    
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
    
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
 
  foodcont: {
      padding: 12
  },
  image: {
      width: 200,
      height: 140,
      resizeMode: 'cover'
  }
});
