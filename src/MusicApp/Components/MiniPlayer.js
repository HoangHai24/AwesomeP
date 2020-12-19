import React, {useEffect} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {itemPlay, setReplay, setUserPlaying} from '../store/actions';
// import Icon from 'react-native-vector-icons/AntDesign';
import IconMate from 'react-native-vector-icons/MaterialIcons';
import IconMateCom from 'react-native-vector-icons/MaterialCommunityIcons';

import TrackPlayer, {useProgress} from 'react-native-track-player';

interface MiniPlayerProps {
    onPress: () => void;
    value: '',
    track: null,
    state: null,
    replay: false,
    onSetUserPlaying: null,
    onSetReplay: null
}

const MiniPlayer = ({onPress, track, state, replay, onSetUserPlaying, onSetReplay}: MiniPlayerProps) => {
    const {position} = useProgress();

    useEffect(() => {
        console.log('track Miniplayer', track);
    }, [])
    const renderState = () => {
        if (state === 'playing'){
            return (
                <TouchableOpacity style={styles.boxIcon} onPress={() => onSetUserPlaying(false)}>
                    <IconMateCom style={styles.iconControl} name="pause-circle" />
                </TouchableOpacity>
            )
        }
        else return (
                <TouchableOpacity style={styles.boxIcon} onPress={() => onSetUserPlaying(true)}>
                    <IconMateCom style={styles.iconControl} name="play-circle" />
                </TouchableOpacity>
        )
    }
    const handleReplay = () => {
        onSetReplay()
    }
    const renderReplay = () => {
        switch (replay){
            case 1:
                return (
                    <TouchableOpacity onPress={() => handleReplay()}>
                        <IconMate color='green' name="repeat" size={24} />
                    </TouchableOpacity>
                );
            case 2:
                return (
                    <TouchableOpacity onPress={() => handleReplay()}>
                        <IconMate color='green' name="repeat-one" size={24} />
                    </TouchableOpacity>
                );
            default:
                return (
                    <TouchableOpacity onPress={() => handleReplay()}>
                        <IconMate color='#fff' name="repeat" size={24} />
                    </TouchableOpacity>
                );
        }
    }
    const handleNext = async () => {
        await TrackPlayer.skipToNext()
    }
    const handlePrev = async () => {
        if (position >= 4){
            await TrackPlayer.seekTo(0)
        }
        else{
            let queue = await TrackPlayer.getQueue();
            let currentTrack = await TrackPlayer.getCurrentTrack();
            if (queue[0].id === currentTrack){
                await TrackPlayer.seekTo(0)
            }
            else await TrackPlayer.skipToPrevious();
        }

    }
    const renderImg =() => {
        if (track !== null){
            return (
                <Image
                    style={styles.img}
                    source={{uri: track.artwork.uri}}
                />
            )
        }
        else return null;
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                {renderImg()}
                <View style={{flex: 1}}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.trackName}>{(track !== null) ? track.title : null}</Text>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.artist}>{(track !== null) ? track.artist : null}</Text>
                </View>
                <View style={styles.boxControl}>
                    <TouchableOpacity style={styles.boxIcon}>
                        <IconMateCom style={styles.iconControl} name="heart-outline" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxIcon} onPress={() => handlePrev()}>
                        <IconMateCom style={styles.iconControl} name="skip-previous-circle" />
                    </TouchableOpacity>
                    {renderState()}
                    <TouchableOpacity style={styles.boxIcon} onPress={() => handleNext()}>
                        <IconMateCom style={styles.iconControl} name="skip-next-circle" />
                    </TouchableOpacity>
                </View>

                {/*{renderReplay()}*/}
            </View>
        </TouchableWithoutFeedback>
    );
};
const mapStateToProps = (state) => {
    return{
        track: state.playerReducer.track,
        state: state.playerReducer.state,
        replay: state.playerReducer.replay
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onSetUserPlaying: (bol) => {
            dispatch(setUserPlaying(bol))
        },
        onSetReplay: (bol) => {
            dispatch(setReplay(bol))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        borderTopWidth: 3,
        borderColor: '#F06966'
    },
    trackName: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    artist: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 12,
        fontWeight: '300'
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 10,
        marginRight: 13
    },
    boxControl: {
        width: 'auto',
        flexDirection: 'row',
        // flex: 1,
        justifyContent: 'flex-end'
    },
    boxIcon: {
        marginLeft: 10
    },
    iconControl: {
        color: '#F06966',
        fontSize: 35
    }
});
