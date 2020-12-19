import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import songs from '../../data';
import TrackSame from './TrackSame';
import ListRecommend from './ListRecommend';
import ArtistSame from './ArtistSame';
import artistSame from '../../artist';
const trackSame = songs.slice(5, 10);
// const artistSame = [
//     {
//         name: 'Selena Gomez',
//         img: require('../../../../assets/img/Selena-Gomez.jpg')
//     },
//     {
//         name: 'Adam Levine',
//         img: require('../../../../assets/img/Adam-Levine-1.jpg')
//     },
//     {
//         name: 'Charlie Puth',
//         img: require('../../../../assets/img/charlie-puth-voicenotes-2018-billboard-embed-15260218863051334300061.jpg')
//     },
//     {
//         name: 'Taylor Swift',
//         img: require('../../../../assets/img/2ee3da6e744bcf5a8992551bfbba9934cc-03-taylor-swift-press-cr-Beth-Garrabrant.rsquare.w700.jpg')
//     },
//     {
//         name: 'Justin Bieber',
//         img: require('../../../../assets/img/unnamed.jpg')
//     }
// ]
const InfomationMore = (props) => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.boxInfoTrack}>
                <View style={styles.infoTrackCol}>
                    <Text style={styles.infoTrackColF}>Bài hát</Text>
                    <Text style={styles.infoTrackColS}>High By The Beach</Text>
                </View>
                <View style={styles.infoTrackCol}>
                    <Text style={styles.infoTrackColF}>Album </Text>
                    <Text style={styles.infoTrackColS}>High By The Beach (Single)</Text>
                </View>
                <View style={styles.infoTrackCol}>
                    <Text style={styles.infoTrackColF}>Nghệ sĩ</Text>
                    <Text style={styles.infoTrackColS}>Lana Del Rey</Text>
                </View>
                <View style={styles.infoTrackCol}>
                    <Text style={styles.infoTrackColF}>Nhạc sĩ </Text>
                    <Text style={styles.infoTrackColS}>Lana Del Rey</Text>
                </View>
                <View style={styles.infoTrackCol}>
                    <Text style={styles.infoTrackColF}>Thể loại </Text>
                    <Text style={styles.infoTrackColS}>Indie, Dream Pop</Text>
                </View>
            </View>
            <Text style={styles.sameTrackTit}>Bài hát tương tự </Text>
            <FlatList
                data={trackSame}
                renderItem={({item}) => (
                    <TrackSame item={item} />
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator ={false}
            />
            <View style={styles.rowSeeMore}>
                <View style={styles.btnSeeMore}>
                    <Text style={styles.textSeeMore}>Xem thêm </Text>
                </View>
            </View>
            <Text style={styles.sameTrackTit}>Danh sách phát đề xuất</Text>
            <FlatList
                horizontal={true}
                data={trackSame}
                renderItem={({item}) => (
                    <ListRecommend item={item} />
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator ={false}
            />
            <Text style={styles.sameTrackTit}>Nghệ sĩ tương tự</Text>
            <FlatList
                horizontal={true}
                data={artistSame}
                renderItem={({item}) => (
                    <ArtistSame item={item} />
                )}
                keyExtractor={item => item.name}
                showsHorizontalScrollIndicator ={false}
            />
            <Text style={styles.textRecommend}>Thưởng thức thêm nhạc của</Text>
            <Text style={styles.recommendOfArtist}>Lana Del Rey</Text>
            <FlatList
                horizontal={true}
                data={trackSame}
                renderItem={({item}) => (
                    <ListRecommend item={item} />
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator ={false}
            />
            <View style={[styles.boxInfoTrack, {paddingBottom: 20, marginTop: 20}]}>
                <Text style={styles.desArtist}>Giới thiệu về nghệ sĩ</Text>
                <Text style={styles.desArtistContent}>Elizabeth Woolridge Grant (sinh ngày 21 tháng 6 năm 1985), được biết đến với nghệ danh Lana Del Rey, là một ca sĩ và nghệ sĩ sáng tác nhạc người Mỹ. Lana Del Rey bắt đầu viết nhạc ở tuổi 18 và cô đã ký được hợp đồng thu âm đầu tiên của mình với hãng đĩa 5 Points vào năm 2007. Cô phát hành album đầu tay mang tên "Lana Del Ray aka Lizzy Grant" vào tháng 1 năm 2010, tuy nhiên album này sau đó đã bị gỡ ra khỏi những hệ thống cửa hàng nhạc chỉ ba tháng sau đó. Cô cũng kết thúc hợp đồng của mình với hãng 5 Points Records trong tháng 4 năm 2010.
                </Text>
            </View>
            <View style={{height: 100}}>

            </View>
        </ScrollView>
    )
}
export default InfomationMore;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 30,
        position: 'relative'
    },
    boxInfoTrack: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    infoTrackCol: {
        flexDirection: 'row',
        marginBottom: 20
    },
    infoTrackColF: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: '500',
        marginRight: 50
    },
    infoTrackColS: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: '700'
    },
    desArtist: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    desArtistContent: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.7)',
        fontWeight: '500'
    },
    sameTrackTit: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20
    },
    rowSeeMore: {
        width: '100%',
        alignItems: 'center',
        marginTop: 13
    },
    btnSeeMore: {
        backgroundColor: '#fff',
        height: 20,
        width: 80,
        borderWidth: 0.2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    textSeeMore: {
        fontSize: 11,
        fontWeight: '500',
        color: '#F06966'
    },
    textRecommend: {
        fontSize: 20,
        color: '#F06966',
        fontWeight: '500',
        marginBottom: 8,
        marginTop: 10
    },
    recommendOfArtist: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    }
});

