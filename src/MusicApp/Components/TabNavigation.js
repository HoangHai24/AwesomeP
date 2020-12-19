import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather'

const TabNavigation = (props) => {
    return(
        <View style={styles.container}>
            <View style={{width: 1}}></View>
            <TouchableOpacity style={styles.boxTab} onPress={() => alert('Home Screen')}>
                <IconFeather size={25} color='#F06966' name='home' />
                <Text style={{fontSize: 10, color: '#F06966'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTab} onPress={() => alert('Discovery Screen')}>
                <IconFeather size={25} color='#A7A7A7' name='disc' />
                <Text style={styles.label}>Khám phá </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTab} onPress={() => alert('Search Screen')}>
                <IconFeather size={25} color='#A7A7A7' name='search' />
                <Text style={styles.label}>Tìm kiếm </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxTab} onPress={() => alert('User Screen')}>
                <IconFeather size={25} color='#A7A7A7' name='user' />
                <Text style={styles.label}>Cá nhân </Text>
            </TouchableOpacity>
            <View style={{width: 1}}></View>
        </View>
    )
}
export default TabNavigation;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        flexDirection: "row",
        borderTopColor: "black",
        borderWidth: 0.2,
        justifyContent: 'space-between',
        paddingTop: 8
    },
    boxTab: {
        // backgroundColor: 'red'
    },
    label: {
        fontSize: 10,
        color: '#A7A7A7'
    }
})
