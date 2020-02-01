var urls;
var embeded_youtube_player;

function init(video_urls) {
    urls = video_urls;
    embeded_youtube_player = document.getElementById("ytplayer");
}

embeded_youtube_player.onload = function() {
    embeded_youtube_player.src = urls[0];
}
