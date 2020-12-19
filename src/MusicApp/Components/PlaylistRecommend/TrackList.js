import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {setReplay, setShuffle, setUserPlaying} from '../../store/actions';
import IconIon from 'react-native-vector-icons/Ionicons';

const TrackList = (props) => {
    const renderPlayChart = () => {
        if (props.track !== null && props.track.id === props.item.id){
            return(
                <View style={{position: 'absolute', width: 55, height: 55, justifyContent: 'center', alignItems: 'center'}}>
                    <IconIon style={{fontSize: 25, color: '#fff'}} name='stats-chart' />
                </View>
            )
        }
        else return null
    }
    return(
        <View style={[styles.container, {backgroundColor: (props.track !== null && props.track.id === props.item.id) ? 'rgba(0, 0, 0, 0.25)' : '#fff'}]}>
            <View style={{position: 'relative'}}>
                <Image
                    style={{width:55, height: 55, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginRight: 12}}
                    source={{
                        uri: props.item.artwork.uri,
                    }}
                />
                {renderPlayChart()}
            </View>

            <View style={{flex: 1, paddingTop: 7}}>
                <Text style={{marginBottom: 4, fontSize: 16, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold'}}>{props.item.title}</Text>
                <Text style={{fontSize: 12, fontWeight: '300', color: 'rgba(0, 0, 0, 0.7)'}}>{props.item.artist}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <IconIon style={{fontSize: 45, color: 'rgba(0, 0, 0, 0.7)'}} name='ios-reorder-two-outline' />
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return{
        track: state.playerReducer.track,
        // playing: state.playerReducer.playing,
        // replay: state.playerReducer.replay,
        // shuffle: state.playerReducer.shuffle,
        // state: state.playerReducer.state,
        // playlist: state.playlistReducer.item
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        // onSetUserPlaying: (bol) => {
        //     dispatch(setUserPlaying(bol))
        // },
        // onSetReplay: () => {
        //     dispatch(setReplay())
        // },
        // onSetShuffle: (val) => {
        //     dispatch(setShuffle(val))
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
const styles = StyleSheet.create({
    container: {
        height: 57,
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 20
    }
})
