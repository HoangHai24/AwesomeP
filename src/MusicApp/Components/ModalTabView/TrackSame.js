import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const TrackSame = (props) => {
    return(
        <View style={styles.container}>
            <Image
                style={{width:55, height: 55, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginRight: 12}}
                source={props.item.artwork}
            />
            <View style={{flex: 1, paddingTop: 7}}>
                <Text style={{marginBottom: 4, fontSize: 16, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold'}}>{props.item.title}</Text>
                <Text style={{fontSize: 12, fontWeight: '300', color: 'rgba(0, 0, 0, 0.7)'}}>{props.item.artist}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <IconIon style={{fontSize: 25, color: 'rgba(0, 0, 0, 0.7)'}} name='ellipsis-vertical-sharp' />
            </View>
        </View>
    )
}
export default TrackSame;
const styles = StyleSheet.create({
    container: {
        height: 57,
        flexDirection: 'row',
        marginBottom: 10,
        paddingRight: 10
    }
})
