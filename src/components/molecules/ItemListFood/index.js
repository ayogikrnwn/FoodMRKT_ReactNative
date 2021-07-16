import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  rating,
  inProgress,
  items,
  price,
  type,
  name,
  date,
  status
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        //item list product home page
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>IDR 289.000</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        //item list product order summary
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>IDR 289.000</Text>
            </View>
            <Text style={styles.items}>{items} items </Text>
          </>
        );
      case 'in-progress':
        //item list product in-progress
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items} items . IDR {price}{' '}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        //item list product past order
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>
                {items} items . IDR {price}{' '}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        //item product
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.desc}>IDR 289.000</Text>
            </View>
            <Rating />
          </>
        );
    }
  };



  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.img} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingRight: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3' 
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E' 
  }
});
