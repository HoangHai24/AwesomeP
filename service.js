import TrackPlayer, { Event } from "react-native-track-player";
import { Alert } from 'react-native';
import {playbackState, setUserPlaying, playbackTrack, playbackQueueEnded} from './src/MusicApp/store/actions';

async function Handler(dispatch) {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        // TrackPlayer.play();
        dispatch(setUserPlaying(true))
    });
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        // TrackPlayer.pause();
        dispatch(setUserPlaying(false))
    });
    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());
    TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());
    TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.destroy());
    TrackPlayer.addEventListener(Event.RemoteSeek, ({ position }) => TrackPlayer.seekTo(position));
    TrackPlayer.addEventListener(Event.PlaybackState, () => dispatch(playbackState()));
    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, () => dispatch(playbackTrack()));
    TrackPlayer.addEventListener(Event.PlaybackQueueEnded, ({position}) => dispatch(playbackQueueEnded(position)));
    TrackPlayer.addEventListener(Event.PlaybackError, (error) => Alert.alert('Co loi xay ra, vui long thu lai!'))
}

export default dispatch => Handler.bind(null, dispatch)
