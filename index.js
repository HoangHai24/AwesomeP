/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import store from './src/MusicApp/store'
import Service from './service'

AppRegistry.registerComponent(appName, () => App);
// TrackPlayer.registerPlaybackService(() => require('./service.js'));
TrackPlayer.registerPlaybackService(() => Service(store.dispatch))
