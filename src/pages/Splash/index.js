import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILIcon} from '../../assets/illustration';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ILIcon />
      <View style={styles.content}>
        <Text style={styles.text}>Food Market</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    marginTop: 38,
  },
});
