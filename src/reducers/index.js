import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'wave', duration: '5:00'},
        {title: 'It\'s gonna rain', duration: '8:00'},
        {title: 'Jhon Cage', duration: '6:13'},
        {title: 'Main theme', duration: '0:30'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});