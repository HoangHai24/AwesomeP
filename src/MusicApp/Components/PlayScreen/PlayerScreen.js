import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
    Image
} from 'react-native';

import TrackPlayer, {
  Capability,
  Event,
} from 'react-native-track-player';
import songs from '../../data';
import Controller from './Controller';
import SliderComp from './SliderComp';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Track from '../Album/Track';
import {connect} from 'react-redux';
import {itemPlay} from '../../store/actions';

const PlayerScreen = (props) => {

  // const isPlayerReady = useRef(false);
  const index = useRef(0);
  const [songIndex, setSongIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [replay, setReplay] = useState(false);

  // useEffect(() => {
  //   TrackPlayer.setupPlayer().then(async () => {
  //     console.log('Player ready', await TrackPlayer.getVolume());
  //     await TrackPlayer.reset();
  //     await TrackPlayer.add(songs);
  //     TrackPlayer.play();
  //     isPlayerReady.current = true;
  //
  //     await TrackPlayer.updateOptions({
  //       stopWithApp: false,
  //       alwaysPauseOnInterruption: true,
  //       capabilities: [
  //         Capability.Play,
  //         Capability.Pause,
  //         Capability.SkipToNext,
  //         Capability.SkipToPrevious,
  //       ],
  //     });
  //     TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (e) => {
  //       const trackId = (await TrackPlayer.getCurrentTrack()) - 1;
  //       if (trackId !== index.current) {
  //         setSongIndex(trackId);
  //       }
  //     });
  //   });
  //   return () => {
  //     TrackPlayer.destroy();
  //     // exitPlayer();
  //   };
  // }, []);
  // change the song when index changes
  // useEffect( () => {
  //   if (isPlayerReady.current) {
  //     // console.log('song index change id', typeof songs[songIndex].id, songs[songIndex].id)
  //     TrackPlayer.skip(songs[songIndex].id)
  //       .then(async (_) => {
  //         console.log('changed track');
  //          await TrackPlayer.play();
  //       })
  //       .catch((e) => console.log('error in changing track ', e));
  //   }
  //   index.current = songIndex;
  // }, [songIndex]);
  useEffect(() => {
    console.log('playscreen track', props.track);
  }, [])

  const goNext = async () => {
    setSongIndex(index.current + 1)
    // await TrackPlayer.play();
  };
  const goPrv = async () => {
    setSongIndex(index.current - 1)
    // await TrackPlayer.play();
  };
  const handleSetVol = (val) => {
    TrackPlayer.setVolume(val);
    setVolume(val);
  }
  const renderImg = () => {
    if (songs[songIndex]){
      return (
          <Image
              style={{width: 150, height: 150}}
              source={(props.track !== null) ? {uri: props.track.artwork.uri} : songs[0].artwork}
          />
      )
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', paddingHorizontal: 20}}>
        {/*<RectButton style={{padding: 16, backgroundColor: 'blue'}} {...{ onPress }} >*/}
          <Icon name='expand-more' color='#fff' size={30}/>
        {/*</RectButton>*/}
      </View>
      {renderImg()}
      <View>
        <Text style={styles.title}>{(props.track !== null) ? props.track.title : null}</Text>
        <Text style={styles.artist}>{(songs[songIndex]) ? songs[songIndex].artist : null}</Text>
      </View>

      <SliderComp />
      <Text style={{color: '#fff'}}>Volume</Text>
      <Slider
          style={{width: 150, height: 40}}
          minimumValue={0}
          value={volume}
          maximumValue={1}
          minimumTrackTintColor="#ffffff"
          onSlidingComplete={handleSetVol}
          maximumTrackTintColor="red"
          thumbTintColor="#fff"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>{Math.floor(volume*10)}</Text>
        <Text style={styles.timers}>{10}</Text>
      </View>

      <Controller />
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  return{
    track: state.playerReducer.track
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    // onItemPlay: (id) => {
    //   dispatch(itemPlay(id))
    // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PlayerScreen)
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  container: {
    backgroundColor: '#000',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
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

