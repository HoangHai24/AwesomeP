import * as types from '../actions/actionType';
 const initState = {
     duration: null,
     init: false,
     state: null,
     track: null,
     shuffle: false,
     replay: 0, /*0: no, 1: replay list, 2: replay track*/
     playing: false,
     // replayList: false
 }

const playerReducer = (state = initState, action) => {
     switch (action.type){
         case types.INIT:
             return {
                 ...state,
                 init: true
             }
         case types.STATE:
             return {
                 ...state,
                 state: action.payload.state
             }
         case types.TRACK:
             return {
                 ...state,
                 track: action.payload.track,
                 duration: action.payload.track
             }
         case types.PLAYING:
             return {
                 ...state,
                 playing: action.payload.playing
             }
         case types.REPLAY:
             return {
                 ...state,
                 replay: action.payload.replay
             }
         case types.SHUFFLE:
             return {
                 ...state,
                 shuffle: action.payload.shuffle
             }
         case types.RESET:
             return state;
         default:
             return state;
     }
}
export default playerReducer;
