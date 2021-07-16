import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILEmpty} from '../../../assets';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ILEmpty />

      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subtitle}>Seems like you have not</Text>
      <Text style={styles.subtitle}>ordered any food yets</Text>
      <Gap height={30} />
      <View style={styles.btncont}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
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
