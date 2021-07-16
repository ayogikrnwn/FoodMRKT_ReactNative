import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICFwd } from '../../../assets';

const ItemListMenu = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <ICFwd />
        </View>
    )
}

export default ItemListMenu;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
})
