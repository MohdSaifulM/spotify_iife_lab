import { spotify } from "./js/spotify";
// const spotify = require("./js/spotify");

const app = (function(s){

    function init(){
    }
   
    return {
        render: function(){
            init();
            s.renderSongs();
        }
    }
})(spotify);

app.render();