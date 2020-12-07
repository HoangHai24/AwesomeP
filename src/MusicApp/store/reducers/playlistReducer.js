import songs from '../../data';

const initState = {
    id: 0,
    item: songs
}

const playlistReducer = (state = initState, action) => {
    switch (action.type){
        default:
            return state
    }
}
export default playlistReducer;
