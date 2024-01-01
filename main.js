//-------------- SLIDESHOW --------------

const imagePath = "./images/pictures/";
const totalImages = 62;
let currentIndex = 1;
const slideshowImage = document.getElementById("slideshow-img");

function showNextImage() {
  slideshowImage.style.opacity = 0;
  setTimeout(() => {
    slideshowImage.src = `${imagePath}${currentIndex}.jpg`;
    slideshowImage.style.opacity = 1;
    currentIndex = (currentIndex % totalImages) + 1;
  }, 1500);
}

showNextImage();

const interval = setInterval(showNextImage, 8000);

// PLAYER

function onYouTubeIframeAPIReady() {
  var element = document.getElementById("youtube-audio");
  var imgElement = document.createElement("img");
  imgElement.setAttribute("id", "youtube-icon");
  imgElement.style.cssText = "cursor: pointer;";
  element.appendChild(imgElement);

  var playerElement = document.createElement("div");
  playerElement.setAttribute("id", "youtube-player");
  element.appendChild(playerElement);

  var changeIcon = function (isPlaying) {
    var iconSrc = isPlaying
      ? "./images/pause-solid.svg"
      : "./images/play-solid.svg";
    imgElement.setAttribute("src", iconSrc);
  };

  element.onclick = function () {
    if (
      player.getPlayerState() === YT.PlayerState.PLAYING ||
      player.getPlayerState() === YT.PlayerState.BUFFERING
    ) {
      player.pauseVideo();
      changeIcon(false);
    } else {
      player.playVideo();
      changeIcon(true);
    }
  };

  var player = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    videoId: element.dataset.video,
    playerVars: {
      autoplay: element.dataset.autoplay,
      loop: element.dataset.loop,
    },
    events: {
      onReady: function (event) {
        player.setPlaybackQuality("small");
        changeIcon(player.getPlayerState() !== YT.PlayerState.CUED);
      },
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          changeIcon(false);
        }
      },
    },
  });
}

window.addEventListener("load", function () {
  play();
});

function play() {
  document.getElementById("youtube-audio").click();
}

document.getElementById("test").addEventListener("click", () => {
  document.getElementById("audio").click();
});
