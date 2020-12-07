import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import playlistReducer from './playlistReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
    counterReducer,
    playlistReducer,
    playerReducer
});
export default rootReducer;
