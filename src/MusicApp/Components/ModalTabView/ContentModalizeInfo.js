import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import IconMate from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMa from 'react-native-vector-icons/MaterialIcons'
import IconSim from 'react-native-vector-icons/SimpleLineIcons'

const ContentModalizeInfo = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.boxMainOption}>
                <View style={styles.mainOption}>
                    <IconMate color='rgba(0,0,0,0.7)' size={30} name='clock-alert-outline' />
                    <Text style={styles.textMainOp}>Hẹn giờ </Text>
                </View>
                <View style={styles.mainOption}>
                    <IconSim color='rgba(0,0,0,0.7)' size={30} name='equalizer' />
                    <Text style={styles.textMainOp}>Bộ chỉnh âm</Text>
                </View>
                <View style={styles.mainOption}>
                    <IconSim color='rgba(0,0,0,0.7)' size={30} name='screen-smartphone' />
                    <Text style={styles.textMainOp}>Loa ngoài</Text>
                </View>
            </View>
            <View style={styles.boxInfo}>
                <Image style={styles.image} source={require('../../../../assets/img/countingstars.jpg')}/>
                <View style={styles.boxText}>
                    <Text style={styles.name}>Playlist 1</Text>
                    <Text style={styles.artist}>Artist</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMate name='heart-outline' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Thêm vào thư viện </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMate name='play-box-multiple-outline' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Phát kế tiếp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMate name='radio-tower' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Mở Radio bài hát </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMa name='addchart' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Thêm vào playlist </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMate name='download-outline' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Tải về </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMate name='share-outline' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Chia sẻ </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMa name='music-video' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Xem album </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMa name='person-pin' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Xem nghệ sĩ </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMate name='flag-outline' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Báo lỗi bài hát</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.boxIcon}>
                    <IconMa name='report' size={23} color='rgba(0,0,0,0.7)' />
                </View>
                <Text style={styles.textOption}>Chặn </Text>
            </TouchableOpacity>

            <View style={{height: 100}}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    boxMainOption: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    mainOption: {
        alignSelf: 'baseline',
        alignItems: 'center'
    },
    textMainOp: {
        color: 'rgba(0,0,0,0.9)',
        marginTop: 5
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    boxInfo: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    boxText: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.7)'
    },
    artist: {
        color: 'rgba(0,0,0,0.7)',
        marginTop: 5
    },
    options: {
        flexDirection: 'row',
        paddingTop: 15
    },
    boxIcon: {
        marginRight: 5,
        width: 30
    },
    textOption: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.9)',
        fontWeight: '400',
    }
})
export default ContentModalizeInfo;
