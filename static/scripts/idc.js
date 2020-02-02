let IDs;

let videoNum;
let totalVideos;

function setVideo(videoNumber) {
    const player = document.getElementById("ytplayer");
    player.src = IDs[videoNumber];
    videoNum = videoNumber;
}

function nextVideo() {
    console.log("Pressed");
    videoNum++;
    setVideo(videoNum % totalVideos);
    return false;
}

function previousVideo() {
    videoNum--;
    setVideo(videoNum % totalVideos);
    return false;
}

function loadFirstVideo() {
    setVideo(0);
    return false;
}

function init(videoIDs) {
    IDs = videoIDs;
    totalVideos = IDs.length;
    const embededYoutubePlayer = document.getElementById("ytplayer");
    embededYoutubePlayer.onload = loadFirstVideo;

    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    console.log("Called?");
    prevButton.addEventListener("click", previousVideo);
    nextButton.addEventListener("click", nextVideo);

}
