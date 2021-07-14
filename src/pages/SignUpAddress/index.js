import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Address" subtitle="Make sure it’s valid" onBack />
      <ScrollView>
        <View style={styles.container}>
          <TextInput label="Phone No." placeholder="Type your phone number" />
          <Gap height={16} />
          <TextInput label="Address" placeholder="Type your address" />
          <Gap height={16} />
          <TextInput label="House No." placeholder="Type your house number" />
          <Gap height={16} />
          <Select />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={12} />
        
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photoContainer: {
    padding: 24,
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
