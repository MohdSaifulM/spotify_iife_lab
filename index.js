import { spotify } from "./js/spotify";
// const spotify = require("./js/spotify");

const app = (function(s){

  

    function init(){
        let dom = s.dom;
        console.log(dom.t_new)
        document.getElementById(dom.t_new).addEventListener("click", function(){
            console.log("button clicked")
            let {song} = s.getInputData();
            if(song.trim().length > 0){
                console.log("it works");
                let newMusic = s.addSongs(song);
                s.renderSongs();
            } else {
                alert("Please input a song");
            }
        })
    }
   

    return {
        render: function(){
            
            s.renderSongs();

            init();
            
            document.querySelector(".shuffle__songs").addEventListener('click', function(){
                s.shuffle();
                s.renderSongs();
            })
            

        }
    }
})(spotify);

app.render();