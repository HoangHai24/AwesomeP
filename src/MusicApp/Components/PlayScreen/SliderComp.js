import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, {useProgress} from 'react-native-track-player';

const widthScreen = Dimensions.get('window').width;
export default function SliderComp() {
  const {position, duration} = useProgress();

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={{width: widthScreen - 40, height: 40}}
        minimumValue={0}
        value={position}
        maximumValue={duration}
        minimumTrackTintColor="#F06966"
        onSlidingComplete={handleChange}
        maximumTrackTintColor='rgba(0, 0, 0, 0.11)'
        thumbTintColor="#F06966"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>{formatTime(position)}</Text>
        <Text style={styles.timers}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  timers: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
