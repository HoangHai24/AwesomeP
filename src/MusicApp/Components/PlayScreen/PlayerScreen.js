import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image, TouchableOpacity,
} from 'react-native';

import TrackPlayer, {
  Capability,
  Event,
} from 'react-native-track-player';
import songs from '../../data';
import {connect} from 'react-redux';
import ComponentController from './ComponentController';
const {width} = Dimensions.get('window');
const widthImg = width - 60;
const PlayerScreen = (props) => {

  const [songIndex, setSongIndex] = useState(0);
  const [volume, setVolume] = useState(1);

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
  // useEffect(() => {
  //   console.log('playscreen track', props.track);
  // }, [props.track])
  const handleSetVol = (val) => {
    TrackPlayer.setVolume(val);
    setVolume(val);
  }
  const renderImg = () => {
    if (songs[songIndex]){
      return (
          <View style={styles.boxImg}>
              <Image
                  style={{
                      width: widthImg,
                      height: widthImg,
                      borderRadius: widthImg,
                      // marginTop: 40,
                      // marginBottom: 70
                  }}
                  source={(props.track !== null) ? {uri: props.track.artwork.uri} : songs[0].artwork}
              />
          </View>

      )
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {/*<View style={{width: '100%', paddingHorizontal: 20}}>*/}
      {/*  /!*<RectButton style={{padding: 16, backgroundColor: 'blue'}} {...{ onPress }} >*!/*/}
      {/*    <Icon name='expand-more' color='#fff' size={30}/>*/}
      {/*  /!*</RectButton>*!/*/}
      {/*</View>*/}
      {renderImg()}
      {/*<View style={{flexDirection: 'row', width: '100%', paddingHorizontal: 20}}>*/}
      {/*    <TouchableOpacity>*/}
      {/*       <IconMate color='#F06966' name="minus-circle-outline" size={25} />*/}
      {/*    </TouchableOpacity>*/}
      {/*    <View style={{flex: 1}}>*/}
      {/*        <Text style={styles.title}>{(props.track !== null) ? props.track.title : null}</Text>*/}
      {/*        <Text style={styles.artist}>{(songs[songIndex]) ? songs[songIndex].artist : null}</Text>*/}
      {/*    </View>*/}
      {/*  <TouchableOpacity>*/}
      {/*        <IconMate color='#F06966' name="heart-outline" size={25} />*/}
      {/*    </TouchableOpacity>*/}
      {/*</View>*/}
      {/*<SliderComp />*/}
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
      {/*<Controller />*/}
      <ComponentController />
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
  container: {
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width
  },
  boxImg: {
      paddingTop: 40,
      height: widthImg + 110,
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

