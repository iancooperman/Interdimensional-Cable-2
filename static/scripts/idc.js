var IDs;
var embededYoutubePlayer;
var nextButton;
var prevButton;


var videoNum;
var totalVideos;

function setVideo(videoNumber) {
    embededYoutubePlayer.src = IDs[videoNumber];
    videoNum = videoNumber;
}

function nextVideo() {
    videoNum++;
    setVideo(videoNum % totalVideos);
}

function previousVideo() {
    videoNum--;
    setVideo(videoNum % totalVideos);
}

function loadFirstVideo() {
    setVideo(0);
}

function init(videoIDs) {
    IDs = videoIDs;
    totalVideos = IDs.length;
    embededYoutubePlayer = document.getElementById("ytplayer");
    embededYoutubePlayer.onload = loadFirstVideo();

    prevButton = document.getElementById("prev-button");
    nextButton = document.getElementById("next-button");
    prevButton.onclick = previousVideo();
    nextButton.onclick = nextVideo()
}
