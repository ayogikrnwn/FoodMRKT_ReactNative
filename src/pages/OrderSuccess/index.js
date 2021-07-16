import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSREG, ILSucOrder} from '../../assets/illustration';
import {Button, Gap} from '../../components';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ILSucOrder />

      <Text style={styles.title}>You’ve Made Order</Text>
      <Text style={styles.subtitle}>Just stay at home while we are</Text>
      <Text style={styles.subtitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.btncont}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={12} />
         <Button
          text="View My Order"
          onPress={() => navigation.navigate('MainApp', {screen: 'Order'})}
          color='#8D92A3'
          textColor='#fff'
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    marginTop: 6,
    color: '#8D92A3',
  },
  btncont: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 80,
  },
});
