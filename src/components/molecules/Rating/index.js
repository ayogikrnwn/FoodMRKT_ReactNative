import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICStar, ICStarOff } from '../../../assets';

const Rating = () => {
    return (
        <View style={styles.ratingcont}>
        <View style={styles.starcont}>
          <ICStar />
          <ICStar />
          <ICStar />
          <ICStar />
          <ICStarOff />
        </View>
        <Text>4.5</Text>
      </View>
    )
}

export default Rating;

const styles = StyleSheet.create({
    ratingcont: {
        flexDirection: 'row',
      },
      starcont: {
        flexDirection: 'row',
      },
})
