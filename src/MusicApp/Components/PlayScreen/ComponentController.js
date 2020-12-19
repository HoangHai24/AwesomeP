import React, {useEffect, useState, useRef} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Text, SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, {
    usePlaybackState,
    useProgress
} from 'react-native-track-player';
import {connect} from 'react-redux';
import {setUserPlaying, setReplay, setShuffle} from '../../store/actions';
import IconMate from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons'
import songs from '../../data';
import SliderComp from './SliderComp';
import Controller from './Controller';
const ComponentController = (props) => {
    const [songIndex, setSongIndex] = useState(0);
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', width: '100%'}}>
                <TouchableOpacity>
                    <IconMate color='#F06966' name="minus-circle-outline" size={25} />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{(props.track !== null) ? props.track.title : null}</Text>
                    <Text style={styles.artist}>{(songs[songIndex]) ? songs[songIndex].artist : null}</Text>
                </View>
                <TouchableOpacity>
                    <IconMate color='#F06966' name="heart-outline" size={25} />
                </TouchableOpacity>
            </View>


            <SliderComp />
            {/*<Text style={{color: '#fff'}}>Volume</Text>*/}
            {/*<Slider*/}
            {/*    style={{width: 150, height: 40}}*/}
            {/*    minimumValue={0}*/}
            {/*    value={volume}*/}
            {/*    maximumValue={1}*/}
            {/*    minimumTrackTintColor="#ffffff"*/}
            {/*    onSlidingComplete={handleSetVol}*/}
            {/*    maximumTrackTintColor="red"*/}
            {/*    thumbTintColor="#fff"*/}
            {/*/>*/}
            {/*<View style={styles.timeContainer}>*/}
            {/*  <Text style={styles.timers}>{Math.floor(volume*10)}</Text>*/}
            {/*  <Text style={styles.timers}>{10}</Text>*/}
            {/*</View>*/}

            <Controller />
        </View>
    )
}
const mapStateToProps = (state) => {
    return{
        track: state.playerReducer.track
    }
}
export default connect(mapStateToProps)(ComponentController);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.7)',
        marginBottom: 10
    },
    artist: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.7)',
        textTransform: 'capitalize',
    },
    timers: {
        color: '#fff',
        fontSize: 16,
    },
    timeContainer: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-between',
        // backgroundColor: 'yellow'
    },
});
