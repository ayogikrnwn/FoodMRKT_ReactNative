import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DUMprof } from '../../../assets';

const HomeProfile = () => {
    return (
        <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Food Market</Text>
          <Text style={styles.desc}>Let’s get some foods</Text>
        </View>
        <Image source={DUMprof} style={styles.profile} />
      </View>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    appName: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: '#020202',
      },
      desc: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: '#8D92A3',
      },
    
      profileContainer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      },
})
