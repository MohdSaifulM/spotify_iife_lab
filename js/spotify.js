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
                song: "Lay it all over me"
            },
            {
                id: 5,
                song: "Je danse le MIA"
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

    const dom = {
        t_new: "add__song",
        t_new_song: ".new__song"
    };

    //ASK EBERE WHY IT WORKS OUTSIDE OF RETURN AND NOT INSIDE
    function addToPlaylist(id) {
        //ADD SONG TO PLAYLIST
        let song = state.songs.find(s => s.id == id);
        let html = `<li>${song.song}</li>`
        document.querySelector(".my__playlist").insertAdjacentHTML("beforeend", html)
    }

    return {
        getSongs: function () {
            return state.songs;
        },
        renderSongs: function () {
            let songs = this.getSongs();
            //Display songs to songs__list
            let songList = document.querySelector(".songs__list")
            songList.innerHTML = "";
            songs.forEach(s => {
                let html = `<li>${s.song} <button class="add__song" id="${s.id}">+</button></li>`
                songList.insertAdjacentHTML("beforeend", html)

                //add event listener for adding songs
                //this.addToPlaylist(id)
                document.getElementById(`${s.id}`).addEventListener('click', function (e) {
                    console.log(e.target.id);
                    addToPlaylist(e.target.id);
                    // console.log(songs);
                })
            })
        },
        getInputData: function () {
            return {
                song: document.querySelector(dom.t_new_song).value,
            };
        },
        addSongs: function (song) {
            //ADD SONG TO MAIN LIST
            let id;

            if (state.songs.length > 0) {
                //   [{id:1},{id: 2}] = len: 2 -1 , pos: 1
                id = state.songs[state.songs.length - 1].id + 1;
            } else {
                id = 1;
            }

            //create object template
            let newSong = new Song(id, song);
            //update state with object template
            state.songs.push(newSong);

            return newSong;
        },
        shuffle: function () {
            //SHUFFLE LIST OF SONGS IN MAIN LIST
            let shuffled = [];
            let songsTemp = state.songs;
            while (songsTemp.length > 0) {
                //randomselect song from songsTemp
                let randIdx = Math.floor(Math.random() * songsTemp.length)
                //push to shuffled
                shuffled.push(songsTemp[randIdx]);
                //remove from songsTemp
                songsTemp.splice(randIdx, 1);
            }
            //update songs array
            state.songs = shuffled;
        },
        dom,
    }
})();