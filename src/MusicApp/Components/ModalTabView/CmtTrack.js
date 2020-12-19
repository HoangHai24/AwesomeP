import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Comment from './Comment';
import InputCmt from './InputCmt';

const dataCmts = [
    {
        name: 'Adam',
        content: 'Bài hát rất hay, tôi mong cô ấy ra nhiều sản phẩm hơn nữa',
        numberLike: 321,
        img: require('../../../../assets/img/Adam-Levine-1.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Bieber',
        content: 'Bài hát rất hay',
        numberLike: 123,
        img: require('../../../../assets/img/unnamed.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Gomez',
        content: 'Nice',
        numberLike: 15,
        img: require('../../../../assets/img/Selena-Gomez.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Swift',
        content: 'Tôi mong cô ấy ra nhiều sản phẩm hơn nữa',
        numberLike: 64,
        img: require('../../../../assets/img/2ee3da6e744bcf5a8992551bfbba9934cc-03-taylor-swift-press-cr-Beth-Garrabrant.rsquare.w700.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Puth',
        content: 'Tôi mong cô ấy ra nhiều sản phẩm hơn nữa',
        numberLike: 456,
        img: require('../../../../assets/img/charlie-puth-voicenotes-2018-billboard-embed-15260218863051334300061.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Bolly',
        content: 'Bài hát rất hay',
        numberLike: 0,
        img: require('../../../../assets/img/addictedtoyou.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Michael',
        content: 'Tôi mong cô ấy ra nhiều sản phẩm hơn nữa',
        numberLike: 0,
        img: require('../../../../assets/img/symphony.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Violet',
        content: 'Bài hát rất hay',
        numberLike: 21,
        img: require('../../../../assets/img/riptide.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'David',
        content: 'Tôi mong cô ấy ra nhiều sản phẩm hơn nữa',
        numberLike: 3,
        img: require('../../../../assets/img/pianosonata.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Paul',
        content: 'Bài hát rất hay, tôi mong cô ấy ra nhiều sản phẩm hơn nữa',
        numberLike: 0,
        img: require('../../../../assets/img/lights.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Peter',
        content: 'Bài hát rất hay',
        numberLike: 0,
        img: require('../../../../assets/img/countingstars.jpg'),
        time: '5 ngày trước'
    },
    {
        name: 'Paker',
        content: 'Tải ứng dụng APPMUSIC để xem MV, liveshow, phim ca nhạc hot nhất',
        numberLike: 1,
        img: require('../../../../assets/img/mello5-2.jpeg'),
        time: '5 ngày trước'
    },

]
const CmtTrack = (props) => {
    return(
        <View style={styles.container}>
            <FlatList
                data={dataCmts}
                renderItem={({item}) => (
                    <Comment item={item} />
                )}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator ={false}
            />
            <InputCmt />
        </View>
    )
}
export default CmtTrack;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },

})
