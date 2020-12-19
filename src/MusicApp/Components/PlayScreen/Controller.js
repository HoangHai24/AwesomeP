import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
    Text
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

const Controller = (props) => {
  const {position} = useProgress();
  // const playbackState = usePlaybackState();
  // const [isPlaying, setIsPlaying] = useState('paused')
  // useEffect(() => {
  //   if (playbackState === 'playing' || playbackState === 3) {
  //     setIsPlaying('playing')
  //   } else if (playbackState === 'paused' || playbackState === 2) {
  //     setIsPlaying('paused')
  //   } else {
  //     setIsPlaying('loading')
  //   }
  // }, [playbackState]);
  // const onPlayPause = () => {
  //   if (isPlaying === 'playing') {
  //     TrackPlayer.pause();
  //   } else if (isPlaying === 'paused') {
  //     TrackPlayer.play();
  //   }
  // };
  const handlePlayPause = () => {
    props.onSetUserPlaying(!props.playing)
  }
  const handleShuffle = () => {
    props.onSetShuffle(!props.shuffle)
  }
  const handleReplay = () => {
    props.onSetReplay()
  }
  const renderReplay = () => {
    switch (props.replay){
      case 1:
        return (
            <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => handleReplay()}>
              <IconMate color='#F06966' name="repeat" size={30} />
            </TouchableOpacity>
        );
      case 2:
        return (
            <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => handleReplay()}>
              <IconMate color='#F06966' name="repeat-once" size={30} />
            </TouchableOpacity>
        );
      default:
        return (
            <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => handleReplay()}>
              <IconMate color='rgba(240, 105, 102, 0.3)' name="repeat" size={30} />
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
    else {
      let queue = await TrackPlayer.getQueue();
      let currentTrack = await TrackPlayer.getCurrentTrack();
      if (queue[0].id === currentTrack){
        await TrackPlayer.seekTo(0)
      }
      else await TrackPlayer.skipToPrevious();
    }

  }

  const returnPlayBtn = () => {
    if (props.state === 'playing'){
        return <IconMate color="#F06966" name="pause-circle" size={70} />;
    }
    else return <IconMate color="#F06966" name="play-circle" size={70} />;
        // switch (props.state) {
    //   case 'playing':
    //     return <IconMate color="#F06966" name="pause-circle" size={60} />;
    //   case 'paused':
    //     return <IconMate color="#F06966" name="play-circle" size={60} />;
    //   default:
    //     return <ActivityIndicator size={60} color="#F06966"/>;
    // }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => handleShuffle()}>
        <IconIon color={(props.shuffle) ? '#F06966' : 'rgba(240, 105, 102, 0.3)'} name="shuffle-sharp" size={35} />
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => handlePrev()}>
        <IconMate color="#F06966" name="skip-previous-circle" size={50} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePlayPause()}>
        {returnPlayBtn()}
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => handleNext()}>
        <IconMate color="#F06966" name="skip-next-circle" size={50} />
      </TouchableOpacity>
      {renderReplay()}
    </View>
  );
}

const mapStateToProps = (state) => {
  return{
    track: state.playerReducer.track,
    playing: state.playerReducer.playing,
    replay: state.playerReducer.replay,
    shuffle: state.playerReducer.shuffle,
    state: state.playerReducer.state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onSetUserPlaying: (bol) => {
      dispatch(setUserPlaying(bol))
    },
    onSetReplay: () => {
      dispatch(setReplay())
    },
    onSetShuffle: (val) => {
      dispatch(setShuffle(val))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Controller)
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
  },
  btn: {
    zIndex: 1,
    alignSelf: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 100,
    borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  }
});
