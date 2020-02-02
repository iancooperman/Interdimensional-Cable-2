var IDs;
var embededYoutubePlayer;
var videoNum;
var totalVideos;

function setVideo(videoNumber) {
    embededYoutubePlayer.src = IDs[videoNumber];
    videoNum = videoNumber;
}

function loadFirstVideo() {
    setVideo(0);
}

function init(videoIDs) {
    IDs = videoIDs;
    totalVideos = IDs.length;
    embededYoutubePlayer = document.getElementById("ytplayer");
    embededYoutubePlayer.onload = loadFirstVideo();
}
