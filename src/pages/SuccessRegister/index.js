import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSREG} from '../../assets/illustration';
import {Button, Gap} from '../../components';

const SuccessRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ILSREG />

      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.btncont}>
        <Button
          text="Find Foods"
          onPress={() => navigation.navigate('SuccessRegister')}
        />
      </View>
    </View>
  );
};

export default SuccessRegister;

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
