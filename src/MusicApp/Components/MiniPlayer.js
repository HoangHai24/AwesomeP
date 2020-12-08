import React, {useEffect} from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View } from "react-native";
import {connect} from 'react-redux';
import {itemPlay, setReplay, setUserPlaying} from '../store/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMate from 'react-native-vector-icons/MaterialIcons'
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

    const renderState = () => {
        if (state === 'playing'){
            return (
                <TouchableOpacity onPress={() => onSetUserPlaying(false)}>
                    <Icon name="pausecircleo" color="green" size={24} />
                </TouchableOpacity>
            )
        }
        else return (
                <TouchableOpacity onPress={() => onSetUserPlaying(true)}>
                    <Icon name="playcircleo" color="white" size={24} />
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

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{(track !== null) ? track.title : null}</Text>
                <TouchableOpacity onPress={() => handlePrev()}>
                    <IconMate color="#fff" name="skip-previous" size={24} />
                </TouchableOpacity>
                {renderState()}
                <TouchableOpacity onPress={() => handleNext()}>
                    <IconMate color="#fff" name="skip-next" size={24} />
                </TouchableOpacity>
                {renderReplay()}
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
        backgroundColor: "#272829",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16
    },
    text: {
        color: "green",
        fontSize: 18,
        fontWeight: 'bold'
    }
});
