import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const ArtistSame = (props) => {
    return(
        <View style={styles.container}>
            <Image
                style={{width:150, height: 150, borderRadius: 150}}
                source={
                    props.item.img
                }
            />
            <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.7)', fontWeight: '700', paddingLeft: 10, textAlign: 'center', marginTop: 10}}>{props.item.name}</Text>
            {/*<View style={styles.moreInfo}>*/}
            {/*</View>*/}
        </View>
    )
}
export default ArtistSame;
const styles = StyleSheet.create({
    container: {
        // height: 150,
        width: 150,
        // flexDirection: 'row',
        marginBottom: 10,
        marginRight: 30,
        // position: 'relative'
    },
    moreInfo: {
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        // height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 10,
        justifyContent: 'center'
    }
})
