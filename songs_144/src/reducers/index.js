import {CombineReducers, combineReducers} from 'redux';

const songReducer = () =>{
    return [
        {title: 'a', duration: '4:05'},
        {title: 'b', duration: '4:06'},
        {title: 'c', duration: '4:07'},
        {title: 'd', duration: '4:08'},
    ];
};


const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

