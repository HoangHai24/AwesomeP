import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const ListRecommend = (props) => {
    return(
        <View style={styles.container}>
            <Image
                style={{width:150, height: 150, borderRadius: 10}}
                source={
                    props.item.artwork
                }
            />
            <View style={styles.moreInfo}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: '700', paddingLeft: 10}}>Dont Smile At Me</Text>
                <Text style={{fontSize: 14, color: '#fff', fontWeight: '300', paddingLeft: 10}}>Playlist</Text>
            </View>
        </View>
    )
}
export default ListRecommend;
const styles = StyleSheet.create({
    container: {
        // height: 150,
        width: 150,
        flexDirection: 'row',
        marginBottom: 10,
        marginRight: 30,
        position: 'relative'
    },
    moreInfo: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})
