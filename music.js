// =======================================
// EMY MUSIC SYSTEM
// =======================================

const musicStations = {

    chill:
"spotify:playlist:2cZiH3ymmdL5TCuQ3eQCa9",

    coding:
    "spotify:playlist:1HhY2OAjgzklcfJXe0eUA7",

    gaming:
    "spotify:playlist:4bx5c78CAquCWNE4tw1reY",

    nigeria:
    "spotify:playlist:4MNPN1urrAzmV0u9P6kB83",

    focus:
    "spotify:playlist:0QaFCjYt9ww7ZR7ip7Eshq"

};


let emySpotifyController = null;


// =======================================
// SPOTIFY API READY
// =======================================

window.onSpotifyIframeApiReady = (IFrameAPI) => {

    const element =
    document.getElementById(
        "emySpotifyEmbed"
    );


    if(!element){

        console.error(
            "EMY MUSIC: Spotify container not found."
        );

        return;

    }


    const options = {

        width: "100%",

        height: "352",

        uri:
        musicStations.chill

    };


    IFrameAPI.createController(

        element,

        options,

        (EmbedController) => {

            emySpotifyController =
            EmbedController;


            console.log(
                "EMY MUSIC: Spotify connected."
            );

        }

    );

};


// =======================================
// CHANGE MUSIC STATION
// =======================================

function changeMusicMode(mode){

    if(!emySpotifyController){

        console.error(
            "EMY MUSIC: Spotify controller is not ready."
        );

        return;

    }


    const spotifyURI =
    musicStations[mode];


    if(!spotifyURI){

        console.error(
            "EMY MUSIC: Unknown music mode:",
            mode
        );

        return;

    }


    emySpotifyController.loadEntity(
        spotifyURI
    );


    if(typeof addActivity === "function"){

        addActivity(
            "🎵 Music Mode: " + mode
        );

    }


    console.log(
        "EMY MUSIC: Loaded",
        mode
    );

}

// =======================================
// SPOTIFY SEARCH
// =======================================

function searchSpotify(searchTerm) {

    const input =
        document.getElementById("spotifySearchInput");

    const query =
        searchTerm || input.value.trim();

    if (!query) {
        alert("Please enter a song or artist.");
        return;
    }

    const spotifySearchURL =
        "https://open.spotify.com/search/" +
        encodeURIComponent(query);

    window.open(
        spotifySearchURL,
        "_blank"
    );

    if (typeof addActivity === "function") {
        addActivity("🎵 Spotify search: " + query);
    }
}