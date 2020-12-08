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
import IconMate from 'react-native-vector-icons/MaterialIcons';

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
            <TouchableOpacity onPress={() => handleReplay()}>
              <IconMate color='green' name="repeat" size={45} />
            </TouchableOpacity>
        );
      case 2:
        return (
            <TouchableOpacity onPress={() => handleReplay()}>
              <IconMate color='green' name="repeat-one" size={45} />
            </TouchableOpacity>
        );
      default:
        return (
            <TouchableOpacity onPress={() => handleReplay()}>
              <IconMate color='#fff' name="repeat" size={45} />
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
    switch (props.state) {
      case 'playing':
        return <Icon color="green" name="pause" size={45} />;
      case 'paused':
        return <Icon color="#fff" name="play-arrow" size={45} />;
      default:
        return <ActivityIndicator size={45} color="#fff"/>;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleShuffle()}>
        <Icon color={(props.shuffle) ? 'green' : '#fff'} name="dynamic-feed" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePrev()}>
        <Icon color="#fff" name="skip-previous" size={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePlayPause()}>
        {returnPlayBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNext()}>
        <Icon color="#fff" name="skip-next" size={45} />
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
    width: 250,
  },
});
