export const spotify = (function () {
    let state = {
        songs: [{
                id: 1,
                song: "I'm Yours."
            },
            {
                id: 2,
                song: "How is your CSS?"
            },
            {
                id: 3,
                song: "How is your bootstrap?"
            },
            {
                id: 4,
                song: "A Thousand Miles"
            },
            {
                id: 5,
                song: "Give Me Love"
            },
        ],
        playlist: []
    }

    class Song {
        constructor(id, song) {
            this.id = id;
            this.song = song;
        };
    };
    
    function addToPlaylist(id) {
       
    }

    //Suggested functions
    return {
        getSongs: function () {
        },
        renderSongs: function () {
            console.log(state.songs)
        },
        getInputData: function () {
        },
        addSongs: function (song) {
        },
        shuffle: function () {
        },
    }
})();