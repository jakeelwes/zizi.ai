var videocontainer = document.getElementById("video");
var shadow1 = document.getElementById("shadowBehind");
var shadow2 = document.getElementById("shadow2");
var videosource = document.getElementById("source_video");
var shadowsource1 = document.getElementById("shadowsource1");
var shadowsource2 = document.getElementById("shadowsource2");
var curtain = document.getElementById("curtain");

var closeButton = document.getElementById("close");
var fullButton = document.getElementById("full");
var poseButton = document.getElementById("pose");
var ziziButton = document.getElementById("zizi");

var zoom = false;
var pose = false;

var act = "roses";
var performer = "me";

function setURL() {
  let zoomString = zoom ? "close" : "full";
  let ziziString = pose ? "pose" : performer;

  let URL = `https://s3-eu-west-1.amazonaws.com/zizi.ai/development/${act}-${ziziString}-${zoomString}.mp4`;
  videosource.setAttribute("src", URL);

  let URL2 = `https://s3-eu-west-1.amazonaws.com/zizi.ai/development/${act}-shadow-${zoomString}.mp4`;
  shadowsource1.setAttribute("src", URL2);
  shadowsource2.setAttribute("src", URL2);

  curtain.setAttribute("src", `img/curtain-${zoomString}.jpg`);

  if (pose) {
    shadow1.style.display = "none";
    if (zoom) {
      shadow2.style.display = "none";
    } else {
      shadow2.style.display = "block";
    }
  } else {
    shadow1.style.display = "block";
    shadow2.style.display = "block";
  }

  videocontainer.load();
  shadow1.load();
  shadow2.load();
  curtain.load();
}

closeButton.addEventListener(
  "click",
  function (event) {
    zoom = true;
    setURL();
    // fullButton.style.color = "#555"
  },
  false
);
fullButton.addEventListener(
  "click",
  function (event) {
    zoom = false;
    setURL();
    // closeButton.style.color = "#555"
  },
  false
);
poseButton.addEventListener(
  "click",
  function (event) {
    pose = true;
    setURL();
    // ziziButton.style.color = "#555"
  },
  false
);
ziziButton.addEventListener(
  "click",
  function (event) {
    pose = false;
    setURL();
    // poseButton.style.color = "#555"
  },
  false
);

// youtube.js
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var videotime = 0;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "0F28IYnEqKY",
    playsinline: "1",
    playerVars: { autoplay: 1, autohide: 1, playsinline: 1 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
  player.seekTo(6.18);
  document.getElementById("play").innerHTML =
    '<a href="#" onclick="play();"><i class="fa fa-play fa-2x"></i></a>&nbsp;<a href="#" onclick="pause();"><i class="fa fa-pause fa-2x"></i></a>&nbsp<i class="fa fa-volume-up fa-2x"></i>&nbsp<i class="fa fa-chevron-circle-left fa-2x"></i>&nbsp<i class="fa fa-chevron-circle-right fa-2x"></i>&nbsp<i class="fa fa-step-forward fa-2x"></i>';
  function updateTime() {
    var oldTime = videotime;
    if (player && player.getCurrentTime) {
      videotime = player.getCurrentTime();

      document.getElementById("time").innerHTML = videotime.toFixed(2);
    }
  }
  timeupdater = setInterval(updateTime, 40);

  pause();
}

function play() {
  player.playVideo();
}
function pause() {
  player.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}
function stopVideo() {
  player.stopVideo();
}
