import TrackPlayer, {Capability} from 'react-native-track-player';
import * as types from './actionType';

export const initializePlayback = () => {
    return async (dispatch, getState) => {
        TrackPlayer.setupPlayer().then(async () => {
            const {item} = getState().playlistReducer;
            await TrackPlayer.reset()
            await TrackPlayer.add(item);
            await TrackPlayer.updateOptions({
                stopWithApp: false,
                alwaysPauseOnInterruption: true,
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                ],
            });

        });
        setInterval(async () => {
            const [position, duration] = await Promise.all([
                TrackPlayer.getPosition(),
                TrackPlayer.getDuration()
            ])
            const { replay, shuffle, track } = getState().playerReducer;
            console.log('position', position);
            console.log('duration', duration)
            if(position && duration && position >= Math.floor(duration)){
                if (replay){
                    await TrackPlayer.seekTo(0);
                }
                if(shuffle){
                    let queue = await TrackPlayer.getQueue();
                    console.log('queue', queue);
                    if (track !== null){
                        queue = queue.filter(item => item.id !== track.id)
                    }
                    const count = queue.length - 1;
                    const index = Math.floor(Math.random() * count)
                    await TrackPlayer.skip(queue[index].id)
                }
            }

        }, 500)
        dispatch({ type: types.INIT })

    }
}

export function playbackState() {
    return async dispatch => {
        const state = await TrackPlayer.getState()
        dispatch({
            type: types.STATE,
            payload: {
                state
            }
        })
    }
}

export const playbackTrack = () => {
    return async dispatch => {
        const trackId = await TrackPlayer.getCurrentTrack();
        const duration = await TrackPlayer.getDuration()
        const track = await TrackPlayer.getTrack(trackId);
        console.log('duration', duration);
        console.log('track', track)
        dispatch({
            type: types.TRACK,
            payload: {
                track,
                duration
            }
        })
    }
}

export const setUserPlaying = (playing) => {
    return (dispatch, getState) => {
        const { track } = getState().playerReducer;
        if (track) {
            if (playing) TrackPlayer.play()
            else TrackPlayer.pause();
            dispatch({
                type: types.PLAYING,
                payload: {
                    playing
                }
            })
        }
    }
}

export const setShuffle = (shuffle) => {
    return {
        type: types.SHUFFLE,
        payload: {
            shuffle
        }
    }
}

export const setReplay = (replay) => {
    return {
        type: types.REPLAY,
        payload: {
            replay
        }
    }
}

export function itemPlay(id) {
    return async (dispatch, getState) => {
        // const { id: playId, items } = getState().playlistReducer
        // console.log('queue', await TrackPlayer.getQueue());
        await TrackPlayer.skip(id);
        // console.log('get track',await TrackPlayer.getCurrentTrack());
        await TrackPlayer.play();
        dispatch(setUserPlaying(true))
        // return;
        // if (playlistId !== playId) {
        //     await TrackPlayer.reset()
        //     dispatch(playerReset())
        //     const addList = items
        //         .find(item => item.id === playlistId)
        //         .sounds.map(({ title, artist, artwork, id, source }) => ({
        //             id,
        //             title,
        //             artist,
        //             artwork,
        //             url: source,
        //         }))
        //     await TrackPlayer.add(addList)
        //     dispatch(setPlaylist(playlistId))
        // }
        // await TrackPlayer.skip(id)
        // await new Promise(resolve => setTimeout(resolve, 100))
        // dispatch(setUserPlaying(true))
    }
}

export const playbackQueueEnded = (position) => {

}
