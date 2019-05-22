// Action creator
//name export allows multiple export from one file
export const selectSong = (song) => {
    //returns an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

